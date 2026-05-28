#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "polish(type): bump smallest text sizes for readability - text-[10px] (45 instances) becomes text-[11.5px], text-[11px] (3 instances) becomes text-[12px], affects section labels, badges, footer fine print, breadcrumbs, and metadata chips across 22 files - preserves the tracked-uppercase aesthetic while making the long tracked labels actually readable"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
