#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(seo): rank for 'Will McCants Charleston' - upgraded founder page to ProfilePage + comprehensive Person schema with disambiguating description, hasOccupation, expanded sameAs, FAQPage JSON-LD answering 'who/where/what' questions about Will McCants, LocalBusiness + ProfessionalService schema on home with serviceArea/openingHours/priceRange, WebSite + SearchAction in layout for sitelinks search box, new /press media kit page with bios+headshots+fact sheet, added Founder to navbar, 8 new redirects for name variants (/will, /willmccants, /william-mccants, etc.), 2 new Will McCants + Charleston bylined journal posts, sitemap + footer updates."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
