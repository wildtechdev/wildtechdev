#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal): add the twenty dollar website post, a complete beginner setup guide covering Google Sites, a Namecheap domain, the free naked domain redirect, Namecheap Private Email, sitemap and Search Console, tying together the existing DNS and email guides"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
