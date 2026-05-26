#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock .git/HEAD.lock .git/ORIG_HEAD.lock
git add -A
git commit -m "feat(journal): 3 new long-form posts that target high-frequency search queries while establishing technical authority: 'What is a naked domain' (terminology explainer + companion to Google Sites post), 'How to set up free email forwarding on your custom domain (3 services compared)' (ImprovMX/Cloudflare/Namecheap walkthrough), 'Why your business email keeps going to spam (a diagnostic checklist)' (SPF/DKIM/DMARC priority-ordered diagnostic)."
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
osascript -e 'tell application "Terminal" to close front window' &
