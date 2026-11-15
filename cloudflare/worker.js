/* =====================================================================
   OPELY — the notifications helper, run for free by Cloudflare

   It only keeps the list of students who turned notifications on (and
   which stages each one follows). Opely's GitHub job reads that list and
   sends the notifications itself whenever a new lecture, lab or
   announcement is saved.

   It needs, in Cloudflare (see cloudflare/SETUP.md):
     DB       a D1 database (Cloudflare's free database), bound as "DB"
     SECRET   a secret text, the same one GitHub has as OPELY_PUSH_SECRET

     GET  /              says it is working
     POST /subscribe     { subscription, topics, lang } a student turns notifications on, or changes stages
     POST /unsubscribe   { endpoint }               a student turns them off
     GET  /list          the list, for the GitHub job only (needs the secret)
     POST /forget        { endpoints }              removes phones that no longer exist (needs the secret)
   ===================================================================== */
const TABLE = `CREATE TABLE IF NOT EXISTS subs (
  endpoint TEXT PRIMARY KEY, sub TEXT NOT NULL, topics TEXT NOT NULL, updated TEXT NOT NULL)`;
const PAGE = 500;

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };
    const reply = (body, status = 200) => new Response(JSON.stringify(body), {
      status: status, headers: Object.assign({ "Content-Type": "application/json" }, cors) });
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    const path = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
    const allowed = () => !!env.SECRET && request.headers.get("Authorization") === "Bearer " + env.SECRET;
    if (!env.DB) return reply({ error: "The database isn’t connected. Bind a D1 database as DB." }, 500);

    try {
      if (path === "/" && request.method === "GET") return reply({ ok: true, name: "Opely notifications" });

      if (path === "/subscribe" && request.method === "POST") {
        const body = await request.json();
        const sub = body.subscription || {};
        const keys = sub.keys || {};
        const topics = Array.isArray(body.topics) ? body.topics : [];
        if (typeof sub.endpoint !== "string" || !sub.endpoint.startsWith("https://") || sub.endpoint.length > 1000 ||
            typeof keys.p256dh !== "string" || typeof keys.auth !== "string") return reply({ error: "Not a notification address." }, 400);
        if (topics.length > 60 || !topics.every(topic => typeof topic === "string" && /^[a-z0-9-]{1,60}$/.test(topic))) {
          return reply({ error: "Unknown stages." }, 400);
        }
        await env.DB.prepare(TABLE).run();
        const clean = JSON.stringify({ endpoint: sub.endpoint, keys: { p256dh: keys.p256dh, auth: keys.auth },
          lang: body.lang === "ar" ? "ar" : "en" });
        await env.DB.prepare(`INSERT INTO subs (endpoint, sub, topics, updated) VALUES (?1, ?2, ?3, ?4)
          ON CONFLICT(endpoint) DO UPDATE SET sub = ?2, topics = ?3, updated = ?4`)
          .bind(sub.endpoint, clean, JSON.stringify(topics), new Date().toISOString()).run();
        return reply({ ok: true });
      }

      if (path === "/unsubscribe" && request.method === "POST") {
        const body = await request.json();
        if (typeof body.endpoint === "string") {
          await env.DB.prepare(TABLE).run();
          await env.DB.prepare("DELETE FROM subs WHERE endpoint = ?1").bind(body.endpoint).run();
        }
        return reply({ ok: true });
      }

      if (path === "/list" && request.method === "GET") {
        if (!allowed()) return reply({ error: "Not allowed." }, 401);
        await env.DB.prepare(TABLE).run();
        const after = new URL(request.url).searchParams.get("after") || "";
        const rows = (await env.DB.prepare("SELECT endpoint, sub, topics FROM subs WHERE endpoint > ?1 ORDER BY endpoint LIMIT ?2")
          .bind(after, PAGE).all()).results || [];
        return reply({
          subs: rows.map(row => { const sub = JSON.parse(row.sub);
            return { subscription: { endpoint: sub.endpoint, keys: sub.keys }, lang: sub.lang || "en", topics: JSON.parse(row.topics) }; }),
          next: rows.length === PAGE ? rows[rows.length - 1].endpoint : null
        });
      }

      if (path === "/forget" && request.method === "POST") {
        if (!allowed()) return reply({ error: "Not allowed." }, 401);
        const body = await request.json();
        const endpoints = (Array.isArray(body.endpoints) ? body.endpoints : []).filter(e => typeof e === "string").slice(0, 500);
        for (const endpoint of endpoints) await env.DB.prepare("DELETE FROM subs WHERE endpoint = ?1").bind(endpoint).run();
        return reply({ ok: true, removed: endpoints.length });
      }

      return reply({ error: "Not found." }, 404);
    } catch (error) {
      return reply({ error: String(error && error.message || error) }, 500);
    }
  }
};
