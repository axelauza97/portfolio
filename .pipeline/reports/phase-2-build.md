# Phase 2 Build Report — Fix Iteration 4

## Files Modified

- `pages/index.js` — hoisted `projects` array from inside `getStaticProps` to module scope so the catch block can reference it; catch now returns `{ repos: [], projects }` instead of `{ repos: [], projects: [] }`
- `components/layout/Navbar.jsx` — removed `entranceAnimation` object and changed `motion.nav` from `initial={entranceAnimation.initial}` to `initial={false}`; also removed the now-unused `animate={entranceAnimation.animate}` prop
- `styles/globals.css` — added `[id] { scroll-margin-top: 5rem; }` inside the `@layer base` block

## Dependencies Installed

None.

## Decisions Made

### Fix 1 — getStaticProps fallback
The `projects` array was defined inside `getStaticProps` after the try/catch block, making it unreachable from the catch. Moving it to module scope (before `export default function Home`) is the minimal change: no logic altered, same data, now accessible everywhere in the module.

### Fix 2 — Navbar SSR visibility
Changed `initial` to `false` on `motion.nav`. This tells Framer Motion to skip the initial animation entirely — the element renders in its natural CSS state (visible) from the start. The scroll-based className changes via Tailwind still work on the client. The `entranceAnimation` object was removed since it was only used for the now-removed initial/animate entrance props.

### Fix 3 — Anchor scroll offset
Used the global CSS `[id]` selector rule rather than adding `scroll-mt-20` classes to individual elements. This is more maintainable — it covers all current and future anchor targets site-wide with a single declaration. 5rem (80px) gives a comfortable margin above the 4rem (64px) fixed navbar.

## Build Status

PASS — `npm run build` completed with zero errors. One pre-existing warning about the `/` page data size (165 kB exceeds 128 kB threshold) exists due to the inline image data in the projects array; this is not introduced by these changes.

```
Route (pages)                              Size     First Load JS
┌ ● / (ISR: 36000 Seconds) (852 ms)        6.57 kB         148 kB
├   └ css/7ae3d16ba6cd42a9.css             1.77 kB
├   /_app                                  0 B             142 kB
├ ○ /404                                   182 B           142 kB
├ ○ /about (312 ms)                        2.9 kB          144 kB
├   └ css/d4a334f1943cc7ee.css             1.42 kB
├ λ /api/sendEmail                         0 B             142 kB
└ ● /experience (317 ms)                   7.14 kB         149 kB
    └ css/9cd9eae3e675ff80.css             1.15 kB
```

## Known Limitations

- The `/` page data payload (165 kB) exceeds Next.js's 128 kB recommendation
  due to the large `projects` array with base64-encoded AVIF image data. This
  is a pre-existing issue; addressing it would require lazy-loading project images
  or moving them out of `getStaticProps`.
- The `caniuse-lite` database is outdated (pre-existing warning, not a build error).
