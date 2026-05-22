#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock

# Clean up stale duplicate (the optimized copy that was merged into the original)
rm -f public/william-industrial-opt.jpg

git add -A
git commit -m "fix(assets): restore headshot.jpg that was incorrectly deleted in previous push"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
