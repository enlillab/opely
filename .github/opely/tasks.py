"""
OPELY — jobs that GitHub runs for the site (see .github/workflows/opely.yml)

  python3 .github/opely/tasks.py needs-converter   exit code 0 if a file must be converted
  python3 .github/opely/tasks.py convert           Word, PowerPoint and similar files -> PDF
  python3 .github/opely/tasks.py tidy              deletes announcements whose "remove after" time has passed
  python3 .github/opely/tasks.py needs-notify      exit code 0 if there are notifications to send (and they are set up)
  python3 .github/opely/tasks.py notify            sends them: new lectures, labs and announcements

Only the Python that comes with GitHub's machines is used. LibreOffice does the converting, and
pywebpush sends the notifications (installed by the job only when there is something to send).
"""
import glob
import json
import os
import subprocess
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path

# File endings that become PDFs. Spreadsheets are left as they are: as PDFs they are hard to read.
CONVERT = {".doc", ".docx", ".odt", ".rtf", ".ppt", ".pptx", ".pps", ".ppsx", ".odp"}
DATA = sorted(glob.glob("data/*.json"))
# The site's times are written in Iraq time (UTC+3), the way admins type them
LOCAL = timezone(timedelta(hours=3))


def entries(data):
    """Every file entry in a department file: lecture files, lab files and sources."""
    for stage in data.get("stages", []):
        for course in stage.get("courses", []):
            for lecture in course.get("lectures", []) + course.get("labs", []):
                for entry in lecture.get("files", []):
                    yield entry
            for entry in course.get("sources", []):
                yield entry


def waiting():
    """The (file, entry) pairs that still need converting."""
    found = []
    for name in DATA:
        data = json.loads(Path(name).read_text(encoding="utf-8"))
        for entry in entries(data):
            url = entry.get("url", "")
            if url and not url.startswith("http") and Path(url).suffix.lower() in CONVERT and Path(url).exists():
                found.append((name, url))
    return found


