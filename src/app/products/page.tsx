import type { Metadata } from "next";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import AppStoreBadge from "@/components/AppStoreBadge";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore WildTech Development products: Spirits of Charleston, Spirits of Savannah, EZ Fuse Tester, Churchd, and Viking Sensors.",
  alternates: {
    canonical: "https://wildtechdev.com/products",
  },
  openGraph: {
    title: "Products | WildTech Development",
    description:
      "iOS apps, community platforms, and precision hardware from WildTech Development.",
  },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SoftwareApplication",
      position: 1,
      name: "Spirits of Charleston",
      applicationCategory: "TravelApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        ratingCount: "10",
      },
      url: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
      publisher: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
    {
      "@type": "SoftwareApplication",
      position: 2,
      name: "Spirits of Savannah",
      applicationCategory: "TravelApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "3.99",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        ratingCount: "8",
      },
      url: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
      publisher: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
    {
      "@type": "SoftwareApplication",
      position: 3,
      name: "EZ Fuse Tester",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      url: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
      publisher: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
    {
      "@type": "SoftwareApplication",
      position: 4,
      name: "We The People: Your Rights",
      applicationCategory: "ReferenceApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      url: "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
      publisher: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
    {
      "@type": "WebApplication",
      position: 5,
      name: "Churchd",
      applicationCategory: "BusinessApplication",
      url: "https://churchd.com",
      publisher: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
    {
      "@type": "Product",
      position: 6,
      name: "Viking Sensors",
      description:
        "Precision climate monitoring hardware for calibration labs, server rooms, and cleanrooms.",
      url: "https://vikingsense.com",
      brand: {
        "@type": "Brand",
        name: "Viking Sensors",
      },
      manufacturer: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
      },
    },
  ],
};

