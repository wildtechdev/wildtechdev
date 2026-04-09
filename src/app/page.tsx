import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston" as const,
    type: "APP",
    description: "75+ narrated ghost stories tied to real Charleston locations, from the Old City Jail to the islands.",
    price: "$4.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
    hoverTint: "hover:bg-amber-950/[0.03]",
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah" as const,
    type: "APP",
    description: "55+ haunted tales covering downtown Savannah to Ossabaw Island and Hardeeville, SC.",
    price: "$3.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    linkLabel: "App Store",
    hoverTint: "hover:bg-teal-950/[0.03]",
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse" as const,
    type: "APP",
    description: "Test any glass fuse with your phone's touchscreen. No tools needed.",
    price: "Free",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
    hoverTint: "hover:bg-green-950/[0.03]",
  },
  {
    name: "Churchd",
    mockup: "churchd" as const,
    type: "PLATFORM",
    description: "A community platform built specifically for churches. Profiles, events, groups, and more.",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
    hoverTint: "hover:bg-indigo-950/[0.03]",
  },
  {
    name: "VikingSense",
    mockup: "vikingsense" as const,
    type: "HARDWARE",
    description: "Precision climate monitoring for calibration labs, server rooms, and cleanrooms.",
    link: "https://vikingsense.com",
    linkLabel: "vikingsense.com",
    hoverTint: "hover:bg-red-950/[0.03]",
  },
];

const services = [
  {
    title: "iOS Development",
    description: "Native apps built with Swift and SwiftUI, from first sketch to App Store launch.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Windows Development",
    description: "Desktop tools and utilities for productivity, data processing, and business operations.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Fast, responsive sites and web apps built with Next.js, React, and Tailwind.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "App Store Optimization",
    description: "Keyword strategy, screenshot design, and review management to increase downloads.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    description: "Connecting software, hardware, and third-party platforms into one clean workflow.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.95 3.033 2.07 4.017v0a.64.64 0 01.142.79 7.48 7.48 0 01-1.17 1.622c1.768.96 3.83 1.016 5.635.134a.64.64 0 01.673.053 7.49 7.49 0 002.378 1.236.64.64 0 01.437.584v0c0 .385-.18.738-.434 1.004-.258.27-.566.596-.566 1.008 0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.412-.308-.738-.566-1.008a1.407 1.407 0 01-.434-1.004v0a.64.64 0 01.437-.584 7.49 7.49 0 002.378-1.236.64.64 0 01.673-.053c1.805.882 3.867.826 5.635-.134a7.48 7.48 0 01-1.17-1.622.64.64 0 01.142-.79c1.12-.984 1.884-2.404 2.07-4.017a48.39 48.39 0 01-4.163.3.64.64 0 01-.657-.643v0c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0" />
      </svg>
    ),
  },
  {
    title: "Hardware Solutions",
    description: "Sensor networks, embedded systems, and IoT monitoring backed by reliable software.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
];

