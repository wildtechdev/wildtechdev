#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(case-studies): add PhoneMockup screenshot to each /work/[slug] case study header in a side-by-side hero layout (text left, phone right on desktop, stacked on mobile). Added mockup field to CaseStudy type and set it per product. Widened header wrapper to max-w-5xl for the side-by-side, kept prose body + bottom sections at max-w-3xl for readability."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
