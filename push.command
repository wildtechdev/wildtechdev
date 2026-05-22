#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(wtp): add We The People: Your Rights everywhere products are listed (home grid 3x2, products page entry, About copy, founder Projects, footer, PhoneMockup with blue constitutional theme, JSON-LD, OG image, stats bumped to 4 apps and 6 products)"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
