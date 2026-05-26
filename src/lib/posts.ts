// Blog posts for /journal. Add new posts to the top of the array.
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

export const posts: Post[] = [
  {
    slug: "resend-namecheap-private-email-setup",
    title:
      "Set up Resend transactional email on a Namecheap domain that already uses Private Email",
    summary:
      "A complete walkthrough of getting Resend sending mail from your apex domain without breaking the inbox you already use for info@ and friends. Includes the DNS records that worked and the ones that did not.",
    date: "2026-05-25",
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
    date: "2026-05-22",
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
    date: "2026-05-15",
    readMinutes: 6,
    tags: ["iOS", "Hardware", "Build Log"],
    content: `EZ Fuse Tester started on a Tuesday evening in late October 2023, with a half-untangled string of Halloween lights on the kitchen floor and the realization that we had no idea which of the tiny glass fuses inside the plug had blown. The cardboard packaging said something about replacement fuses being included for exactly this purpose. They were, of course, long gone. The nearest hardware store was closed. Testing each suspect fuse with a multimeter meant unscrewing the plug, prying out each one, and probing it with the leads in good light, which is a slow and grumpy way to spend the half hour before kids show up at the door.

The iPhone was sitting on the counter, screen up. The screen on a modern iPhone is essentially a giant capacitive sensor. The thought arrived as one of those middle-of-the-task questions: could you tell whether a fuse is good by laying it across the screen and seeing if the touch sensor registers the resistance change?

The answer, after a weekend of prototyping, was yes. EZ Fuse Tester shipped to the App Store free, without ads, and without collecting any data from its users, a few weeks later.

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
    date: "2026-04-08",
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
    date: "2026-04-01",
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

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
