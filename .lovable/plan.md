## MultiVision Strategies — production build plan

Deep indigo/void base with iris→electric magenta gradients, luminous orb hero, Hanken Grotesk. Multi-page corporate site on TanStack Start (deploys to Vercel/Netlify/Cloudflare with zero config). Contact form backed by Lovable Cloud.

## Design system (src/styles.css)

Preserve the picked direction verbatim:
- `--color-void: #020204`, `--color-night: #09090b`, `--color-surface: #18181b`
- `--color-iris: #6d28d9`, `--color-electric: #db2777`
- Body font Hanken Grotesk (loaded via `<link>` in `__root.tsx`)
- Dark-first; map shadcn tokens (`--background`, `--foreground`, `--primary`, `--ring`) onto brand tokens through `@theme inline` so all shadcn components inherit the palette
- Add keyframes: `fade-in-up`, `orb-float`, `pulse-glow`

## Routes (file-based, `src/routes/`)

```
__root.tsx        Header + Footer chrome, HeadContent, fonts, scroll-restoration
index.tsx         Home (all sections below)
about.tsx         Story, mission, vision, values, philosophy, timeline, leadership placeholder
services.tsx      3 detailed service sections + benefits + outcomes + CTA
industries.tsx    Sectors served (finance, energy, public sector, industry, health)
contact.tsx       Contact form (Lovable Cloud) + info + map placeholder + LinkedIn
faq.tsx           Grouped FAQ (Accordion)
thank-you.tsx     Post-submit confirmation
privacy.tsx       Privacy Policy
terms.tsx         Terms of Service
sitemap[.]xml.ts  Server route emitting XML
```

Each route ships its own `head()` with title, description, og:title, og:description, canonical, og:url. `og:type: website` on __root; `og:image` only on the home leaf (generated hero orb).

## Home sections (matching selected direction exactly)

Sticky nav → Hero (headline + dual CTA + luminous orb) → About block (visual + copy, offices) → Core Capabilities (3 cards) → Why Choose Us (3 pillars) → Animated stats (3–4 counters, IntersectionObserver) → Global-market logo wall (monochrome) → Testimonial (placeholder) → FAQ preview (3 items → link to /faq) → Gradient-border contact CTA → Footer.

## Components (`src/components/`)

- Layout: `SiteHeader` (sticky, blur, mobile Sheet menu, scroll-progress bar), `SiteFooter`, `BackToTop`
- Marketing: `Hero`, `SectionHeading`, `ServiceCard`, `ValuePillar`, `StatCounter` (animated), `LogoWall`, `TestimonialCard`, `FaqAccordion`, `ContactCTA`, `Orb` (generated hero image + parallax on scroll)
- UI: existing shadcn `Button`, `Card`, `Accordion`, `Sheet`, `Input`, `Textarea`, `Label`, `Toast`, `Sonner`, `Form`
- Hooks: `useReveal` (IntersectionObserver → `animate-fade-in-up`), `useScrollProgress`, `useCountUp`

## Contact form (Lovable Cloud)

Enable Cloud. One migration:
- `public.contact_submissions` (id, created_at, name, email, company, phone, subject, message, source)
- GRANT `INSERT` to `anon` + `authenticated`; GRANT `ALL` to `service_role`; GRANT `SELECT` to `authenticated` only
- Enable RLS; policies: anyone may INSERT with length checks; only `authenticated` may SELECT

Form via React Hook Form + Zod (`name` 1–100, `email` valid ≤255, `company` ≤120 optional, `phone` ≤40 optional, `subject` ≤200, `message` 10–2000). Submits through a `createServerFn` in `src/lib/contact.functions.ts` using the server publishable client; validation runs both client- and server-side. On success: redirect to `/thank-you`, toast; on error: inline error.

## Assets & imagery

- Generate hero orb (1200×600) and About texture (800×800) via imagegen `premium` (matches direction placeholders), save under `src/assets/`.
- Client logos: monochrome text marks matching direction (no third-party logo files) to stay license-safe.
- Favicon stays; add SVG brand mark component.

## SEO / accessibility / performance

- Per-route head metadata, JSON-LD `Organization` on __root, `WebSite`+`ContactPage` on relevant leaves
- Relative canonicals / og:url (no domain assigned yet)
- `public/robots.txt` with `Allow: /`; dynamic `sitemap.xml` server route
- Semantic landmarks: single `<main>` in __root wrapping `<Outlet />`, `<header>`, `<footer>`, `<nav aria-label>`; visible focus rings; icon buttons get `aria-label`; skip-link
- Lazy image loading, `loading="lazy"` + `decoding="async"`; motion respects `prefers-reduced-motion`
- Mobile-first, no horizontal scroll, tap targets ≥44px

## Deployment

TanStack Start Vite build → outputs Nitro server. `npm run build` / `npm run start` work out-of-box. Vercel/Netlify/Cloudflare Pages: import repo → deploy. No custom scripts, Docker, or env vars beyond Cloud's auto-injected Supabase pair.

## Out of scope (deferred, architecture leaves room)

CMS, blog, careers, i18n, client portal, live chat, analytics, auth. Components and routes are structured so these drop in without refactor (Cloud already available for auth/CRUD, TanStack Query already wired).

## Build order

1. Enable Lovable Cloud
2. Tokens + fonts in `styles.css` and `__root.tsx` head
3. `SiteHeader`, `SiteFooter`, reveal/scroll hooks
4. Generate hero + about images
5. Home page (`index.tsx`) with all sections
6. About, Services, Industries, FAQ, Privacy, Terms, Thank-you pages
7. Contact form + DB migration + server fn + Contact page
8. Sitemap route + robots.txt + per-route SEO + JSON-LD
9. Mobile pass + a11y pass + build check
