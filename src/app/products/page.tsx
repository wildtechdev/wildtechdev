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
    description:
      "Charleston's ghost stories come alive with 75+ stories and immersive audio narration. Walk through the Holy City's most haunted streets with professionally narrated tales of the supernatural. From the Old City Jail to the Unitarian Church graveyard, every story is tied to a real location.",
    price: "$4.99",
    category: "Travel",
    status: "Live" as const,
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "Download on the App Store",
    features: ["75+ ghost stories", "Professional audio narration", "Location-based experiences", "Offline access"],
  },
  {
    name: "Spirits of Savannah",
    description:
      "Explore the haunted side of Savannah, Georgia. Curated ghost stories and guided audio experiences bring the city's dark history to life, from its colonial cemeteries to its infamous squares.",
    category: "Travel",
    status: "Live" as const,
    link: null,
    linkLabel: null,
    features: ["Savannah ghost stories", "Audio-guided tours", "Historical context", "Immersive experience"],
  },
  {
    name: "EZ Fuse Tester",
    description:
      "Transform your smartphone into a precision fuse continuity tester. No extra hardware needed — just your phone's built-in sensors. Perfect for automotive, home, and industrial fuse testing.",
    category: "Utilities",
    status: "Live" as const,
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "Download on the App Store",
    features: ["No extra hardware needed", "Instant continuity results", "Automotive & home fuses", "Simple one-tap testing"],
  },
  {
    name: "Churchd",
    description:
      "A modern church community platform that brings congregations together. Event management, group communication, volunteer coordination, and giving — all in one place built for churches.",
    category: "Community",
    status: "In Development" as const,
    link: "https://churchd.com",
    linkLabel: "Visit churchd.com",
    features: ["Event management", "Group communication", "Volunteer coordination", "Online giving"],
  },
  {
    name: "VikingSense",
    description:
      "Precision climate monitoring hardware and software designed for environments where accuracy matters. Temperature, humidity, and environmental data with enterprise-grade reliability. Exclusive distribution through MSI-Viking Gage.",
    category: "Hardware",
    status: "Live" as const,
    link: "https://vikingsense.com",
    linkLabel: "Visit vikingsense.com",
    features: ["Precision sensors", "Real-time monitoring", "Enterprise dashboards", "MSI-Viking Gage distribution"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our <span className="text-electric">Products</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Software and hardware products built to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-charcoal-light border border-white/10 rounded-xl p-8 hover:border-electric/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-electric/10 text-electric">
                    {product.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      product.status === "Live"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-orange/10 text-orange"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">{product.name}</h2>
                <p className="text-slate-400 leading-relaxed mb-5">{product.description}</p>

                {product.price && (
                  <p className="text-2xl font-bold text-electric mb-5">{product.price}</p>
                )}

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-electric shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-orange hover:bg-orange-dark text-white font-semibold text-sm transition-all hover:scale-105"
                  >
                    {product.linkLabel}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
