#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(mockups): replace all 6 placeholder PhoneMockup SVG designs with actual cropped product screenshots - Spirits of Charleston (Garden Theatre), Spirits of Savannah (Olde Pink House), EZ Fuse Tester (FAIL state), Churchd (feed view), Viking Sensors (live dashboard), We The People (founding documents). Status bars and Safari/system chrome cropped out, all optimized to ~600x1200 JPEG."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
