#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(content): add light-touch private-client wording across home (Products section subtitle), work (intro), about (existing client paragraph), press (medium bio), and founder (Building WildTech) so prospective clients understand the displayed catalog is WildTech-owned products and that there is additional NDA client work behind it - plus the queued press timeline trim, Porter-Gaud to Trident swap, deadline drop, and the home card 3D click-through fix"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
