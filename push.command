#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(contact): send branded confirmation email to submitter (in addition to inquiry notification to info@), email-safe light template with WildTech wordmark, green accent, Georgia serif fallback"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
