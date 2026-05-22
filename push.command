#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(design): wave 3 turned to 11: custom cursor with hover states and labels, scroll progress bar, mouse spotlights, magnetic buttons, animated counters, infinite tech marquee, 3D tilt product cards, real testimonials section, animated process timeline, refined hero glow"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
