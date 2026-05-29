#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(seo): remove /privacy/we-the-people-your-rights from sitemap.xml - the page has robots:{index:false,follow:false} for App Store compliance, so listing it in the sitemap was sending Google contradictory signals (asking it to index a page we'd told it not to) - cleaner crawl budget, removes one entry from Search Console's discovered-not-indexed bucket"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
