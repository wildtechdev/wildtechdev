#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(products): revert product card copy to product-focused descriptions (origin stories belong on founder page only). Keep Churchd's expanded feature list and values pledge since those describe the product itself"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
