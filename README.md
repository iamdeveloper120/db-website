# Development Beyond — Website

Marketing website for **Development Beyond Ltd**, built with Laravel 13 + Inertia.js + Vue 3 (SSR) + Tailwind CSS v3.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 13, PHP 8.3+ |
| Frontend | Vue 3 (Composition API), Inertia.js v2 |
| Rendering | Server-Side Rendering (SSR) via Node.js |
| Styling | Tailwind CSS v3, PostCSS, custom CSS vars |
| Build | Vite 8 + laravel-vite-plugin |

---

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 20+ and npm

---

## Setup

```bash
# 1. Clone the repo
git clone git@github.com:iamdeveloper120/db-website.git
cd db-website

# 2. Install dependencies
composer install
npm install

# 3. Set up environment
cp .env.example .env
php artisan key:generate

# 4. Run database migrations
php artisan migrate

# 5. Build frontend assets
npm run build
```

---

## Running Locally

```bash
# Terminal 1 — PHP dev server
php artisan serve --port=8000

# Terminal 2 — SSR Node server
node bootstrap/ssr/ssr.js
```

Visit `http://localhost:8000`.

---

## Sharing Publicly (ngrok)

```bash
# Terminal 1
php artisan serve --port=8000

# Terminal 2
node bootstrap/ssr/ssr.js

# Terminal 3
ngrok http 8000
```

> **Do not run `npm run dev` when sharing externally.** It creates `public/hot` and rewrites all asset URLs to `http://localhost:5173/...` which are unreachable from external connections. Always use `npm run build` first.

---

## Styling

**Fonts** — `Manrope` (body) and `Sora` (headings) loaded via Google Fonts.

**Brand colours:**

| Token | Hex |
|---|---|
| `primary` | `#243E5C` |
| `primary-light` | `#385A7D` |
| `accent` | `#C7F1DE` |
| `accent-light` | `#DDF7EB` |
| `surface` | `#E8EEF3` |
| `text-dark` | `#1E2938` |
| `muted` | `#7D8FA3` |

**Scroll animations:** add `class="fade-in-up"` to any element — `useScrollReveal()` handles the rest. Stagger with `style="animation-delay: 0.1s"`.
