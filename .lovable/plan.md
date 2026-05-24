# Portfolio Build Plan

A bold, editorial-minimal portfolio with a creative-display point of view. Paper & Ink palette + Syne / Plus Jakarta Sans typography. Built as a multi-page site (not a single scrolling page) for SEO and shareability.

## Design direction

- **Aesthetic**: Editorial brutalism-lite. Oversized Syne display headlines (some italic accents), generous whitespace, ink-on-paper contrast, asymmetric layouts, hairline rules, large index numbers (01 / 02 / 03) as visual anchors.
- **Palette** (tokens in `src/styles.css`, oklch):
  - background `#f5f3ee` (paper)
  - surface `#e8e4dd`
  - foreground `#0d0d0d` (ink)
  - muted ink `#2d2d2d`
- **Typography**: Syne (700/800) for display, Plus Jakarta Sans (400/500) for body. Loaded via Google Fonts in `__root.tsx`.
- **Motion**: Restrained. Subtle fade/slide on scroll using Motion for React. One hero reveal, no element-by-element micro-animations.

## Routes (each its own file, each with unique `head()` SEO)

```
src/routes/
  __root.tsx          -> nav + footer + fonts + global head
  index.tsx           -> / Hero + brief about teaser + featured work
  work.tsx            -> /work Projects grid (case-study cards)
  work.$slug.tsx      -> /work/:slug Individual case study
  about.tsx           -> /about Full bio, skills, services
  contact.tsx         -> /contact Email + form + socials
```

Header is a shared component rendered in `__root.tsx` with `<Link>` nav. Footer with socials + copyright.

## Page composition

**Home (`/`)**
- Hero: oversized Syne headline ("Name — role"), short intro line, two anchor links (View Work, Get in Touch).
- Marquee or static row of disciplines/services.
- Featured Work: 3 large case-study cards (image + title + year + role).
- Short About teaser → link to /about.

**Work (`/work`)**
- Index-style listing: numbered rows (01, 02, 03…) with project name, client, year, tags. Hover reveals thumbnail.
- 6 sample projects seeded as placeholder data.

**Case study (`/work/:slug`)**
- Hero image, project meta (client, year, role, stack), narrative sections, gallery.

**About (`/about`)**
- Long-form bio, services list, skills grid, selected clients/recognition, downloadable CV link.

**Contact (`/contact`)**
- Large headline, email link, simple form (name/email/message — frontend only for now), social links.

## Technical details

- Tailwind v4 tokens in `src/styles.css`: redefine `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary` with the Paper & Ink palette in oklch. Add `--font-display` and `--font-body` mapped via `@theme inline`.
- Replace placeholder `src/routes/index.tsx` content.
- Generate 3 hero/work cover images via `imagegen` and save to `src/assets/` (editorial, muted, high-quality photography style).
- Sample project data in `src/data/projects.ts` so the case-study route is real.
- shadcn `Button`, `Input`, `Textarea` reused with restrained variants.
- Lazy-loaded images, alt text on every image, single H1 per route, JSON-LD `Person` schema on `/`.
- No backend / Lovable Cloud needed for v1. Contact form is frontend-only with a toast confirmation; we can wire email later.

## What I'll need from you later (not blocking)

You skipped the profession question — I'll seed the portfolio with placeholder copy (e.g. "Independent designer & art director") that you can swap once you tell me. Same for project content.

Ready to build when you approve.