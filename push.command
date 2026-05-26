#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(seo): add offers blocks to Churchd and Viking Sensors JSON-LD so Product snippets validation passes (was failing Search Console with 'Either offers, review, or aggregateRating should be specified'). Hardened existing offers with availability + url across all 6 products."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
