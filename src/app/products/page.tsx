import type { Metadata } from "next";
import PhoneMockup from "@/components/PhoneMockup";
import AppStoreBadge from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore WildTech Development products: Spirits of Charleston, Spirits of Savannah, EZ Fuse Tester, Churchd, and VikingSense.",
  openGraph: {
    title: "Products | WildTech Development",
    description:
      "iOS apps, community platforms, and precision hardware from WildTech Development.",
  },
};

const products = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston" as const,
    status: "Live",
    price: "$4.99",
    rating: "5.0",
    accentColor: "border-l-amber-700/30",
    description:
      "Walk through the Holy City\u2019s most haunted streets with over 75 professionally narrated ghost stories. Every tale is tied to a real Charleston location, from the Old City Jail to the Unitarian Church graveyard. Audio narration, historical photographs, and GPS-tagged locations make this the most comprehensive ghost experience in the Lowcountry. Featured categories include colonial hauntings, Civil War spirits, pirate legends, and modern-day encounters.",
    features: [
      "Professional audio narratives",
      "Historical photographs",
      "GPS-tagged real Charleston locations",
      "Intuitive search",
      "Offline access",
      "Coverage: peninsula, beaches, forts, islands, Summerville, Moncks Corner",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote: "Even my ghost-averse daughter stayed highly engaged as we used the app to fill gaps in our vacation itinerary. It is easy to navigate, cheaper than the in-person ghost tours, and certainly more convenient.",
      author: "App Store Review",
    },
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    status: "Live",
    price: "$3.99",
    rating: "5.0",
    accentColor: "border-l-teal-600/30",
    description:
      "The haunted side of Savannah comes alive through curated ghost stories and guided audio experiences. From the colonial cemeteries to the infamous squares, explore the dark history of one of America\u2019s most storied cities.",
    features: [
      "55+ ghost stories and growing",
      "Authentic audio narratives",
      "Extensive historic photos and documents",
      "Intuitive search",
      "Coverage beyond downtown to Ossabaw Island and Hardeeville, SC",
      "206.5 MB \u00b7 Age 9+",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote: "This app turned out to be the best tour we took on our girl\u2019s weekend to Savannah!",
      author: "Ghostnay",
    },
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    status: "Live",
    price: "Free",
    rating: null,
    accentColor: "border-l-green/30",
    description:
      "Your smartphone becomes a precision fuse continuity tester. Place any standard glass cartridge fuse on the screen and get instant pass/fail feedback using your phone\u2019s built-in capacitive sensors. No multimeter needed. Works with automotive, home, and holiday light fuses.",
    features: [
      "Instant PASS/FAIL visual feedback",
      "Uses phone\u2019s capacitive touchscreen sensors",
      "Built-in demonstration image guide",
      "No extra hardware needed",
      "Works with small glass cartridge fuses",
      "No data collected from users",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    externalUrl: null,
    externalLabel: null,
    review: {
      quote: "This is great. I was getting ready to throw out a bunch of Halloween lights and I tested and replaced a couple of the fuses and now the lights work.",
      author: "App Store Review",
    },
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    status: "In Development",
    price: null,
    rating: null,
    accentColor: "border-l-indigo-500/30",
    description:
      "A purpose-built community platform for churches. Member profiles, event management, group communication, volunteer coordination, digital bulletins, and sermon archives, all in one place. Currently in active development with profile tabs, post feeds, and community features already designed and prototyped.",
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
  },
  {
    name: "VikingSense",
    mockup: "vikingsense" as const,
    status: "Live",
    price: null,
    rating: null,
    accentColor: "border-l-red-600/30",
    description:
      "Precision climate monitoring hardware paired with intelligent software. Real-time temperature, humidity, and environmental data with enterprise-grade reliability. Purpose-built for environments where accuracy matters: calibration labs, server rooms, warehouses, and cleanrooms. Exclusively distributed through MSI-Viking Gage.",
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
  },
];

function StarRating({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-green" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-muted font-mono">{rating}</span>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          What we build
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Products
        </h1>
        <p className="text-body text-lg mb-16 animate-fade-in-up delay-200">
          Software and hardware built to solve real-world problems.
        </p>

        <div className="space-y-0">
          {products.map((product, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={product.name}
                className={`border-b border-border border-l-[4px] ${product.accentColor} py-14 pl-8 first:pt-0`}
              >
                <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Mockup */}
                  <div className={`flex justify-center lg:flex-shrink-0 lg:self-start ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <PhoneMockup product={product.mockup} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 min-w-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <p className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                        product.status === "Live" ? "text-green" : "text-body"
                      }`}>
                        {product.status}
                      </p>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                      {product.name}
                    </h2>

                    {/* Price & rating */}
                    <div className="flex items-center gap-4 mb-6">
                      {product.price && (
                        <span className="text-heading text-lg font-[family-name:var(--font-sans)]">
                          {product.price}
                        </span>
                      )}
                      {product.rating && <StarRating rating={product.rating} />}
                    </div>

                    <p className="text-body leading-relaxed mb-8 max-w-xl">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                      {product.features.map((feature) => (
                        <p key={feature} className="text-sm text-muted flex items-start gap-2 font-[family-name:var(--font-sans)]">
                          <span className="w-1 h-1 bg-green rounded-full shrink-0 mt-1.5" />
                          {feature}
                        </p>
                      ))}
                    </div>

                    {/* Review */}
                    {product.review && (
                      <div className="border-l border-border pl-5 mb-8">
                        <p className="text-sm text-body/80 italic font-[family-name:var(--font-serif)] leading-relaxed">
                          &ldquo;{product.review.quote}&rdquo;
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono mt-2">
                          {product.review.author}
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4">
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
                          {product.externalLabel} &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
