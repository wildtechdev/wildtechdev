#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(theme): add light mode with ThemeProvider, sun/moon toggle in navbar, no-flash inline script, calibrated light palette via [data-theme=light] CSS variable overrides, and bulk replacement of hardcoded hex colors with semantic Tailwind tokens (bg-surface, bg-card, text-heading, border-border, etc.) so the entire site switches themes automatically while keeping brand green and OG images dark-only"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
