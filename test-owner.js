/* =====================================================================
   TEST OWNER (temporary)

   Lets you try the admin pages as the owner, on your own computer only
   (localhost), without a token. It acts like GitHub, but keeps every
   change in this browser:
     - content files (data/*.json, admins.json) in localStorage
     - uploaded files in the browser's file store
   The student page on the same computer shows those changes too.

   It never runs on the live site. To remove it when testing is done:
   delete this file, and the lines marked "test owner" in index.html
   and admin.html.
   ===================================================================== */
const testOwner = (() => {
  const available = /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/.test(location.hostname);
  const STORE = "opely-test-repo";   // content files
  const FILES = "opely-test-files";  // uploaded files
  const KEY = "test-owner";          // the "token" of the test owner

  const read = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (error) { return {}; } };
  const write = store => localStorage.setItem(STORE, JSON.stringify(store));

  // Text <-> base64, the way GitHub sends file contents
  const bytesFrom64 = text => Uint8Array.from(atob(text), c => c.charCodeAt(0));
  const textFrom64 = text => new TextDecoder().decode(bytesFrom64(text));
  const textTo64 = text => { let out = ""; new TextEncoder().encode(text).forEach(b => { out += String.fromCharCode(b); }); return btoa(out); };
  const isText = path => /\.json$/i.test(path);

  // Uploaded files are kept in IndexedDB, which every browser has, even when the page is opened
  // at an address like http://0.0.0.0:8000 (the Cache API is missing there).
  let opening = null;
  function database() {
    if (!opening) opening = new Promise((resolve, reject) => {
      const ask = indexedDB.open(FILES, 1);
      ask.onupgradeneeded = () => ask.result.createObjectStore("files");
      ask.onsuccess = () => resolve(ask.result);
      ask.onerror = () => reject(ask.error);
    });
    return opening;
  }
  async function inStore(mode, work) {
    const db = await database();
    return new Promise((resolve, reject) => {
      const step = db.transaction("files", mode);
      const answer = work(step.objectStore("files"));
      step.oncomplete = () => resolve(answer && answer.result);
      step.onerror = () => reject(step.error);
    });
  }
  const keyOf = path => new URL(path, location.href).pathname;
  async function saveFile(path, blob) { await inStore("readwrite", store => store.put(blob, keyOf(path))); }
  async function getFile(path) {
    try { return (await inStore("readonly", store => store.get(keyOf(path)))) || null; } catch (error) { return null; }
  }
  async function removeFile(path) {
    try { await inStore("readwrite", store => store.delete(keyOf(path))); } catch (error) { /* ignored */ }
  }
  function notFound() { const error = new Error("Not found"); error.status = 404; return error; }

  // Waiting changes of GitHub's lower-level API (used by Import)
  const blobs = {}, commits = {};
  let counter = 0;

  // Answers the same questions the admin page asks GitHub
  async function github(path, options) {
    options = options || {};
    const method = options.method || "GET";
    const body = options.body || {};
    const [address] = path.split("?");

    if (address === "") return { permissions: { push: true } };

    if (address.startsWith("/contents/")) {
      const file = decodeURI(address.slice("/contents/".length));
      const store = read();
      if (method === "GET") {
        if (file in store) {
          if (store[file] === null) throw notFound();
          return { content: textTo64(store[file]), sha: "test" };
        }
        const saved = await getFile(file);
        if (saved) return { content: "", sha: "test" };
        const response = await fetch(file, { cache: "no-store" });
        if (!response.ok) throw notFound();
        return { content: textTo64(await response.text()), sha: "test" };
      }
      if (method === "PUT") {
        if (isText(file)) { store[file] = textFrom64(body.content); write(store); }
        else await saveFile(file, new Blob([bytesFrom64(body.content)]));
        return {};
      }
      if (method === "DELETE") {
        if (isText(file)) { store[file] = null; write(store); }
        // Uploaded files are kept, the way GitHub keeps them in the site's history, so the archive can still open them
        return {};
      }
    }
    if (address === "/git/blobs") { const sha = "blob" + (counter += 1); blobs[sha] = body.content; return { sha: sha }; }
    if (address.startsWith("/git/ref/")) return { object: { sha: "head" } };
    if (address.startsWith("/git/commits/")) return { tree: { sha: "tree" } };
    if (address === "/git/trees") { const sha = "tree" + (counter += 1); commits[sha] = body.tree; return { sha: sha }; }
    if (address === "/git/commits") { const sha = "commit" + (counter += 1); commits[sha] = commits[body.tree]; return { sha: sha }; }
    if (address.startsWith("/git/refs/")) {
      const store = read();
      for (const entry of commits[body.sha] || []) {
        if (entry.content !== undefined) store[entry.path] = entry.content;
        else await saveFile(entry.path, new Blob([bytesFrom64(blobs[entry.sha])]));
      }
      write(store);
      return {};
    }
    throw new Error("The test owner can’t do this: " + method + " " + address);
  }

  return {
    available: available,
    key: KEY,
    github: github,
    getFile: getFile,
    // The test copy of a content file, or undefined when there is none
    textOf: path => { if (!available) return undefined; const value = read()[path]; return typeof value === "string" ? value : undefined; },
    // Removes every test change from this browser
    reset: async () => { localStorage.removeItem(STORE); try { await inStore("readwrite", store => store.clear()); } catch (error) { /* ignored */ } }
  };
})();
