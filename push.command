#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(newsletter): /api/subscribe now actually does something - sends a branded welcome email to the subscriber and a notification to info@ for each new signup, with best-effort Resend Audience add if RESEND_AUDIENCE_ID is configured. Previous version silently logged and returned ok which is why subscribers got no email and nothing showed up in Resend."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
