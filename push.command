#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "fix(seo): switch all canonical URLs, sitemap baseUrl, robots sitemap, JSON-LD URLs, and OG URLs from wildtechdev.com to www.wildtechdev.com (matches Vercel serving setup, eliminates Search Console redirect/duplicate issues). Add /home, /founder, /william-mccants redirects in next.config so old links and the 404 in Search Console resolve"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
