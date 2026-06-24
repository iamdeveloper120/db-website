# DB Laboratory Website — Claude Code Requirements

## Project Overview

Convert a purchased HTML template into a fully functional **Laravel 13 + Inertia.js + Vue 3 SSR** website for a laboratory/science/research business (DB Website). The Laravel project is already scaffolded and running — build on top of it, do not reinstall or re-scaffold.

---

## Base Paths & Source Files

| Asset | Path |
|---|---|
| Project base | `/home/muhammad-farhan/Downloads/db website/` |
| HTML template | `/home/muhammad-farhan/Downloads/db website/themeforest-KuKLb2kR-labrix-laboratory-science-research-html-template/html/01.laboratory-analysis/` |
| Home page reference | `index.html` inside the template path above |
| Banner background image | `/home/muhammad-farhan/Downloads/db website/home_page_banner_bg_Image.png` |
| Content guide | `/home/muhammad-farhan/Downloads/db website/20260622_DB_Website_Pages_Content_Guide.docx` |
| Color palette | `/home/muhammad-farhan/Downloads/db website/260610 - colour palette.docx` |
| Navigation flow map | `/home/muhammad-farhan/Downloads/db website/260610 - website flow map.docx` |
| Home page images | `/home/muhammad-farhan/Downloads/db website/1. Website images/` |

---

## Tech Stack

- **Laravel 13** — backend, routing, SSR server
- **Inertia.js** — bridge between Laravel and Vue
- **Vue 3** — frontend, Composition API (`<script setup>`)
- **SSR enabled** — Server-Side Rendering is active via `ssr.js`

---

## Step 1 — Read All Reference Documents First

> Do this before writing any code.

1. **Color Palette DOCX** — Extract all brand colors (primary, secondary, accent, background, text). Define them as CSS custom properties in `:root {}`.
2. **Content Guide DOCX** — Extract all page names, section headings, and copy/text for every page.
3. **Navigation Flow Map DOCX** — Extract all pages, their hierarchy, and menu structure.
4. **HTML Template (`index.html`)** — Inspect all linked CSS, JS, fonts, and layout patterns to understand the full design system.

---

## Step 2 — Asset Migration

Copy all template assets into the Laravel `public/` directory. Preserve the folder structure:

```
public/
└── assets/
    ├── css/          ← all template CSS files
    ├── js/           ← all template JS files
    ├── images/       ← template images + website images + banner bg
    ├── webfonts/     ← all web font files
    └── vendor/       ← any vendor/plugin assets
```

- Do **not** use CDN links for anything that already exists locally.
- Include `home_page_banner_bg_Image.png` and all images from `1. Website images/` folder.

---

## Step 3 — robots.txt

Create `public/robots.txt` with the following content to block **all** search engines and scrapers:

```
User-agent: *
Disallow: /
```

---

## Step 4 — Project Architecture

### Laravel (`routes/web.php`)

- Each page = one Inertia route returning its corresponding Vue page component.
- No API routes unless explicitly needed.

### Vue 3 Directory Structure

```
resources/js/
├── app.js
├── ssr.js
├── Components/
│   ├── Layout/
│   │   ├── AppLayout.vue        ← Master layout (Header + slot + Footer)
│   │   ├── Header.vue           ← Site-wide navigation
│   │   └── Footer.vue           ← Site-wide footer
│   ├── Common/
│   │   ├── PageLoader.vue       ← Inertia page transition loader
│   │   ├── SectionTitle.vue     ← Reusable section heading
│   │   ├── Button.vue           ← Reusable CTA button
│   │   ├── Card.vue             ← Generic card
│   │   └── Breadcrumb.vue       ← Breadcrumb trail
│   └── [PageName]/              ← Page-specific section components
│       └── [SectionName].vue
├── Pages/
│   ├── Home.vue
│   ├── About.vue
│   ├── Services.vue
│   ├── Contact.vue
│   └── [other pages per Flow Map]
└── composables/
    └── usePageMeta.js           ← SSR-safe head/meta helper
```

---

## Step 5 — Build Order

