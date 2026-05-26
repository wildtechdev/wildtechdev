#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(site): massive expansion - case studies for all 6 products at /work/[slug], /journal with 3 long-form posts, /process /faq /now /uses pages, FAQPage and BlogPosting JSON-LD, Cmd-K command palette, dynamic OG image route, newsletter signup via Resend Audiences, enriched footer, Work/Journal in navbar, sitemap with all new routes, friendlier confirmation email subject + List-Unsubscribe headers"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
