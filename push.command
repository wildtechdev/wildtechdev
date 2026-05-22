#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "ux(founder): reflow bio with float-left photo/facts (text wraps then expands), bump container 4xl->5xl. Fix Viking Sensors brand links across site: vikingsensors.com for the hardware company everywhere, vikingsense.com kept only in prose where the software domain is explicitly named"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
