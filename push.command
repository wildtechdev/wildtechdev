#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(dates+bio): EZ Fuse Tester ship date corrected from 2023 to mid 2024 across case study, journal post, press milestones, founder bio (Halloween 2023 was the idea, App Store launch was mid 2024). Pilot cert language simplified back to 'FAA Private Pilot Certificate' per founder preference."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
