# WildTech Development, Full Site Audit

Date: July 7, 2026. Scope: every file in `src/`, config, public assets, plus a live review of www.wildtechdev.com in Chrome (desktop, light and dark themes). Each item below is a concrete improvement. Status marks: [x] implemented in this pass, [ ] flagged only (reason given).

---

## A. Light mode bugs (found live in the browser)

1. [x] `TechMarquee.tsx` hardcodes `bg-[#070a0f]`, so light mode shows a jarring pitch-black strip across the cream page. Now uses the theme `bg-card` token.
2. [x] WTP privacy page card hardcodes `bg-[#0a0a0a]`; in light mode the body text tokens flip to dark gray, producing near-unreadable dark-on-dark. Now `bg-surface`.
3. [x] `AppStoreBadge` hover was `hover:bg-white` with `text-black`; since `--color-black` is cream in light mode, hover text became invisible white-on-white. Reworked with theme-safe hover (opacity + shadow), and the white glow shadow swapped for a neutral one.
4. [x] `HomeProductCard` accent hover tints (`hover:bg-amber-950/20` etc.) are dark-palette colors; on white cards they render as muddy smears. Replaced with a CSS-variable tint that has calibrated light-theme values.
5. [x] Hero and section glow blobs render at dark-tuned opacity; on cream they look like green haze and visible gradient banding (confirmed in screenshots). Added a `section-glow` class, dimmed by half in light mode, applied to every decorative glow site-wide.
6. [x] `PhoneMockup` frame used `shadow-black/50`; `--color-black` is cream in light mode so phones lost their drop shadow entirely. Now a literal rgba black shadow in both themes.
7. [x] Scrollbar styling was WebKit-only; Firefox showed default chrome in both themes. Added `scrollbar-width`/`scrollbar-color`.

## B. Visual and layout polish

8. [x] Testimonial card footer had conflicting `mt-auto` and `mt-8` in the same class list (`page.tsx`), so the bottom-pinning was at the mercy of CSS order. Removed the duplicate.
9. [x] `bg-gradient-to-b from-black via-black to-black` on two home sections is a no-op gradient (three identical stops). Replaced with plain `bg-black`.
10. [x] Anchor targets (e.g. `/products#spirits-of-charleston` from case studies) landed underneath the fixed navbar. Added global `[id] { scroll-margin-top }`.
11. [x] Phone mockup notch is dated; modern iPhones have the Dynamic Island. Mockups now render an island pill, with slightly larger corner radius to match current hardware.
12. [x] 404 page had no `h1` (the visible heading was an `h2`). Promoted, and added quick links plus the command palette hint.
13. [x] Home hero used `min-h-[92vh]`; on iOS Safari `vh` includes the collapsed URL bar, causing jumpiness. Now `svh` with a `vh` fallback.
14. [x] Heading text wrapping: added `text-wrap: balance` to headings site-wide for cleaner multi-line titles.
15. [x] Buttons had no pressed-state feedback beyond translate reset. Added a subtle active scale for tactile feel.
16. [x] Products page listed "206.5 MB · Age 9+" (App Store metadata) as a product feature for Spirits of Savannah. Replaced with a real feature.
17. [x] Footer had no legal/utility row: added Privacy and RSS links alongside the existing content.
18. [x] Footer lacked social links despite JSON-LD `sameAs` listing them. Added LinkedIn and App Store developer profile icon links.
19. [x] Work index rows were text-only. Added small phone mockup thumbnails (desktop only) for visual richness and product recognition.
20. [x] Contact page now states the response expectation ("within one business day"), matching the confirmation email promise.

## C. Animations and motion

