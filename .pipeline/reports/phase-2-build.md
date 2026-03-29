# Phase 2 Build Report — Fix Iteration 2

## Files Modified

- `components/layout/Layout.js` — Added skip-to-content link and `id="main-content"` on `<main>`
- `components/layout/Navbar.jsx` — Added useRouter active detection, aria-current, Escape key handler, token replacements
- `pages/index.js` — Added `id="projects"` and `id="contact"` to existing section wrappers

## Dependencies Installed

None.

## Decisions Made

### Skip Link
Implemented using Tailwind's `sr-only` / `focus:not-sr-only` pattern so the link is invisible until focused by keyboard users. It targets `#main-content` which is now the `id` on the `<main>` element in Layout.js. The skip link sits before `<Navbar />` in the DOM so it is the first focusable element on every page.

### Active Route Detection
Used `useRouter().pathname` to compare against each nav item's href (stripping the hash fragment for hash-link items like `/#projects`). The home link (`/`) is matched exactly to avoid false positives on `/about` etc. Active links receive `text-text-primary` and `aria-current="page"`. The underline indicator (`bg-accent-purple`) is always full-width on the active item instead of only on hover.

### Escape Key Handler
Added a `keydown` listener on `document` via `useEffect` that calls `setMobileOpen(false)` when `Escape` is pressed while the mobile menu is open. The handler is memoised with `useCallback` to avoid registering a new listener on every render.

### Anchor IDs on Index Page
- `id="projects"` placed on the `<section>` that contains "Main Projects" (the first reveal section).
- `id="contact"` placed on the `<div>` wrapping the "Contact me!" button, which is the nearest semantic contact entry point on the current home page.

These are placeholder anchors so the existing navbar links (`/#projects`, `/#contact`) resolve to valid DOM targets. They will be replaced with proper sections in Phase 3 and Phase 8.

### Token Replacements in Navbar
- `text-white` on hamburger button replaced with `text-text-primary`
- `bg-white` on the three hamburger bar spans replaced with `bg-text-primary`
- Default (non-hover) link text switched from `text-text-secondary hover:text-white` to `text-text-secondary hover:text-text-primary`
- Active link text uses `text-text-primary`
- `bg-white/5` (hover tint on mobile links) and `border-white/10` (border/divider) kept as-is — no direct Tailwind token exists for transparency variants

## Build Status

PASS — All 5 pages compiled without errors or type errors.

```
Route (pages)                              Size     First Load JS
 ● / (ISR: 36000 Seconds)                 6.57 kB         148 kB
   /_app                                  0 B             142 kB
 ○ /404                                   182 B           142 kB
 ○ /about                                 2.9 kB          144 kB
 λ /api/sendEmail                         0 B             142 kB
 ● /experience                            7.14 kB         149 kB
```

The `data for page "/" exceeds 128 kB` warning is pre-existing (GitHub repos payload from `getStaticProps`) and is not introduced by this iteration.

## Known Limitations

- The `/#projects` and `/#contact` anchor links now point to real DOM nodes, but the contact anchor targets a button wrapper rather than a dedicated contact section — this will be superseded in Phase 8.
- `bg-white/5` and `border-white/10` use raw white with opacity rather than design tokens. Tailwind does not support transparent token variants without JIT arbitrary values, so these are intentionally left as-is per the build instructions.
