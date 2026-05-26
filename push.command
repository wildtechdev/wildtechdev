#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(seo): add BreadcrumbList JSON-LD to About, Products, Services, Founder, and Contact pages (qualifies pages for breadcrumb rich snippets in Google SERPs)"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