Follow this sequence strictly.

### 5.1 — Global Styles & Design Tokens

- Define all brand colors from the palette as CSS custom properties:

```css
:root {
  --color-primary: ;
  --color-secondary: ;
  --color-accent: ;
  --color-background: ;
  --color-text: ;
  /* etc. */
}
```

- Import template CSS files in the same order they appear in `index.html`.

---

### 5.2 — AppLayout.vue

- Wraps every page.
- Includes `<Header />`, `<slot />`, `<Footer />`.
- Mounts `<PageLoader />` tied to Inertia's `router.on('start')` / `router.on('finish')` events.
- Uses `<Head>` from `@inertiajs/vue3` for SSR-safe `<title>` and `<meta>` tags.

---

### 5.3 — Header.vue

- Extract markup from the template's `<header>` section.
- Navigation items and links must reflect the **Navigation Flow Map** document exactly.
- Mobile-responsive hamburger menu.
- Preserve any sticky/scroll behavior from the original template JS.

---

### 5.4 — Footer.vue

- Extract markup from the template's `<footer>` section.
- All links, columns, social icons, and copyright text must come from the **Content Guide**.

---

### 5.5 — Home Page (Home.vue)

Build each section as a separate child component, then assemble them in `Home.vue`:

| Component | Notes |
|---|---|
| `HeroBanner.vue` | Background = `home_page_banner_bg_Image.png` |
| `ServicesSection.vue` | |
| `AboutSection.vue` | |
| `StatsSection.vue` | |
| `TestimonialsSection.vue` | |
| *(other sections from index.html)* | |

- All text content from the **Content Guide**.
- All images from `1. Website images/` folder.

---

### 5.6 — All Other Pages

- Build every page listed in the **Navigation Flow Map**.
- Each page uses `AppLayout` and its own page-specific section components.
- All copy/text from the **Content Guide** — no lorem ipsum.
- Visual design must match the HTML template precisely.

---

## Step 6 — SSR Rules

- No raw `window`, `document`, or browser APIs at the top level of any component.
- Wrap browser APIs inside `onMounted()` or guard with `if (typeof window !== 'undefined')`.
- Use `<Head>` from `@inertiajs/vue3` for all per-page `<title>` and meta tags.
- Use `defineAsyncComponent` for any heavy or third-party widgets.
- Avoid hydration mismatches — keep server and client renders consistent.

---

## Step 7 — Page Loader

- Implement a global loading indicator using Inertia's router events:
  - `router.on('start', ...)` → show loader
  - `router.on('finish', ...)` → hide loader
- Show a branded loading bar or spinner during page transitions.
- Optionally add skeleton screens for content-heavy sections.

---

## Step 8 — Code Quality Standards

| Rule | Requirement |
|---|---|
| Script syntax | Always use `<script setup>` (Vue 3 Composition API) |
| Props | Always typed with `defineProps` |
| Styles | No inline styles — use template CSS classes or CSS variables |
| Colors | Never hardcode hex values — always use CSS custom properties |
| Copy | All text from the Content Guide — no placeholder text |
| Components | Reusable where possible — pass content as props |
| File naming | PascalCase for `.vue` files, kebab-case for CSS classes |
| Assets | All assets served from `public/assets/` — no external CDN unless unavoidable |

---

## Step 9 — Per-Page Completion Checklist

Before marking any page as done, verify:

- [ ] Visually matches the HTML template
- [ ] All text matches the Content Guide
- [ ] All nav links match the Flow Map
- [ ] Images load from `public/assets/images/`
- [ ] SSR renders without errors (`php artisan inertia:start-ssr`)
- [ ] No browser console errors
- [ ] Mobile responsive
- [ ] Page transitions show the loader

---

## Important Rules

- **Do not modify the original HTML template files** — they are read-only reference only.
- Grab sections **one by one** from the template; convert each to a Vue component.
- The final design must be **pixel-accurate** to the template.
- `robots.txt` must disallow all bots — this site must not be publicly indexed.
- If the Content Guide or Flow Map is ambiguous for any page, ask before proceeding.
