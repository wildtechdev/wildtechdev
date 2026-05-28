#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(theme): switch @theme inline to plain @theme so Tailwind utilities reference var(--color-*) instead of baking static hex values - this is what makes the [data-theme=light] runtime override actually propagate to compiled utility classes like text-heading, bg-surface, border-border etc"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
