# Claims Audit

Date: July 9, 2026. Every material factual claim on the site checked against an external source where one exists, and against the canonical founder page where one does not. External sources used: Apple's App Store lookup API and listing pages (live data), vikingsensors.com, churchd.com.

## Verified accurate (external source)

- Spirits of Charleston: $4.99, 5.0 rating, exactly 10 ratings (JSON-LD matches), 75+ stories, Travel category, released February 1, 2024. All match the live App Store listing.
- The home page testimonial "Even my ghost-averse daughter stayed highly engaged..." is verbatim from the App Store review by momoftheyear123 (02/01/2024).
- The EZ Fuse testimonial "I was getting ready to throw out a bunch of Halloween lights..." is verbatim from the App Store review by Ghostly Grandmother (10/29/2024).
- EZ Fuse Tester: Free, 5.0 rating, Utilities category. The journal's "weighs less than three megabytes" claim is comfortably true (actual: 314 KB).
- Spirits of Savannah: $3.99, 5.0 rating, 55+ stories, coverage claims (Ossabaw Island, Hardeeville SC) match the App Store description.
- We The People: Free, released May 19, 2026, "a few megabytes" claim true (2.9 MB), no ratings claimed on site and none exist. "In May of 2026" origin timing on the founder page is consistent with the release date.
- "Both apps maintaining their 5.0 ratings" on /now: true for both Spirits apps.
- Home stats: "4 Apps Live" (4 confirmed live listings), "6 Products," "Est. 2024" all check out.
- "Most comprehensive ghost story app in the Lowcountry" matches the studio's own App Store listing copy (consistent claim, and an opinion-superlative besides).
- vikingsensors.com and churchd.com are live and their positioning matches how the site describes them ("Pairs with VikingSense" on vikingsensors.com confirms the brand-domain split the site describes).
- "The company launched on February 1, 2024 with the release of Spirits of Charleston" (about page): exact match to the App Store release date.

## Found wrong and corrected

1. **Spirits of Savannah release year.** Site said 2024 (case study year, case study body, founder page "followed soon after," press timeline). Actual App Store release: January 9, 2025. Corrected in all four places; press timeline now has separate 2024 (EZ Fuse) and 2025 (Savannah) entries.
2. **Savannah JSON-LD ratingCount.** Site claimed 8; actual is 3. Corrected, with a source comment and the lookup URL for future refreshes.
3. **EZ Fuse "shipped in mid 2024."** Actual release: October 29, 2024. Corrected to "fall of 2024" on the founder page, the case study, and the journal build log.
4. **EZ Fuse "occasional one-star review" claim.** The app has a clean 5.0 across all its ratings, so this contradicted the listing. Softened to "occasional confusion."
5. **WTP case study had absorbed the Churchd origin story.** The "domain purchased one night at 12:15 AM" detail belongs to churchd.com (founder page, canonical). Removed from the WTP launch section.
6. **WTP "built in eight weeks" title claim.** Unsupported by the canonical timeline (idea to App Store was roughly three weeks). Changed to "built in a matter of weeks."
7. **App Store registered privacy policy URLs were 404s.** Apple has wildtechdev.com/spirits-privacy on file for Spirits of Charleston and wildtechdev.com/ez-fuse-privacy for EZ Fuse Tester; neither page existed. Created real policy pages (accurate to the apps' verified "Data Not Collected" status, with an on-device location section for the Spirits apps) at /privacy/spirits and /privacy/ez-fuse-tester, with permanent redirects from the registered URLs. Both noindex, matching the WTP app policy.
8. **Marquee technologies without corroboration.** ZEISS Optotechnik was removed at your direction (real training, but metrology equipment, not a studio build technology). Firebase, Capacitor, GraphQL, and Python also appear nowhere else on the site (not on /uses, no case study stack) and were removed pending your confirmation. Say the word and any of them goes back; the remaining 20 items are all corroborated. Capacitor deserves a special look before restoring: the site's positioning is native Swift everywhere, and a hybrid-wrapper framework on the banner slightly undercuts that story.

## Flagged for Will (only you can verify these)

- **The Ghostnay Savannah quote** ("This app turned out to be the best tour we took on our girl's weekend to Savannah!"). Savannah's listing page would not load for me, so I could not read its reviews. Ghostnay verifiably reviewed your other two apps, so this is plausible, but please confirm it is verbatim from the actual Savannah review. If not, the verified Charleston Ghostnay quote can slot in.
- **"Privately distributed software for national clients"** (services, Windows). NDA work is unverifiable by design; keeping as-is on your word.
- **"Cut freight costs by over 40 percent"** and **"dozens of new users per day"** (founder page). Internal MSI-Viking and App Store Connect data; unverifiable externally, left as-is per the canonical-source rule.
- **Porter-Gaud "alum" phrasing** in founder metadata vs the press correction (attended two years). Still flagged from the first audit; your call.
- **Charleston's rating count in JSON-LD is 10 today.** Rating counts drift. When ratings change, refresh both counts via itunes.apple.com/lookup?id=6476931671,6740187114.

## Method note

Anything phrased as opinion or philosophy (design language, honesty claims, process descriptions) was not policed; this audit covered checkable facts: dates, prices, counts, ratings, credentials, technology claims, and quotes.
