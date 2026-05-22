#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(narrative): expand founder 'Building WildTech' section with multi-part origin stories (Spirits, EZ Fuse, Churchd legal-pad-to-domain story, Steven Archibald partnership, civic literacy). Add 'What we believe / How we build' section to About page with 4 extracted principles: real problems first, owner-operated end to end, self-funded, built to last"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
