#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(journal): sort posts by date so the journal always lists newest first; the exported posts array now sorts itself by date, which fixes the google-sites post showing out of order, and updates PROJECT_LOG to note order is handled automatically"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
