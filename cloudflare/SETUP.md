# Notifications: setting them up (once, free, about 15 minutes)

The admin page walks you through all of this: sign in as the owner and open
**Notifications** on the home page. This file is the same guide, to keep.

How it works:

- **Students** open Settings → Notifications, choose the stages they follow and turn
  notifications on. Their browser gives Opely an address to reach that phone or computer.
- **Cloudflare** (the helper in `worker.js`) keeps that list of addresses and stages. Nothing else.
- **GitHub** (the `notify` job in `.github/workflows/opely.yml`) runs after every save. It
  compares the department files before and after, finds new lectures, labs and
  announcements, and sends each student the news of their stages.

## 1. Make the keys

On the admin page, press **Make the keys**. You get:

| What | Where it goes |
|---|---|
| Secret | Cloudflare (step 2) and GitHub (step 3) |
| Private key | GitHub only (step 3). Never share it or put it on the site. |
| Public key | Saved on the site by itself, in `notify.json` (step 4). Safe to show. |

Keep the page open until step 4.

## 2. The helper on Cloudflare

1. Make a free account at dash.cloudflare.com and sign in.
2. **Storage & Databases → D1 → Create database**. Name it `opely`.
3. **Compute → Workers & Pages → Create → Start with Hello World**. Name it `opely-notify`, then **Deploy**.
4. **Edit code**: delete everything, paste all of `cloudflare/worker.js`, then **Deploy**.
5. In the worker: **Bindings → Add binding → D1 database**. Name `DB`, database `opely`.
6. **Settings → Variables and Secrets → Add**: type *Secret*, name `SECRET`, value the Secret from step 1.
7. Copy the worker's address. It ends in `workers.dev`.

Opening that address in a browser shows `{"ok":true,"name":"Opely notifications"}`.

## 3. GitHub's secrets

In the repository: **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Value |
|---|---|
| `OPELY_PUSH_URL` | the worker's address |
| `OPELY_PUSH_SECRET` | the Secret |
| `OPELY_VAPID_PRIVATE` | the Private key |

## 4. Turn them on

Paste the worker's address on the admin page and press **Check and turn on**.

## Trying it

In GitHub: **Actions → Opely tasks → Run workflow**, type a message in *test notification*
and run it. Everyone who turned notifications on gets it.

## Good to know

- **iPhone and iPad**: notifications work only when Opely is added to the Home Screen
  (Share → Add to Home Screen), on iOS 16.4 or newer, and opened from there.
- Free limits are far above what Opely needs: Cloudflare D1 allows 100,000 saves a day,
  and GitHub's jobs are free for public repositories.
- Making new keys turns notifications off for everyone until they turn them on again.
- When one save adds more than three things, a student gets one notification that sums them up.
