import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

const products = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston" as const,
    type: "APP",
    description:
      "75+ professionally narrated ghost stories tied to real Charleston locations. Audio, photos, and GPS-tagged spots across the Lowcountry.",
    price: "$4.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    type: "APP",
    description:
      "55+ narrated tales beneath Savannah's moss-draped oaks. From downtown to Ossabaw Island and Hardeeville, SC.",
    price: "$3.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    linkLabel: "App Store",
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    type: "APP",
    description:
      "Place a glass cartridge fuse on your phone screen for instant pass/fail continuity testing. No extra hardware needed.",
    price: "Free",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    type: "PLATFORM",
    description:
      "A purpose-built community platform for churches. Events, groups, volunteers, and giving — all in one place.",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
  },
  {
    name: "VikingSense",
    mockup: "vikingsense" as const,
    type: "HARDWARE",
    description:
      "Precision climate monitoring hardware and software. Exclusive distribution through MSI-Viking Gage.",
    link: "https://vikingsense.com",
    linkLabel: "vikingsense.com",
  },
];

const services = [
  { title: "iOS Development", description: "Native apps built with Swift and SwiftUI for performance and polish." },
  { title: "Windows Development", description: "Desktop applications and tools for the Windows ecosystem." },
  { title: "Web Development", description: "Modern, responsive web applications with cutting-edge frameworks." },
  { title: "App Store Optimization", description: "Data-driven strategies to maximize visibility and downloads." },
  { title: "Systems Integration", description: "Bridging software, hardware, and third-party platforms." },
  { title: "Hardware Solutions", description: "Custom IoT and precision monitoring systems." },
];

const ecosystem = [
  {
    name: "WildTech Development",
    description: "Software & hardware solutions",
    href: "https://wildtechdev.com",
  },
  {
    name: "WildTech CHS",
    description: "Charleston\u2019s trusted technology service provider",
    href: "https://wildtechchs.com",
  },
  {
    name: "Churchd",
    description: "Church community platform",
    href: "https://churchd.com",
  },
  {
    name: "VikingSense",
    description: "Precision climate monitoring",
    href: "https://vikingsense.com",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
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
          <p className="mt-3 text-xs font-mono text-green tracking-widest animate-fade-in-up delay-300">
            Charleston, SC
          </p>
          <div className="mt-10 animate-fade-in-up delay-400">
            <Link href="/products" className="btn-ghost">
              See what we&apos;ve built &rarr;
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex items-center justify-center gap-0 text-muted font-mono text-xs animate-fade-in-up delay-500">
            <span>3 Apps Live</span>
            <span className="mx-4 w-px h-3 bg-border" />
            <span>5 Products</span>
            <span className="mx-4 w-px h-3 bg-border" />
            <span>Est. 2024</span>
          </div>
        </div>
      </section>

      {/* Products — grid */}
      <section className="relative py-16 sm:py-24 border-t border-border">
        {/* Section number */}
        <div className="absolute top-6 right-6 lg:right-12 text-[200px] leading-none font-[family-name:var(--font-serif)] text-heading pointer-events-none select-none opacity-[0.03]">
          01
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            What we build
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-14">
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`group relative bg-black p-7 sm:p-8 border border-transparent hover:border-green transition-colors duration-300 ${
                  i >= 3 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Number */}
                <span className="text-[48px] leading-none font-[family-name:var(--font-serif)] text-border group-hover:text-[#333] transition-colors duration-300 absolute top-5 left-7">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Type label */}
                <span className="absolute top-7 right-7 text-[10px] font-mono tracking-[0.2em] text-green">
                  {product.type}
                </span>

                {/* Mockup */}
                <div className="flex justify-center mt-14 mb-6">
                  <PhoneMockup product={product.mockup} size="small" />
                </div>

                <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading mb-3">
                  {product.name}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  {product.price && (
                    <span className="text-heading text-sm font-[family-name:var(--font-sans)]">
                      {product.price}
                    </span>
                  )}
                  {product.rating && (
                    <span className="text-[10px] text-muted font-mono">
                      {product.rating} ★
                    </span>
                  )}
                </div>

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

      {/* Services */}
      <section className="relative py-16 sm:py-24 border-t border-border">
        <div className="absolute top-6 right-6 lg:right-12 text-[200px] leading-none font-[family-name:var(--font-serif)] text-heading pointer-events-none select-none opacity-[0.03]">
          02
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-14">
            Services
          </h2>

          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border-b border-border py-5 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic text-heading transition-all duration-300 group-hover:translate-x-3 group-hover:text-green">
                    {service.title}
                  </h3>
                  {/* Arrow */}
                  <svg
                    className="w-4 h-4 text-muted transition-all duration-300 group-hover:rotate-45 group-hover:text-green shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                  </svg>
                </div>
                <div className="flex items-baseline justify-between mt-2 pl-1">
                  <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-xs text-green link-underline font-[family-name:var(--font-sans)] shrink-0 ml-6 hidden sm:inline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative py-16 sm:py-24 border-t border-border">
        <div className="absolute top-6 right-6 lg:right-12 text-[200px] leading-none font-[family-name:var(--font-serif)] text-heading pointer-events-none select-none opacity-[0.03]">
          03
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            One venture, four brands
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-14">
            The Ecosystem
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {ecosystem.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black p-8 sm:p-10 flex flex-col justify-between min-h-[140px]"
              >
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic text-heading group-hover:text-green transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted mt-3 font-[family-name:var(--font-sans)]">
                  {brand.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