21. [x] Custom cursor click state (`cursor-down`) was dead code: the CSS class defined a transition but no transform, and the JS transform would have clobbered it anyway. Click now visibly compresses the ring (scale in the rAF transform).
22. [x] Custom cursor treated text fields like buttons (big hover ring while typing). Inputs, textareas and selects now restore the native I-beam and hide the ring.
23. [x] `Magnetic` ran a `requestAnimationFrame` loop forever on every instance, even idle. The loop now starts on demand and self-cancels once settled, cutting constant main-thread work.
24. [x] `TiltCard` and `Spotlight` recalculated on every `mousemove`; both are now rAF-throttled.
25. [x] `Counter` re-rendered React state up to ~110 times per animation. Now writes `textContent` via ref, zero re-renders.
26. [x] Tailwind's `animate-ping` (used in 5 files) and `animate-spin` ignored `prefers-reduced-motion`. Added reduced-motion overrides.
27. [x] View transitions (`@view-transition`) were not disabled for reduced-motion users. Added the media-query override.
28. [x] FAQ/founder `<details>` accordions snapped open. Added modern `interpolate-size` + `::details-content` transition so supporting browsers get a smooth open/close (progressive enhancement, harmless elsewhere).
29. [x] ScrollReveal felt heavy (800ms, 28px travel, late trigger). Tuned to 650ms, 20px, earlier trigger margin; home grids reveal with tighter stagger so the hairline-grid "gray slab" phase is shorter (visible in live screenshots).
30. [x] `HeroSpotlight` carried a `transition-opacity` that never fired (opacity never changes). Removed.
31. [x] Marquee content was duplicated for the loop with no `aria-hidden`, so screen readers read all 25 technologies twice. Second copy hidden, plus an sr-only summary sentence.

## D. Dead code and CSS hygiene

32. [x] Removed unused keyframes: `glow-orbit` (also had a conflicting duplicate 100% frame), `shimmer`, `ping-soft`, and the duplicate `marquee` keyframe superseded by `marquee-x`.
33. [x] Removed unused utility classes: `.animate-spin-slow`, `.animate-draw-line`, `.glow-orb`, `.link-bright`, `.card-hover`.
34. [x] Removed unused theme tokens `--color-accent` / `--color-accent-soft` (amber accents in components use Tailwind literals).
35. [x] `PhoneMockup` carried ~200 lines of dead SVG placeholder screens; every product now ships a real screenshot, so the fallback branch was unreachable. Removed (gradient kept as the image loading backdrop).
36. [x] Em dash in a `globals.css` comment removed (site-wide no-em-dash rule, applied to code comments too).
37. [x] Unescaped apostrophes in JSX text (`process/page.tsx`, `now/page.tsx`) escaped to keep `react/no-unescaped-entities` clean.

## E. Content correctness

38. [x] EZ Fuse Tester case study origin story contradicted the canonical founder page (Halloween-lights kitchen story vs. the viral capacitive-touchscreen video; Halloween night 2023 is canonically the Spirits of Charleston origin). This was the open item in PROJECT_LOG. Case study summary, problem section, and launch section rewritten to the viral-video origin. User reviews about fixing Halloween lights are real and stay.
39. [x] The journal post "What we learned shipping EZ Fuse Tester" had the same conflicting origin. Lead, summary, and the "of course that is how it started" line rewritten to match the canonical narrative.
40. [x] `/uses` claimed the site's design tokens use `@theme inline`; PROJECT_LOG documents that `inline` is exactly what breaks theme switching and the code uses plain `@theme`. Corrected.
41. [x] `/now` was stamped "Last updated May 25, 2026" (six weeks stale) and its site item predated this pass. Refreshed date and the wildtechdev.com entry.
42. [x] About page `Organization` JSON-LD `sameAs` was missing LinkedIn and the App Store developer profile that the home page org schema includes. Aligned.
43. [x] PROJECT_LOG.md updated: this audit, the modernization pass, and the resolved EZ Fuse decision are recorded; stale pending item removed.

## F. The Prose renderer (live rendering bugs)

44. [x] Journal content contains 36 `**bold**` spans (e.g. "The term is **naked domain**") that rendered as literal asterisks on the live site. Renderer now supports bold.
45. [x] The naked-domain post's numbered options ("1. **Use a redirect service**...") rendered as plain paragraphs. Renderer now supports ordered lists.
46. [x] Prose `h2`/`h3` headings had no ids, so long posts and case studies could not be deep-linked. Added slugified ids with scroll-margin.

