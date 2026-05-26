#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal): new post 'Make your Google Sites work without www (the naked domain fix, free)' targeting high-frequency Reddit search queries from people who don't know the term 'naked domain.' Walks through Cloudflare and redirect.pizza step by step. Optimized for the actual search phrasings people type."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
