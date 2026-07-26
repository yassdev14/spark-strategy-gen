# Portability audit + strategic plan (5-credit budget)

## PRIORITY 1 — Portability status

**Classification: 🟡 Mostly portable (minor changes required)**

### What works out of the box
- Standard Vite 8 + React 19 + TypeScript project. `npm install && npm run build` will produce a Cloudflare-compatible bundle via the bundled `nitro` preset in `@lovable.dev/vite-tanstack-config`.
- All routing is TanStack Router file-based (`src/routes/`). No Lovable-only routing APIs.
- UI, i18n, styles, images — 100% framework-standard, portable anywhere.
- Contact form talks to Supabase using the public JS SDK + publishable key. That's a normal Supabase integration — works from any host, not Lovable-locked.

### Lock-ins / friction points
1. **`@lovable.dev/vite-tanstack-config`** (Vite config wrapper) — a Lovable-published npm package. It works outside Lovable (public on npm) but ties your build config to a Lovable-maintained plugin. Removable by inlining its plugins (tanstackStart, react, tailwind, tsconfigPaths, nitro) in `vite.config.ts`. ~1 credit if done cleanly.
2. **`nitro` server entry (`src/server.ts`)** — TanStack Start SSR. Deploys fine on Vercel / Cloudflare Pages / Netlify (nitro auto-targets). **Does NOT work on GitHub Pages** (static-only, no SSR). To support GH Pages you'd need to switch to SPA-only routing (drop `createServerFn`, drop the sitemap server route, prerender). Big change — do NOT attempt today.
3. **Supabase (Lovable Cloud)** — the DB + `contact_submissions` table live in a Lovable-managed Supabase project. The URL/keys in `.env` are yours; you can export the schema and point at your own Supabase project anytime. No code change needed — just swap `.env` values. Not really lock-in.
4. **`bunfig.toml`** — uses Bun for installs in Lovable's sandbox. `npm install` still works locally; safe to ignore or delete.
5. **`.lovable/`, `AGENTS.md`** — metadata only, harmless.

### Answers to your questions
1. **Deploy free outside Lovable? YES** — Vercel / Cloudflare Pages / Netlify all work today with zero code changes. Just `git clone`, set the 3 `VITE_SUPABASE_*` env vars, deploy.
2. **Per-host:** Vercel ✅, Cloudflare Pages ✅, Netlify ✅, GitHub Pages ❌ (SSR incompatible).
3. **Local dev in VS Code? YES** — `npm install && npm run dev` works standalone. No Lovable runtime required.
4. **Vendor lock-in?** Only the Vite config wrapper package. Everything else is standard.

## PRIORITY 2 — Today's budget decision

**Recommendation: do NOT touch portability today.** The project already deploys to all 3 target hosts. Removing `@lovable.dev/vite-tanstack-config` is cosmetic and risks breaking the build (~1–2 credits + verification). Better ROI elsewhere.

## PRIORITY 3 — Deploy verification

Nothing to fix. Documented deployment steps (see final report). No credit spend.

## PRIORITY 4 — What I WILL do today (budget: ~3–4 credits)

Quick wins, each independently shippable, in order:

1. **Translate remaining pages** (~1.5 credits) — extend `src/lib/i18n.tsx` and wire FR/EN into `about.tsx`, `services.tsx`, `industries.tsx`, `faq.tsx`, `contact.tsx`. Skip `privacy.tsx`/`terms.tsx` (legal — keep single-language for now).
2. **Per-route SEO metadata in both languages** (~0.5 credit) — ensure each route's `head()` has unique title/description/og tags. Already partially done; verify + complete.
3. **Mobile spacing polish pass** (~1 credit) — tighten section paddings, image sizes, and vertical rhythm on `index.tsx` only. No redesign.

**Stop there.** Leaves ~1 credit buffer for follow-up fixes.

### Explicitly POSTPONED (next session)
- Contact form → Formspree migration (needs account + endpoint from you; 1–2 credits).
- Hero image regeneration (1+ credit per image).
- Removing `@lovable.dev/vite-tanstack-config` wrapper (1–2 credits, cosmetic).
- Legal page translations.
- Full SPA conversion for GitHub Pages (major refactor — only if you actually need GH Pages).

## Final report (delivered after implementation)

Will include: portability status, deploy steps for Vercel/CF/Netlify, `.env` variables to set, remaining Lovable dependencies (just the vite-config wrapper), completed tasks list, postponed tasks list, next-session priorities.
