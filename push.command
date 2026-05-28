#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "polish(theme): rebalance light palette so cards lift off the page - surface goes pure white, page stays soft cream, color-black matches page (like dark mode pattern), faint bumped up for visible watermarks, noise opacity dialed back further"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