const products = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston" as const,
    status: "Live" as const,
    price: "$4.99",
    rating: "5.0",
    accentColor: "border-l-amber-700/40",
    glowColor: "rgba(217, 119, 6, 0.08)",
    description:
      "Spirits of Charleston is the most comprehensive ghost story app in the Lowcountry. Over 75 professionally narrated tales walk you through the haunted side of Charleston, each one tied to a real location you can visit. From the Old City Jail and the Unitarian Church graveyard to the beaches, forts, and islands beyond the peninsula, every story comes with audio narration, historical photographs, and GPS-tagged locations so you can explore at your own pace. The app covers corners of Charleston that no other ghost tour has ever touched, including stories from Summerville and Moncks Corner. Whether you are a local who has walked these streets a thousand times or a visitor planning your first trip, this is the ghost tour that fits your schedule, not the other way around.",
    features: [
      "Professional audio narratives",
      "Historical photographs",
      "GPS-tagged real Charleston locations",
      "Intuitive search",
      "Offline access",
      "Coverage from peninsula to islands",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote:
        "Even my ghost-averse daughter stayed highly engaged as we used the app to fill gaps in our vacation itinerary. It is easy to navigate, cheaper than the in-person ghost tours, and certainly more convenient.",
      author: "App Store Review",
    },
    statusNote: null,
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    status: "Live" as const,
    price: "$3.99",
    rating: "5.0",
    accentColor: "border-l-teal-600/40",
    glowColor: "rgba(13, 148, 136, 0.08)",
    description:
      "Spirits of Savannah brings over 55 narrated ghost stories to life across one of America's most haunted cities. The app covers far more than just the downtown squares. You will find yourself exploring tales from Ossabaw Island, Hardeeville, SC, colonial cemeteries, haunted mansions, and remote locations that most visitors never hear about. Each story includes audio narration and historic photos that pull you into the city's darker history. Families visiting Savannah have used the app to turn a packed itinerary into a flexible ghost tour they could spread across an entire weekend, hitting haunted stops between meals and shopping without ever going out of their way.",
    features: [
      "55+ ghost stories and growing",
      "Authentic audio narratives",
      "Extensive historic photos and documents",
      "Intuitive search",
      "Coverage beyond downtown",
      "206.5 MB · Age 9+",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote:
        "This app turned out to be the best tour we took on our girl’s weekend to Savannah!",
      author: "Ghostnay",
    },
    statusNote: null,
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    status: "Live" as const,
    price: "Free",
    rating: null,
    accentColor: "border-l-green/50",
    glowColor: "rgba(34, 197, 94, 0.08)",
    description:
      "EZ Fuse Tester turns your iPhone into a simple fuse continuity tester. Place a standard glass cartridge fuse across the screen and the app gives you instant pass or fail feedback using the phone's built-in capacitive touch sensors. There is nothing to buy, nothing to plug in, and nothing to charge. It works with the small glass fuses you find in cars, household electronics, and holiday string lights. One user was about to throw out a set of Halloween lights before testing the fuses with the app, replacing two of them, and getting the whole set working again.",
    features: [
      "Instant PASS/FAIL visual feedback",
      "Uses phone's capacitive touchscreen sensors",
      "Built-in demonstration image guide",
      "No extra hardware needed",
      "Works with small glass cartridge fuses",
      "No data collected from users",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote:
        "This is great. I was getting ready to throw out a bunch of Halloween lights and I tested and replaced a couple of the fuses and now the lights work.",
      author: "App Store Review",
    },
    statusNote: null,
  },
  {
    name: "We The People: Your Rights",
    mockup: "we-the-people" as const,
    status: "Live" as const,
    price: "Free",
    rating: null,
    accentColor: "border-l-blue-600/40",
    glowColor: "rgba(37, 99, 235, 0.1)",
    description:
      "We The People: Your Rights is a plain-English reference to the Constitution, Bill of Rights, and the founding documents that shape American civic life. Read the original text alongside accessible explanations, and learn what your rights actually look like in real-life situations: traffic stops, searches, free speech, due process, and more. Built to be useful to anyone, regardless of political affiliation. No accounts, no tracking, no ads, no in-app purchases. The whole app works offline once installed. Free forever.",
    features: [
      "Constitution and Bill of Rights, fully searchable",
      "Plain-English explanations alongside the original text",
      "Real-life rights scenarios",
      "Nonpartisan and ad-free",
      "Works offline, no account required",
      "Collects zero user data",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
    externalUrl: null,
    externalLabel: null,
    review: null,
    statusNote:
      "Recently released on the App Store. Built to be the go-to civic literacy reference on your phone.",
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    status: "In Development" as const,
    price: null,
    rating: null,
    accentColor: "border-l-indigo-500/40",
    glowColor: "rgba(99, 102, 241, 0.08)",
    description:
      "Churchd is a community platform designed from the ground up for churches. Member profiles, event management, group communication, volunteer coordination, digital bulletins, and sermon archives all live in one place. The platform is currently in active development with profile tabs, post feeds, and community features already designed and prototyped. The goal is to give congregations a single tool that handles everything they currently split across five or six different apps and spreadsheets.",
    features: [
      "Event management",
      "Group communication",
      "Volunteer coordination",
      "Online giving",
      "Digital bulletins",
      "Sermon archives",
    ],
    appStoreUrl: null,
    externalUrl: "https://churchd.com",
    externalLabel: "Visit churchd.com",
    review: null,
    statusNote:
      "Currently in active development. Profile tabs, post feeds, and community features already designed and prototyped.",
  },
  {
    name: "Viking Sensors",
    mockup: "vikingsense" as const,
    status: "Live" as const,
    price: null,
    rating: null,
    accentColor: "border-l-red-600/40",
    glowColor: "rgba(220, 38, 38, 0.08)",
    description:
      "Viking Sensors pairs precision climate monitoring hardware with intelligent software. The system tracks temperature, humidity, and environmental conditions in real time with the kind of accuracy that calibration labs, server rooms, warehouses, and cleanrooms demand. Every sensor is built for enterprise-grade reliability, and the software gives you dashboards, alerts, and historical data without the complexity of most industrial monitoring platforms. Viking Sensors is distributed exclusively through MSI-Viking Gage, one of the country's leading names in precision measurement.",
    features: [
      "Precision sensors",
      "Real-time monitoring",
      "Enterprise dashboards",
      "MSI-Viking Gage distribution",
      "Calibration lab grade",
      "Industrial-grade reliability",
    ],
    appStoreUrl: null,
    externalUrl: "https://vikingsense.com",
    externalLabel: "Visit vikingsense.com",
    review: null,
    statusNote:
      "Precision hardware with exclusive MSI-Viking Gage distribution. Production units shipping.",
  },
];