## G. Accessibility

47. [x] No skip-to-content link existed. Added one (visually hidden until focused) targeting the main landmark.
48. [x] Command palette had no focus management: focus now returns to the previously focused element on close, and Tab is contained.
49. [x] Command palette keyboard selection could scroll out of view; selected option now scrolls into view.
50. [x] Command palette lacked combobox semantics. Added `role=combobox`/`listbox`/`option`, `aria-activedescendant`, `aria-selected`.
51. [x] Command palette left the page scrollable behind the overlay. Body scroll now locks while open.
52. [x] Mobile menu: Escape now closes it, and the trigger has `aria-controls`.
53. [x] Contact form success/error messages were invisible to screen readers. Added `role="status"`/`aria-live="polite"`.
54. [x] Newsletter form: email input had placeholder-only labeling; added `aria-label`s, live-region error, and `role="status"` success box.
55. [x] Both forms now carry proper `autoComplete` hints (name, email).
56. [x] Theme toggle now exposes pressed state via `aria-pressed`.
57. [x] Home testimonials now use semantic `<figure>`/`<blockquote>`/`<figcaption>` markup.
58. [x] Footer ⌘K hint was inert text and useless on mobile. It is now a real button that opens the palette (palette listens for a custom event).

## H. SEO and metadata

59. [x] Case study and journal post pages defined their own `openGraph` blocks, which replaces the root config wholesale in Next metadata merging, so those 15 pages shipped with NO social card image. Both dynamic routes now generate branded OG images through the existing `/api/og` route.
60. [x] Work index, journal index, FAQ, Now, Uses, and Process pages likewise now declare explicit `/api/og` social images.
61. [x] `BlogPosting` JSON-LD lacked `image`, `url`, `dateModified`, and `keywords`. Added.
62. [x] Journal index now emits `Blog` + `ItemList` structured data; work index emits `CollectionPage` + `ItemList`.
63. [x] Case study pages now emit an `Article` JSON-LD block referencing the organization.
64. [x] Sitemap stamped every static route `lastModified: now` on every request, telling Google the whole site changes constantly. Statics now use a stable release date.
65. [x] No `viewport`/`themeColor` export existed; mobile browser chrome color was default. Added.
66. [x] Root layout's `WebSite` JSON-LD advertised a `SearchAction` at `/journal?q=` that did not exist (see item 71). Now real.
67. [x] Added `applicationName` metadata.
68. [x] New `/privacy` page (see item 74) added to the sitemap.
69. [x] RSS feed advertised via `<link rel="alternate" type="application/rss+xml">` in the root layout.

## I. Features and functionality

