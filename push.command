#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(site): modernization pass per AUDIT.md plus journal updates, adds apex record troubleshooting to the redirect pizza guide after real reader feedback, and three new small business posts on website speed, local SEO, and builder vs custom sites"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
