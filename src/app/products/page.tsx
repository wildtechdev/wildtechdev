import type { Metadata } from "next";

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
    category: "Travel",
    status: "Live",
    description:
      "Charleston's ghost stories come alive with 75+ stories and immersive audio narration. Walk through the Holy City's most haunted streets with professionally narrated tales of the supernatural. From the Old City Jail to the Unitarian Church graveyard, every story is tied to a real location.",
    price: "$4.99",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "Download on the App Store",
    features: ["75+ ghost stories", "Professional audio narration", "Location-based experiences", "Offline access"],
  },
  {
    name: "Spirits of Savannah",
    category: "Travel",
    status: "Live",
    description:
      "Explore the haunted side of Savannah, Georgia. Curated ghost stories and guided audio experiences bring the city's dark history to life, from its colonial cemeteries to its infamous squares.",
    link: null,
    linkLabel: null,
    features: ["Savannah ghost stories", "Audio-guided tours", "Historical context", "Immersive experience"],
  },
  {
    name: "EZ Fuse Tester",
    category: "Utilities",
    status: "Live",
    description:
      "Transform your smartphone into a precision fuse continuity tester. No extra hardware needed — just your phone's built-in sensors. Perfect for automotive, home, and industrial fuse testing.",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "Download on the App Store",
    features: ["No extra hardware needed", "Instant continuity results", "Automotive & home fuses", "Simple one-tap testing"],
  },
  {
    name: "Churchd",
    category: "Community",
    status: "In Development",
    description:
      "A modern church community platform that brings congregations together. Event management, group communication, volunteer coordination, and giving — all in one place built for churches.",
    link: "https://churchd.com",
    linkLabel: "Visit churchd.com",
    features: ["Event management", "Group communication", "Volunteer coordination", "Online giving"],
  },
  {
    name: "VikingSense",
    category: "Hardware",
    status: "Live",
    description:
      "Precision climate monitoring hardware and software designed for environments where accuracy matters. Temperature, humidity, and environmental data with enterprise-grade reliability. Exclusive distribution through MSI-Viking Gage.",
    link: "https://vikingsense.com",
    linkLabel: "Visit vikingsense.com",
    features: ["Precision sensors", "Real-time monitoring", "Enterprise dashboards", "MSI-Viking Gage distribution"],
  },
];

export default function ProductsPage() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-mono">
                  {product.category}
                </p>
                <span className="text-muted">/</span>
                <p className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                  product.status === "Live" ? "text-green" : "text-body"
                }`}>
                  {product.status}
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-5">
                {product.name}
              </h2>

              <p className="text-body leading-relaxed mb-8 max-w-2xl">
                {product.description}
              </p>

              {product.price && (
                <p className="text-heading text-lg font-[family-name:var(--font-sans)] mb-6">
                  {product.price}
                </p>
              )}

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8 max-w-md">
                {product.features.map((feature) => (
                  <p key={feature} className="text-sm text-muted flex items-center gap-2 font-[family-name:var(--font-sans)]">
                    <span className="w-1 h-1 bg-green rounded-full shrink-0" />
                    {feature}
                  </p>
                ))}
              </div>

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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
