#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(narrative): expand founder bio with childhood CS camps, Phi Theta Kappa, eBay origin at MSI, training cities, Blue Ridge Parkway photography origin, NetSuite/SuiteScript learning. Add origin stories to every product on products page: Halloween 2023 cancelled tour for Spirits, viral video moment for EZ Fuse, yellow legal pad and FindFellowship for Churchd (with full feature list and values pledge), Steven Archibald partnership for Viking Sensors"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