70. [x] RSS feed: new `/feed.xml` route serving the 9 journal posts (title, summary, date, tags), linked from the footer.
71. [x] Journal search: `/journal?q=` now filters posts by title, summary, and tags (client-side, so the page stays statically generated), with a search form, result count, and clear affordance. Makes the advertised SearchAction real.
72. [x] Journal tags are now clickable filters (link to `/journal?q=tag`).
73. [x] Command palette gained: all 9 journal posts, a Toggle Theme action, and a Copy Email action; matching is now word-prefix aware with keyword aliases instead of raw substring only.
74. [x] Site privacy policy page did not exist anywhere (PROJECT_LOG's route list names `/privacy`, and the site collects contact + newsletter data through Resend). Wrote an accurate, minimal `/privacy` covering the contact form, newsletter, Resend processing, no analytics, no ads. Linked from footer.
75. [x] Case studies had "Up next" only; added the matching "Previous" link.
76. [x] Journal posts now have previous/next chronological navigation in addition to related-by-tag.
77. [x] 404 page now offers work/journal quick links and the palette shortcut, not just home/contact.
78. [x] Products page case-study links were derived by string-transforming the display name (fragile). Each product now carries an explicit slug.
79. [x] Newsletter client now validates email shape before POSTing, saving a pointless server round trip.

## J. API hardening

80. [x] Contact API silently returned success even when Resend rejected the inquiry send, so a visitor could believe a failed message was delivered. Delivery failure now returns an honest error with the direct email fallback.
81. [x] Contact API had no throttle at all. Added a best-effort in-memory per-IP rate limit (documented as per-instance).
82. [x] Journal date formatting used `new Date(iso)` + local timezone, which can shift a day depending on server TZ. Centralized a UTC-safe `formatDate` in `src/lib/format.ts` used by all three call sites.

## K. Configuration and headers

83. [x] No security headers were configured. Added `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, and a conservative `Permissions-Policy` via `next.config.ts` headers().
84. [x] `poweredByHeader` disabled (stop advertising the framework version).
85. [x] Added a `typecheck` npm script (`tsc --noEmit`) and ran it clean.
86. [x] First above-the-fold `PhoneMockup` instances (case study header, first product on /products) now pass `priority` to `next/image`; component exposes the prop.

## L. Flagged, deliberately not changed

87. [ ] `public/headshot.png` (180K) duplicates `headshot.jpg` and is referenced nowhere; `public/products-source/` ships six source screenshots to production. Both look like kept-on-purpose originals, so no files were deleted. Move them out of `public/` if they are not meant to be publicly downloadable.
88. [ ] Founder-page meta description says "Porter-Gaud alum" while the press correction (PROJECT_LOG) records attendance without graduating. The founder page is the canonical source and schema.org `alumniOf` technically means "attended", so the text was left untouched; flagging for your awareness only.
89. [ ] WTP privacy page contact email is `will.mccants@me.com` (personal) vs `info@wildtechdev.com` everywhere else. Likely matches the App Store record on purpose; left as-is.
90. [ ] Product data is triplicated across `page.tsx` (home), `products/page.tsx`, and `lib/work.ts`. A single `lib/products.ts` source of truth would be the right long-term refactor, but doing it in the same pass as 100 other changes risks content drift; recommend as its own future session.
91. [ ] `RESEND_AUDIENCE_ID` env var (PROJECT_LOG pending item) still requires a temporary Full Access Resend key; not actionable from the codebase.
92. [ ] Off-site reputation work items from PROJECT_LOG remain the user's homework (outreach, Crunchbase, backlinks).

## M. Micro-fixes bundled with the above

93. [x] Focus outline color now references the brand token instead of a hardcoded hex.
94. [x] `.btn-ghost`/`.btn-solid` press feedback (item 15) implemented via shared rule.
95. [x] Newsletter/contact honeypots unchanged but verified consistent (`company` field both ends).
96. [x] `Cursor` z-index verified above the noise overlay; noise overlay opacity var confirmed per-theme.
97. [x] `ScrollReveal` respects reduced motion (verified, unchanged) and now uses the tuned defaults everywhere automatically.
98. [x] Removed `will-change` from permanently-idle contexts by scoping (tilt cards keep it; static cards no longer use `.card-hover`).
99. [x] `metrics` grid on case studies verified: all six studies define exactly 3 metrics, matching `sm:grid-cols-3`.
100. [x] Verified all six product anchors on /products match `productAnchor` values in `work.ts` (they do; anchor landing fixed by item 10).
101. [x] Verified brand-domain rule (vikingsensors.com vs vikingsense.com vs churchd.com) is respected in all new copy written this pass.
102. [x] Verified no em dashes or `--` substitutes introduced anywhere; the one legacy em dash (item 36) removed.
103. [x] `push.command` updated with a one-line prose commit message describing this pass, per the deploy workflow.
104. [x] Full production build (`next build`) and ESLint pass clean after all changes.

Total: 104 items, 98 implemented, 6 intentionally flagged with reasons.

Verified after implementation: `tsc --noEmit` clean, `eslint` clean, `next build` clean (44 pages), and a running production server spot-checked for the RSS feed, the privacy page, bold and ordered-list rendering in journal posts, per-page og:image tags, security headers, the skip link, sitemap contents (29 URLs), and footer links.
