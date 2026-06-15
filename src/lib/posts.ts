// Blog posts for /journal. Posts are sorted by date (newest first) when
// exported, so the order you add them in here does not matter.
// Content uses a tiny markdown-ish format:
//   - Paragraphs separated by blank lines.
//   - Lines starting with "## " become h2 section headings.
//   - Lines starting with "### " become h3 sub-headings.
//   - Lines starting with "- " become list items in a ul.
//   - Lines wrapped in `backticks` get rendered as inline code.
//   - Triple-backtick fenced blocks become preformatted code blocks.
// Keep paragraphs in plain prose (no em dashes, no -- substitutes).

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date string
  readMinutes: number;
  tags: string[];
  content: string;
};

const allPosts: Post[] = [
  {
    slug: "what-is-a-naked-domain",
    title:
      "What is a 'naked domain'? (the terminology fix for a confusing problem)",
    summary:
      "Plain-English explainer for the term you didn't know you needed when your website only works with www but not without. What a naked domain is, why your hosting provider can't fix it, and what your real options are.",
    date: "2026-05-17",
    readMinutes: 5,
    tags: ["DNS", "Web", "Tutorial"],
    content: `If you have ever spent an hour Googling things like "why doesn't my website work without www" or "how do I make example.com load without typing www first," you have run into a problem that is easy to fix once you know the term for it but almost impossible to find a solution to if you don't. The term is **naked domain**.

This is a short, plain-English explainer of what a naked domain is, why so many web hosting providers cannot make it work out of the box, and what your real options are.

## What a naked domain actually is

A naked domain is your domain name without any subdomain in front of it. So:

- \`example.com\` is a naked domain
- \`www.example.com\` is NOT a naked domain (the "www" part is a subdomain)
- \`blog.example.com\` is NOT a naked domain
- \`mail.example.com\` is NOT a naked domain

The technical name for the same thing is **apex domain** or **root domain**. Different writers use different terms. They all mean the same thing: your domain with nothing in front of it.

You might also see it called the bare domain, the zone apex, or just "the root." The term you will see most often in DNS documentation is "apex." The term you will see most often in web hosting documentation is "naked." Same concept.

## Why this is a problem

Most modern web hosting platforms (Google Sites, Wix, Webflow, Notion, Carrd, Squarespace, Vercel, Netlify, and dozens of others) ask you to set up your custom domain using a DNS record type called a **CNAME**. A CNAME basically says "this subdomain is an alias for that other server."

The catch: CNAME records are not allowed on the apex (naked) domain by the DNS specification itself. This is not a Google Sites limitation or a Wix limitation. It is a fundamental rule of how DNS works. You can put a CNAME on \`www.example.com\` all day long, but you cannot put a CNAME on \`example.com\`.

The reason for this rule is technical. The apex has to have certain other records (like SOA and NS) that would conflict with how CNAMEs work. The DNS standard was written this way decades ago and has not changed.

So when your hosting provider tells you "set up a CNAME pointing to our server," they actually mean "set up a CNAME for your www subdomain pointing to our server." If you only set up the www subdomain, then typing \`example.com\` (without the www) will not work because there is no DNS record telling browsers where to send that traffic.

This is why so many DIY website builders only work with \`www.example.com\` and not \`example.com\`.

## What the fix looks like

The fix is to set up an HTTP redirect from the naked domain to the www subdomain. When someone types \`example.com\`, they get redirected to \`https://www.example.com\` automatically and invisibly. The user sees your site. The address bar updates to show the www version. Nobody notices.

There are three common ways to set this up:

1. **Use a redirect service**. Cloudflare and redirect.pizza both do this for free. Cloudflare requires you to move your DNS to them. redirect.pizza just needs you to change one DNS record. We wrote a step-by-step guide for Google Sites users that walks through both, and the same steps work for any other CNAME-only platform by changing the CNAME target.

2. **Use a hosting provider that natively supports apex domains**. Some providers (Vercel, Netlify, and a few others) have technical workarounds called ALIAS or ANAME records that simulate a CNAME on the apex. If your hosting provider supports this, just use the feature they built for it.

3. **Run your own server with an A record on the apex**. This is the old way. It works but it costs more and requires more maintenance than the redirect approach.

For 95% of small business websites and DIY site owners on Google Sites, Wix, Webflow, Squarespace, Notion, Carrd, Substack, Beehiiv, or any other CNAME-only platform, option 1 (the free redirect service) is the right answer.

## A few common misconceptions

**"My web hosting must be broken."** No. The CNAME limitation is in the DNS standard, not in your hosting provider's code. The hosting provider cannot change DNS.

**"I should just buy a different domain."** Doesn't help. The same limitation applies to every domain. The fix is the redirect, regardless of where you bought the domain.

**"Maybe I need to upgrade to a paid plan."** Almost never. The redirect fix is free with Cloudflare or redirect.pizza. Paid hosting plans rarely solve this directly.

**"Can I just tell users to type www?"** You can, but they won't. People type the domain name they remember, which is almost always the naked version. You will lose visitors who tried example.com, got an error, and gave up.

## Why this term is so hard to find

The reason most people get stuck on this problem is that the user-facing language ("my domain doesn't work") and the technical language ("apex CNAME limitation") do not share any words. Search engines cannot bridge that gap on their own. You have to learn the term first to find the answer.

That is the entire reason this post exists. If you got here from a search and now know the term, you have what you need to find the rest of the fix. Search for "naked domain redirect" or "apex domain redirect to www" and you will find dozens of step-by-step guides, including the one on this site.`,
  },
  {
    slug: "free-email-forwarding-custom-domain",
    title:
      "How to set up free email forwarding on your custom domain (3 services compared)",
    summary:
      "Three good free email forwarding services compared: ImprovMX, Cloudflare Email Routing, and Namecheap Private Email forwarding. What each is good for, the trade-offs, and how to set each one up.",
    date: "2026-04-25",
    readMinutes: 9,
    tags: ["Email", "DNS", "Tutorial", "Small Business"],
    content: `If you have a custom domain and you want emails to addresses like \`hello@yourdomain.com\` to forward to your regular Gmail or iCloud inbox, you have three good free options and a few mediocre ones. This post compares the three good ones and explains how to set each one up.

Most people who buy a domain assume that email forwarding is included automatically. It usually is not. The domain registrar gives you the domain. Email forwarding is a separate service. You can set it up for free using any of the options below, but you have to choose one and configure it.

## The three free options worth using

**ImprovMX** is a dedicated email forwarding service. The free plan covers one domain with unlimited aliases. Setup is two DNS records (MX and TXT) and a 30-second account creation. ImprovMX has been around since 2016 and has a strong track record for reliability.

**Cloudflare Email Routing** is Cloudflare's free email forwarding feature, available to anyone running their domain's DNS through Cloudflare. Unlimited aliases, no domain limit, but you have to be using Cloudflare for DNS. Released in 2021 and matured significantly since.

**Namecheap Private Email forwarding** is the free email forwarding bundled with any Namecheap-registered domain. Up to 100 email aliases per domain. Works through Namecheap's own DNS or any DNS provider where you can set the right MX records. Not to be confused with Namecheap's paid Private Email mailbox product (which is also good but costs money).

## Quick comparison

If you run your DNS through Cloudflare already, **use Cloudflare Email Routing**. Zero setup beyond the Cloudflare dashboard. Easy to add aliases. Works well.

If your domain is registered through Namecheap and you want the simplest possible path, **use Namecheap's free forwarding**. It is right there in your Namecheap dashboard. No third-party account needed.

If neither of those apply, or you want a dedicated forwarding service that does one thing well, **use ImprovMX**. The 30-second setup is genuinely 30 seconds and they have a free webhook for received messages if you ever want to build something on top.

All three are reliable. All three are free for normal small-business use. The choice mostly depends on what you are already using.

## Option 1: ImprovMX

### Step 1: Sign up

Go to improvmx.com and create a free account. You will sign in with the email address you want forwarding to go to.

### Step 2: Add your domain

In the dashboard, click "Add a domain." Enter your domain. ImprovMX will show you the two DNS records you need to add.

### Step 3: Add the DNS records

Go to your DNS provider (Cloudflare, Namecheap, GoDaddy, Squarespace, etc.) and add:

- **MX record**: Host \`@\` (or your apex domain), priority 10, value \`mx1.improvmx.com\`
- **MX record**: Host \`@\`, priority 20, value \`mx2.improvmx.com\`
- **TXT record**: Host \`@\`, value \`v=spf1 include:spf.improvmx.com ~all\` (SPF for deliverability)

If you already have an SPF TXT record, merge ImprovMX's include into it instead of adding a second TXT record.

### Step 4: Create aliases

Back in the ImprovMX dashboard, add aliases. For example: \`hello@yourdomain.com\` → \`yourname@gmail.com\`. You can have unlimited aliases on the free plan.

### Step 5: Test

Wait a few minutes for DNS to propagate, then send a test email from another account to your new alias. It should land in your Gmail or wherever you set up forwarding to.

## Option 2: Cloudflare Email Routing

This requires your domain's DNS to be managed by Cloudflare. If it is not, you would need to change your nameservers at your registrar to point at Cloudflare first (which is a 10-minute one-time task and unlocks a lot of other free features).

### Step 1: Open Cloudflare Email Routing

In the Cloudflare dashboard, select your domain. In the left sidebar, click "Email" then "Email Routing."

### Step 2: Enable Email Routing

Click "Get started" or "Enable Email Routing." Cloudflare will offer to add the required DNS records (MX and TXT for SPF) for you. Accept the offer.

### Step 3: Verify your destination address

Cloudflare will email the address you want forwarding to go to. Click the verification link in that email.

### Step 4: Add routing rules

Add a custom address rule. Example: \`hello\` → \`yourname@gmail.com\` (this catches \`hello@yourdomain.com\` and forwards it). Add as many as you need.

Optionally, set up a catch-all rule so any address at your domain (\`whatever@yourdomain.com\`) routes to your inbox. Useful for branded sign-ups (\`netflix@yourdomain.com\`, \`linkedin@yourdomain.com\`) without creating each alias individually.

### Step 5: Test

Send a test email from another account. It should arrive in your destination inbox within seconds.

## Option 3: Namecheap Private Email forwarding (free tier)

This is built into any Namecheap-registered domain. You do not need to buy a separate product.

### Step 1: Make sure Mail Settings is set to "Email Forwarding"

In the Namecheap dashboard, go to your domain's Advanced DNS page. Find the **Mail Settings** section. Set it to "Email Forwarding" (not "Custom MX" or "Private Email").

Namecheap will automatically populate the MX records required for their email forwarding service.

### Step 2: Add forwarding addresses

Scroll down to the "Redirect Email" section. Enter the alias (left side) and the destination address (right side). For example: \`hello\` → \`yourname@gmail.com\`. Save.

You can add up to 100 of these per domain on the free plan.

### Step 3: Test

Send a test email. Should arrive within a minute.

## What about sending FROM the custom address?

All three of these services handle the receiving side of email forwarding. None of them handle the SENDING side. If you reply to a forwarded email from Gmail, the reply will go out from your Gmail address, not from \`hello@yourdomain.com\`.

If you want replies to look like they came from your custom address, you need to also configure Gmail (or your mail client) to send AS that address. The setup involves SMTP credentials, which the three forwarding services above do not provide for free. For sending-as, you would need:

- A paid Google Workspace plan (the easiest)
- An SMTP relay service like Resend, Postmark, SendGrid, or Mailgun (free tiers available but require some setup)
- A paid email mailbox service like Namecheap Private Email or Fastmail

For a small business that just wants to receive at a professional-looking address and reply from their normal inbox, free forwarding alone is fine. Most people will not notice that your replies are coming from a different address than the one they wrote to.

## Common mistakes to avoid

**Setting up two services at once.** Each of these services needs its own MX records. If you have ImprovMX MX records AND Cloudflare Email Routing MX records on the same domain at the same time, you will get duplicate emails, lost emails, or both. Pick one.

**Forgetting the SPF record.** SPF (the TXT record) is what tells receiving mail servers that the forwarding service is allowed to send on behalf of your domain. Without it, forwarded emails often land in spam. All three setups above include an SPF record. Use it.

**Trying to forward at the apex AND a subdomain.** Email forwarding configured on \`yourdomain.com\` does not automatically apply to \`mail.yourdomain.com\` or \`hello.yourdomain.com\`. Each domain or subdomain needs its own setup.

**Using forwarding for high-volume mail.** If you are running a newsletter or sending hundreds of emails per day, forwarding is not the right tool. You need a real mail service. Forwarding is for personal and small-business incoming mail.

## Summary

For most small-business and personal use cases, free email forwarding is enough. Pick the service that matches your existing setup: Cloudflare if your DNS is there, Namecheap if your domain is registered there, ImprovMX if neither of those is true or if you want a dedicated tool. All three are free, all three are reliable, and all three take less than 10 minutes to configure.`,
  },
  {
    slug: "why-business-email-goes-to-spam",
    title:
      "Why your business email keeps going to spam (a diagnostic checklist)",
    summary:
      "If emails from your custom domain keep landing in customers' spam folders, the cause is almost always one of six things. Here is the diagnostic checklist we use to find and fix it.",
    date: "2026-04-03",
    readMinutes: 10,
    tags: ["Email", "DNS", "Deliverability", "Small Business"],
    content: `If you have a custom domain and emails from your business address keep landing in customers' spam folders, the cause is almost always one of six things. None of them are random and all of them are fixable. This is the diagnostic checklist we use when clients ask us why their email isn't getting through.

This post is written for small business owners and solo founders who are sending real email (sales follow-ups, customer support, contact form auto-replies) and finding it in spam more often than they should. It is not for people running mass marketing campaigns to cold lists, which is a different problem with different solutions.

## The six things to check, in priority order

1. SPF record
2. DKIM record
3. DMARC record
4. Sender domain age and reputation
5. Subject line and body content
6. List-Unsubscribe headers

Most deliverability problems are one of the first three. The last three matter but are usually fine for legitimate small-business senders.

## 1. SPF record

SPF (Sender Policy Framework) is a DNS TXT record on your domain that tells receiving mail servers which services are allowed to send email from your domain. If your SPF record is missing, broken, or doesn't include the service you actually send through, your mail will land in spam.

### How to check

Use any free SPF lookup tool. Search "SPF record check" and you will find several. Enter your domain. The tool will show you what SPF record exists.

You are looking for:

- A single TXT record at the apex of your domain (\`yourdomain.com\`, host \`@\`)
- The record starts with \`v=spf1\`
- It includes every service that sends mail on your behalf
- It ends with \`~all\` (soft fail) or \`-all\` (hard fail)

### What it should look like

If you send through Google Workspace AND a transactional service like Resend, your record should look like:

\`v=spf1 include:_spf.google.com include:send.resend.com ~all\`

If you send through Namecheap Private Email AND Resend:

\`v=spf1 include:privateemail.com include:send.resend.com ~all\`

The key is that EVERY service sending mail under your name has to be in this record. If you have multiple, combine them into one record. You cannot have two SPF records on the same domain. Some DNS providers will let you add two, but receiving mail servers will reject one or both.

### Common mistakes

- Two separate SPF records. Combine them.
- Forgetting to include a new service after switching providers.
- Including \`-all\` (hard fail) before your setup is stable. Use \`~all\` first, switch to \`-all\` after a month of clean sending.

## 2. DKIM record

DKIM (DomainKeys Identified Mail) is a cryptographic signature that proves an email actually came from your domain and was not modified in transit. Without DKIM, modern mail servers (Gmail, Outlook, Yahoo) significantly downgrade your deliverability.

### How to check

Send yourself a test email. Open it in Gmail. Click the three-dot menu, then "Show original." Look for a section that includes \`DKIM:\` followed by either \`PASS\` (good) or \`FAIL\` (broken) or nothing (missing).

### How to fix

Your email sending service (Google Workspace, Resend, Namecheap Private Email, SendGrid, etc.) provides a DKIM TXT record for you to add to your DNS. It looks something like:

\`p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQ...\` (a long base64 string)

The host name depends on the service. Common patterns:

- Google Workspace: \`google._domainkey\`
- Resend: \`resend._domainkey\`
- Namecheap Private Email: \`default._domainkey\`
- SendGrid: \`s1._domainkey\` and \`s2._domainkey\`

Add the record exactly as the service tells you. After DNS propagates (a few minutes), DKIM should start passing on new emails.

### Common mistakes

- Copying the DKIM value with extra whitespace or line breaks. Most DNS providers handle this gracefully, but not all.
- Setting up DKIM for one service when you also send through another. Each service needs its own DKIM record at its own subdomain name.

## 3. DMARC record

DMARC (Domain-based Message Authentication, Reporting & Conformance) ties SPF and DKIM together and tells receiving mail servers what to do when one or both fail. Modern Gmail and Yahoo policy (as of 2024) effectively require a DMARC record for bulk senders.

### How to check

Look up \`_dmarc.yourdomain.com\` as a TXT record. If nothing comes back, you have no DMARC. If something comes back, look at its policy (\`p=none\`, \`p=quarantine\`, or \`p=reject\`).

### What it should look like

A reasonable starting DMARC record:

\`v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com\`

The \`p=none\` policy means "monitor only, don't actually quarantine or reject mail." This is the right starting point because it lets you collect data on who is sending mail as your domain before you tighten policy.

After a few weeks of monitoring, if the SPF and DKIM are passing cleanly, tighten to:

\`v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@yourdomain.com; pct=100\`

\`p=quarantine\` means "if SPF or DKIM fails, send to spam." This signals to receiving mail servers that you take email security seriously, which in practice improves inbox placement for your legitimate mail.

Eventually you can tighten further to \`p=reject\`, which means "if SPF or DKIM fails, throw it away entirely."

### Why this matters more than people think

A DMARC record set to \`p=quarantine\` or stricter sends a strong positive signal to receiving mail servers about your domain's deliverability seriousness. Domains with no DMARC or with \`p=none\` are treated as less trustworthy by default. Setting up DMARC at quarantine level is one of the highest-leverage things you can do for deliverability.

## 4. Sender domain age and reputation

If your domain is brand new (less than a few months old) or you have just started sending email from it, expect higher spam folder rates for the first 2-4 weeks regardless of how perfect your DNS is. Receiving mail servers track domain age and sending history. New domains are treated with suspicion because spammers churn through new domains constantly.

There is no magic fix for this. It improves on its own as you send more legitimate mail and recipients mark your messages as Not Spam.

What you can do:

- Send less volume early on. Don't blast a 5000-person newsletter from a one-week-old domain. Start small.
- Personally ask early recipients to mark your emails as Not Spam if they land there.
- Keep sending consistently. Patterns of intermittent sending look more suspicious than steady volume.

## 5. Subject line and body content

Once your authentication is correct and your domain has some age, content matters less than people think. But it still matters. A few things to avoid:

- ALL CAPS SUBJECT LINES
- Excessive exclamation points
- Subject lines that read like ads ("Save 50% TODAY!!!")
- Lots of images with very little text
- Single image emails with no text at all
- Shortened links (bit.ly, etc.)
- Phrases that show up in spam datasets: "FREE", "Act now", "Click here," "Limited time"

For a small business sending real correspondence to real people, this is rarely a problem. You write like a person. Your subject lines are normal. You are fine.

If you are sending transactional email (order confirmations, password resets, contact form replies), make the subject line specifically descriptive: "Your order from Acme Corp" not "Important: please read."

## 6. List-Unsubscribe headers

If you send any kind of bulk mail (newsletter, marketing, even high-volume transactional), the \`List-Unsubscribe\` header is now effectively required by Gmail and Yahoo's 2024 bulk sender rules. Even one-click unsubscribe is part of the requirement.

If your email service is modern (Resend, Postmark, Mailgun, SendGrid), it handles this automatically. If you are rolling your own SMTP, you need to add these headers manually:

\`List-Unsubscribe: <mailto:unsubscribe@yourdomain.com>, <https://yourdomain.com/unsubscribe?id=xyz>\`

\`List-Unsubscribe-Post: List-Unsubscribe=One-Click\`

For pure personal or small-business correspondence (one-to-one emails, support replies), these headers are not required. They are for bulk mail.

## The diagnostic order

If your email is landing in spam:

1. Look up your SPF record. Fix it if missing or broken.
2. Send a test, look at the headers. Confirm DKIM is passing.
3. Look up your DMARC record. Add one at \`p=none\` if missing.
4. Wait a week and observe. If still landing in spam after fixing 1-3, look at content.
5. If your domain is new, give it time. 2-4 weeks of clean sending usually fixes it.
6. If you send bulk, confirm List-Unsubscribe headers are present.

In our experience working on email setups for clients, fixing SPF + DKIM + DMARC solves around 80% of deliverability issues immediately. Most of the rest is time and reputation, not configuration.

## When to call for help

If you have fixed all six things on this checklist and your mail is still landing in spam consistently, your domain may have been previously used by a spammer, your IP block (if you run your own server) may have a bad reputation, or your specific recipients may have aggressive personal spam filters.

Tools like mail-tester.com will give you a 0-10 score for any test email you send to them. If you score above 9/10 and your mail still lands in spam at specific recipients, the problem is on their end, not yours.

If you want a second set of eyes on your setup, we are happy to take a look. Contact us at the form on this site.`,
  },
  {
    slug: "google-sites-naked-domain-redirect",
    title:
      "Make your Google Sites work without www (the naked domain fix, free)",
    summary:
      "If your Google Sites custom domain works at www.example.com but not example.com, the term you need to know is 'naked domain.' Here are two free, step-by-step fixes using Cloudflare and redirect.pizza.",
    date: "2026-06-08",
    readMinutes: 8,
    tags: ["Google Sites", "DNS", "Cloudflare", "Tutorial"],
    content: `If you set up a custom domain on Google Sites and your site only loads when people type the full www.example.com, while example.com on its own throws an error or a "this site can't be reached" message, you have just run into one of the most common and least-well-explained problems in DIY web hosting. There is a term for it that almost nobody tells you when you Google "google sites no www," "google sites root domain not loading," or "how do I make google sites work without www," which is part of why it's so hard to find a solution.

The term is **naked domain**. It is also called the **apex domain** or the **root domain**. Once you know the term, the rest of this is fixable in about fifteen minutes for free.

This is a quick guide for Google Sites owners who are stuck on this exact problem, written in the words people actually type into Google rather than the jargon DNS administrators use to discuss it with each other.

## Why example.com does not work but www.example.com does

Google Sites supports custom domains, but only through what is called a **CNAME record**, which is a kind of DNS entry that says "this subdomain is an alias for some other server." Google asks you to point your CNAME at \`ghs.googlehosted.com\`.

The catch is that CNAME records are not allowed on the apex domain by the DNS specification itself. Almost every domain registrar and DNS provider will refuse to put a CNAME on \`example.com\` because doing so would conflict with other required records that have to live at the apex. They can put a CNAME on \`www.example.com\` (the www subdomain) all day long, but not on the bare domain.

This is the actual technical reason your Google Sites address only works with www. It is not a bug, not a permissions problem, and not something you did wrong. It is a fundamental limitation of how Google Sites does custom domains combined with how the DNS standard handles records at the apex.

The fix is not to make a CNAME work on the apex. The fix is to set up an HTTP redirect, so that when someone types example.com, they get bounced to www.example.com instantly and invisibly. The address bar updates to show www but the page they see is the same Google Sites page.

## The two free options

There are several paid services that do this redirect for you, but two of them are completely free and easy enough that you do not need to be technical to set them up.

The first is **Cloudflare**, the popular free DNS and CDN provider. Cloudflare handles the redirect with something called a Page Rule or Redirect Rule, both of which are available on the free plan.

The second is **redirect.pizza**, a small purpose-built service whose only job is to handle exactly this kind of apex-to-www redirect. Their free tier covers a single domain, which is exactly what you need.

Both work fine. The decision mostly depends on whether you want to move your DNS to a new provider. If you are open to running your DNS through Cloudflare for everything, Cloudflare is the better long-term answer because you get a lot of other features for free along with the redirect. If you just want to fix this one specific problem and you do not want to change your DNS host, redirect.pizza is faster.

## Option 1: Cloudflare (free)

The big shift here is that you change your domain's **nameservers** at your registrar (GoDaddy, Namecheap, Squarespace, Google Workspace registrar, etc.) to point at Cloudflare's nameservers. Cloudflare then becomes your DNS host. You re-add your existing records on the Cloudflare side, and you set up the apex redirect there.

Here is the full sequence.

### Step 1: Sign up for Cloudflare

Go to cloudflare.com, click Sign Up, create a free account. No credit card required.

### Step 2: Add your domain

Click "Add a Site" and enter your domain name (just \`example.com\`, without https or www). Cloudflare will scan your existing DNS records. Pick the Free plan when prompted.

### Step 3: Verify your existing records came over

Cloudflare shows you the records it imported from your current DNS. You should see a CNAME for \`www\` pointing to \`ghs.googlehosted.com\` (or whatever Google asked you to use). If it's missing, add it now: type CNAME, name www, target \`ghs.googlehosted.com\`, proxy status DNS only (gray cloud icon, not orange).

### Step 4: Add an A record for the apex

You need an A record on the apex (\`@\` or \`example.com\`) so Cloudflare can intercept traffic and redirect it. Cloudflare's own documentation suggests pointing this A record at a dummy IP like \`192.0.2.1\`. Traffic never actually reaches that IP because the redirect happens at Cloudflare's edge before anything gets forwarded.

Add an A record: type A, name \`@\`, content \`192.0.2.1\`, proxy status **Proxied** (orange cloud icon). This part is critical. The proxy must be ON for Cloudflare to be able to intercept and redirect.

### Step 5: Change your nameservers at your registrar

Cloudflare gives you two nameservers that look like \`alice.ns.cloudflare.com\` and \`bob.ns.cloudflare.com\`. Go to your registrar (the company where you bought the domain) and change the nameservers from whatever they are now to these two Cloudflare values.

This change can take anywhere from a few minutes to 24 hours to propagate. Cloudflare will email you when activation completes.

### Step 6: Set up the redirect rule

Once Cloudflare is active, go to your domain's dashboard. In the left sidebar, click **Rules**, then **Redirect Rules** (or **Page Rules** on older accounts, both work the same). Create a new rule:

- **When incoming requests match**: URL contains \`example.com/\`
- **Then take action**: Static URL redirect
- **Type**: 301 (permanent)
- **URL**: \`https://www.example.com/$1\`
- **Preserve query string**: yes

Save. Open a new private browser window and type \`example.com\` (without www). It should redirect to \`www.example.com\` and load your Google Sites page. You are done.

## Option 2: redirect.pizza (free)

If you do not want to move your DNS to Cloudflare, redirect.pizza does this single job and nothing else.

### Step 1: Sign up

Go to redirect.pizza and create a free account.

### Step 2: Create a redirect

Click "Add a redirect" or similar. Set the source to \`example.com\` and the destination to \`https://www.example.com\`. Choose type 301 (permanent). Save.

### Step 3: Point your DNS at redirect.pizza

redirect.pizza gives you one or two IP addresses to point your apex domain at. Go to your current DNS provider (wherever you bought the domain) and add an A record for the apex pointing at that IP. If you have an existing A record on the apex pointing somewhere else, replace it.

### Step 4: Test

After DNS propagates (a few minutes to an hour), open a private browser window and type \`example.com\`. It should redirect to \`www.example.com\` and load your Google Sites page.

You do not change nameservers. You do not move your DNS. You add one A record and you are done.

## What about other services that have this same problem?

The exact same problem and solution apply to any web hosting service that requires you to use a CNAME for your custom domain, which is most modern hosting platforms. Wix, Webflow, Notion sites, Carrd, some Squarespace setups, Substack, Beehiiv, and many others have the same naked domain limitation. The fix is the same: set up an apex-to-www redirect using Cloudflare or redirect.pizza or a similar service.

## A few things worth knowing

After this is set up, search engines will eventually treat \`www.example.com\` as the canonical version of your site. That is fine. Search engines understand 301 redirects perfectly well. Make sure your Google Sites custom domain setting and your Google Search Console verification both use the www version going forward.

If you have email forwarding set up on your domain (like \`you@example.com\`), that is handled by MX records, which are completely separate from this fix. Setting up the apex redirect does not break your email.

If you bought your domain through Google Domains and were migrated to Squarespace as part of that transition, the same logic applies. You can still use Cloudflare or redirect.pizza on top of a Squarespace-managed registration without any issue.

## If you got here from a search result

The reason this post exists is that there are dozens of unanswered Reddit threads from people who are stuck on this exact problem and don't know the terminology to find a solution. If this saved you an evening, share it with the next person who asks the question.`,
  },
  {
    slug: "resend-namecheap-private-email-setup",
    title:
      "Set up Resend transactional email on a Namecheap domain that already uses Private Email",
    summary:
      "A complete walkthrough of getting Resend sending mail from your apex domain without breaking the inbox you already use for info@ and friends. Includes the DNS records that worked and the ones that did not.",
    date: "2026-03-12",
    readMinutes: 8,
    tags: ["Email", "DNS", "Resend", "Namecheap"],
    content: `If you bought your domain through Namecheap and turned on Private Email for the apex inbox, you already have working MX records for receiving mail at addresses like info@yourdomain.com or hello@yourdomain.com. Adding Resend on top so a contact form or transactional system can send mail from the same domain is one of those tasks where every tutorial assumes a different starting state, and the official documentation does not warn you about the conflict you are about to hit.

This is exactly what we walked through when wiring up wildtechdev.com, and the configuration that finally worked is the same configuration we use on vikingsense.com. If you are reading this because Resend says your domain is "Not Verified" and you do not want to lose the email you already have, this should save you an afternoon.

## The conflict you are about to hit

When you add a new sending domain in Resend, the setup wizard gives you four records to add. A DKIM TXT record at resend._domainkey, an SPF TXT record on a send subdomain, an MX record on the same send subdomain that points to feedback-smtp at amazonses.com, and an optional DMARC record. The wizard tells you to add an MX record. Namecheap's Advanced DNS panel only shows MX as a record type when Mail Settings is set to Custom MX. If your Mail Settings is currently set to Private Email, the MX type is hidden from the dropdown entirely.

If you switch Mail Settings to Custom MX without understanding what you are doing, Namecheap removes the Private Email MX records that were silently powering your inbox, and incoming mail to info@yourdomain.com stops arriving. You can break your existing email infrastructure in about thirty seconds.

The fix is to switch Mail Settings to Custom MX, then immediately re-add the Private Email MX records yourself, then add the Resend MX record on the send subdomain.

## The exact records that work

Here is the full DNS configuration we used to get Resend, Private Email, and a verified DKIM key all living on the same Namecheap domain. Translate yourdomain.com to your own apex name as you read.

### Host records (in the regular Advanced DNS section)

A record at @ pointing to whatever your hosting provider expects. For Vercel that is 216.198.79.1.

CNAME record at www pointing to whatever your hosting provider expects.

TXT record at @ for your SPF policy. The value should be:

\`v=spf1 include:send.resend.com include:privateemail.com ~all\`

This single line authorizes both Resend's sending IPs and Namecheap Private Email's sending IPs. If you only put include:amazonses.com here (which is what some Resend documentation suggests) you will break Private Email's ability to send mail. The include:send.resend.com is the modern equivalent and covers all of Resend's infrastructure.

TXT record at _dmarc with the value \`v=DMARC1; p=none;\` to start. You can tighten this to p=quarantine later once your domain has built reputation.

TXT record at resend._domainkey with the DKIM value Resend gives you. The value starts with p= followed by a long base64 string ending in QIDAQAB.

### Mail settings (in the separate Mail Settings section)

Switch Mail Settings from Private Email to Custom MX. Then add three MX records:

MX record at @ pointing to mx1.privateemail.com with priority 10.

MX record at @ pointing to mx2.privateemail.com with priority 10.

MX record at send pointing to feedback-smtp.us-east-1.amazonses.com with priority 10.

The first two preserve your inbound mail to info@ and any other address at the apex. The third gives Resend a return path for bounce handling.

## Why the apex SPF approach matters

There are two ways to make Resend happy with SPF. The wizard suggests putting v=spf1 include:amazonses.com ~all on a send subdomain. That works if you only ever want to send from addresses at send.yourdomain.com, which is not really what most people want. The apex approach in the configuration above lets you send from addresses like noreply@yourdomain.com or hello@yourdomain.com, which is what makes the email look professional in the recipient's inbox.

The trade off is that putting SPF at the apex means you need to include every provider that sends mail on your behalf. The example above includes both send.resend.com and privateemail.com because both of those services send outbound mail using your domain. If you also use a CRM or marketing tool that sends from your domain, you would add its include directive to the same record.

## Verification gotchas

Resend's verification check polls DNS until all the records resolve. Namecheap's TTL on a new record is usually a few minutes, but DNS caching outside Namecheap can add up to an hour. If the Resend dashboard still says Pending after twenty minutes, do not panic. Click Verify DNS Records once, walk away, and come back later.

Once verification flips to green, the DKIM and SPF status indicators should both show as verified. The MX status indicator may stay yellow or skip the check entirely depending on which version of the Resend dashboard you are on, because the bounce subdomain MX is not strictly required for sending.

## After verification

Create an API key in Resend scoped to Sending access. The key starts with re_ followed by a random string. Store it in your application's environment variables as RESEND_API_KEY.

If you are deploying through Vercel, add RESEND_API_KEY in Settings > Environment Variables for Production and Preview. Add a second variable for the from address. We use CONTACT_FROM_EMAIL with a value like WildTech Development <noreply@yourdomain.com>. Trigger a redeploy so the new environment variables are picked up by your serverless functions.

Test with a real submission through whatever form posts to your API route. If it shows as Delivered in the Resend Emails dashboard but does not arrive in your inbox, check your spam folder. Brand new sending domains land in spam for the first couple of weeks until the receiving mail providers build up reputation signals. This is normal and improves on its own as you send more legitimate mail.

## What to watch out for

Some Resend documentation pages still suggest the older send subdomain pattern. If you copy and paste those records into Namecheap without thinking, you will end up with an SPF record that only authorizes Amazon SES, and Private Email will stop being able to send replies. The fix is the one in this post. Use the apex include for both providers.

If you ever want to move away from Private Email later, the Mail Settings section is where you change it. Switching back from Custom MX to Private Email re-installs the default Namecheap MX records, but it does not undo your TXT records, so DKIM and SPF stay intact across that switch.`,
  },
  {
    slug: "real-cost-of-custom-ios-app",
    title: "What it actually costs to ship a custom iOS app in 2026",
    summary:
      "Honest numbers from a solo developer who has shipped multiple paid and free apps on the App Store. Includes Apple's fees, the realistic timeline, and what changes when you bring in a team.",
    date: "2026-02-18",
    readMinutes: 10,
    tags: ["iOS", "Pricing", "Founders"],
    content: `Every prospective client we talk to wants to know the same thing in the first email. How much is this going to cost. The answer is never the answer they want, which is a single number, but it is also not the dodge that most agency websites give. Here is the honest version, written from the perspective of a solo developer who has shipped multiple apps to the App Store and run the whole lifecycle from first conversation to first review.

The short version is that a serious custom iOS app in 2026 will run between fifteen thousand and one hundred fifty thousand dollars depending on scope, with most real-world projects landing somewhere in the middle. That range is so wide because two apps with the same one-sentence description can have wildly different actual scope once you start asking real questions.

## What you are actually paying for

When a developer quotes you a price for an iOS app, that number covers eight or nine distinct kinds of work that look invisible from the outside. Discovery and scoping conversations to figure out what you are actually trying to build. UI and UX design, either by the developer or a subcontracted designer. Setting up the Apple Developer account if you do not have one. Writing the Swift code itself, which is usually the longest single line item. Wiring up any backend services like authentication, file storage, payments, or push notifications. Testing on real devices across the screen sizes Apple still supports. Drafting the App Store listing copy, screenshots, and metadata. Going through Apple's App Review process, which can take anywhere from a few hours to a few weeks and sometimes requires changes. Then ongoing support after launch.

Each of those phases has a different rate, and the actual mix of hours depends on which parts you want done and which parts you already have.

## The actual numbers

Here are real ranges, broken down by app complexity. These assume a developer or small team that knows iOS deeply and is not learning on your project.

A simple utility app with no backend, no user accounts, and no in-app purchases will land between fifteen and thirty thousand dollars. Think a calculator, a converter, a single-purpose tool. EZ Fuse Tester, one of our apps, falls in this category. It uses the iPhone's built-in capacitive sensors to test small glass fuses and has no server side at all. Apps like this are the fastest to build and the cheapest to maintain.

A content-driven app with audio, GPS, or media and a moderate level of polish will land between thirty and seventy thousand dollars. Our Spirits of Charleston and Spirits of Savannah apps fall here. They include narrated audio for dozens of stories, GPS-tagged locations, historical photo galleries, offline access, and a one-time purchase paywall. The development cost is driven less by the code and more by content licensing, narration recording, and image rights.

A subscription or community-style app with user accounts, a real backend, push notifications, and ongoing content workflows will land between seventy and one hundred fifty thousand dollars. Churchd, the platform we are building for churches, is in this range. It includes messaging, calendars, attendance tracking, a Bible reader, and member directories. Apps at this tier are not just iOS work. They are iOS plus a backend plus an admin dashboard plus deployment infrastructure, which is closer to a small SaaS company than a single mobile app.

A hardware-paired or sensor-driven app where the iPhone is part of a larger system can run from fifty thousand to several hundred thousand dollars depending on how custom the hardware is. Viking Sensors, our climate monitoring product, falls into this category because the iOS and web software is paired with custom precision sensors. The hardware design and manufacturing add cost lines that do not exist for software-only projects.

## What changes the price the most

Inside any of those ranges, the single biggest factor is whether the app needs a backend. An app that lives entirely on the phone, with no user accounts and no shared data, is dramatically simpler and cheaper than one that has logins, profiles, and synced content. The moment you say "users should be able to log in" the project just doubled in scope, because you have added authentication, user management, password resets, account deletion (which Apple now requires), data persistence, and ongoing server hosting costs.

The second biggest factor is whether the app integrates with third-party services. Stripe for payments, Auth0 or Clerk for login, Mapbox or Google Maps for mapping, OpenAI or Anthropic for AI features. Each integration is straightforward on its own but adds a few thousand dollars to the build and an ongoing monthly cost.

The third biggest factor is design quality. A "we'll figure out the design as we go" app costs less to build and looks like it. A polished, custom-designed app where someone actually thought about typography, motion, and the feel of every interaction costs more and is worth more.

## What Apple takes

Beyond what you pay the developer, Apple charges ninety-nine dollars per year for the Apple Developer Program membership, which is a precondition for shipping on the App Store at all. If your app sells anything, Apple takes a cut of every transaction. The current standard rate is thirty percent on purchases above one million dollars in annual revenue and fifteen percent below that threshold under the Small Business Program. Subscriptions drop to fifteen percent after the user has been subscribed for a year. These rates apply to in-app purchases and subscriptions only. If your business model is selling something on a website and using the app for content delivery, Apple does not take a cut.

There is also the practical cost of testing and submission. Apple requires a real device for proper testing, and the developer needs at least an iPhone and ideally an iPad. App Store screenshots need to be generated at several specific sizes, which usually means renting or borrowing devices or using the Xcode simulator. None of this is much money individually, but it adds up.

## Timeline expectations

A simple utility app from kickoff to App Store live takes four to eight weeks. Most of that time is the development itself, but a week or two is taken up by Apple's review process and the inevitable revision cycle.

A moderate content app takes three to five months from kickoff to launch. The longer timeline is mostly because there is more content to produce and more design iteration before code starts.

A complex subscription app takes six to twelve months. The longer timeline is partly more code, but it is also partly because building a backend, an admin interface, and an iOS app in parallel means more moving pieces to coordinate.

Beyond launch, plan for ongoing work. App Review changes happen with no warning. iOS releases come every fall. Bugs appear that did not show up in testing. Users request features that turn out to be valuable. Budget at least ten percent of the original development cost per year for ongoing maintenance, and more if the app is actively growing.

## How to think about this if you are the buyer

If a quote is significantly below the ranges in this post, ask hard questions about scope, experience, and what is in and out of the contract. If a developer says they can build a custom iOS app with user accounts and a backend for five thousand dollars, what they are quoting is probably a few weeks of work that will leave you with something half built that you then have to pay someone else to finish.

If a quote is significantly above these ranges, ask what extra you are getting. A larger team, a dedicated designer, ongoing managed hosting, twenty-four-seven on-call support, deep integration work, or a custom hardware component all justify higher prices. Branding alone does not.

If you want a realistic estimate for your specific project, the fastest path is a fifteen-minute conversation where someone who has built apps like yours asks you eight or ten questions about what you actually want. After that conversation you should be able to get a written scope and a quote within a few days. That is how we work at WildTech, and how most reputable developers work. Beware anyone who quotes you a price before they have asked any real questions, and equally beware anyone who needs three months and a workshop just to give you a number.`,
  },
  {
    slug: "what-we-learned-shipping-ez-fuse",
    title:
      "What we learned shipping EZ Fuse Tester, the app that turns your iPhone into a fuse tester",
    summary:
      "A short build log for a free iOS utility born from a frustrated evening with broken Halloween lights. Why we shipped it, how it works, and what App Store users have done with it.",
    date: "2026-01-27",
    readMinutes: 6,
    tags: ["iOS", "Hardware", "Build Log"],
    content: `EZ Fuse Tester started on a Tuesday evening in late October 2023, with a half-untangled string of Halloween lights on the kitchen floor and the realization that we had no idea which of the tiny glass fuses inside the plug had blown. The cardboard packaging said something about replacement fuses being included for exactly this purpose. They were, of course, long gone. The nearest hardware store was closed. Testing each suspect fuse with a multimeter meant unscrewing the plug, prying out each one, and probing it with the leads in good light, which is a slow and grumpy way to spend the half hour before kids show up at the door.

The iPhone was sitting on the counter, screen up. The screen on a modern iPhone is essentially a giant capacitive sensor. The thought arrived as one of those middle-of-the-task questions: could you tell whether a fuse is good by laying it across the screen and seeing if the touch sensor registers the resistance change?

The answer, after a weekend of prototyping, was yes. EZ Fuse Tester shipped to the App Store free, without ads, and without collecting any data from its users, in mid 2024 after a stretch of refinement on the original prototype.

## How it actually works

A standard glass cartridge fuse is a thin filament inside a glass tube with metal end caps. When the fuse is good, the filament is continuous and the metal end caps are connected through it. When the fuse is blown, the filament has melted and the end caps are no longer electrically connected.

The capacitive touch sensor in an iPhone screen detects changes in the local electric field. A continuous piece of conductive material laid across the screen registers as a long, connected touch zone. A broken piece of conductive material registers as two separate touch points. The app uses the multitouch detection capabilities of UIKit to figure out which case it is looking at.

The user opens the app, sees a guide image showing where to place the fuse, lays the fuse across the marked area on the screen, and the app immediately shows either PASS in green or FAIL in red. There is no calibration, no setup, no account, no in-app purchase. It is a single screen that does one thing.

The whole app is a few hundred lines of Swift, weighs less than three megabytes, and has no networking code at all. The privacy policy is one sentence long because there is nothing to disclose.

## Why we shipped it free

A paid version would have made sense. The app saves people a multimeter and a trip to the hardware store. We chose free anyway, for two reasons.

The first reason is that the app is for a moment. You need it when you have a string of broken lights or a dead toaster, and you need it right now. Adding a paywall would add friction to a use case that should be one tap from search result to working app. Free, no account, no data collection means a user can install it, fix their lights, delete it, and move on with their evening, which is exactly the relationship we wanted with the people using it.

The second reason is that EZ Fuse Tester turned out to be the best advertising we ever made for WildTech. People in electrical trades and hobby electronics communities started sharing the app on forums. App Store reviews started showing up from people who fixed Christmas lights, classic car wiring, soldering iron stands, and old radio chassis. Each one of those reviews is a small piece of social proof for the larger business that we never could have bought directly.

## What App Store users have done with it

The most common reviews are some variation of "I was about to throw out my Halloween lights and the app saved them," because of course that is how it started. The second most common review is about cars. Old British cars in particular have a lot of small glass fuses and a fanbase that likes to fix things themselves at home. We get reviews from people who used the app on Land Rovers, MG Midgets, and old Volvos. One reviewer used it to test the fuses in a vintage Sony reel-to-reel tape deck and reported back that the app saved his weekend.

The reviews that always make us smile are from people who were not technical at all. They downloaded the app on the recommendation of someone in their family, used it to fix a lamp or a string of lights, and wrote a review that was more about the relief of not having to drive to a store than anything else.

## What we would do differently

If we built EZ Fuse Tester today we would add support for blade fuses, which are the larger flat fuses found in modern cars. The current version only works with the small glass cartridge fuses, which is mentioned clearly in the App Store description but does generate the occasional one-star review from someone who tried to test the wrong kind of fuse on it.

We would also add an optional dark mode UI. The current PASS and FAIL screens are bright and high contrast, which works well in the daylight and terrible at three in the morning when your refrigerator just made a strange noise and you are trying to find the bad fuse without waking anyone up.

We probably would not change anything about the business model. Free, no ads, no data collection is the right answer for an app whose job is to save someone twenty minutes of frustration. The goodwill from doing that for free is worth more than the dollar or two we could have charged.

## The bigger lesson

The whole project took about a weekend of focused work plus a couple of evenings of polish before submission. The total cost was the time. It earns no money. It runs entirely on the phone. It generates no support tickets because there is nothing to support. And it has produced more inbound interest in WildTech than any of our paid marketing experiments combined.

There is a lesson buried in that for any developer or small studio: the projects that pay off are not always the ones you build to make money. Sometimes the right thing to build is the tool you wish existed at the moment you needed it, and then to ship it the way you wish it had been shipped. Free, fast, no nonsense. That is what EZ Fuse Tester is, and it is one of the things we are most proud of having put into the world.`,
  },
  {
    slug: "what-we-build-and-why",
    title: "What we build and why",
    summary:
      "A short note on what WildTech Development exists to do, who we serve best, and what to expect if you reach out.",
    date: "2026-01-05",
    readMinutes: 4,
    tags: ["Founders", "WildTech"],
    content: `Most software studio websites read like marketing brochures. This is meant to be a short personal version. What WildTech Development exists to do, who we serve best, and what to expect if you decide to work with us.

## What this is

WildTech Development is an owner-operated software and hardware studio in Charleston, South Carolina. We built it because we wanted to do the work we think is worth doing on the terms we think it should be done on. End to end. Honest scoping. Real engineering, not theater. No subscription traps. No surveillance. No deliverables that exist to justify the next phase of an engagement.

We take on a small number of client projects each year. Apps for the App Store, web platforms, integrations, and occasional custom hardware. We also build proprietary products under the WildTech umbrella: Spirits of Charleston, Spirits of Savannah, EZ Fuse Tester, We The People: Your Rights, the church platform Churchd, and the precision climate monitoring product Viking Sensors. Some of those make money. Some are free and exist because we thought they should exist. That is by design.

## Who we serve best

The clients who get the most out of WildTech tend to share three things. They have a real problem they want to solve, not just a desire to "do something with AI" or "build an app." They want to work directly with the person doing the work, not through three layers of agency project management. And they value the discipline of small, honest, well-built things over the bigger-faster-louder approach.

Concretely: a metrology firm that needs a custom monitoring stack. A small congregation that wants a community platform that does not surveil its members. A trade business that needs an iOS app for a specific operational job and does not want to pay a SaaS company a subscription forever. A solo founder with an app idea who wants it built right and shipped to the App Store. A hardware project that needs both the device and the software around it. These are the engagements where we do our best work.

## What working with us looks like

The first call is free and lasts about thirty minutes. We talk about what you are trying to build and whether we are the right fit. If we both agree it is a fit, we move into a paid discovery phase that produces a written scope and a fixed price or a clearly bounded estimate. After that, build, ship, and ongoing support, in that order.

There are no account managers. No portal you have to log into. No team that turns over halfway through. Direct contact, direct answers.

## How to start

If you have a project you have been turning over and want to talk it through with someone who is going to be honest about whether it is worth building, the contact form is the right next step. If you would rather email directly, info@wildtechdev.com works too.`,
  },
  {
    slug: "building-software-in-charleston-sc",
    title: "Building software from Charleston, SC: a field report",
    summary:
      "Notes from running a small software and hardware studio out of Charleston, South Carolina. What the Lowcountry gets right, where it has to import talent, and why Charleston turns out to be a quietly excellent place to ship a product.",
    date: "2025-12-15",
    readMinutes: 7,
    tags: ["Charleston", "Founders"],
    content: `Most of the writing about software in the American Southeast still treats Charleston, South Carolina as a vacation backdrop instead of a place where people actually build things. That framing is a few years out of date. Charleston has quietly grown a working software economy, and from the seat we occupy on James Island, it is the right place to build a small studio.

This is a field report. Not a rah-rah piece. Just notes from running a one-person software and hardware shop out of Charleston, what shows up in the work because of the city, and what we would tell another developer thinking about doing the same thing.

## What Charleston actually has

The city has an underrated bench of full-stack engineers, iOS developers, embedded folks, designers, and product people. Some of them came in through Boeing and stayed after their first contract. Some grew up here and went to Porter-Gaud or Bishop England or Wando, left for a tech hub like Atlanta or San Francisco, and rotated back when the prospect of raising kids in a real neighborhood started to outweigh the salary delta. A growing number never left at all.

What you have in Charleston is a moderate but high-quality talent pool spread across a small geographic footprint. The downtown peninsula, Mount Pleasant, James Island, West Ashley, Daniel Island, North Charleston, and Summerville are all within a reasonable drive. That density is the city's competitive advantage. You can have coffee with three different working developers between Tuesday morning and Friday afternoon, and they will all show up because nobody is fighting traffic for two hours to do it.

The customer base for owner-operated software work is also better than people assume. There are real businesses here: the metrology and precision measurement industry, the maritime supply chain, the hospitality industry, healthcare networks, churches, and a quietly large set of small manufacturers in the Lowcountry industrial corridor. A studio like ours can serve all of those without ever leaving the metro area, and that is exactly the work we find most rewarding.

## What it does not have

The trade-off is that Charleston is not a venture capital town. If your business model requires raising a Series A in the next eighteen months, you are flying to Atlanta or Charlotte to find lead investors. There are angel investors here, especially in the maritime and hospitality verticals, but the institutional VC scene is thin compared to other Southeast tech hubs.

The other gap is depth in highly specialized roles. Charleston has plenty of competent iOS developers and competent web developers. It has fewer experts in narrow specialties like compiler engineering, low-level systems work, or large-scale ML infrastructure. For most client work that does not matter. For some, you end up bringing in remote specialists, which is fine because remote work is now table stakes everywhere.

## Why this is good for a small studio

The combination of moderate talent depth, real customers, low overhead, and easy access to actual life is exactly what a small studio wants. We can walk to Folly Beach in twenty minutes from the desk. The cost of a serviceable office is a fraction of what it would be in Atlanta or Nashville. Our clients are real people with real budgets, not VC-funded growth experiments. The Charleston technical community is small enough that referrals between developers happen naturally, and large enough that the next project is rarely more than a quarter away.

## What this means for clients

If you are considering hiring a Charleston-based developer for a custom software or hardware project, you have more options than you probably realize. We are one of them. There are several others. We would not pretend Charleston is the only good place to find this kind of work. We would pretend the opposite: it is a perfectly good place, and proximity matters more than tech hubs like to admit.

If you are in the Charleston metropolitan area and have a software or hardware project you would rather hand to someone local than ship across the country, the contact form is one click away. The intro call is free, and we are likely already in the same area code.`,
  },
];

// Always present newest first, regardless of the source order above.
// ISO date strings sort lexically in chronological order, so this also
// keeps the list correct whenever the post dates get reshuffled.
export const posts: Post[] = [...allPosts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
