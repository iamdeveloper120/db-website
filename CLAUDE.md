# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Asset build (always use this before sharing/deploying — never use npm run dev for shared URLs)
npm run build          # builds client + SSR bundles

# Local dev (Valet serves db-website.test via nginx on port 80)
php artisan serve --port=8000   # alternative if Valet isn't running

# SSR node server (must be running alongside PHP when SSR is enabled)
node bootstrap/ssr/ssr.js

# Share publicly via ngrok (requires all three running)
ngrok http 8000
```

**Sharing via ngrok:** Never run `npm run dev` while sharing — it creates `public/hot` and all asset URLs become `http://localhost:5173/...` which are unreachable externally. Stop Vite dev server first; `public/hot` must not exist. Asset URLs are configured to be root-relative in `AppServiceProvider` so they work on any domain.

## Architecture

**Stack:** Laravel 13 + Jetstream + Inertia.js + Vue 3 SSR + Tailwind CSS v3

### Request flow
1. Browser hits nginx (Valet) or `php artisan serve`
2. Laravel routes in `routes/web.php` → `Inertia::render('PageName')`
3. PHP requests the SSR node server (`node bootstrap/ssr/ssr.js`, port 13714) to render initial HTML
4. Client-side Vue hydrates via `resources/js/app.js`

### Page routing (`routes/web.php`)
- `/` and `/about` — always accessible
- All other routes (`/approach`, `/who-we-support`, `/pricing`, `/contact`, `/contact-sales`, `/book-a-demo`) check `PAGES_LOCKED` env var and redirect to `/` when `true`
- Set `PAGES_LOCKED=false` in `.env` to unlock all pages

### Component structure
- `resources/js/Pages/` — Inertia page components (one per route)
- `resources/js/Components/Layout/` — `AppLayout.vue` (wraps every page), `Header.vue`, `Footer.vue`, `PageLoader.vue`
- `resources/js/Components/Home/` — section components composed in `Pages/Home.vue`
- `resources/js/Components/Common/` — shared UI primitives

### Key composables (`resources/js/composables/`)
- `useScrollReveal.js` — `IntersectionObserver` that adds `.visible` class to `.fade-in-up` elements; call once per page in `<script setup>`
- `useMagicCursor.js` — custom cursor (RAF + lerp); initialised once in `AppLayout.vue`; auto-applies `-opaque` circle on h1/h2 hover
- `useCounter.js` — animated number counter

### Styling
- **Fonts:** `Manrope` (body, `font-sans`) and `Sora` (headings, `font-heading`) via Google Fonts CDN in `app.blade.php`
- **Brand colours** (defined in both `tailwind.config.js` and CSS vars in `app.css`):
  - `primary` `#243E5C` · `primary-light` `#385A7D`
  - `accent` `#C7F1DE` · `accent-light` `#DDF7EB`
  - `surface` `#E8EEF3` · `text-dark` `#1E2938` · `muted` `#7D8FA3`
- **Utility classes** defined in `app.css` `@layer components`: `.btn-primary`, `.btn-outline`, `.btn-accent`, `.section-tag`, `.section-title`, `.section-subtitle`, `.fade-in-up`
- **Scroll animations:** add `class="fade-in-up"` to any element; `useScrollReveal()` handles the rest. Stagger with `style="animation-delay: 0.1s"`

### Static assets
- Images live in `public/assets/images/` and are referenced as `/assets/images/filename.png` (root-relative, no Vite processing)
- Favicons are in `public/` root and wired in `resources/views/app.blade.php`

### Magic cursor
- CSS in `app.css` under `/* Magic cursor */` — do not move to scoped styles
- `cursor: none` is set globally on `h1, h2` — this is intentional
- States: `-visible` (small dot), `-opaque` (large circle with `mix-blend-mode: exclusion` on headings), `-pointer` (hidden on links), `-text`, `-active`, `-hidden`

## Git
- Single author on all commits: `--author="Muhammad Farhan <itianz@outlook.com>"`
- No `Co-Authored-By` trailers — ever
- Remote: `git@github.com:iamdeveloper120/db-website.git`