const ecosystem = [
  {
    name: "WildTech Development",
    description: "Software & hardware solutions",
    href: "https://wildtechdev.com",
    stat: "5 products",
    accentColor: "rgba(34,197,94,0.03)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: "WildTech CHS",
    description: "Charleston\u2019s trusted technology service provider",
    href: "https://wildtechchs.com",
    stat: "6 service areas",
    accentColor: "rgba(59,130,246,0.03)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Churchd",
    description: "Church community platform",
    href: "https://churchd.com",
    stat: "In development",
    accentColor: "rgba(99,102,241,0.03)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 0V12m0-6.75h0M12 12h0m0 0v6.75M12 12h6.75M12 12H5.25M12 18.75h0" />
      </svg>
    ),
  },
  {
    name: "VikingSense",
    description: "Precision climate monitoring",
    href: "https://vikingsense.com",
    stat: "MSI-Viking exclusive",
    accentColor: "rgba(239,68,68,0.03)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M18.364 5.636l-1.06 1.06M21 12h-1.5M18.364 18.364l-1.06-1.06M12 19.5V21M7.696 7.696l-1.06-1.06M6 12H4.5M7.696 16.304l-1.06 1.06M12 9a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="relative">
            {/* Glow behind WildTech */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green pointer-events-none animate-glow-pulse" />
            <span className="relative block text-[clamp(3.5rem,10vw,7rem)] font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] tracking-tight animate-hero-reveal">
              WildTech
            </span>
            <span className="relative block text-lg sm:text-xl tracking-[0.3em] uppercase text-body mt-4 font-[family-name:var(--font-sans)] font-light animate-hero-reveal delay-200">
              Development
            </span>
          </h1>
          <p className="mt-8 text-body text-base sm:text-lg max-w-lg mx-auto animate-fade-in-up delay-400">
            We build apps, platforms, and hardware that solve real problems.
          </p>
          <p className="mt-3 text-xs font-mono text-green tracking-widest animate-fade-in-up delay-400">
            Charleston, SC
          </p>
          <div className="mt-10 animate-fade-in-up delay-500">
            <Link href="/products" className="btn-ghost w-full sm:w-auto justify-center">
              See what we&apos;ve built &rarr;
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 font-mono text-sm animate-fade-in-up delay-600">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading">3</span>
              <span className="text-muted">Apps Live</span>
            </span>
            <span className="hidden sm:block mx-5 w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading">5</span>
              <span className="text-muted">Products</span>
            </span>
            <span className="hidden sm:block mx-5 w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <span className="text-heading">2024</span>
              <span className="text-muted">Est.</span>
            </span>
          </div>

          {/* Gradient rule */}
          <div className="mt-12 flex justify-center animate-fade-in-up delay-600">
            <div className="w-[60%] h-px" style={{ background: "linear-gradient(to right, transparent, #222, transparent)" }} />
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="mt-10 hidden sm:block animate-fade-in-up delay-600">
            <svg className="w-5 h-5 mx-auto text-[#333] animate-bob" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-16 sm:py-24 border-t border-border bg-[#050505]">
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

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.slice(0, 3).map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <div
                  className={`group relative bg-black p-7 sm:p-8 border border-transparent hover:border-green hover:-translate-y-1 transition-all duration-300 ${product.hoverTint}`}
                >
                  <span className="text-3xl sm:text-[48px] leading-none font-[family-name:var(--font-serif)] text-border group-hover:text-[#333] transition-colors duration-300 absolute top-5 left-7">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute top-7 right-7 text-[10px] font-mono tracking-[0.2em] text-green">
                    {product.type}
                  </span>
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
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row: 2 cards - stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-px">
            {products.slice(3).map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <div
                  className={`group relative bg-black p-7 sm:p-8 border border-transparent hover:border-green hover:-translate-y-1 transition-all duration-300 ${product.hoverTint}`}
                >
                  <span className="text-3xl sm:text-[48px] leading-none font-[family-name:var(--font-serif)] text-border group-hover:text-[#333] transition-colors duration-300 absolute top-5 left-7">
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <span className="absolute top-7 right-7 text-[10px] font-mono tracking-[0.2em] text-green">
                    {product.type}
                  </span>
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
              </ScrollReveal>
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
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group border-b border-border py-5 cursor-default">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[#333] group-hover:text-green group-hover:scale-110 transition-all duration-300 shrink-0 origin-center">
                        {service.icon}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-sans)] font-semibold text-heading transition-all duration-300 group-hover:translate-x-2 group-hover:text-green">
                        {service.title}
                      </h3>
                    </div>
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
                  <div className="flex items-baseline justify-between mt-2 pl-9">
                    <p className="text-xs sm:text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="text-xs text-green link-underline font-[family-name:var(--font-sans)] shrink-0 ml-6 hidden lg:inline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative py-16 sm:py-24 border-t border-border bg-[#050505]">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {ecosystem.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 100}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#050505] p-8 sm:p-10 flex flex-col justify-between min-h-[180px] overflow-hidden"
                  style={{ backgroundImage: `linear-gradient(to bottom, transparent 60%, ${brand.accentColor})` }}
                >
                  {/* Icon - inline on mobile, top-right on desktop */}
                  <span className="hidden lg:block absolute top-6 right-6 text-[#222] group-hover:text-green transition-colors duration-300">
                    {brand.icon}
                  </span>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading group-hover:text-green transition-colors duration-300 flex items-center gap-3">
                      {brand.name}
                      <span className="lg:hidden text-[#222] group-hover:text-green transition-colors duration-300">
                        {brand.icon}
                      </span>
                    </h3>
                    <p className="text-sm text-muted mt-3 font-[family-name:var(--font-sans)]">
                      {brand.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs font-mono tracking-[0.15em] text-green">
                      {brand.stat}
                    </p>
                    <svg className="w-4 h-4 text-transparent group-hover:text-green transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
