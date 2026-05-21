import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston" as const,
    type: "iOS App",
    description:
      "75+ narrated ghost stories tied to real Charleston locations, from the Old City Jail to the islands.",
    price: "$4.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
    accent: "amber",
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    type: "iOS App",
    description:
      "55+ haunted tales covering downtown Savannah to Ossabaw Island and Hardeeville, SC.",
    price: "$3.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    linkLabel: "App Store",
    accent: "teal",
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    type: "iOS App",
    description:
      "Test any glass fuse with your phone's touchscreen. No tools needed.",
    price: "Free",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
    accent: "green",
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    type: "Platform",
    description:
      "A community platform built specifically for churches. Profiles, events, groups, and more.",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
    accent: "indigo",
  },
  {
    name: "Viking Sensors",
    mockup: "vikingsense" as const,
    type: "Hardware",
    description:
      "Precision climate monitoring for calibration labs, server rooms, and cleanrooms.",
    link: "https://vikingsense.com",
    linkLabel: "vikingsense.com",
    accent: "red",
  },
];

const accentTints: Record<string, string> = {
  amber: "hover:bg-amber-950/20",
  teal: "hover:bg-teal-950/20",
  green: "hover:bg-green-950/20",
  indigo: "hover:bg-indigo-950/20",
  red: "hover:bg-red-950/20",
};

