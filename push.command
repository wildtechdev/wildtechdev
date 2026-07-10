#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(site): journal expansion, second improvement pass, and full claims audit per CLAIMS_AUDIT.md, corrects Savannah release year to 2025 and EZ Fuse to fall 2024, fixes rating counts against live App Store data, restores the missing app privacy policy pages Apple has registered, untangles the WTP origin story, trims the marquee to corroborated technologies, fixes navbar bleed-through, and adds the second pass features from homepage journal section to full content RSS"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
