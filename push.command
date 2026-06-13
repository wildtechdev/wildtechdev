#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(press,home,work): two unrelated fixes shipped together - (1) press page milestones audited against founder page narrative: the 2023 'Halloween night fuse-tester idea' entry was wrong on two counts (Halloween 2023 was actually the Spirits of Charleston ghost-walk-cancellation origin, and EZ Fuse Tester came from a viral video not Halloween lights), corrected and also added 2016/2020/2021 entries to fill the lopsided 2012-to-2022 gap with the Applications Engineering pivot, retirement from the road, and the Spruce Pine PRC Industries year - (2) fix the 3D click-through bug on home product cards where the mockup wrapper at translateZ(20px) was blocking the overlay Link, by pushing the Link to translateZ(30px) and the App Store link wrapper to translateZ(40px)"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
