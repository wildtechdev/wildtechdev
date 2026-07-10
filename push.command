#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal): add apex record troubleshooting to the redirect guide after reader feedback, add four new small business posts including the twenty dollar website setup with Namecheap discount code tips, add markdown link support to the prose renderer, and cross-link all thirteen posts with 26 in-content references"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
