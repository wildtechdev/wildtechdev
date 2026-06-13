#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(press,home): trim press timeline back to 7 major beats - the audit-driven detailed version was too much for a press kit where journalists scan quickly, so reduced to founding/product/partnership milestones only, no personal career stops or inspiration backstories - also fixes the 3D click-through bug on home product cards where the mockup wrapper at translateZ(20px) blocked the overlay Link, by pushing the Link to translateZ(30px) and the App Store link wrapper to translateZ(40px)"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
