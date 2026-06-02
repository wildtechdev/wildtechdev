#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(home): make the mid-section of product cards clickable too - TiltCard uses transform-style preserve-3d which makes z-index meaningless between siblings at different translateZ levels, so the mockup wrapper at translateZ(20px) was sitting in front of the overlay Link at z=0 and blocking clicks across the entire middle band of every card - fix is to push the overlay Link to translateZ(30px) and the App Store link wrapper to translateZ(40px) so the click hierarchy works in 3D space, not just z-index"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