function StarRating({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-green"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ filter: "drop-shadow(0 0 4px rgba(34,197,94,0.4))" }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-muted font-mono">{rating}</span>
    </div>
  );
}

function StatusPill({ status }: { status: "Live" | "In Development" }) {
  const isLive = status === "Live";
  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${
        isLive
          ? "border-green/30 bg-green/[0.06]"
          : "border-amber-500/30 bg-amber-500/[0.06]"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${
            isLive ? "bg-green" : "bg-amber-500"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
            isLive ? "bg-green" : "bg-amber-500"
          }`}
        />
      </span>
      <p
        className={`text-[10px] uppercase tracking-[0.18em] font-mono ${
          isLive ? "text-green" : "text-amber-500"
        }`}
      >
        {status}
      </p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute -top-40 right-0 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
            What we build
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
            Products
          </h1>
          <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
            Software and hardware built to solve real-world problems.
          </p>
        </div>

        <div className="space-y-2">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={product.name}>
                <article
                  id={product.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className={`group relative border-l-[3px] ${product.accentColor} py-14 lg:py-16 pl-8 pr-2 overflow-hidden transition-colors duration-700 hover:bg-[#0a0c10]/40`}
                >
                  {/* Subtle accent glow on hover */}
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at left, ${product.glowColor} 0%, transparent 60%)`,
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className={`relative flex flex-col lg:flex-row gap-10 lg:gap-16 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Mockup */}
                    <div className="flex justify-center lg:flex-shrink-0 lg:self-start transition-transform duration-700 group-hover:-translate-y-1">
                      <PhoneMockup product={product.mockup} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <StatusPill status={product.status} />

                      <h2 className="mt-5 text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                        {product.name}
                      </h2>

                      {/* Price & rating */}
                      {(product.price || product.rating) && (
                        <div className="flex items-center gap-4 mb-6">
                          {product.price && (
                            <span className="text-heading text-lg font-[family-name:var(--font-sans)]">
                              {product.price}
                            </span>
                          )}
                          {product.rating && (
                            <StarRating rating={product.rating} />
                          )}
                        </div>
                      )}

                      <p className="text-body leading-relaxed mb-8 max-w-xl">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-8">
                        {product.features.map((feature) => (
                          <p
                            key={feature}
                            className="text-sm text-muted flex items-start gap-2.5 font-[family-name:var(--font-sans)]"
                          >
                            <span className="w-1 h-1 bg-green rounded-full shrink-0 mt-2 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                            <span>{feature}</span>
                          </p>
                        ))}
                      </div>

                      {/* Review */}
                      {product.review && (
                        <div className="relative border-l-2 border-green/30 pl-6 mb-8 max-w-xl">
                          <span
                            className="absolute -left-2.5 top-0 text-5xl text-green/30 font-[family-name:var(--font-serif)] leading-none select-none"
                            aria-hidden="true"
                          >
                            &ldquo;
                          </span>
                          <p className="text-sm text-body/90 italic font-[family-name:var(--font-serif)] leading-relaxed">
                            {product.review.quote}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-mono mt-3">
                            {product.review.author}
                          </p>
                        </div>
                      )}

                      {!product.review && product.statusNote && (
                        <div className="border-l-2 border-border pl-6 mb-8 max-w-xl">
                          <p className="text-sm text-muted italic font-[family-name:var(--font-serif)] leading-relaxed">
                            {product.statusNote}
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex flex-wrap items-center gap-3 py-1">
                        {product.appStoreUrl && (
                          <AppStoreBadge href={product.appStoreUrl} />
                        )}
                        {product.externalUrl && (
                          <a
                            href={product.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                          >
                            {product.externalLabel}
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Closing CTA */}
    <section className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-4 font-[family-name:var(--font-sans)] justify-center">
            Build with us
          </p>
          <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
            Want something like this for your business?
          </h2>
          <p className="text-body text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            We take on a small number of client projects each year. Apps,
            platforms, and hardware that solve a specific problem. If that
            sounds like what you need, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link href="/contact" className="btn-ghost">
              Start a conversation
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline py-2"
            >
              See our services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
