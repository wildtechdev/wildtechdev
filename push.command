#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(layout): grey strip below shorter product cards on home grid - cards with fewer content lines (Free / no rating) weren't filling their grid cells, exposing the gap-px bg-border. Added h-full to ScrollReveal wrapper + h-full flex flex-col to HomeProductCard's TiltCard + mt-auto on price/CTA block so all cards in a row fill the same height with CTAs anchored to the bottom."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
