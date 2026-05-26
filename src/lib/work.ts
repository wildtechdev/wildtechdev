// Deep case studies for /work/[slug]. One per product.
// Same lightweight markdown-ish format as posts.ts.

export type CaseStudy = {
  slug: string;
  product: string; // The product name as it appears on /products
  title: string; // The case study headline (different from product name)
  summary: string; // Short summary used on the index card
  client: string; // Who it was built for
  role: string; // What WildTech did
  year: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  externalUrl?: string;
  appStoreUrl?: string;
  productAnchor: string; // Anchor on /products to link back to
  content: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "viking-sensors",
    product: "Viking Sensors",
    title:
      "Precision climate monitoring hardware, distributed nationally through one of the country's leading metrology firms",
    summary:
      "From sketch on a legal pad to enterprise-grade hardware in calibration labs and server rooms, sold exclusively through MSI-Viking Gage.",
    client: "Viking Sensors, LLC (operating brand of WildTech Ventures)",
    role: "Product design, hardware design, firmware, web dashboard, distributor relationship",
    year: "2023 to present",
    stack: [
      "Custom hardware",
      "Embedded firmware",
      "Cloud telemetry",
      "Real-time dashboards",
      "Industrial enclosure",
    ],
    metrics: [
      { label: "Distribution", value: "MSI-Viking Gage" },
      { label: "Industries", value: "Calibration, server, cleanroom" },
      { label: "Reliability", value: "Industrial grade" },
    ],
    externalUrl: "https://vikingsensors.com",
    productAnchor: "viking-sensors",
    content: `Viking Sensors is the longest-running and most operationally mature product in the WildTech portfolio. It is a line of precision climate monitoring devices paired with cloud telemetry and dashboards, sold into calibration labs, server rooms, warehouses, cleanrooms, and any other environment where temperature and humidity have to stay inside narrow bounds and someone has to be able to prove it.

The product exists because the off-the-shelf options were not good enough. Consumer sensors are not accurate enough for calibration work. Industrial sensors are accurate but ship with software that looks like it was last updated in 2005. The gap between "accurate" and "usable" was a real product opportunity, and Viking Sensors fills it.

## The problem

Metrology labs and similar precision environments have a regulatory and operational need to continuously monitor temperature and humidity. Out of compliance conditions invalidate calibrations and force expensive recalls. The legacy tools for this job split into two unsatisfying buckets.

The first bucket is data loggers. These are small battery-powered devices that record temperature and humidity to internal memory, which someone then has to manually offload to a computer once a week or once a month. Data loggers are accurate but require constant babysitting. If a fridge fails on Friday night, the data logger will faithfully record the failure, but nobody will know about it until Monday morning, by which point the calibrations that were being protected are already out of compliance.

The second bucket is enterprise environmental monitoring systems. These do real-time alerting but are expensive, slow to install, and almost universally come with software that looks like a Windows Vista screenshot. The big names in this space have not meaningfully updated their user interfaces in twenty years. The hardware is reliable. The user experience is hostile.

The opportunity was to combine the accuracy of the enterprise systems, the simplicity of the data loggers, and the user experience of a modern consumer product, then sell it at a price point that made sense for the calibration lab market.

## The approach

The Viking Sensors hardware is purpose-designed for precision and reliability. Each sensor uses high-accuracy temperature and humidity components, an integrated wireless radio for real-time telemetry, and a custom enclosure that holds up in industrial environments. The firmware is written to minimize the kind of corner-case failures that come from cheap consumer wireless chips. The cloud side is a custom backend that ingests, stores, and serves the sensor readings to a web dashboard built for the people who actually have to look at it every day.

The dashboard does the things you would expect from a modern web product. Live readings on a single screen. Historical graphs with adjustable time windows. Configurable alert thresholds. Email and SMS notifications when readings drift out of bounds. CSV export for compliance reporting. Multi-user accounts so a lab manager can see all the sensors across multiple rooms or facilities.

The design language is intentionally restrained. There are no decorative gradients, no marketing colors, no dashboards that look more like a startup pitch deck than a tool. The people using Viking Sensors look at this dashboard every day. The job of the design is to disappear and let them see the data.

## The distribution decision

The single biggest decision we made on Viking Sensors was choosing how to sell it. Two paths were open. The first was direct sales: build a website, run ads, do outbound. The second was distribution: partner with someone who already had the customer relationships in the metrology space.

We chose distribution. Viking Sensors is sold exclusively through MSI-Viking Gage, one of the largest names in precision measurement in the United States. MSI-Viking has decades of relationships with the calibration labs that need this kind of monitoring, a sales team that understands the technical requirements, and the credibility that comes from being a known quantity in the industry.

The trade off is that the exclusive distribution arrangement means we are not selling Viking Sensors directly. We share margin with the distributor, and we accept that the customer relationships sit with MSI-Viking rather than with us. In exchange, we get access to a customer base that would have taken us years to build from scratch and a sales motion that fits the buying behavior of the market.

For a small product company, that trade is usually correct. Building a sales organization from zero is hard, slow, expensive, and not the highest-leverage thing a small team can do. Picking the right distribution partner and letting them sell is often the right answer.

## What we shipped

Production hardware in industrial enclosures, with the kind of certifications and testing required to be deployed in regulated environments.

A real-time telemetry backend that ingests sensor readings, stores them long-term, and serves them to the dashboard with minimal latency.

A web dashboard for live readings, historical analysis, threshold configuration, and alerting.

An ongoing operational arrangement with MSI-Viking Gage as the exclusive distributor.

Continued firmware and software updates as customer feedback comes in from the field.

## Why this matters for clients

Viking Sensors is the case study that proves WildTech can ship full-stack hardware and software products end to end. If you are evaluating a partner for a project that has a custom hardware component, the question you should be asking is whether they have done this before. We have, at industrial scale, with a national distribution partner. That experience is rare in the kinds of small studios and freelancers who claim to do hardware work.

If you have a hardware idea that needs to become a real product with real customers, we have walked the entire path from sketch to shipping units. Let's talk.`,
  },
  {
    slug: "we-the-people-your-rights",
    product: "We The People: Your Rights",
    title:
      "A plain-English Constitution and Bill of Rights reference, built in eight weeks and shipped free forever",
    summary:
      "A civic literacy app for the moment in American life when knowing what the founding documents actually say has stopped feeling optional.",
    client: "WildTech Ventures, LLC",
    role: "Concept, design, iOS development, content, App Store launch",
    year: "2026",
    stack: ["Swift", "SwiftUI", "Offline-first storage", "App Store"],
    metrics: [
      { label: "Cost to user", value: "Free, forever" },
      { label: "Tracking", value: "Zero" },
      { label: "Works offline", value: "Yes" },
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
    productAnchor: "we-the-people-your-rights",
    content: `We The People: Your Rights is the most personal app we have ever shipped. The full origin story lives on the founder page, but the short version is that it started with a conversation in a men's society meeting where someone passed around a small pocket Constitution and said this was the most important thing anyone in the room owned. We agreed. We also realized that almost nobody actually carries one of those, and that the modern equivalent should be on the phone in your pocket.

The app shipped to the App Store on a fast schedule, free, with no ads, no tracking, no in-app purchases, and no account required. It is the kind of project that did not need to make money to be worth building.

## The problem

Civic literacy in America is in a bad place. Multiple national surveys have shown that a majority of adult Americans cannot name the three branches of government, do not know what the Bill of Rights protects, and have no idea what their actual rights are during a traffic stop, a search, or any other interaction with the state. This is not a partisan problem. People across the political spectrum agree that the situation is embarrassing.

The standard responses to this problem are slow and indirect. Better civics education in schools. More substantive coverage in mainstream news. Long-form books and essays for people who already care. All of those are good and worth pursuing, but none of them put the actual text of the Constitution into someone's hand at the moment they need it.

The opportunity was to build the simplest possible reference tool. Original text. Plain-English explanations next to it. Real-life scenarios that map abstract rights to concrete situations like traffic stops or searches. Free to anyone who wants it. Works offline so it is reliable even when the network is not.

## The approach

The app is intentionally minimal. There is no signup flow. There are no notifications. There is no social layer. The only thing the app does is let you read and search the Constitution, the Bill of Rights, and the founding documents, with accessible explanations alongside the original text.

The plain-English explanations are the hardest part of the content work. They have to be accurate enough that a constitutional lawyer would not roll their eyes, accessible enough that a teenager can read them, and balanced enough that a reader of any political affiliation can recognize them as fair. We wrote them with that triple constraint in mind and tested every section by reading it aloud to people across a range of education levels and political beliefs.

The real-life scenarios section is the part that turns the app from a reference into a tool. It is one thing to know that the Fourth Amendment exists. It is another thing entirely to know what you should say if a police officer asks to search your car. The scenarios cover the situations where rights actually come up in normal American life.

The whole thing is offline-first. The app downloads its content on first install and works without a network connection forever after. We made this choice because the moments when you most need to know your rights are not the moments when you can count on having signal.

## The technical work

The app is native iOS, written in Swift with SwiftUI. The content is shipped inside the app bundle rather than fetched from a server, which means the app does not phone home and there is no possibility of the content being changed after you install it. The whole app is a few megabytes.

The search is a custom full-text index over the document content, designed to handle the kind of fuzzy queries people actually type. Searching for "free speech" returns the relevant amendments and their explanations. Searching for "can the police search my car" returns the relevant scenario along with the constitutional sections that apply.

There is no analytics. There is no user account. There is no telemetry. The privacy policy is short because there is nothing to disclose.

## The launch

The app launched in 2026 on a tight schedule. The domain for it was purchased one night at 12:15 AM after a conversation that made the project feel urgent. The first version of the app was in the App Store a few weeks later. We chose to ship a deliberately small first version rather than wait until the app was comprehensive, because the most important thing was to put the tool into people's hands as fast as possible. Future versions will expand the content and add features like additional founding documents, state constitutions, and more scenarios.

The App Store review process for this app was uneventful. We had been worried that the political sensitivity of the content might trigger extra scrutiny. It did not. The app was approved on the first submission.

## Why this matters

We The People: Your Rights is not a commercial project. It is free, it will stay free, and it makes no money. We built it because we thought it should exist and we had the skills to build it.

For clients, the lesson is that we take ideas seriously enough to ship them, even when there is no obvious business model. If you bring us a project that has to be built for reasons other than revenue, we know how to do that work. The discipline of shipping a free product where the only reward is the work itself is the same discipline that makes the paid client projects we take on come out well.

If you have an idea that needs to exist in the world, let's talk about how to make it real.`,
  },
  {
    slug: "spirits-of-charleston",
    product: "Spirits of Charleston",
    title:
      "The Lowcountry's most comprehensive ghost story app, narrated and GPS-tagged across an entire region",
    summary:
      "A paid iOS app covering Charleston, Summerville, Moncks Corner, the Sea Islands, and the surrounding coast, with professional audio narration, historical photos, and locations no other ghost tour has touched.",
    client: "WildTech Ventures, LLC",
    role: "Concept, content, design, iOS development, audio production, App Store launch",
    year: "2024",
    stack: [
      "Swift",
      "SwiftUI",
      "MapKit",
      "AVFoundation",
      "Offline content",
      "App Store IAP",
    ],
    metrics: [
      { label: "Stories", value: "75+ narrated" },
      { label: "Coverage", value: "Tri-County and beyond" },
      { label: "Rating", value: "5.0 on App Store" },
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    productAnchor: "spirits-of-charleston",
    content: `Spirits of Charleston is what happens when a software developer who grew up on the Lowcountry's haunted history sits down to ask why no good tool existed for exploring it.

Charleston has a deep, real ghost story tradition that goes back centuries. There are walking tour companies that have built whole businesses around it. There are books, websites, and the occasional television special. What there was not, before this app, was a single comprehensive reference that covered the whole region, included professional audio narration, mapped every story to a real place you could visit, and let you explore at your own pace without paying a tour guide forty dollars to spend ninety minutes downtown.

That gap was the opportunity, and Spirits of Charleston filled it.

## The problem

Existing ghost tours have three structural problems. They only cover the most touristy downtown stops, because that is where the foot traffic is. They run on a fixed schedule, which is great if you happen to be free at 8 PM on a Saturday and terrible if you are visiting with kids who are tired by then. And they are expensive on a per-person basis, especially for families.

A self-guided app could solve all three of those problems. It could cover the whole region, not just King Street. It could be available whenever the user wants to use it. And one purchase could cover an entire family for as many evenings as they wanted to explore.

The harder problem was content. To make the app actually worth buying, it had to have more stories than any walking tour, with audio that did not sound like a hobby project, and with historical accuracy that local readers would not laugh at.

## The approach

We wrote and recorded over 75 narrated stories. Each story is tied to a real location with GPS coordinates, comes with historical photographs sourced from libraries across South Carolina, and runs anywhere from three to ten minutes depending on the depth of the material. The narration is professional, recorded with proper microphones in a quiet space, edited for pace, and matched to background ambience appropriate to the location.

The app's coverage extends far beyond what any walking tour offers. Downtown Charleston is well represented, of course. The Old City Jail, the Unitarian Church graveyard, the Powder Magazine, Cabbage Row. But the app also covers Summerville, Moncks Corner, the beaches, the islands, the colonial cemeteries, the forts, and the back roads. Stories that have been told for generations in specific corners of the Lowcountry, never written down anywhere accessible, and certainly never narrated.

The technical implementation is straightforward. Native iOS, SwiftUI for the interface, MapKit for the GPS-tagged locations, AVFoundation for audio playback. All content is bundled with the app and works offline, which matters because cell service on the islands and back roads is unreliable.

## The business model

Spirits of Charleston is a one-time purchase of $4.99. No subscription. No ads. No in-app purchases. You buy it once and own it.

This decision was deliberate. Subscriptions are the default business model for content apps in 2024, but they make no sense for an app that is essentially a guidebook. Nobody subscribes to a guidebook. You buy it, you use it, and you keep it. We priced the app to be obviously cheaper than a single ghost tour ticket, so the value comparison was easy.

The model has worked. The app maintains a 5.0 rating on the App Store, and the reviews repeatedly mention how much value the user got compared to taking a traditional tour.

## What App Store users have done with it

The reviews are some of the most rewarding we have read on any of our apps. People describe planning whole evenings around the app, hitting haunted locations between dinners and bar stops. One reviewer mentioned that the app turned a vacation that was supposed to be just a beach trip into a flexible ghost tour spread across the entire week. Another said the app worked even better than expected with kids because the family could pause, skip, and resume on their own schedule.

The recurring theme across the reviews is the flexibility. People are not used to a ghost tour that fits around their schedule rather than the other way around.

## Why this matters

Spirits of Charleston is a working example of what we mean by content-driven apps. The development cost was not in the code. The code is straightforward. The cost was in the writing, the historical research, the photo licensing, and the audio production. An app like this only works if you take all of those parts seriously.

For clients with content-heavy app ideas, the lesson is to budget for the content, not just the code. The app is the wrapper. The content is the product.

If you have a guidebook, an audio tour, a reference work, or any other content-driven idea that wants to be a beautiful, simple, offline-capable app, we have shipped the model. Let's talk.`,
  },
  {
    slug: "spirits-of-savannah",
    product: "Spirits of Savannah",
    title:
      "A second city, a second app, and a deeper map than any walking tour offers",
    summary:
      "Following the Charleston playbook into another haunted Southern city, covering the squares, the islands, and the colonial cemeteries most visitors never hear about.",
    client: "WildTech Ventures, LLC",
    role: "Concept, content, design, iOS development, audio production, App Store launch",
    year: "2024",
    stack: ["Swift", "SwiftUI", "MapKit", "AVFoundation", "Offline content"],
    metrics: [
      { label: "Stories", value: "55+ and growing" },
      { label: "Coverage", value: "Squares to Ossabaw Island" },
      { label: "Price", value: "$3.99 one-time" },
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    productAnchor: "spirits-of-savannah",
    content: `Spirits of Savannah is the second app in the Spirits series and the first product where we proved the model could repeat. The Charleston version had been live for several months, had earned a 5.0 rating, and had attracted enough positive feedback that the obvious question was whether the same approach would work in another haunted Southern city. Savannah was the answer.

The app launched a year after the Charleston version, with over 55 narrated stories, the same offline-first technical architecture, and the same business model. One-time purchase, no ads, no subscription.

## The problem

Savannah has a ghost story industry that is, if anything, larger than Charleston's. There are dozens of walking tour companies. The downtown squares are saturated with guides shepherding small groups from one spooky stop to the next. The market for ghost content in Savannah is so dense that the question was not whether there was demand. It was whether a self-guided app could offer something the walking tours could not.

The answer turned out to be coverage. The walking tours all cover the downtown squares because that is where the foot traffic is. They do not cover Ossabaw Island, Hardeeville across the South Carolina line, the colonial cemeteries on the outskirts, or the haunted plantation roads that families with cars can easily visit.

The app could cover all of that, plus the downtown squares, in a single coherent product.

## The approach

The technical implementation is essentially the same as the Charleston version. Native iOS, SwiftUI, MapKit for GPS-tagged locations, AVFoundation for audio playback, all content bundled with the app for offline use. The shared architecture meant that the second city took dramatically less engineering time than the first.

The content was where the work went. Writing 55 stories that were accurate, well-paced, and worth a listen took months. Recording professional narration for each story took another long stretch of careful audio production. Sourcing historic photos and verifying that the locations were real and visitable was its own line of work.

The breadth of coverage is what makes the Savannah app worth buying alongside or instead of a downtown walking tour. A first-time visitor doing the standard squares-and-restaurants trip can use the app for the downtown portion of their visit and pick up everything the tours cover, then keep using it for the trips out to Ossabaw or the colonial cemeteries that walking tours never reach.

## What changed from the first app

A few small things improved between Spirits of Charleston and Spirits of Savannah. The audio production got tighter. The historical research process was faster because we had the workflow down. The map view loads more quickly because we cached more aggressively.

The business model stayed the same. One-time $3.99 purchase. The price is slightly lower than Charleston, partly because the story count is slightly lower at launch, and partly because we wanted to make the second-city upgrade easy for people who already owned the first one.

## What we learned

The repeatable framework is what made Spirits of Savannah possible at the price and quality it shipped at. The first city in any content-driven app series carries all of the architectural risk. Once that is done, the second one is a content project on top of a known technical foundation.

This is a useful pattern for any client thinking about a content-driven product. If you have content for one location, region, market, or audience, and you suspect the same product would work in others, build the first one with the assumption that you will repeat it. The architecture that supports content swapping cheaply is worth a small amount of extra work up front and pays for itself the second time you ship.

If you have a content product that you think could work across multiple cities, regions, or audiences, let's talk about how to build the foundation right.`,
  },
  {
    slug: "ez-fuse-tester",
    product: "EZ Fuse Tester",
    title:
      "The free utility app that turns an iPhone screen into a fuse continuity tester",
    summary:
      "A weekend project born from a frustrating evening with broken Halloween lights. Free, no ads, no data collection, and one of the most useful pieces of software we have ever shipped.",
    client: "WildTech Ventures, LLC",
    role: "Concept, design, iOS development, App Store launch",
    year: "2023",
    stack: ["Swift", "SwiftUI", "UIKit multitouch APIs"],
    metrics: [
      { label: "Cost", value: "Free" },
      { label: "Backend", value: "None" },
      { label: "Data collected", value: "Zero" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    productAnchor: "ez-fuse-tester",
    content: `EZ Fuse Tester is the smallest, most focused app we have ever shipped, and one of the most successful. It is a free utility that turns an iPhone screen into a continuity tester for small glass cartridge fuses, using the phone's built-in capacitive touch sensors to detect whether the fuse is intact or blown. The whole app is one screen. There is no signup, no account, no in-app purchase, no ads, and no data collection.

The full story of how the idea showed up on a Tuesday evening in October 2023 is in our journal post on what we learned shipping EZ Fuse Tester. This case study is the structured version for clients trying to understand whether we are the right team for a small focused utility project.

## The problem

The original problem was personal. A string of Halloween lights stopped working. Somewhere in the plug was a tiny glass fuse that had blown. The replacement fuses that supposedly came with the lights had been gone for years. The nearest hardware store was closed. Testing each fuse with a multimeter meant disassembling the plug, which is slow.

The general version of that problem applies to anyone who works with small electronics. Automotive enthusiasts. People who restore old radios or stereos. Anyone with a soldering iron and a workshop. The fuses themselves are cheap. The hassle is testing them to figure out which one needs replacing.

The opportunity was to use a device almost everyone already owns, the iPhone, to solve the problem for free.

## The approach

A standard glass cartridge fuse is two metal end caps connected by a thin filament inside a glass tube. When the fuse is good, the filament is intact and the end caps are electrically connected. When the fuse is blown, the filament has melted and the end caps are isolated.

An iPhone screen is a capacitive touch sensor that detects changes in the local electric field. A continuous piece of conductive material laid across the screen registers as a connected touch zone. A broken piece of conductive material registers as two separate touch points.

The app uses the multitouch detection APIs in UIKit to look at what is touching the screen when the user lays a fuse across the marked area, and reports PASS or FAIL based on whether the touches form a single connected region or two isolated regions.

The implementation is a few hundred lines of Swift. There is no networking code. There is no backend. The whole app fits in a few megabytes.

## The launch

EZ Fuse Tester shipped to the App Store about three weeks after the original idea. App Review approved it on the first submission. We chose to release it free, with no ads and no data collection, because the app's value is in being available at the exact moment someone needs it. Friction at install or use would defeat the point.

The privacy policy is one sentence long. The marketing site is the App Store listing.

## What App Store users have done with it

The reviews are some of the most fun we have to read. People have used the app to fix Halloween lights, Christmas lights, classic British car wiring, vintage Sony reel-to-reel tape deck fuses, soldering iron stands, lamp restorations, and countless other small electronics. The common theme across the reviews is relief. Someone was about to throw something out, the app saved them from doing so, and they wrote to say thank you.

The most surprising part of the launch was the second-order effect on WildTech as a company. Tradespeople and electronics hobbyists started sharing the app in forums and discord servers. Each of those mentions was implicit social proof for the larger studio that we never could have manufactured on purpose.

## Why this matters for clients

If you are trying to figure out whether WildTech is the right team for a small, focused utility app, EZ Fuse Tester is the proof. We will not over-engineer it. We will not try to talk you into a subscription you do not need. We will ship something that does its one job well and gets out of the way.

If you have a small focused utility idea that should exist, let's talk about how to make it real.`,
  },
  {
    slug: "churchd",
    product: "Churchd",
    title:
      "A purpose-built community platform for churches, replacing the patchwork of texts, GroupMe, Facebook, and spreadsheets",
    summary:
      "An in-development platform designed to handle everything a congregation needs in one place: messaging, calendars, attendance, classes, volunteers, and a built-in Bible reader. No subscriptions, no ads, no social media required.",
    client: "WildTech Ventures, LLC",
    role: "Product, design, full stack engineering",
    year: "2026 to present",
    stack: [
      "iOS",
      "Web",
      "Backend services",
      "Real-time messaging",
      "Calendar sync",
      "Bible content engine",
    ],
    metrics: [
      { label: "Status", value: "In active development" },
      { label: "Business model", value: "No subscriptions, no ads" },
      { label: "Built for", value: "Churches of any size" },
    ],
    externalUrl: "https://churchd.com",
    productAnchor: "churchd",
    content: `Churchd is the largest software product WildTech is currently building. It is a community platform designed specifically for churches and the people in them, intended to replace the awkward patchwork of iMessage threads, GroupMe chats, Facebook events, paper sign-up sheets, and spreadsheets that most congregations rely on with one purpose-built tool.

The product is in active development. The founder page tells the origin story of the legal pad sketches and the conviction that drove the project. This case study is the structured version of what is being built and why it matters.

## The problem

Most churches run their day-to-day communication and operations on tools that were not designed for them. Group texts handle prayer requests until the thread gets too long for anyone to keep up. Facebook Events handle gatherings until the church realizes that a meaningful number of members do not use Facebook. GroupMe handles small group chats until enough people drop off that the chat dies. Paper sign-up sheets handle volunteer coordination until they get lost.

The underlying problem is that there is no single tool built for the unique mix of communication, coordination, content, and care that a congregation does. Every existing solution is either a generic communication tool that does not understand the church use case, or a heavy enterprise church management system that costs money the average congregation cannot justify.

The opportunity is to build the tool that should exist, the way it should exist, with a business model that does not require the church to pay a subscription or to host advertising on its own digital community.

## The approach

Churchd is being designed around the actual workflows of a working congregation. The feature set includes group and peer-to-peer messaging, personal and ministry calendars, automated attendance tracking, event scheduling for both small groups and church-wide gatherings, volunteer coordination, class and ministry management, a built-in Bible e-reader with smart search, group and self-guided Bible studies, member outreach and engagement tools, and digital bulletins.

The design philosophy is that the tool should be invisible. The job of a church platform is not to capture attention or generate engagement metrics. The job is to help a community of believers do the work of being a community, and then to get out of the way. There are no infinite scrolling feeds designed to keep people in the app. There are no notifications optimized for engagement. The product is calibrated for the actual rhythms of church life, which are weekly and seasonal rather than minute-to-minute.

The business model is the part that makes Churchd different from most other church software. No subscriptions, ever. No advertising, ever. No requirement to sign up for a social media account to use the platform. The product is being built with a different funding model in mind, designed to honor the work of churches rather than to extract value from them.

## What is shipping first

The first version focuses on the core operational workflows that every church does. Group and peer messaging. A working calendar. Event scheduling and attendance. A clean implementation of the Bible reader. Volunteer and class management.

The features that depend on community size and content depth are coming in later versions. The post feed, the community engagement tools, and the more advanced ministry management features are designed and prototyped but will not ship until the foundational workflows are rock solid.

We are taking the time to get the basics right before adding complexity. A church communication tool that is half-built is worse than no tool at all, because it splits the congregation between the new system and the old patchwork. We do not want to ship something that puts churches in that position.

## Why this matters

Churchd is the project that proves WildTech is willing to take on something genuinely hard. A full platform for a specific industry, built from scratch, with a non-standard business model, designed to last. Most studios would not take this kind of project on because the timeline is long and the immediate revenue path is unclear.

We took it on because we believe the product should exist and because we have the skills to build it. The discipline of building something this large the right way is the same discipline that goes into every other piece of work WildTech does.

For client projects, Churchd is the case study that demonstrates we can handle large multi-platform, multi-feature, multi-year work. If you have a project of this scale, we are not going to be intimidated by it.`,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