const services = [
  {
    title: "iOS Development",
    description:
      "Native apps built with Swift and SwiftUI, from first sketch to App Store launch.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "Windows Development",
    description:
      "Desktop tools and utilities for productivity, data processing, and business operations.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
        />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive sites and web apps built with Next.js, React, and Tailwind.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "App Store Optimization",
    description:
      "Keyword strategy, screenshot design, and review management to increase downloads.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    description:
      "Connecting software, hardware, and third-party platforms into one clean workflow.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.95 3.033 2.07 4.017v0a.64.64 0 01.142.79 7.48 7.48 0 01-1.17 1.622c1.768.96 3.83 1.016 5.635.134a.64.64 0 01.673.053 7.49 7.49 0 002.378 1.236.64.64 0 01.437.584v0c0 .385-.18.738-.434 1.004-.258.27-.566.596-.566 1.008 0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.412-.308-.738-.566-1.008a1.407 1.407 0 01-.434-1.004v0a.64.64 0 01.437-.584 7.49 7.49 0 002.378-1.236.64.64 0 01.673-.053c1.805.882 3.867.826 5.635-.134a7.48 7.48 0 01-1.17-1.622.64.64 0 01.142-.79c1.12-.984 1.884-2.404 2.07-4.017a48.39 48.39 0 01-4.163.3.64.64 0 01-.657-.643v0c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0"
        />
      </svg>
    ),
  },
  {
    title: "Hardware Solutions",
    description:
      "Sensor networks, embedded systems, and IoT monitoring backed by reliable software.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
        />
      </svg>
    ),
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <div
      className={`group relative bg-[#0a0c10] p-8 border border-transparent transition-all duration-500 hover:border-green/40 hover:-translate-y-1 ${
        accentTints[product.accent]
      }`}
    >
      {/* Index number */}
      <span className="absolute top-5 left-7 text-[44px] leading-none font-[family-name:var(--font-serif)] italic text-faint group-hover:text-green/40 transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute top-7 right-7 text-[10px] font-mono tracking-[0.2em] text-green/80 uppercase">
        {product.type}
      </span>

      <div className="flex justify-center mt-14 mb-6 transition-transform duration-700 group-hover:-translate-y-1">
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
          <span className="text-[10px] text-muted font-mono flex items-center gap-1">
            <span className="text-green">★</span>
            {product.rating}
          </span>
        )}
      </div>

      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-green text-sm font-[family-name:var(--font-sans)] link-underline"
        >
          {product.linkLabel}
          <svg
            className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
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
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Layered hero glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.32) 0%, rgba(34,197,94,0.12) 35%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="relative">
            <span className="relative block text-[clamp(3.5rem,10vw,7.5rem)] font-[family-name:var(--font-serif)] italic text-heading leading-[0.92] tracking-tight animate-hero-reveal">
              WildTech
            </span>
            <span className="relative block text-lg sm:text-xl tracking-[0.35em] uppercase text-body mt-5 font-[family-name:var(--font-sans)] font-light animate-hero-reveal delay-200">
              Development
            </span>
          </h1>

          <p className="mt-10 text-body text-base sm:text-lg max-w-md mx-auto leading-relaxed animate-fade-in-up delay-400">
            We build apps, platforms, and hardware that solve real problems.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 animate-fade-in-up delay-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            <p className="text-xs font-mono text-green tracking-[0.25em]">
              CHARLESTON, SC
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-500">
            <Link href="/products" className="btn-ghost w-full sm:w-auto">
              See what we built
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
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline w-full sm:w-auto justify-center py-2"
            >
              Start a project
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0 font-mono text-sm animate-fade-in-up delay-600">
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading text-base">3</span>
              <span className="text-muted text-xs uppercase tracking-widest">
                Apps Live
              </span>
            </span>
            <span className="hidden sm:block mx-6 w-px h-3 bg-border-strong" />
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading text-base">5</span>
              <span className="text-muted text-xs uppercase tracking-widest">
                Products
              </span>
            </span>
            <span className="hidden sm:block mx-6 w-px h-3 bg-border-strong" />
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading text-base">2024</span>
              <span className="text-muted text-xs uppercase tracking-widest">
                Est.
              </span>
            </span>
          </div>

          {/* Gradient rule */}
          <div className="mt-14 flex justify-center animate-fade-in-up delay-700">
            <div className="divider-fade-short" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 hidden sm:flex flex-col items-center gap-2 animate-fade-in-up delay-700">
            <span className="text-[9px] font-mono tracking-[0.3em] text-faint uppercase">
              Scroll
            </span>
            <svg
              className="w-4 h-4 text-faint animate-bob"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-20 sm:py-28 border-t border-border bg-gradient-to-b from-[#06070a] via-[#080a0e] to-[#06070a] overflow-hidden">
        {/* Giant section number */}
        <div className="absolute -top-8 right-6 lg:right-12 text-[260px] leading-none font-[family-name:var(--font-serif)] italic text-heading pointer-events-none select-none opacity-[0.04]">
          01
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
            <div>
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                What we build
              </p>
              <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading">
                Products
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm text-body hover:text-green transition-colors duration-300 self-start sm:self-end"
            >
              View all
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.slice(0, 3).map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <ProductCard product={product} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-px">
            {products.slice(3).map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <ProductCard product={product} index={i + 3} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 sm:py-28 border-t border-border overflow-hidden">
        <div className="absolute -top-8 right-6 lg:right-12 text-[260px] leading-none font-[family-name:var(--font-serif)] italic text-heading pointer-events-none select-none opacity-[0.04]">
          02
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
            <div>
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                What we do
              </p>
              <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading">
                Services
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-body hover:text-green transition-colors duration-300 self-start sm:self-end"
            >
              View all
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>

          <div className="border-t border-border">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <Link
                  href="/services"
                  className="group flex items-center justify-between gap-6 border-b border-border py-6 relative overflow-hidden"
                >
                  {/* Hover bg sweep */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-green/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center gap-5 flex-1 min-w-0">
                    <span className="text-faint group-hover:text-green transition-colors duration-500 shrink-0">
                      {service.icon}
                    </span>
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                      <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-sans)] font-semibold text-heading transition-all duration-500 group-hover:translate-x-1 group-hover:text-green shrink-0">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted group-hover:text-body transition-colors duration-500 font-[family-name:var(--font-sans)]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="relative w-4 h-4 text-faint shrink-0 transition-all duration-500 group-hover:text-green group-hover:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                    />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-4 font-[family-name:var(--font-sans)] justify-center">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading leading-tight mb-6">
              Have something to build?
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether it is an iOS app, a web platform, or precision hardware,
              we would love to hear what you are working on.
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
                href="/will-mccants"
                className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline py-2"
              >
                Meet the founder
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
