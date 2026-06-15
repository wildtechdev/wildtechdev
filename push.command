#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal,docs): spread the 9 journal post dates evenly over the past 6 months (Dec 15 2025 through Jun 8 2026, every ~22 days) in chronological order foundational stories first then technical how-tos, plus add PROJECT_LOG.md at the repo root as a continuity doc for resuming work in a fresh Cowork session (stack, hard rules, architecture notes, recent work, pending items, key files, deploy workflow) - bundles up the earlier queued private-client wording, press timeline trim, Porter-Gaud to Trident swap, deadline drop, and home card 3D click-through fix"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
