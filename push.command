#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(design): wave 2 polish: refined About ecosystem hover, founder page section accents and photo treatment, Products status pills and accent glows, Services rebuilt with stronger hierarchy, Contact form corner accents, more dramatic 404, App Store badge refinement"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
