#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(site): journal expansion and second improvement pass, adds apex record troubleshooting and four small business posts with cross-linking, homepage journal section, post tables of contents, share row, code copy buttons, full content RSS, branded error page, url redirects, security txt, print styles, palette bundle slimming, opaque navbar fixing bleed-through, and removes ZEISS Optotechnik from the marquee"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
