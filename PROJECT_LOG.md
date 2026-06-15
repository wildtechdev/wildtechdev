# WildTech Development — Project Log

A continuity document for resuming work in a fresh Cowork session. Read this end-to-end before making any non-trivial changes. Last updated June 15, 2026.

---

## Quick start for a fresh session

1. Read this file end-to-end.
2. Read `AGENTS.md` (Next.js 16 has breaking changes from training-data Next.js).
3. Read `src/app/will-mccants/page.tsx` — this is the canonical narrative source. When facts conflict elsewhere on the site, the founder page wins.
4. The user cannot run git from inside Cowork. To deploy, edit `push.command` with the right commit message, then ask the user to double-click it in Finder.
5. Trust the data in `src/lib/work.ts` (case studies) and `src/lib/posts.ts` (journal) as the canonical content sources.

## Stack and infrastructure

- **Framework:** Next.js 16.2.3, App Router, Turbopack, TypeScript
- **Styling:** Tailwind v4 with `@theme` (NOT `@theme inline`; see Architecture notes)
- **Hosting:** Vercel, auto-deploy on push to `main`
- **Domain:** `www.wildtechdev.com`. Non-www redirects to www. All canonicals must use www.
- **Email:** Resend, sending-only restricted API key set as `RESEND_API_KEY` in Vercel env
- **Editor of record:** The user runs the project from `/Users/willsmachine/Projects/wildtechdev/`

## Hard rules (do not violate)

- **No em dashes anywhere on the site.** The user has a strict preference. Use commas, periods, or parentheses instead. Also no double-hyphen (`--`) substitutes.
- **Do not mention Anthropic or Claude built the site.**
- **Do not name the local men's society or the mentor.** The founder page generalizes this for a reason.
- **Generalize the pandemic story** in the bio. Do not name specific cities or countries beyond what the founder page already does.
- **The founder's 2012 pardoned offense is sensitive.** Reputation work is handled with care; no judgment, no flippant phrasing.
- **All canonical URLs must use `www.wildtechdev.com`.** Never use the apex `wildtechdev.com` in `alternates.canonical`, sitemap, or JSON-LD.

## Site structure

Routes:
- `/` home
- `/work` and `/work/[slug]` case studies (6 products)
- `/products`
- `/services`
- `/about`
- `/will-mccants` (founder page, canonical narrative)
- `/contact`
- `/press`
- `/process`
- `/faq`
- `/now`
- `/uses`
- `/journal` and `/journal/[slug]` (9 posts)
- `/privacy` and `/privacy/we-the-people-your-rights` (the WTP privacy is noindex and NOT in sitemap)

Case study slugs in `src/lib/work.ts`: `viking-sensors`, `we-the-people-your-rights`, `spirits-of-charleston`, `spirits-of-savannah`, `ez-fuse-tester`, `churchd`.

Brand domain map:
- `vikingsensors.com` = Viking Sensors LLC (the hardware company)
- `vikingsense.com` = the software dashboard (under WildTech Ventures)
- `churchd.com` = Churchd platform
- These are NOT the same brand, do not conflate them.

## Architecture notes

### Theming (light + dark)

- Default theme is dark (the brand identity).
- Light mode is opt-in via the sun/moon toggle in the navbar.
- Implementation lives in `src/app/globals.css`. The `@theme` block defines dark values. A `[data-theme="light"]` selector overrides each color variable for light mode.
- **CRITICAL:** Use `@theme` NOT `@theme inline`. The `inline` variant bakes static values into Tailwind utility classes at build time and breaks runtime theme switching. The override only works because utilities reference `var(--color-*)`.
- `src/components/ThemeProvider.tsx` is a client component that reads localStorage and applies `data-theme` to `<html>`.
- An inline no-flash script in `src/app/layout.tsx` runs before React hydrates to set the theme before paint.
- Brand green `#22c55e` is identical in both themes.
- Light palette: page bg is soft cream `#fafaf9`, cards lift to pure white `#ffffff` (inverted-elevation logic vs dark where surface is lighter than page).

### Home product cards (clickability)

- `src/components/HomeProductCard.tsx` uses a stretched Link overlay so the whole card navigates to the case study page for that product.
- `TiltCard` parent uses `transform-style: preserve-3d`. This makes `z-index` meaningless between siblings with different `translateZ` values.
- Therefore: the overlay Link has `translateZ(30px)` and the inner App Store link has `translateZ(40px)`. The mockup wrapper at `translateZ(20px)` is behind both.
- Each `HomeProduct` has a `caseStudySlug` field linking to `/work/${slug}`.

### Typography

- Smallest text sizes were bumped from `text-[10px]` to `text-[11.5px]` and `text-[11px]` to `text-[12px]` across the site for readability while preserving the tracked-uppercase aesthetic.
- Do not regress these in new components.

### SEO and structured data

- Each page has its own JSON-LD where appropriate (WebPage, Person, Organization, ProfilePage, FAQPage, BreadcrumbList, LocalBusiness, WebSite + SearchAction).
- Founder page uses `ProfilePage` wrapper, Person `disambiguatingDescription`, comprehensive `sameAs` array.
- Sitemap is at `src/app/sitemap.ts`. Do not list noindex pages in it (they send contradictory signals).
- Per-page dynamic OG images via `@vercel/og` route at `src/app/api/og/route.tsx`. OG images stay dark-only (they render as standalone PNGs, no theme system).