def convert():
    changed = 0
    for name in DATA:
        path = Path(name)
        data = json.loads(path.read_text(encoding="utf-8"))
        touched = False
        for entry in entries(data):
            url = entry.get("url", "")
            source = Path(url)
            if not url or url.startswith("http") or source.suffix.lower() not in CONVERT or not source.exists():
                continue
            print("Converting", url, flush=True)
            subprocess.run(["soffice", "--headless", "--convert-to", "pdf", "--outdir", str(source.parent), str(source)],
                           check=False, timeout=300, stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
            pdf = source.with_suffix(".pdf")
            if not pdf.exists() or pdf.stat().st_size == 0:
                print("  could not convert it; it stays as it is", flush=True)
                continue
            entry["url"] = pdf.as_posix()
            # A label that is the file's name gets the new ending too: "Week 3.pptx" -> "Week 3.pdf"
            label = entry.get("label", "")
            if label.lower().endswith(source.suffix.lower()):
                entry["label"] = label[: -len(source.suffix)] + ".pdf"
            source.unlink()  # the PDF replaces it, which also saves space
            touched = True
            changed += 1
        if touched:
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Converted", changed, "file(s).")


def ended(until, now):
    if len(until) <= 10:  # a date alone lasts the whole day
        return until < now.strftime("%Y-%m-%d")
    try:
        return datetime.fromisoformat(until).replace(tzinfo=LOCAL) < now
    except ValueError:
        return False


def tidy():
    now = datetime.now(LOCAL)
    removed = 0
    for name in DATA:
        path = Path(name)
        data = json.loads(path.read_text(encoding="utf-8"))
        news = data.get("announcements", [])
        kept = [item for item in news if not (item.get("until") and ended(item["until"], now))]
        if len(kept) != len(news):
            removed += len(news) - len(kept)
            data["announcements"] = kept
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Removed", removed, "ended announcement(s).")


# ---------------------------------------------------------------------------------------------
# Notifications (see cloudflare/SETUP.md)
#   What is new is found by comparing the department files before and after the save that was
#   just pushed. Each student follows stages ("topics" like "cs-stage1"); the list of students
#   comes from Opely's helper on Cloudflare, and each one gets the news of their stages.
# ---------------------------------------------------------------------------------------------
PUSH_URL = os.environ.get("OPELY_PUSH_URL", "").strip().rstrip("/")
PUSH_SECRET = os.environ.get("OPELY_PUSH_SECRET", "").strip()
VAPID_PRIVATE = os.environ.get("OPELY_VAPID_PRIVATE", "").strip()
REPO = os.environ.get("GITHUB_REPOSITORY", "")
MESSAGES = Path(os.environ.get("RUNNER_TEMP", "/tmp")) / "opely-messages.json"
NO_COMMIT = "0" * 40

WORDS = {
    "en": {"lecture": ("New lecture: {code}", "{n} new lectures: {code}"),
           "lab": ("New lab: {code}", "{n} new labs: {code}"),
           "many": "{n} new things in Opely", "test": "Opely"},
    "ar": {"lecture": ("محاضرة جديدة: {code}", "محاضرات جديدة ({n}): {code}"),
           "lab": ("مختبر جديد: {code}", "مختبرات جديدة ({n}): {code}"),
           "many": "جديد في Opely ({n})", "test": "Opely"},
}


def at_commit(path, commit):
    """A file of the repository as it was in a commit (None if it wasn't there)."""
    if not commit or commit == NO_COMMIT:
        return None
    address = "https://api.github.com/repos/%s/contents/%s?ref=%s" % (REPO, urllib.parse.quote(path), commit)
    ask = urllib.request.Request(address, headers={"Accept": "application/vnd.github.raw+json", "User-Agent": "Opely",
                                                   "Authorization": "Bearer " + os.environ.get("GH_TOKEN", "")})
    try:
        with urllib.request.urlopen(ask, timeout=30) as answer:
            return json.loads(answer.read().decode("utf-8"))
    except Exception:  # missing, or not readable
        return None


def all_ids(value, found):
    """Every "id" anywhere in a department file, archive included (restored things aren't new)."""
    if isinstance(value, dict):
        if isinstance(value.get("id"), str):
            found.add(value["id"])
        for inner in value.values():
            all_ids(inner, found)
    elif isinstance(value, list):
        for inner in value:
            all_ids(inner, found)
    return found


def site_address():
    owner, _, name = REPO.partition("/")
    if name.lower() == (owner + ".github.io").lower():
        return "https://%s.github.io/" % owner.lower()
    return "https://%s.github.io/%s/" % (owner.lower(), name)


def has_ended(item, now):
    until = item.get("until")
    return bool(until) and ended(until, now)


def find_news(before, after):
    """The new things of one push, each with the topics (stages) it is for."""
    catalog = at_commit("catalog.json", after) or {}
    departments = [d for u in catalog.get("universities", []) for f in u.get("faculties", []) for d in f.get("departments", [])]
    now = datetime.now(LOCAL)
    news = []
    for dept in departments:
        new = at_commit(dept["data"], after)
        if not new:
            continue
        old = at_commit(dept["data"], before)
        if old is None:  # a department that was just added: nothing in it counts as news
            continue
        known = all_ids(old, set())
        stages = [stage["id"] for stage in new.get("stages", [])]
        for stage in new.get("stages", []):
            topic = dept["id"] + "-" + stage["id"]
            for course in stage.get("courses", []):
                for kind, part, link in (("lecture", "lectures", ""), ("lab", "labs", "-labs")):
                    fresh = [item for item in course.get(part, []) if item.get("id") and item["id"] not in known]
                    if not fresh:
                        continue
                    base = "#%s-%s-%s%s" % (dept["id"], stage["id"], course["id"], link)
                    news.append({
                        "id": kind + ":" + topic + ":" + course["id"], "topics": [topic], "kind": kind, "count": len(fresh),
                        "code": course.get("code", ""), "body": "، ".join(item.get("title", "") for item in fresh[:4]),
                        "body_en": ", ".join(item.get("title", "") for item in fresh[:4]),
                        "url": base + ("-" + fresh[0]["id"] if len(fresh) == 1 else ""),
                    })
        for item in new.get("announcements", []):
            if not item.get("id") or item["id"] in known or has_ended(item, now):
                continue
            chosen = item.get("stages") or ([item["stage"]] if item.get("stage") and item.get("stage") != "all" else stages)
            news.append({
                "id": "news:" + item["id"], "topics": [dept["id"] + "-" + s for s in chosen], "kind": "announcement",
                "title": item.get("title", ""), "body": (item.get("text") or item.get("body") or "")[:180],
                "url": "#%s-news" % dept["id"],
            })
    return news


def message_for(entry, lang):
    words = WORDS[lang]
    if entry["kind"] == "announcement":
        return {"title": entry["title"], "body": entry["body"], "url": entry["url"]}
    one, many = words[entry["kind"]]
    title = (one if entry["count"] == 1 else many).format(code=entry["code"], n=entry["count"])
    return {"title": title, "body": entry["body"] if lang == "ar" else entry["body_en"], "url": entry["url"]}


def prepare():
    """Finds what to send, and keeps it for "notify". True when there is something."""
    if not (PUSH_URL and PUSH_SECRET and VAPID_PRIVATE and REPO):
        print("Notifications aren't set up (the OPELY_PUSH_URL, OPELY_PUSH_SECRET and OPELY_VAPID_PRIVATE secrets).")
        return False
    test = os.environ.get("TEST_MESSAGE", "").strip()
    if test:
        news = [{"id": "test", "topics": None, "kind": "announcement", "title": "Opely", "body": test, "url": ""}]
    else:
        news = find_news(os.environ.get("BEFORE", ""), os.environ.get("AFTER", ""))
    MESSAGES.write_text(json.dumps(news, ensure_ascii=False), encoding="utf-8")
    print("Found", len(news), "new thing(s) to tell students about.")
    return bool(news)


def helper(path, body=None):
    ask = urllib.request.Request(PUSH_URL + path, data=None if body is None else json.dumps(body).encode("utf-8"),
                                 headers={"Authorization": "Bearer " + PUSH_SECRET, "Content-Type": "application/json",
                                          "User-Agent": "Opely"})
    with urllib.request.urlopen(ask, timeout=30) as answer:
        return json.loads(answer.read().decode("utf-8"))


def notify():
    from pywebpush import webpush, WebPushException  # installed by the job

    if not MESSAGES.exists() and not prepare():
        return
    news = json.loads(MESSAGES.read_text(encoding="utf-8"))
    if not news:
        return
    site = site_address()
    sent = gone = failed = 0
    forget = []
    after = ""
    while True:
        page = helper("/list" + ("?after=" + urllib.parse.quote(after) if after else ""))
        for row in page.get("subs", []):
            topics = set(row.get("topics", []))
            lang = "ar" if row.get("lang") == "ar" else "en"
            mine = [entry for entry in news if entry["topics"] is None or topics.intersection(entry["topics"])]
            if not mine:
                continue
            if len(mine) > 3:  # a big save: one notification instead of many
                messages = [{"title": WORDS[lang]["many"].format(n=len(mine)),
                             "body": "، ".join(message_for(e, lang)["title"] for e in mine[:4]) if lang == "ar"
                             else ", ".join(message_for(e, lang)["title"] for e in mine[:4]), "url": ""}]
            else:
                messages = [message_for(entry, lang) for entry in mine]
            for message in messages:
                payload = dict(message, url=site + message["url"], lang=lang, tag=message["url"] or "opely")
                try:
                    webpush(row["subscription"], json.dumps(payload, ensure_ascii=False), vapid_private_key=VAPID_PRIVATE,
                            vapid_claims={"sub": "https://" + urllib.parse.urlparse(site).netloc}, ttl=3 * 24 * 3600, timeout=20)
                    sent += 1
                except WebPushException as error:
                    status = getattr(error.response, "status_code", 0)
                    if status in (404, 410):  # that phone or browser no longer has Opely's notifications
                        forget.append(row["subscription"]["endpoint"])
                        gone += 1
                        break
                    failed += 1
                    print("  could not send one:", status, str(error)[:200])
                except Exception as error:
                    failed += 1
                    print("  could not send one:", str(error)[:200])
        after = page.get("next")
        if not after:
            break
    for start in range(0, len(forget), 500):
        helper("/forget", {"endpoints": forget[start:start + 500]})
    print("Sent", sent, "notification(s);", gone, "old address(es) removed;", failed, "failed.")


if __name__ == "__main__":
    task = sys.argv[1] if len(sys.argv) > 1 else ""
    if task == "needs-converter":
        sys.exit(0 if waiting() else 1)
    elif task == "convert":
        convert()
    elif task == "tidy":
        tidy()
    elif task == "needs-notify":
        sys.exit(0 if prepare() else 1)
    elif task == "notify":
        notify()
    else:
        print(__doc__)
        sys.exit(2)
