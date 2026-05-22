#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock

# Clean up scaffold + duplicate assets that the sandbox can't remove
rm -f public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
rm -f public/headshot.jpg public/william-industrial-opt.jpg

git add -A
git commit -m "feat(audit-fixes): big batch (Waves A-E): footer viking-sensors anchor, mobile founder link, 404 metadata, sharper hero subhead, brighter section numbers, faster marquee, scroll-reveal threshold, photo size constraint, About founder CTA solid, canonical URLs on all pages, Organization + ItemList + Service JSON-LD, contact form wired to /api/contact (with Resend support), images optimized 96/89 percent, favicon set generated, industries strip, Will McCants projects expanded, products page closing CTA, VikingSense renamed to VikingSensors internally"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
