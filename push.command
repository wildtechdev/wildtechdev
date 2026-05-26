#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal): journal post byline now shows cropped circular headshot and links the whole row (photo + name + title) to /will-mccants founder page, with hover glow and 'Read more' affordance"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
