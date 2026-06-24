# DB Website — Home Page Fix Requirements

## Overview
The home page has several design issues compared to the purchased HTML template.
Fix each issue below by referencing the original template files directly.

**Template reference path:**
`/home/muhammad-farhan/Downloads/db website/themeforest-KuKLb2kR-labrix-laboratory-science-research-html-template/html/01.laboratory-analysis/index.html`

Always open the original `index.html` in the template folder and compare side by side before fixing anything. Do not guess — extract the exact CSS classes, JS plugin calls, animation configs, and HTML structure from the source template.

---

## Issue 1 — Play Button (Hero Section)

**Problem:**
The entire play button (icon + "Watch Our Video" text) is rotating in a circle. Only the text label around the circular border should animate/rotate — the play icon in the center must stay completely still.

**How to fix:**
1. Open the original `index.html` and find the play button markup.
2. Identify which element has the rotation animation applied (it should only be on the circular text path, not the wrapper or the icon).
3. In the Vue component, ensure the CSS animation targets only the rotating text ring element.
4. The center play icon must have `animation: none` and must not inherit any `transform` or `animation` from a parent.
5. Match the rotation speed, direction, and style exactly to the original template.

---

## Issue 2 — Section Text / Scroll Animations

**Problem:**
The entrance animations on text elements (headings, paragraphs, labels) when sections scroll into view do not match the original template. The timing, easing, direction, and stagger are wrong.

**How to fix:**
1. Open the original `index.html` and check which animation library is being used (likely GSAP, AOS, WOW.js, or ScrollReveal — check the `<script>` tags and JS files).
2. Find the exact animation configuration: `data-aos`, `data-wow-*`, or GSAP ScrollTrigger settings used on each section's text elements.
3. Copy those exact `data-*` attributes or JS animation calls into the Vue components.
4. Make sure the animation library JS is properly initialised after the component mounts (`onMounted` in Vue 3).
5. Do not replace the original animation library with a different one.

---

## Issue 3 — Typography (Font & Text Style)

**Problem:**
Fonts and text styles across the home page do not match the purchased template. Weights, sizes, letter spacing, line height, and font families are off.

**How to fix:**
1. Open the original template's CSS files (linked in `index.html`) and extract the exact font declarations:
    - Font family names
    - `@font-face` sources or Google Fonts `<link>` tags
    - Font weights used per heading level (h1–h6) and body text
2. Check that all webfont files from `public/assets/webfonts/` are loading correctly (check Network tab in browser DevTools).
3. In the global CSS, ensure font variables and base typography match the template exactly:
    - `font-family`
    - `font-size`
    - `font-weight`
    - `line-height`
    - `letter-spacing`
    - `text-transform` (uppercase labels, etc.)
4. Apply these styles globally via `app.css` or the relevant component — do not override them with scoped styles unless necessary.

---

## Issue 4 — "Pioneering Progress" Section (Left Side Layout)

**Problem:**
In the section with the text *"Pioneering progress tracking to transform information into meaningful action."*, the left-side images are not in the correct position. The animated images (floating/parallax elements) and the heading text are also misaligned or missing their animations.

**How to fix:**
1. Open `index.html` and locate this specific section.
2. Compare the HTML structure exactly — note the nesting order of image wrappers, animated elements, and text.
3. Check if any images use absolute/relative positioning with specific `top`, `left`, `right`, `bottom` values — replicate these exactly in the component's CSS.
4. Identify the animated image elements: check for classes like `.wow`, `data-aos`, or inline `data-*` animation attributes, and replicate them.
5. Ensure the section's grid/flex layout columns match — check column widths, order, and gap values from the original CSS.
6. This same fix pattern applies to **all other sections** with similar layout/image/animation issues — audit every section on the home page after fixing this one.

---

## Issue 5 — Footer Logo Not Displaying

**Problem:**
The logo displays correctly in the header but is broken or missing in the footer.

**How to fix:**
1. Open `Footer.vue` and check the `<img>` tag's `src` path for the logo.
2. Compare the logo path used in `Header.vue` (where it works) — use the exact same path in the footer.
3. Verify the image file exists in `public/assets/images/` and the path is correct relative to the public root.
4. If the logo is a different variant for the footer (e.g. white/light version), check the original template's footer HTML for the correct file name and use that one.

---

## General Fix Rules

- **Always reference the original template** at the path above before making any change. Do not guess or estimate styles.
- **Do not rewrite working sections** — only touch what is listed here.
- **Extract exact values** — colors, sizes, animation durations, class names — directly from the source HTML/CSS/JS.
- **Test after each fix** in the browser before moving to the next issue.
- Fix issues **in the order listed** (Issue 1 → 2 → 3 → 4 → 5).
- After all fixes, do a full scroll-through of the home page and compare it against the original `index.html` opened in the browser side by side.
