#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(site): full modernization pass per AUDIT.md with over 100 improvements covering light mode fixes, prose renderer bold and numbered lists, per page social images, RSS feed, journal search, privacy page, accessibility, animation polish, SEO structured data, security headers, and the EZ Fuse origin story now matching the founder page"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
