#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(seo): expand /will-mccants page with full bio (Mount Pleasant roots, MSI-Viking career, Viking Sensors co-founding, family, faith) and enrich Person schema with birthPlace, alumniOf, spouse, memberOf, hasCredential"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
