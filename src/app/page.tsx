import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import Counter from "@/components/Counter";
import Spotlight from "@/components/Spotlight";
import TechMarquee from "@/components/TechMarquee";
import HeroSpotlight from "@/components/HeroSpotlight";
import HomeProductCard, { type HomeProduct } from "@/components/HomeProductCard";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.wildtechdev.com",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://www.wildtechdev.com#organization",
  name: "WildTech Development",
  legalName: "WildTech Ventures, LLC",
  alternateName: ["WildTech", "WildTech Ventures"],
  url: "https://www.wildtechdev.com",
  logo: "https://www.wildtechdev.com/android-chrome-512x512.png",
  image:
    "https://www.wildtechdev.com/api/og?title=WildTech%20Development%20%E2%80%94%20Custom%20software%20and%20hardware%20from%20Charleston%2C%20SC&kind=WildTech%20Development",
  description:
    "Software and hardware studio in Charleston, South Carolina. Owner-operated by Will McCants. Custom iOS apps, web platforms, and precision IoT hardware for clients across the United States.",
  slogan:
    "Custom software, hardware, and integration from Charleston, SC.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Will McCants",
    alternateName: "William McCants",
    url: "https://www.wildtechdev.com/will-mccants",
  },
  employee: {
    "@type": "Person",
    name: "Will McCants",
    jobTitle: "Founder",
    url: "https://www.wildtechdev.com/will-mccants",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "SC",
    addressCountry: "US",
    postalCode: "29412",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Charleston Metropolitan Area",
    },
    {
      "@type": "State",
      name: "South Carolina",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 32.7765,
      longitude: -79.9311,
    },
    geoRadius: "5000000",
  },
  knowsAbout: [
    "iOS Development",
    "Swift",
    "SwiftUI",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "Hardware Engineering",
    "IoT",
    "Systems Integration",
    "App Store Optimization",
    "Custom Software Development",
    "Charleston SC Software Development",
  ],
  sameAs: [
    "https://churchd.com",
    "https://vikingsensors.com",
    "https://www.linkedin.com/in/willmccants/",
    "https://apps.apple.com/us/developer/wildtech-ventures-llc/id1718456894",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@wildtechdev.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@wildtechdev.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "press",
      email: "info@wildtechdev.com",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  priceRange: "$$-$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

const products: HomeProduct[] = [
  {
    name: "Spirits of Charleston",
    mockup: "spirits-charleston",
    type: "iOS App",
    description:
      "75+ narrated ghost stories tied to real Charleston locations, from the Old City Jail to the islands.",
    price: "$4.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    linkLabel: "App Store",
    accent: "amber",
    caseStudySlug: "spirits-of-charleston",
  },
  {
    name: "Spirits of Savannah",
    mockup: "spirits-savannah",
    type: "iOS App",
    description:
      "55+ haunted tales covering downtown Savannah to Ossabaw Island and Hardeeville, SC.",
    price: "$3.99",
    rating: "5.0",
    link: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    linkLabel: "App Store",
    accent: "teal",
    caseStudySlug: "spirits-of-savannah",
  },
  {
    name: "EZ Fuse Tester",
    mockup: "ez-fuse",
    type: "iOS App",
    description:
      "Test any glass fuse with your phone's touchscreen. No tools needed.",
    price: "Free",
    link: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    linkLabel: "App Store",
    accent: "green",
    caseStudySlug: "ez-fuse-tester",
  },
  {
    name: "We The People: Your Rights",
    mockup: "we-the-people",
    type: "iOS App",
    description:
      "Learn the Constitution, Bill of Rights, and your rights in real-life situations. Plain English. Nonpartisan. No ads.",
    price: "Free",
    link: "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
    linkLabel: "App Store",
    accent: "blue",
    caseStudySlug: "we-the-people-your-rights",
  },
  {
    name: "Churchd",
    mockup: "churchd",
    type: "Platform",
    description:
      "A community platform built specifically for churches. Profiles, events, groups, and more.",
    link: "https://churchd.com",
    linkLabel: "churchd.com",
    accent: "indigo",
    caseStudySlug: "churchd",
  },
  {
    name: "Viking Sensors",
    mockup: "vikingsense",
    type: "Hardware",
    description:
      "Precision climate monitoring for calibration labs, server rooms, and cleanrooms.",
    link: "https://vikingsensors.com",
    linkLabel: "vikingsensors.com",
    accent: "red",
    caseStudySlug: "viking-sensors",
  },
];

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

const testimonials = [
  {
    quote:
      "Even my ghost-averse daughter stayed highly engaged as we used the app to fill gaps in our vacation itinerary. It is easy to navigate, cheaper than the in-person ghost tours, and certainly more convenient.",
    author: "App Store Review",
    product: "Spirits of Charleston",
  },
  {
    quote:
      "This app turned out to be the best tour we took on our girl's weekend to Savannah!",
    author: "Ghostnay",
    product: "Spirits of Savannah",
  },
  {
    quote:
      "This is great. I was getting ready to throw out a bunch of Halloween lights and I tested and replaced a couple of the fuses and now the lights work.",
    author: "App Store Review",
    product: "EZ Fuse Tester",
  },
];

const industries = [
  "Industrial metrology",
  "Precision manufacturing",
  "E-commerce",
  "Tourism & hospitality",
  "Faith communities",
  "Consumer mobile",
];

const process = [
  {
    label: "01",
    title: "Discover",
    description:
      "We start with a conversation about what you are trying to solve and who you are solving it for.",
  },
  {
    label: "02",
    title: "Design",
    description:
      "Architecture, user flows, and visual design that respect both your goals and your users.",
  },
  {
    label: "03",
    title: "Build",
    description:
      "Production code shipped in tight cycles, with regular check-ins so nothing surprises you at the end.",
  },
  {
    label: "04",
    title: "Ship",
    description:
      "Launch, deploy, and submit. We handle App Store, Play Store, Vercel, AWS, whatever the path requires.",
  },
  {
    label: "05",
    title: "Iterate",
    description:
      "Real users find things we missed. We stick around to fix, refine, and add what comes next.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <HeroSpotlight />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(34,197,94,0.1) 35%, transparent 70%)",
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

          <p className="mt-10 text-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Custom iOS apps, web platforms, and precision IoT hardware. Built
            in Charleston by the same people who ship them.
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
            <Magnetic>
              <Link
                href="/products"
                className="btn-ghost w-full sm:w-auto"
                data-cursor-label="View"
              >
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
            </Magnetic>
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
              <Counter to={4} className="text-heading text-base" />
              <span className="text-muted text-xs uppercase tracking-widest">
                Apps Live
              </span>
            </span>
            <span className="hidden sm:block mx-6 w-px h-3 bg-border-strong" />
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              <Counter to={6} className="text-heading text-base" />
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

          <div className="mt-14 flex justify-center animate-fade-in-up delay-700">
            <div className="divider-fade-short" />
          </div>

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

      {/* Tech marquee */}
      <TechMarquee />

      {/* Industries */}
      <section className="relative py-14 sm:py-16 border-b border-border bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono shrink-0 lg:border-r lg:border-border lg:pr-12">
              We have shipped for
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="text-sm text-body font-[family-name:var(--font-sans)]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-20 sm:py-28 border-t border-border bg-gradient-to-b from-black via-black to-black overflow-hidden">
        <div className="absolute -top-8 right-6 lg:right-12 text-[260px] leading-none font-[family-name:var(--font-serif)] italic text-heading pointer-events-none select-none opacity-[0.07]">
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
              <p className="text-muted text-sm mt-3 max-w-md">
                The products WildTech owns. Private client work is covered
                under NDA.
              </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.map((product, i) => (
              <ScrollReveal
                key={product.name}
                delay={i * 80}
                className="h-full"
              >
                <HomeProductCard product={product} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] justify-center">
              From real users
            </p>
            <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading">
              People are talking
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Spotlight className="bg-surface p-8 lg:p-10 h-full flex flex-col">
                  <div className="relative">
                    <span
                      className="absolute -top-4 -left-2 text-7xl text-green/20 font-[family-name:var(--font-serif)] leading-none select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p className="relative text-body text-base leading-relaxed font-[family-name:var(--font-serif)] italic pl-4">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-auto pt-8 flex items-baseline justify-between gap-4 border-t border-border mt-8">
                    <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
                      {t.author}
                    </p>
                    <p className="text-xs text-green font-[family-name:var(--font-sans)]">
                      {t.product}
                    </p>
                  </div>
                </Spotlight>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 sm:py-28 border-t border-border overflow-hidden">
        <div className="absolute -top-8 right-6 lg:right-12 text-[260px] leading-none font-[family-name:var(--font-serif)] italic text-heading pointer-events-none select-none opacity-[0.07]">
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

      {/* Process */}
      <section className="relative py-24 sm:py-32 border-t border-border overflow-hidden bg-gradient-to-b from-black via-black to-black">
        <div className="absolute -top-8 right-6 lg:right-12 text-[260px] leading-none font-[family-name:var(--font-serif)] italic text-heading pointer-events-none select-none opacity-[0.07]">
          03
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              How we work
            </p>
            <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading">
              Process
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {process.map((step, i) => (
                <ScrollReveal key={step.label} delay={i * 80}>
                  <div
                    className={`relative flex items-start gap-6 ${
                      i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                    } sm:items-center`}
                  >
                    <div className="relative shrink-0 z-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-green/40">
                        <span className="absolute inset-0 rounded-full bg-green/10 animate-glow-pulse" />
                        <span className="relative text-[11.5px] font-mono text-green tracking-wider">
                          {step.label}
                        </span>
                      </span>
                    </div>

                    <div className="flex-1 sm:max-w-[42%]">
                      <h3 className="text-2xl font-[family-name:var(--font-serif)] italic text-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-28 sm:py-36 border-t border-border overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-4 font-[family-name:var(--font-sans)] justify-center">
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-6xl font-[family-name:var(--font-serif)] italic text-heading leading-tight mb-6">
              Have something to build?
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether it is an iOS app, a web platform, or precision hardware,
              we would love to hear what you are working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Magnetic>
                <Link
                  href="/contact"
                  className="btn-ghost"
                  data-cursor-label="Hello"
                >
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
              </Magnetic>
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
