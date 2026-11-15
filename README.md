# Opely

Opely is an open-source website where students find their lectures, slides, sources, and announcements, sorted by department, stage, and semester. Admins add and manage the content from their phone.

It is a static site hosted free on GitHub Pages. There is no server and no database: the content lives in this repository, and the admin page saves changes through the GitHub API.

- **Students:** open the site, choose a department and a stage, and read or download lecture files. PDFs, text, code, notebooks, and pictures open inside the page and are kept in the browser for next time.
- **Admins:** each one looks after one stage of one department. They sign in once with a token and can add courses, lectures, sources, and announcements. The owner can manage every stage of every department. **Import** adds many lectures at once from files or zip files, sorted into lectures automatically and checked before uploading.
- **Languages:** English and Arabic, chosen automatically from the device's language. Arabic pages read right to left.
- **Light and Dark Mode:** follows the device, or choose in Settings.
- **Progress:** lectures a student opens are ticked, and rings show how much of each course, stage, and department they have opened. This is kept in the student's own browser only.
- **Looks and feels like an iPhone app:** Liquid Glass cards, a frosted navigation bar, pages that slide in and out, and it can be added to the home screen with its own icon.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The student site |
| `admin.html` | The admin site |
| `style.css` | The design, shared by both pages |
| `lang.js` | The translations, shared by both pages |
| `icons.js` | The icons, shared by both pages |
| `.github/workflows/opely.yml`, `.github/opely/tasks.py` | Jobs GitHub runs for free: Word and PowerPoint files become PDFs after each upload, every night announcements past their "remove after" time are deleted, and after each save notifications are sent |
| `sw.js` | The offline helper (a service worker): keeps a copy of Opely so it opens with no internet |
| `viewer.js` | Shows text, code, Markdown, Jupyter notebooks, and pictures inside the page, shared by both pages |
| `manifest.webmanifest`, `icon.svg`, `icon-180.png`, `icon-192.png`, `icon-512.png` | The app's name and icons, used when it is added to a home screen |
| `catalog.json` | The list of universities, faculties, and departments |
| `data/*.json` | One content file per department: stages, courses, lectures, sources, announcements |
| `cloudflare/worker.js`, `cloudflare/SETUP.md` | The notifications helper that runs for free on Cloudflare, and how to set it up |
| `version.json` | Made by the admin page (Updates): tells every student's Opely to update. Don't overwrite it |
| `notify.json` | Made by the admin page (Notifications): the helper's address and public key. Don't overwrite it |
| `admins.json` | Who each admin token belongs to. Created on the first sign-in. It never holds a token, only a fingerprint of it |
| `files/` | Uploaded lecture files. Created by the first upload |
| `lib/` | PDF.js, which shows PDFs inside the page; highlight.js, which colours code; and JSZip, which opens zip files on the admin page |

## Setting it up

1. Create a **public** repository on GitHub named `Opely` and upload these files to it.
2. In the repository, open **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, and save. After a minute or two the site is live at `https://<your-username>.github.io/Opely/`.
3. Make your own access token: on GitHub, open **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories**, then choose `Opely`.
   - Permissions: **Contents → Read and write**.
   - Give it an expiry date. Copy the token; GitHub shows it only once.
4. Open `https://<your-username>.github.io/Opely/admin.html`, paste the token, and press **Sign in**. Because nobody is registered yet, the page asks you to set yourself up as the owner.
5. To add an admin, make a token for them the same way, open **Admins** on your admin home page, register it with their name, department, and stage, and send them the token privately.

Keep every token private. Never put one in a file in this repository or send it in a group chat. Deleting a token on GitHub cuts off access at once.

## GitHub jobs (converting files, tidying announcements)

The `.github` folder holds a job that GitHub runs by itself. Upload it with the rest of the site (it is a hidden folder on some computers). If the job can't save its changes, open the repository's **Settings → Actions → General**, and under "Workflow permissions" choose **Read and write permissions**. Its runs are listed in the **Actions** tab, where it can also be started by hand.

## Changing things

- **Add a department, faculty, or university:** add it to `catalog.json`. Its content file in `data/` is created by the first upload.
- **Add a language:** add it to `lang.js`. The notes at the top of that file explain how.
- **Change the design:** colours, glass, and corner sizes are set at the top of `style.css`; the Liquid Glass look is in the last part of that file. Icons are in `icons.js`; a department's icon and colour are set in `catalog.json`.
- **After changing `style.css`, `lang.js`, `icons.js` or `viewer.js`:** raise the number in `?v=` where `index.html` and `admin.html` load them (for example `?v=7` to `?v=8`), so visitors' browsers load the new copy instead of an old saved one.
- **After any change to Opely's code:** once it is on the site, sign in as the owner and open **Updates → Send the update**. Every student's Opely shows an "Update" banner. Turn on **Make everyone update now** for an important fix: Opely then updates by itself, without asking. Students can also use **Settings → Check for updates**.
- **Run it on your own computer:** in this folder run `python3 -m http.server 8000` and open `http://localhost:8000`. To sign in to the admin page from there, write your GitHub username in the `OWNER` line near the top of the script in `admin.html`.

## The archive

Nothing an admin replaces or deletes is lost. Deleted lectures, labs and sources, files removed from a lecture, and whole earlier versions of a course ("Start a new version" in a course's Details) go to the course's archive, where students can still open them and admins can restore them. Archived files leave the published site, so they take no space towards the 1 GB limit: GitHub keeps them in the repository's history, and Opely reads them from there.

Two kinds of archiving are in a course's Details:

- **Archive the lectures:** the course stays, empty, ready for a new year or lecturer. Its lectures, labs and sources become an earlier version in its archive.
- **Archive this course:** the whole course leaves its semester and goes to the stage's **Archived courses** (at the bottom of the stage page). Students can still open it, read only. Admins can restore it or delete it for good.

## Notifications

Students can get real notifications on their phone or computer, even when Opely is closed, for new lectures, labs and announcements in the stages they follow (Settings → Notifications). They are set up once, for free, with a Cloudflare account: see `cloudflare/SETUP.md`, or **Notifications** on the owner's admin home, which walks you through it. On iPhone and iPad, Opely must be added to the Home Screen first.

## Limits to know

- GitHub Pages sites can be at most 1 GB. Uploaded lecture files count towards this. When the site gets close, share new files as links (for example from Google Drive) instead of uploading them.
- A file uploaded from the admin page can be at most 25 MB.
- Everything in a public repository can be read by anyone, including the admins' names in `admins.json` and in the history of changes.
- Share lecturers' slides and recordings only with their permission.

## License

MIT. See `LICENSE`. PDF.js is by the Mozilla Foundation, under the Apache License 2.0. JSZip is by Stuart Knightley and others, under the MIT License (see `lib/JSZIP-LICENSE.md`). highlight.js is by Ivan Sagalaev and others, under the BSD 3-Clause License (see `lib/HIGHLIGHT-LICENSE.txt`).
