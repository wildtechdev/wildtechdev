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
  logo: "https://wildtechdev.com/android-chrome-512x512.png",
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
    note: "Studio",
  },
  {
    name: "Churchd",
    role: "Church community platform",
    href: "https://churchd.com",
    external: true,
    note: "Platform",
  },
  {
    name: "Viking Sensors",
    role: "Precision climate monitoring",
    href: "https://vikingsense.com",
    external: true,
    note: "Hardware",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Company */}
          <div className="mb-24 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              About
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.92] mb-4">
              WildTech Development
            </h1>
            <p className="text-base text-muted mb-12 tracking-wide">
              A WildTech Ventures company
            </p>

            <div className="space-y-7 text-body leading-relaxed text-base sm:text-lg max-w-2xl">
              <p>
                WildTech Development is the software and hardware division
                of{" "}
                <strong className="text-heading font-normal">
                  WildTech Ventures, LLC
                </strong>
                , a small, founder-led technology company based in Charleston,
                South Carolina. We build iOS apps, web platforms, and precision
                IoT hardware that people actually use.
              </p>
              <p>
                The company launched on February 1, 2024 with the release of
                Spirits of Charleston, a ghost story app for the Lowcountry.
                Today the portfolio spans Spirits of Charleston, Spirits of
                Savannah, EZ Fuse Tester, We The People: Your Rights (a
                plain-English Constitution and civil-rights reference), Churchd
                (a community platform for churches), and Viking Sensors
                (precision climate monitoring distributed exclusively through
                MSI-Viking Gage).
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

          {/* What we believe */}
          <ScrollReveal>
            <div className="mb-24 relative">
              <div className="border-t border-border pt-16">
                <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                  What we believe
                </p>
                <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-10">
                  How we build
                </h2>

                <p className="text-body text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
                  WildTech exists because off-the-shelf software keeps missing
                  what real people actually need. After a decade of running
                  industrial sales, engineering field demos, e-commerce
                  operations, and reverse-engineering hardware for major
                  brands, our founder kept noticing the same gap: somewhere
                  between the tool that does too much and the tool that does
                  nothing, there is a tool that does the right thing well.
                  WildTech is built to make those tools.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl font-[family-name:var(--font-serif)] italic text-green/80">
                        01
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                      Real problems first
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Every product in the portfolio started as a real problem
                      we ran into or watched someone close to us struggle
                      with. A cancelled ghost tour. A viral video about
                      capacitive screens. A church drowning in five
                      communication apps. We do not chase trends. We chase
                      the friction in our own lives.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl font-[family-name:var(--font-serif)] italic text-green/80">
                        02
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                      Owner-operated, end to end
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      The same person doing the discovery is doing the
                      design, the engineering, and the support. No account
                      managers, no handoffs, no surprises six months in. When
                      you talk to us, you are talking to the people who will
                      actually build it.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl font-[family-name:var(--font-serif)] italic text-green/80">
                        03
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                      Self-funded so values stay aligned
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      We have never raised outside capital. Our roadmap
                      answers to users and clients, not to investors looking
                      for a quick return. On our consumer products that means
                      a firm commitment: no subscriptions where a one-time
                      purchase will do, no advertising, no data harvesting,
                      no influencer partnerships.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl font-[family-name:var(--font-serif)] italic text-green/80">
                        04
                      </span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                      Built to last, not built to flip
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      WildTech is not an exit play. We support the products
                      we ship, stay with the clients we serve, and call
                      Charleston home. That long-term posture shapes every
                      decision we make, from architecture to pricing to who
                      we partner with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Ecosystem */}
          <ScrollReveal>
            <div className="mb-24 relative bg-[#0a0c10] border border-border -mx-6 px-6 lg:-mx-10 lg:px-10 py-12 lg:py-14">
              <div className="absolute top-0 left-0 w-12 h-px bg-green" />
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                The ecosystem
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
                Three brands, one venture
              </h2>

              <div className="space-y-0 border-t border-border">
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
                        className="group relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-border py-6 overflow-hidden"
                      >
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-green/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
                          aria-hidden="true"
                        />
                        <span className="relative text-[10px] font-mono uppercase tracking-[0.2em] text-faint group-hover:text-green transition-colors duration-500 shrink-0 w-20">
                          {brand.note}
                        </span>
                        <h3 className="relative flex-1 text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic text-heading transition-all duration-500 group-hover:text-green group-hover:translate-x-1">
                          {brand.name}
                        </h3>
                        <p className="relative text-sm text-muted group-hover:text-body transition-colors duration-500 font-[family-name:var(--font-sans)]">
                          {brand.role}
                        </p>
                        <svg
                          className="relative w-3.5 h-3.5 text-faint shrink-0 transition-all duration-500 group-hover:text-green group-hover:rotate-45"
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
                      </a>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Founder mention */}
          <ScrollReveal>
            <div className="mb-20 relative">
              <div className="border-t border-border pt-16">
                <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                  The founder
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-6">
                  Will McCants
                </h2>
                <div className="space-y-5 text-body leading-relaxed mb-10 max-w-2xl">
                  <p>
                    WildTech Ventures was founded by{" "}
                    <strong className="text-heading font-normal">
                      Will McCants
                    </strong>{" "}
                    (William McCants), a Charleston, SC native who has spent
                    his career across industrial metrology, hardware
                    engineering, and e-commerce. Will also serves as Director
                    of E-Commerce at MSI-Viking Gage and co-founded Viking
                    Sensors in 2026.
                  </p>
                  <p className="text-muted">
                    Read the full story of Will McCants, from Mount Pleasant
                    and Porter-Gaud through MSI-Viking, the North Carolina
                    mountain years, and the founding of WildTech.
                  </p>
                </div>
                <Link href="/will-mccants" className="btn-solid">
                  Read more about Will McCants
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
              </div>
            </div>
          </ScrollReveal>

          {/* Connect */}
          <ScrollReveal>
            <div className="border-t border-border pt-16">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
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
                  className="btn-ghost"
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
                <Link href="/contact" className="btn-ghost">
                  Contact form
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
