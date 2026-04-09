import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const products = [
  {
    name: "Spirits of Charleston",
    category: "Travel",
    description:
      "75+ ghost stories with immersive audio narration. Walk through Charleston's most haunted streets and uncover the supernatural history of the Holy City.",
    price: "$4.99",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
  },
  {
    name: "Spirits of Savannah",
    category: "Travel",
    description:
      "Curated ghost stories and guided audio experiences from Savannah, GA. Explore the haunted side of one of America's most storied cities.",
    link: null,
    linkLabel: null,
  },
  {
    name: "EZ Fuse Tester",
    category: "Utilities",
    description:
      "Turn your smartphone into a precision fuse continuity tester. No extra hardware needed — fast, accurate, and always in your pocket.",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
  },
  {
    name: "Churchd",
    category: "Community",
    description:
      "A modern church community platform. Event management, group communication, volunteer coordination, and giving — built for congregations.",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
  },
  {
    name: "VikingSense",
    category: "Hardware",
    description:
      "Precision climate monitoring hardware and software. Enterprise-grade reliability with exclusive distribution through MSI-Viking Gage.",
    link: "https://vikingsense.com",
    linkLabel: "vikingsense.com",
  },
];

const services = [
  { title: "iOS Development", description: "Native apps built with Swift and SwiftUI" },
  { title: "Windows Development", description: "Desktop applications for the Windows ecosystem" },
  { title: "Web Development", description: "Modern, responsive web applications" },
  { title: "App Store Optimization", description: "Data-driven strategies for visibility and downloads" },
  { title: "Systems Integration", description: "Bridging software, hardware, and platforms" },
  { title: "Hardware Solutions", description: "Custom IoT and precision monitoring systems" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="animate-fade-in-up">
            <span className="block text-[clamp(3.5rem,10vw,7rem)] font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] tracking-tight">
              WildTech
            </span>
            <span className="block text-lg sm:text-xl tracking-[0.3em] uppercase text-body mt-4 font-[family-name:var(--font-sans)] font-light">
              Development
            </span>
          </h1>
          <p className="mt-8 text-body text-base sm:text-lg max-w-lg mx-auto animate-fade-in-up delay-200">
            Turning bold ideas into powerful software and hardware solutions
          </p>
          <div className="mt-12 animate-fade-in-up delay-400">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-green text-black text-sm font-medium tracking-wide hover:bg-green-dark transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products — horizontal scroll */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            What we build
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-16">
            Products
          </h2>
        </div>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-0 min-w-max px-6 lg:px-8">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`w-[85vw] sm:w-[60vw] lg:w-[40vw] flex-shrink-0 px-6 lg:px-10 py-10 ${
                  i < products.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-mono mb-4">
                  {product.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                  {product.name}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-6 max-w-sm">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-heading text-sm font-[family-name:var(--font-sans)] mb-4">
                    {product.price}
                  </p>
                )}
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
                  >
                    {product.linkLabel} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — minimal list */}
      <section className="py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-16">
            Services
          </h2>

          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border-b border-border py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 cursor-default"
              >
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic text-heading transition-all duration-300 group-hover:translate-x-3 group-hover:text-green">
                  {service.title}
                </h3>
                <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="border-t border-border">
        <Testimonials />
      </div>
    </>
  );
}
