# WildTech Development: Project Log

A continuity document for resuming work in a fresh Cowork session. Read this end-to-end before making any non-trivial changes. Last updated July 7, 2026.

---

## Quick start for a fresh session

1. Read this file end-to-end.
2. Read `AGENTS.md` (Next.js 16 has breaking changes from training-data Next.js).
3. Read `src/app/will-mccants/page.tsx`: this is the canonical narrative source. When facts conflict elsewhere on the site, the founder page wins.
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
- `/journal` and `/journal/[slug]` (14 posts)
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
- **Decorative glows:** every radial-gradient glow div carries the `section-glow` class; light mode dims them via `--glow-opacity`. Glow-pulse keyframes read `--glow-pulse-lo/hi` vars (also dimmed in light). New glows must include `section-glow` in className.
- **Product card hover tints:** `.accent-tint` + `--tint-dark`/`--tint-light` inline vars (see HomeProductCard). Never use dark-950 Tailwind tints directly; they look muddy on white.
- **Never hardcode dark hexes for surfaces** (`bg-[#070a0f]` style); use the theme tokens. The three light-mode bugs fixed in July 2026 all came from hardcoded dark values.

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

- **July 21, 2026 (pushed and verified live, commits d6d362a / ccd95a0 / ea4468f): Harbor View journal post plus Prose image support.** Follow-ups in the same session: the post summary was reworded so the annual recurring bill "dropped to the price of a hamburger meal," and the twenty dollar website guide gained a dated closing update linking back to the Harbor View post (the hub now points at its proof). All three deploys confirmed live on production including the four images, RSS, homepage journal section, and sitemap. New post `rebuilding-my-home-church-website` (dated July 21, 8 min, tags Build Log/Charleston/Small Business/Web), written in first person as Will about rebuilding his home church's website (harborviewpc.org, launched June 26, 2026; full build history lives in `/Users/willsmachine/Projects/harborviewpc/PROJECT_LOG.md`). Claims verified against the vendor's public pricing page (worshiptimes.org/our-pricing): $47/mo matches their Platform tier, $6,697 plus $77/mo is their listed Studio Complete tier; vendor deliberately NOT named in the post, security story deliberately generalized (church authorized the feature; no dates, document names, or roadmap to archived copies). The Prose renderer and the RSS markdown-html renderer both gained standalone image figure support: `![alt](/journal/img.jpg "Optional caption")` renders a full-width bordered figure with a mono uppercase caption; post images live in the new `public/journal/` (harbor-view-new-site.jpg is a headless-Chrome hero screenshot of the live site, harbor-view-sanctuary.jpg and harbor-view-stained-glass.jpg are from the church shoot). The "before" image at `public/journal/harbor-view-old-site.png` is Will's own screenshot of the old WordPress homepage (the Wayback Machine's copy has no archived CSS), deliberately cropped to the header and stained glass hero only: the full screenshot showed the old vendor's name and logo in the footer (the post deliberately never names them) and small photos of identifiable people including kids. Do not swap in the uncropped version. Environment note: the sandbox needed `npm install --no-save lightningcss-darwin-arm64` for `next build` to run (native binary was missing from node_modules; Vercel builds are unaffected). Verified: typecheck, eslint, and full build clean; post renders correctly in the browser (TOC, figures, captions, cross-links); RSS emits figures with absolute URLs; post appears on the homepage journal section, journal index, and sitemap.
- **July 9, 2026 (fourth push, continued): full claims audit (see `CLAIMS_AUDIT.md`).** Verified every checkable factual claim against Apple's App Store API/listings and the live external sites. Corrected: Spirits of Savannah release year 2024 to actual January 2025 (case study, founder page, press timeline), Savannah JSON-LD ratingCount 8 to actual 3, EZ Fuse "mid 2024" to actual fall 2024 (released Oct 29), EZ Fuse "occasional one-star review" softened (app has a clean 5.0), WTP case study had absorbed the Churchd 12:15 AM domain story (removed) and claimed "eight weeks" (now "a matter of weeks"). CRITICAL: Apple has privacy policies registered at /spirits-privacy and /ez-fuse-privacy which were 404s; created accurate policy pages at /privacy/spirits and /privacy/ez-fuse-tester (noindex, not in sitemap) with permanent redirects from the registered URLs. Marquee trimmed to corroborated-only technologies (removed Firebase, Capacitor, GraphQL, Python pending Will's confirmation; ZEISS removed earlier at Will's direction). Verified accurate: all prices, Charleston's 10 ratings, both 5.0 claims, both verbatim testimonials (Charleston + EZ Fuse), Feb 1 2024 launch date, story counts. Flagged for Will in CLAIMS_AUDIT.md: the Ghostnay Savannah quote (could not load that listing's reviews), and rating counts drift so refresh JSON-LD counts when they change.
- **July 9, 2026 (fourth push): second improvement pass plus two user-reported fixes.** User fixes: removed ZEISS Optotechnik from the homepage tech marquee, and fixed the nav bleed-through/flashing (scrolled navbar was 85% translucent with backdrop-blur, letting the giant serif section numbers show through and causing paint glitches; now fully opaque `bg-black` with a lower 8px scroll threshold and color-only transition; mobile menu opaque too). Second pass items: CommandPalette no longer imports lib/posts (the full post bodies were shipping in the client bundle on every page; the layout now passes a slug/title/tags index as props), homepage gained a "From the journal" section (04) with the 3 latest posts, journal posts got a table of contents (4+ sections), hover heading anchors, a share row (copy link/email/LinkedIn/X, no tracking SDKs), and copy-to-clipboard buttons on code blocks (the standalone SPF/DMARC/List-Unsubscribe records in the spam and Resend posts were converted from inline code to fenced blocks so they get the button), RSS now includes full post HTML via content:encoded, new branded error page (app/error.tsx), guessable-URL redirects (/blog, /posts, /rss, /rss.xml, /feed), security.txt, print stylesheet, AVIF image format, form error colors fixed for light-mode contrast (.form-error), textarea field-sizing, services page case-study proof links, one new FAQ entry pointing at the small-business journal cluster, case study read times, and manifest id. Deliberately NOT consolidated: the product data triplication (home/products/work.ts) stays as-is; the shapes serve different purposes and a merge risks content drift for little gain.
- **July 9, 2026 (third push): journal cross-linking.** The Prose renderer now supports `[text](url)` links (internal `/paths` render as next/link, external as new-tab anchors, styled `text-green link-underline`). Added 26 in-content cross-references across all 13 posts so readers flow between related guides: the DNS/email cluster links to itself (explainer, Google Sites fix, forwarding, spam checklist, Resend setup), the small-business cluster links to itself (speed, local SEO, builder vs custom, twenty dollar setup), and the studio posts link to each other (iOS cost, EZ Fuse build log, what we build, Charleston). The twenty dollar post is the hub with 5 outbound links and inbound links from 6 posts. Every anchor was verified against real slugs; the content format doc at the top of `posts.ts` documents the link syntax.
- **July 9, 2026 (second push): the twenty dollar website capstone post** (`twenty-dollar-website-setup`, dated July 9). The complete shoestring stack for beginners: Google Sites, Namecheap domain, Cloudflare/redirect.pizza naked-domain fix, Namecheap Private Email, sitemap plus Search Console. Cross-references the naked domain guide, email forwarding comparison, spam post, local SEO post, and builder-vs-custom post. Prices kept as soft ranges so the post ages well. Includes the Namecheap promo-code tips (search for a discount code before buying; advertised promo prices are NOT auto-applied at checkout, the code must be pasted manually). Journal is now 13 posts.
- **July 9, 2026: journal updates.** A real reader (found us through the Google Sites redirect post!) hit a DNS error using the redirect.pizza method because an existing apex record was occupying `@`. Added a full troubleshooting section to that post ("If you get an error at this step, check for other @ records") covering the one-web-record-per-apex rule, the usual culprits (old A records, registrar parking, Namecheap URL Redirect records), the caution to leave MX/TXT records alone, and the intermittent-failure symptom when two A records coexist. Added a matching note to the Cloudflare path. Also added three new small-business posts in the existing plain-English voice: website speed (`small-business-website-speed`, June 18), local SEO (`local-seo-basics-small-business`, June 29), and builder vs custom (`website-builder-vs-custom-site`, July 8). Journal is now 12 posts.
- **July 7, 2026: full-site modernization pass (see `AUDIT.md`).** 100+ improvements across light mode (marquee strip, WTP privacy card, App Store badge hover, product card tints, dimmed glows via `.section-glow` and glow CSS vars), animation polish (cursor click feedback, idle-cancelling rAF loops, reduced-motion coverage for ping/spin/view transitions, animated FAQ accordions), the Prose renderer (bold, ordered lists, heading anchors; journal posts were showing literal asterisks), accessibility (skip link, palette combobox semantics and focus management, aria-live form status, Escape-to-close mobile menu), SEO (per-page OG images for case studies and posts which previously had none, Blog/CollectionPage/Article JSON-LD, stable sitemap dates, viewport themeColor), features (RSS at `/feed.xml`, journal search via `?q=` making the SearchAction real, site `/privacy` page, prev/next navigation on posts and case studies, footer socials and palette button), API hardening (honest contact failure responses, best-effort rate limit), and security headers in `next.config.ts`. Resolved the pending EZ Fuse origin conflict: case study and journal post now match the founder page's viral-video origin.
- Made journal posts sort by date automatically (newest first); fixed the google-sites post sitting out of order in the list
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

- **Off-site reputation work** (user's homework):
  - Email outreach to 2012 article publishers with pardon documentation
  - Google removal request
  - Crunchbase founder profile
  - Backlinks: LinkedIn profile, vikingsensors.com footer, churchd.com footer, GitHub bio
- **Optional:** Set `RESEND_AUDIENCE_ID` env var in Vercel. Requires temporary Full Access Resend API key to look up the General audience ID.
- **Task #81** (low priority): Investigate magnetic button click interception on contact form. May be an automation-only artifact.
- **Flagged in AUDIT.md, deliberately untouched:** `public/headshot.png` (unreferenced duplicate) and `public/products-source/` (source screenshots shipped publicly); founder-page "Porter-Gaud alum" phrasing vs the press correction; WTP privacy contact email being the personal address; product data triplicated across home, /products, and work.ts (candidate for a future `lib/products.ts` consolidation session).

## Key files

- `AUDIT.md`: July 2026 full-site audit; the categorized list of everything the modernization pass changed and why
- `src/app/privacy/page.tsx`: site privacy policy (indexed, in sitemap; distinct from the noindex WTP app policy)
- `src/app/feed.xml/route.ts`: journal RSS feed
- `src/lib/format.ts`: shared UTC-safe formatDate (use this, not ad hoc toLocaleDateString)
- `src/components/JournalList.tsx`: client-side journal search/filter (?q=), keeps /journal static
- `src/app/page.tsx`: home
- `src/app/will-mccants/page.tsx`: founder bio, **canonical narrative source**
- `src/app/press/page.tsx`: press kit (timeline, bios, facts, assets)
- `src/app/about/page.tsx`: company summary
- `src/app/work/[slug]/page.tsx`: case study template (top CTA + body)
- `src/app/work/page.tsx`: case studies index
- `src/lib/work.ts`: case study content (6 entries)
- `src/lib/posts.ts`: journal posts (14 entries)
- `src/app/sitemap.ts`: sitemap; do NOT add noindex pages here
- `src/app/layout.tsx`: root layout, contains the no-flash theme script
- `src/app/globals.css`: design system, theme variables (use `@theme` not `@theme inline`)
- `src/components/HomeProductCard.tsx`: clickable product card
- `src/components/ThemeProvider.tsx`: theme state
- `src/components/ThemeToggle.tsx`: sun/moon button
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `push.command`: bash script for git push; user double-clicks in Finder

## Deploy workflow

The user cannot run git from inside Cowork.

1. Make edits as needed.
2. Edit `push.command` and update the commit message to describe what's changing (keep it on one line, no em dashes, prose style).
3. Use `mcp__cowork__present_files` to surface `push.command` so the user can double-click it.
4. The user runs the script in Finder; Vercel auto-deploys on push (typically ~75 seconds).
5. After the push, optionally verify on the live site using `mcp__Claude_in_Chrome__navigate` and `screenshot`.

## Conventions for journal posts

Dates in `src/lib/posts.ts` should look organically spaced. Currently 14 posts spread from `2025-12-15` to `2026-07-21`, roughly every 2 to 3 weeks. When adding a new post, pick a date close to "today" and update this log section if you reshuffle dates.

The exported `posts` array now sorts itself by date (newest first), so the order entries appear in the source no longer matters. You can add a new post anywhere in the `allPosts` array and reshuffle dates freely without re-sorting by hand.

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
