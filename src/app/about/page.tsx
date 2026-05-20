import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute: "About WildTech Development | Charleston, SC Software & Hardware",
  },
  description:
    "WildTech Development is the software and hardware division of WildTech Ventures, LLC, a Charleston, South Carolina technology company founded by Will McCants. iOS apps, web platforms, IoT hardware, and the Churchd and Viking Sensors product portfolio.",
  keywords: [
    "WildTech Development",
    "WildTech Ventures",
    "Charleston SC software company",
    "Charleston hardware development",
    "iOS app developer Charleston",
    "Churchd",
    "Viking Sensors",
    "Will McCants founder",
    "William McCants WildTech",
  ],
  alternates: {
    canonical: "https://wildtechdev.com/about",
  },
  openGraph: {
    title: "About WildTech Development",
    description:
      "Charleston, SC software and hardware company founded by Will McCants. iOS apps, web platforms, and precision IoT hardware.",
    type: "website",
    url: "https://wildtechdev.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WildTech Development",
    description:
      "Charleston, SC software and hardware company founded by Will McCants. iOS apps, web platforms, and precision IoT hardware.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WildTech Development",
  url: "https://wildtechdev.com",
  logo: "https://wildtechdev.com/icon.png",
  description:
    "Software and hardware division of WildTech Ventures, LLC. iOS apps, web platforms, IoT hardware, and technology services from Charleston, SC.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Will McCants",
    alternateName: "William McCants",
    url: "https://wildtechdev.com/will-mccants",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "SC",
    addressCountry: "US",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "WildTech Ventures, LLC",
  },
  sameAs: ["https://churchd.com", "https://vikingsense.com"],
};

const ecosystem = [
  {
    name: "WildTech Development",
    role: "Software & hardware solutions",
    href: "/",
    external: false,
  },
  {
    name: "Churchd",
    role: "Church community platform",
    href: "https://churchd.com",
    external: true,
  },
  {
    name: "Viking Sensors",
    role: "Precision climate monitoring",
    href: "https://vikingsense.com",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Company */}
          <div className="mb-20 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              About
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-3">
              WildTech Development
            </h1>
            <p className="text-lg text-muted mb-10">
              A WildTech Ventures company
            </p>

            <div className="space-y-7 text-body leading-relaxed">
              <p>
                WildTech Development is the software and hardware division
                of <strong className="text-heading font-normal">WildTech Ventures, LLC</strong>,
                a small, founder-led technology company based in Charleston,
                South Carolina. We build iOS apps, web platforms, and precision
                IoT hardware that people actually use.
              </p>
              <p>
                The company launched on February 1, 2024 with the release of
                Spirits of Charleston, a ghost story app for the Lowcountry.
                Today the portfolio spans Spirits of Charleston, Spirits of
                Savannah, EZ Fuse Tester, Churchd (a community platform for
                churches), and Viking Sensors (precision climate monitoring
                distributed exclusively through MSI-Viking Gage).
              </p>
              <p>
                Beyond our own products, WildTech Development also builds
                custom software and hardware for clients. Whether it is an iOS
                app, a web platform, or a connected hardware product, we bring
                the same precision and care to client work that we put into
                our own portfolio.
              </p>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="mb-20 bg-[#050505] -mx-6 px-6 lg:-mx-8 lg:px-8 py-10 rounded-sm">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              The ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-10">
              Three brands, one venture
            </h2>

            <div className="space-y-0">
              {ecosystem.map((brand, i) => {
                const props = brand.external
                  ? {
                      href: brand.href,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : { href: brand.href };
                return (
                  <ScrollReveal key={brand.name} delay={i * 80}>
                    <a
                      {...props}
                      className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border py-5"
                    >
                      <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading transition-colors duration-300 group-hover:text-green">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                        {brand.role}
                      </p>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Founder mention */}
          <div className="border-t border-border pt-16 mb-20">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              The founder
            </p>
            <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-6">
              Will McCants
            </h2>
            <div className="space-y-5 text-body leading-relaxed mb-8">
              <p>
                WildTech Ventures was founded by{" "}
                <strong className="text-heading font-normal">
                  Will McCants
                </strong>{" "}
                (William McCants), a Charleston, SC native who has spent his
                career across industrial metrology, hardware engineering, and
                e-commerce. Will also serves as Director of E-Commerce at
                MSI-Viking Gage and co-founded Viking Sensors in 2026.
              </p>
              <p>
                Read the full story of Will McCants, from Mount Pleasant and
                Porter-Gaud through MSI-Viking, the North Carolina mountain
                years, and the founding of WildTech.
              </p>
            </div>
            <Link
              href="/will-mccants"
              className="btn-ghost inline-flex items-center gap-3"
            >
              Read more about Will McCants
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Connect */}
          <div className="border-t border-border pt-16">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Connect
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-8">
              Get in touch
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/willmccants/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <Link
                href="/contact"
                className="btn-ghost inline-flex items-center gap-3"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
