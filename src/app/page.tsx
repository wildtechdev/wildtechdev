import Link from "next/link";

const products = [
  {
    name: "Spirits of Charleston",
    description:
      "Charleston's ghost stories come alive with 75+ stories and immersive audio narration. Explore haunted history like never before.",
    price: "$4.99",
    category: "Travel",
    status: "Live",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
  },
  {
    name: "Spirits of Savannah",
    description:
      "Discover the haunted side of Savannah, GA with curated ghost stories and guided audio experiences.",
    category: "Travel",
    status: "Live",
    link: null,
    linkLabel: null,
  },
  {
    name: "EZ Fuse Tester",
    description:
      "Turn your smartphone into a precision fuse continuity tester. Fast, accurate, and always in your pocket.",
    category: "Utilities",
    status: "Live",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
  },
  {
    name: "Churchd",
    description:
      "A modern church community platform connecting congregations with the tools they need to grow together.",
    category: "Community",
    status: "In Development",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
  },
  {
    name: "VikingSense",
    description:
      "Precision climate monitoring hardware and software with exclusive distribution through MSI-Viking Gage.",
    category: "Hardware",
    status: "Live",
    link: "https://vikingsense.com",
    linkLabel: "vikingsense.com",
  },
];

const services = [
  {
    title: "iOS Development",
    description: "Native iOS apps built with Swift and SwiftUI for performance and polish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Windows Development",
    description: "Desktop applications and tools for the Windows ecosystem.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications with cutting-edge frameworks.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "App Store Optimization",
    description: "Data-driven strategies to maximize visibility and downloads on the App Store.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    description: "Seamless integration of software, hardware, and third-party platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Hardware Solutions",
    description: "Custom hardware design and IoT solutions for precision monitoring and control.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "WildTech CHS installed our Nest cam system flawlessly. Professional, clean work and they walked us through everything. Couldn't be happier with the results.",
    author: "Charleston Homeowner",
  },
  {
    quote:
      "They designed and installed our complete Verkada security system with LPR and facial recognition, plus integrated digital signage across our facility. Truly next-level.",
    author: "Commercial Client",
  },
  {
    quote:
      "Our Starlink installation was quick and reliable. WildTech CHS knew exactly how to position everything for the best signal. Outstanding service from start to finish.",
    author: "Rural Property Owner",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span className="text-white">WildTech</span>{" "}
            <span className="text-electric">Development</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Turning bold ideas into powerful software and hardware solutions
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-electric hover:bg-electric-dark text-white font-semibold transition-all hover:scale-105"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-orange text-orange hover:bg-orange hover:text-white font-semibold transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What We <span className="text-electric">Build</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              From mobile apps to precision hardware, we create products that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-charcoal-light border border-white/10 rounded-xl p-6 hover:border-electric/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-electric/10 text-electric">
                    {product.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.status === "Live"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-orange/10 text-orange"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-electric font-semibold mb-3">{product.price}</p>
                )}
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-orange hover:text-orange-dark font-medium transition-colors"
                  >
                    {product.linkLabel}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our <span className="text-orange">Services</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              End-to-end development and integration services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-charcoal border border-white/10 rounded-xl p-6 hover:border-orange/50 transition-all hover:-translate-y-1"
              >
                <div className="text-electric mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our <span className="text-electric">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-charcoal-light border border-white/10 rounded-xl p-8 relative"
              >
                <svg
                  className="absolute top-6 left-6 w-8 h-8 text-electric/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 pt-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-electric font-semibold text-sm">&mdash; {t.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wildtechchs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-electric transition-colors"
            >
              More reviews at wildtechchs.com &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
