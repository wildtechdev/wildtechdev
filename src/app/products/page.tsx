import type { Metadata } from "next";
import PhoneMockup from "@/components/PhoneMockup";

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
    category: "Travel",
    status: "Live",
    price: "$4.99",
    rating: "5.0",
    description:
      "Walk through the Holy City's most haunted streets with over 75 professionally narrated ghost stories. Every tale is tied to a real Charleston location, from the Old City Jail to the Unitarian Church graveyard. Coverage extends beyond the peninsula to the beaches, forts, islands, and even Summerville and Moncks Corner.",
    features: [
      "Professional audio narratives",
      "Historical photographs",
      "GPS-tagged real Charleston locations",
      "Intuitive search",
      "Offline access",
      "Colonial hauntings, Civil War spirits, pirate legends, modern encounters",
    ],
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "Download on the App Store",
    review: null,
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    category: "Travel",
    status: "Live",
    price: "$3.99",
    rating: "5.0",
    description:
      "Uncover the haunted secrets beneath Savannah's moss-draped oaks and cobblestone streets with over 55 narrated tales. Coverage stretches from downtown Savannah to the mysterious shores of Ossabaw Island and the haunted corners of Hardeeville, SC. Historic photos and documents bring each story to life.",
    features: [
      "55+ ghost stories and growing",
      "Authentic audio narratives",
      "Extensive historic photos and documents",
      "Intuitive search",
      "Coverage beyond downtown",
      "206.5 MB · Age 9+",
    ],
    link: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    linkLabel: "Download on the App Store",
    review: {
      quote: "This app turned out to be the best tour we took on our girl's weekend to Savannah!",
      author: "Ghostnay",
    },
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    category: "Utilities",
    status: "Live",
    price: "Free",
    rating: null,
    description:
      "Your smartphone becomes a fuse continuity tester. Place any standard glass cartridge fuse across the screen and get instant pass/fail feedback using the phone's capacitive touch sensors. No multimeter needed. Works with automotive, household, and holiday light fuses.",
    features: [
      "Instant PASS/FAIL visual feedback",
      "Uses phone's capacitive touchscreen sensors",
      "Built-in demonstration image guide",
      "No extra hardware needed",
      "Small glass cartridge fuses",
      "No data collected from users",
    ],
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "Download on the App Store",
    review: {
      quote: "This is great. I was getting ready to throw out a bunch of Halloween lights and I tested and replaced a couple of the fuses and now the lights work.",
      author: "App Store Review",
    },
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    category: "Community",
    status: "In Development",
    price: null,
    rating: null,
    description:
      "A modern church community platform that brings congregations together. Event management, group communication, volunteer coordination, and giving — all in one place built for churches.",
    features: [
      "Event management",
      "Group communication",
      "Volunteer coordination",
      "Online giving",
    ],
    link: "https://churchd.com",
    linkLabel: "Visit churchd.com",
    review: null,
  },
  {
    name: "VikingSense",
    mockup: "vikingsense" as const,
    category: "Hardware",
    status: "Live",
    price: null,
    rating: null,
    description:
      "Precision climate monitoring hardware and software designed for environments where accuracy matters. Temperature, humidity, and environmental data with enterprise-grade reliability. Exclusive distribution through MSI-Viking Gage.",
    features: [
      "Precision sensors",
      "Real-time monitoring",
      "Enterprise dashboards",
      "MSI-Viking Gage distribution",
    ],
    link: "https://vikingsense.com",
    linkLabel: "Visit vikingsense.com",
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
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          What we build
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Products
        </h1>
        <p className="text-body text-lg mb-20 animate-fade-in-up delay-200">
          Software and hardware built to solve real-world problems.
        </p>

        <div className="space-y-0">
          {products.map((product) => (
            <article
              key={product.name}
              className="border-b border-border py-16 first:pt-0"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Mockup -- above on mobile, right on desktop */}
                <div className="flex justify-center lg:order-2 lg:flex-shrink-0 lg:self-start">
                  <PhoneMockup product={product.mockup} />
                </div>

                {/* Text content */}
                <div className="flex-1 lg:order-1 min-w-0">
                  <div className="flex items-center gap-4 mb-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-mono">
                      {product.category}
                    </p>
                    <span className="text-border">/</span>
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
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-green text-black text-sm font-medium tracking-wide hover:bg-green-dark transition-colors font-[family-name:var(--font-sans)]"
                    >
                      {product.linkLabel} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
