# Phase 2 Build Report — Fix Iteration 3

## Files Modified

- `components/layout/Navbar.jsx` — corrected `isActive()` hash-link logic
- `pages/index.js` — wrapped GitHub API fetch in try/catch with empty-array fallback

## Dependencies Installed

None.

## Decisions Made

### Fix 1: Navbar isActive() logic

The previous implementation split `href` on `#` and took only the path segment.
This caused `/#projects` to resolve to `/`, which then matched the home route —
marking the Projects and Contact links as active on every page.

The new logic short-circuits immediately for any `href` that contains `#` (and
is not a bare `/`), returning `false`. This means section anchors are never
treated as page-level routes. The remaining cases handle home (exact match) and
other pages (prefix match) as before.

Result: on `/`, only "Home" is active. On `/about`, only "About" is active.
Projects and Contact (hash links) are never shown as active.

### Fix 2: getStaticProps GitHub fetch fallback

The fetch was unguarded at the top of `getStaticProps`. A network error at build
time (rate-limited CI, offline environment) would throw and fail the entire
build. The fix wraps only the fetch + json parse in a try/catch. On failure it
logs a warning and returns `{ props: { repos: [], projects: [] }, revalidate: 60 }`,
allowing the build to complete. A short revalidate of 60 seconds ensures the
live site retries quickly. Successful fetches continue to use revalidate 36000.

## Build Status

PASS — all 5 pages generated without errors or type failures.

```
Route (pages)                              Size     First Load JS
┌ ● / (ISR: 36000 Seconds) (1054 ms)       6.57 kB         148 kB
├   /_app                                  0 B             142 kB
├ ○ /404                                   182 B           142 kB
├ ○ /about                                 2.9 kB          144 kB
├ λ /api/sendEmail                         0 B             142 kB
└ ● /experience                            7.14 kB         149 kB
```

## Known Limitations

- The `/` page data payload (165 kB) exceeds Next.js's 128 kB recommendation
  due to the large `projects` array with base64-encoded AVIF image data. This
  is a pre-existing issue unrelated to this iteration's changes; addressing it
  would require lazy-loading project images or moving them out of `getStaticProps`.
- The `caniuse-lite` database is outdated (pre-existing warning, not a build error).
