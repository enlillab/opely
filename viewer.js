/* =====================================================================
   OPELY — reading files inside the page, shared by both pages
   (PDFs are drawn by PDF.js in each page; this file handles the rest)

   Text files, code (with colours, like a code editor), Markdown,
   Jupyter notebooks, and pictures are shown right in the page.
   Code is coloured by highlight.js (lib/highlight.min.js), loaded only
   when a code file is opened.
   ===================================================================== */

// File endings Opely can show, and the name of their language for highlight.js
const CODE_LANGUAGES = {
  py: "python", pyw: "python", c: "c", h: "c", cpp: "cpp", cc: "cpp", cxx: "cpp", hpp: "cpp", hh: "cpp",
  cs: "csharp", java: "java", kt: "kotlin", kts: "kotlin", swift: "swift", go: "go", rs: "rust", rb: "ruby",
  php: "php", js: "javascript", mjs: "javascript", jsx: "javascript", ts: "typescript", tsx: "typescript",
  html: "xml", htm: "xml", xml: "xml", svg: "xml", css: "css", scss: "scss", less: "less", json: "json",
  sql: "sql", sh: "bash", bash: "bash", zsh: "bash", ps1: "shell", bat: "shell", yml: "yaml", yaml: "yaml",
  ini: "ini", toml: "ini", cfg: "ini", r: "r", lua: "lua", pl: "perl", m: "objectivec", vb: "vbnet",
  makefile: "makefile", mk: "makefile", diff: "diff", patch: "diff", graphql: "graphql", asm: "plaintext", s: "plaintext"
};
const LANGUAGE_NAMES = {
  python: "Python", c: "C", cpp: "C++", csharp: "C#", java: "Java", kotlin: "Kotlin", swift: "Swift", go: "Go",
  rust: "Rust", ruby: "Ruby", php: "PHP", javascript: "JavaScript", typescript: "TypeScript", xml: "HTML / XML",
  css: "CSS", scss: "SCSS", less: "Less", json: "JSON", sql: "SQL", bash: "Shell", shell: "Shell", yaml: "YAML",
  ini: "Settings", r: "R", lua: "Lua", perl: "Perl", objectivec: "Objective-C", vbnet: "Visual Basic",
  makefile: "Makefile", diff: "Diff", graphql: "GraphQL", plaintext: "Assembly"
};
const TEXT_ENDINGS = ["txt", "text", "log", "csv", "tsv", "rtf"];
const IMAGE_ENDINGS = ["png", "jpg", "jpeg", "gif", "webp", "bmp", "avif"];
const BIGGEST_TEXT = 3 * 1024 * 1024; // larger text files are offered as a download only

// What kind of file an address points to: { kind, language, name }, or null when it can't be shown.
// kind is "pdf", "text", "markdown", "code", "notebook" or "image".
function fileType(url) {
  if (!url || /^https?:/i.test(url)) return null;
  const file = url.split("/").pop().toLowerCase();
  const ending = file.includes(".") ? file.split(".").pop() : file;
  if (ending === "pdf") return { kind: "pdf", name: "PDF" };
  if (ending === "ipynb") return { kind: "notebook", language: "python", name: "Jupyter notebook" };
  if (ending === "md" || ending === "markdown") return { kind: "markdown", language: "markdown", name: "Markdown" };
  if (TEXT_ENDINGS.includes(ending)) return { kind: "text", name: "Text" };
  if (IMAGE_ENDINGS.includes(ending)) return { kind: "image", name: "Picture" };
  if (CODE_LANGUAGES[ending] || file === "makefile") {
    const language = CODE_LANGUAGES[ending] || "makefile";
    return { kind: "code", language: language, name: LANGUAGE_NAMES[language] || ending.toUpperCase() };
  }
  return null;
}
const canView = url => fileType(url) !== null;

// The highlighter is loaded the first time a code file is opened
let highlighter = null;
function loadHighlighter() {
  if (!highlighter) {
    highlighter = new Promise(resolve => {
      const script = document.createElement("script");
      script.src = "lib/highlight.min.js";
      script.onload = () => resolve(window.hljs || null);
      script.onerror = () => { highlighter = null; resolve(null); }; // without it, code is shown without colours
      document.head.append(script);
    });
  }
  return highlighter;
}

