/* =====================================================================
   OPELY — the offline helper (a "service worker")

   It lets Opely open with no internet, like an app. Each page, style,
   script and content file Opely loads is kept a copy of. When the
   internet is there, the newest version is always used (and the copy
   updated); when it isn't, the copy is used instead.

   Lecture files are kept by the pages themselves, in "opely-files"
   (Save for offline, and every file a student opens). This helper
   only reads from there when there is no internet.
   ===================================================================== */
const SHELL = "opely-shell-v2";
const FILES = "opely-files";
// Loaded straight away, so Opely opens offline even before a page has used them
const FIRST = [
  "./", "index.html", "style.css", "lang.js", "icons.js", "viewer.js", "catalog.json",
  "icon.svg", "icon-180.png", "icon-192.png", "manifest.webmanifest",
  "lib/pdf.min.js", "lib/pdf.worker.min.js", "lib/highlight.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(SHELL).then(cache => Promise.allSettled(FIRST.map(address => cache.add(address)))));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // Old copies of the app are removed; saved lecture files are kept
  event.waitUntil(caches.keys().then(names => Promise.all(
    names.filter(name => name.startsWith("opely-shell-") && name !== SHELL).map(name => caches.delete(name)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const address = new URL(request.url);
  if (request.method !== "GET" || address.origin !== location.origin) return; // GitHub and other sites: left alone
  if (/\/(version|notify)\.json$/.test(address.pathname)) return; // always asked fresh, never kept

  // Lecture files: the saved copy first, then the internet
  if (address.pathname.includes("/files/")) {
    event.respondWith(caches.open(FILES).then(cache => cache.match(request)).then(saved => saved || fetch(request)));
    return;
  }

  // Everything else: the internet first, so updates show at once; the copy when offline.
  // "no-cache" asks the site whether its copy changed, so the browser never shows an old Opely.
  event.respondWith(fetch(request, { cache: "no-cache" }).then(response => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(SHELL).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(async () => {
    const cache = await caches.open(SHELL);
    return (await cache.match(request)) ||
      (await cache.match(request, { ignoreSearch: true })) ||   // style.css?v=27 offline: any saved style.css
      (request.mode === "navigate" ? (await cache.match("index.html")) || (await cache.match("./")) : undefined) ||
      new Response("", { status: 503, statusText: "Offline" });
  }));
});

// ----- Notifications: shown when Opely's GitHub job sends one (see cloudflare/SETUP.md) -----
self.addEventListener("push", event => {
  let message = {};
  try { message = event.data ? event.data.json() : {}; } catch (error) { message = { body: event.data ? event.data.text() : "" }; }
  event.waitUntil(self.registration.showNotification(message.title || "Opely", {
    body: message.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: message.tag || undefined,
    lang: message.lang || undefined,
    dir: "auto",
    data: { url: message.url || "./" }
  }));
});

// Tapping a notification opens Opely at the right page (an open Opely is used when there is one)
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const address = new URL((event.notification.data && event.notification.data.url) || "./", self.registration.scope).href;
  event.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(async windows => {
    const open = windows.find(client => client.url.startsWith(self.registration.scope) && !client.url.includes("admin.html"));
    if (open) {
      await open.focus();
      try { await open.navigate(address); } catch (error) { /* some browsers can't; the open page stays */ }
      return;
    }
    return self.clients.openWindow(address);
  }));
});
