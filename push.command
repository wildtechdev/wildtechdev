#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(home,work): make home product cards clickable to their case study via a stretched Link overlay (z-2) while keeping the App Store / external link as a higher-z destination (z-3) so the inner link still wins its own clicks - also adds a top CTA block to /work/[slug] pages duplicating the bottom App Store / Visit site buttons inside the title header, so visitors who do not scroll the full case study can still follow through to the product, plus removes /privacy/we-the-people-your-rights from sitemap.xml since the page is noindex and listing it sends contradictory signals to Google"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
