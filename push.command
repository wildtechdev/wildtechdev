#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(dates+bio): pilot certificate section now reflects actual 09/19/2012 VFR SEL date and the considered-aviation-then-chose-MSI story. Case study dates reconciled to founder bio: Viking Sensors corrected from '2023 to present' to '2026 to present' (co-founded with Steven Archibald in 2026), Churchd expanded to '2024 to present' to span legal-pad-to-active-dev. Spirits of Savannah text 'a year after' changed to 'later that same year' to match bio. Press page milestones expanded with pilot cert date, MSI tenure markers, Churchd legal-pad-to-domain arc, and Viking Sensors co-founder credit."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
