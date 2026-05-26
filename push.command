#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(journal): detune two journal posts that competed with /will-mccants for name queries - removed 'Will McCants' from titles, moved to bottom of feed with older dates, dropped name-bait tag. Also removed Founder link from primary navbar (kept in footer + Cmd-K). Added redirect for renamed slug."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