## Recent work (most recent first)

- Spread journal dates evenly over 6 months ending June 8, 2026
- Created this `PROJECT_LOG.md`
- Added subtle private-client wording across home, work, about, press, founder
- Trimmed press timeline to 6 entries; fixed Porter-Gaud (only attended 2 yrs, not alum) to Trident Tech; removed "deadlines" from press contact prompt
- Fixed home product card click-through bug (3D z-index)
- Audited press timeline vs founder page; corrected EZ Fuse Tester Halloween error (Halloween 2023 was the Spirits of Charleston origin, not EZ Fuse)
- Made home product cards clickable to case studies via stretched Link overlay
- Added top CTA buttons to `/work/[slug]` (View on App Store / Visit site, duplicates the bottom block)
- Diagnosed Search Console indexing; removed `/privacy/we-the-people-your-rights` from sitemap (noindex page); requested fresh indexing for `/services`
- Wave 1 + Wave 2 light mode shipped (CSS vars, ThemeProvider, ThemeToggle, palette rebalance, typography bumps)
- Numerous SEO improvements: LocalBusiness JSON-LD, WebSite + SearchAction, FAQ + FAQPage on founder, ProfilePage upgrade, name-variant redirects (`/will`, `/willmccants`, `/william-mccants`)

## Current SEO status

As of June 15, 2026:
- 10 of 18 pages indexed in Google Search Console (~71% of real indexable count)
- Real indexable count is ~14 (excluding 3 intentional redirects, 1 dead URL, 1 noindex privacy)
- `/services` was queued for fresh indexing; the non-www redirect error is in validation
- `/will-mccants` is ranking #1 for "Will McCants Charleston"
- LinkedIn is #2; the 2012 negative article is still #3 (off-site reputation work pending)

## Pending / open items

- **EZ Fuse Tester case study at `/work/ez-fuse-tester`** still has the Halloween-lights origin in its body content, which conflicts with the founder page's viral-video origin. Pending the user's decision on whether to rewrite the case study's intro and "The problem" section. Press page has been corrected already.
- **Off-site reputation work** (user's homework):
  - Email outreach to 2012 article publishers with pardon documentation
  - Google removal request
  - Crunchbase founder profile
  - Backlinks: LinkedIn profile, vikingsensors.com footer, churchd.com footer, GitHub bio
- **Optional:** Set `RESEND_AUDIENCE_ID` env var in Vercel. Requires temporary Full Access Resend API key to look up the General audience ID.
- **Task #81** (low priority): Investigate magnetic button click interception on contact form. May be an automation-only artifact.

## Key files

- `src/app/page.tsx` — home
- `src/app/will-mccants/page.tsx` — founder bio, **canonical narrative source**
- `src/app/press/page.tsx` — press kit (timeline, bios, facts, assets)
- `src/app/about/page.tsx` — company summary
- `src/app/work/[slug]/page.tsx` — case study template (top CTA + body)
- `src/app/work/page.tsx` — case studies index
- `src/lib/work.ts` — case study content (6 entries)
- `src/lib/posts.ts` — journal posts (9 entries)
- `src/app/sitemap.ts` — sitemap; do NOT add noindex pages here
- `src/app/layout.tsx` — root layout, contains the no-flash theme script
- `src/app/globals.css` — design system, theme variables (use `@theme` not `@theme inline`)
- `src/components/HomeProductCard.tsx` — clickable product card
- `src/components/ThemeProvider.tsx` — theme state
- `src/components/ThemeToggle.tsx` — sun/moon button
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `push.command` — bash script for git push; user double-clicks in Finder

## Deploy workflow

The user cannot run git from inside Cowork.

1. Make edits as needed.
2. Edit `push.command` and update the commit message to describe what's changing (keep it on one line, no em dashes, prose style).
3. Use `mcp__cowork__present_files` to surface `push.command` so the user can double-click it.
4. The user runs the script in Finder; Vercel auto-deploys on push (typically ~75 seconds).
5. After the push, optionally verify on the live site using `mcp__Claude_in_Chrome__navigate` and `screenshot`.

## Conventions for journal posts

Dates in `src/lib/posts.ts` should look organically spaced. Currently 9 posts spread from `2025-12-15` to `2026-06-08`, roughly every 3 weeks. When adding a new post, pick a date close to "today" and update this log section if you reshuffle dates.

## Conventions for case studies

Each case study in `src/lib/work.ts` has:
- `slug` (URL slug; matches HomeProduct `caseStudySlug`)
- `product` (display name)
- `title` (case study headline, different from product name)
- `summary` (used on /work index)
- `client`, `role`, `year`, `stack`, `metrics`
- `externalUrl` or `appStoreUrl` (case study top + bottom CTAs render based on these)
- `productAnchor` (anchor on /products for "See on products page" link)
- `mockup` (PhoneMockup id)
- `content` (case study body, markdown-ish)