// Reads a text file. Most are UTF-8; older Arabic files from Windows are often in Windows-1256.
async function readText(blob) {
  const bytes = await blob.arrayBuffer();
  const text = new TextDecoder("utf-8").decode(bytes);
  if (!text.includes("�")) return text.replace(/^﻿/, "");
  try { return new TextDecoder("windows-1256").decode(bytes); } catch (error) { return text; }
}

function escapeHtml(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Splits highlighted HTML into lines. A coloured span that runs over several lines
// (a long comment or string) is closed at the end of each line and opened again on the next.
function splitLines(html) {
  const lines = [];
  let line = "", open = [];
  for (const part of html.match(/<span[^>]*>|<\/span>|\n|[^<\n]+/g) || []) {
    if (part === "\n") { lines.push(line + "</span>".repeat(open.length)); line = open.join(""); }
    else if (part.startsWith("<span")) { open.push(part); line += part; }
    else if (part === "</span>") { open.pop(); line += part; }
    else line += part;
  }
  lines.push(line + "</span>".repeat(open.length));
  return lines;
}

// The reader's settings, remembered in this browser: line wrap and text size
const READER_KEY = "opely-reader";
function readerSettings() {
  try { return Object.assign({ wrap: false, size: 0 }, JSON.parse(localStorage.getItem(READER_KEY))); } catch (error) { return { wrap: false, size: 0 }; }
}
function saveReaderSettings(settings) {
  try { localStorage.setItem(READER_KEY, JSON.stringify(settings)); } catch (error) { /* storage blocked */ }
}

const READER_ICONS = {
  wrap: '<path d="M4 6h16M4 12h12.5a3.5 3.5 0 0 1 0 7H13"/><path d="M15 16.5L12.5 19 15 21.5"/><path d="M4 18h5"/>',
  smaller: '<path d="M5 12h14"/>',
  bigger: '<path d="M12 5v14M5 12h14"/>',
  full: '<path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15"/>'
};
const readerIcon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${READER_ICONS[name]}</svg>`;
const say_ = text => (typeof t === "function" ? t(text) : text);

// A reader like a code editor: a bar with the file's kind and buttons, then the lines with their numbers.
// `kind` is "code" or "text". `bar` is false for notebook cells, which only show their lines.
function readerCard(content, options) {
  const lines = options.lines;
  // An empty line holds an invisible character, so it keeps its height (it is removed again when copying)
  const rows = lines.map((line, i) => `<span class="line"><span class="ln">${i + 1}</span><span class="lc">${line || "\u200b"}</span></span>`).join("");
  const bar = options.bar === false ? "" : `
    <div class="reader-bar">
      <span class="reader-name">${escapeHtml(options.title || "")}</span>
      <span class="reader-tools">
        ${options.kind === "code" ? `<button type="button" class="reader-tool" data-reader="wrap" aria-pressed="false" title="${say_("Wrap long lines")}" aria-label="${say_("Wrap long lines")}">${readerIcon("wrap")}</button>` : ""}
        <button type="button" class="reader-tool" data-reader="smaller" title="${say_("Smaller text")}" aria-label="${say_("Smaller text")}">${readerIcon("smaller")}</button>
        <button type="button" class="reader-tool" data-reader="bigger" title="${say_("Bigger text")}" aria-label="${say_("Bigger text")}">${readerIcon("bigger")}</button>
        <button type="button" class="reader-tool" data-reader="full" title="${say_("Full screen")}" aria-label="${say_("Full screen")}">${readerIcon("full")}</button>
        <button type="button" class="reader-done" data-reader="done">${say_("Done")}</button>
      </span>
    </div>`;
  return `<div class="reader ${options.kind}${options.bar === false ? " bare" : ""}" dir="${options.kind === "code" ? "ltr" : "auto"}">
    ${bar}
    <div class="reader-scroll" tabindex="0"><pre class="reader-lines${options.kind === "code" ? " hljs" : ""}">${rows}</pre></div>
  </div>`;
}

// Code with colours and line numbers
function codeCard(code, language, colours, bar, title) {
  let html = escapeHtml(code);
  if (colours && code.length < 400000) {
    try { html = colours.highlight(code, { language: language, ignoreIllegals: true }).value; } catch (error) { /* plain */ }
  }
  return readerCard(html, { kind: "code", lines: splitLines(html), bar: bar, title: title });
}

// Text selected by hand is copied exactly as it is in the file: one line per line,
// without the line numbers, whatever the browser would otherwise add or leave out
function copyByHand(holder) {
  holder.addEventListener("copy", event => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount || !event.clipboardData) return;
    const range = selection.getRangeAt(0);
    const lines = [...holder.querySelectorAll(".lc")].filter(line => range.intersectsNode(line));
    if (!lines.length) return; // the selection is outside the lines: the browser copies it as usual
    const text = lines.map(line => {
      const part = document.createRange();
      part.selectNodeContents(line);
      if (line.contains(range.startContainer)) part.setStart(range.startContainer, range.startOffset);
      if (line.contains(range.endContainer)) part.setEnd(range.endContainer, range.endOffset);
      return part.toString().replace(/\u200b/g, "");
    }).join("\n");
    event.clipboardData.setData("text/plain", text);
    event.preventDefault();
  });
}

// Wires up the reader's buttons: wrap, text size, full screen
function wireReader(holder) {
  const reader = holder.querySelector(".reader:not(.bare)");
  if (!reader) return;
  const kind = reader.classList.contains("code") ? "code" : "text";
  const settings = readerSettings();
  const base = kind === "code" ? 13.5 : 16;
  const apply = () => {
    holder.querySelectorAll(".reader").forEach(each => {
      each.style.setProperty("--reader-size", (base + settings.size) + "px");
      each.classList.toggle("wrapped", kind === "text" || settings.wrap);
    });
    const wrap = reader.querySelector('[data-reader="wrap"]');
    if (wrap) wrap.setAttribute("aria-pressed", String(settings.wrap));
  };
  apply();
  const closeFull = () => {
    reader.classList.remove("full");
    document.documentElement.classList.remove("reading-full");
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };
  reader.querySelectorAll("[data-reader]").forEach(button => button.addEventListener("click", () => {
    const action = button.dataset.reader;
    if (action === "wrap") settings.wrap = !settings.wrap;
    if (action === "smaller") settings.size = Math.max(-4, settings.size - 1);
    if (action === "bigger") settings.size = Math.min(8, settings.size + 1);
    if (action === "full") {
      reader.classList.add("full");
      document.documentElement.classList.add("reading-full");
      if (reader.requestFullscreen && !/iPhone|iPad|iPod/.test(navigator.userAgent)) reader.requestFullscreen().catch(() => {});
      reader.querySelector(".reader-done").focus();
    }
    if (action === "done") closeFull();
    saveReaderSettings(settings);
    apply();
  }));
  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && reader.classList.contains("full")) closeFull(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && reader.classList.contains("full")) closeFull(); });
  window.addEventListener("hashchange", () => document.documentElement.classList.remove("reading-full"), { once: true });
}

// Shows a file in `holder`. `type` is from fileType(). Returns { text, lines } for the Copy button
// and the line under the title (text is null for pictures).
async function showInPage(holder, blob, type, name) {
  if (type.kind === "image") {
    const address = URL.createObjectURL(blob);
    holder.innerHTML = `<div class="picture-card"><img src="${address}" alt=""></div>`;
    return { text: null, lines: 0 };
  }
  if (blob.size > BIGGEST_TEXT) throw new Error("too big to show");
  const text = await readText(blob);

  const lineCount = text.split("\n").length;
  const title = name || say_(type.name); // the file's name, like the tab of a code editor
  if (!holder.dataset.copyByHand) { copyByHand(holder); holder.dataset.copyByHand = "yes"; }
  if (type.kind === "text") {
    holder.innerHTML = readerCard("", { kind: "text", lines: escapeHtml(text).split("\n"), title: title });
    wireReader(holder);
    return { text: text, lines: lineCount };
  }
  if (type.kind === "markdown") {
    holder.innerHTML = `<div class="text-card markdown" dir="auto">${markdownToHtml(text)}</div>`;
    return { text: text, lines: text.split("\n").length };
  }
  const colours = await loadHighlighter();
  if (type.kind === "code") {
    holder.innerHTML = codeCard(text, type.language, colours, true, title);
    wireReader(holder);
    return { text: text, lines: lineCount };
  }
  // A Jupyter notebook: its notes and code cells in order, with the outputs that were saved
  const notebook = JSON.parse(text);
  const language = ((notebook.metadata || {}).kernelspec || {}).language || (((notebook.metadata || {}).language_info || {}).name) || "python";
  const join = part => Array.isArray(part) ? part.join("") : (part || "");
  const cells = (notebook.cells || []).map(cell => {
    const source = join(cell.source);
    if (cell.cell_type === "markdown") return `<div class="text-card markdown notebook-note" dir="auto">${markdownToHtml(source)}</div>`;
    if (cell.cell_type !== "code") return source.trim() ? `<pre class="text-card" dir="auto">${escapeHtml(source)}</pre>` : "";
    const outputs = (cell.outputs || []).map(output => {
      const data = output.data || {};
      if (data["image/png"]) return `<div class="picture-card"><img src="data:image/png;base64,${join(data["image/png"]).replace(/\s/g, "")}" alt=""></div>`;
      const shown = output.text || data["text/plain"] || (output.traceback ? output.traceback.join("\n").replace(/\x1b\[[0-9;]*m/g, "") : "");
      return shown ? `<pre class="notebook-output" dir="ltr">${escapeHtml(join(shown))}</pre>` : "";
    }).join("");
    return codeCard(source, language, colours, false) + outputs;
  }).join("");
  holder.innerHTML = `<div class="notebook">${cells}</div>`;
  return { text: null, lines: 0 };
}

// A small Markdown reader: headings, lists, quotes, code blocks, bold, italic, code and links
function markdownToHtml(markdown) {
  const inline = text => escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const out = [];
  let list = null, code = null, paragraph = [];
  const flush = () => {
    if (paragraph.length) { out.push("<p>" + inline(paragraph.join(" ")) + "</p>"); paragraph = []; }
    if (list) { out.push(`</${list}>`); list = null; }
  };
  for (const line of markdown.split("\n")) {
    if (code !== null) {
      if (/^```/.test(line)) { out.push(`<pre class="code-inline" dir="ltr">${escapeHtml(code.join("\n"))}</pre>`); code = null; }
      else code.push(line);
      continue;
    }
    if (/^```/.test(line)) { flush(); code = []; continue; }
    const heading = line.match(/^(#{1,6})\s+(.*)/);
    if (heading) { flush(); const level = Math.min(heading[1].length + 1, 6); out.push(`<h${level}>${inline(heading[2])}</h${level}>`); continue; }
    const bullet = line.match(/^\s*[-*+]\s+(.*)/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)/);
    if (bullet || numbered) {
      if (paragraph.length) { out.push("<p>" + inline(paragraph.join(" ")) + "</p>"); paragraph = []; }
      const kind = bullet ? "ul" : "ol";
      if (list !== kind) { if (list) out.push(`</${list}>`); out.push(`<${kind}>`); list = kind; }
      out.push(`<li>${inline((bullet || numbered)[1])}</li>`);
      continue;
    }
    if (/^>\s?/.test(line)) { flush(); out.push(`<blockquote>${inline(line.replace(/^>\s?/, ""))}</blockquote>`); continue; }
    if (!line.trim()) { flush(); continue; }
    if (list) { out.push(`</${list}>`); list = null; }
    paragraph.push(line.trim());
  }
  if (code !== null) out.push(`<pre class="code-inline" dir="ltr">${escapeHtml(code.join("\n"))}</pre>`);
  flush();
  return out.join("");
}

// Copies text, with a fallback for browsers that don't allow the clipboard here
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (error) {
    const box = document.createElement("textarea");
    box.value = text; box.style.position = "fixed"; box.style.opacity = "0";
    document.body.append(box); box.select();
    const done = document.execCommand && document.execCommand("copy");
    box.remove();
    return !!done;
  }
}
