import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | William McCants - Founder",
  description:
    "Meet William McCants, founder of WildTech Ventures, LLC and WildTech Development. Over a decade of engineering, metrology, and software development experience in Charleston, SC.",
  keywords: [
    "William McCants",
    "WildTech Development",
    "Charleston SC",
    "software developer",
    "WildTech Ventures",
    "MSI-Viking Gage",
  ],
  openGraph: {
    title: "About William McCants | WildTech Development",
    description:
      "Founder of WildTech Ventures, LLC. Over a decade of engineering and software development experience in Charleston, SC.",
    type: "profile",
    url: "https://wildtechdev.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About William McCants | WildTech Development",
    description:
      "Founder of WildTech Ventures, LLC. Over a decade of engineering and software development experience in Charleston, SC.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "William McCants",
  jobTitle: "Founder & Developer",
  worksFor: [
    {
      "@type": "Organization",
      name: "WildTech Ventures, LLC",
      url: "https://wildtechdev.com",
    },
    {
      "@type": "Organization",
      name: "MSI-Viking Gage",
      description: "Leading precision measurement and metrology company founded in 1967",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "SC",
    addressCountry: "US",
  },
  knowsAbout: [
    "Software Development",
    "iOS Development",
    "Hardware Solutions",
    "Engineering",
    "Metrology",
    "Quality Control",
  ],
  url: "https://wildtechdev.com/about",
  sameAs: ["https://wildtechchs.com", "https://churchd.com", "https://vikingsense.com"],
};

const quickFacts = [
  { label: "Location", value: "Charleston, SC" },
  { label: "Background", value: "Engineering & Metrology" },
  { label: "Role", value: "Director of E-Commerce, MSI-Viking Gage" },
  { label: "Founded", value: "WildTech Ventures, 2024" },
];

const ecosystem = [
  {
    name: "WildTech Development",
    role: "Software & hardware solutions",
    href: "/",
    external: false,
  },
  {
    name: "WildTech CHS",
    role: "Security, structured cabling, commercial A/V, smart offices, church tech, event venues",
    href: "https://wildtechchs.com",
    external: true,
  },
  {
    name: "Churchd",
    role: "Church community platform",
    href: "https://churchd.com",
    external: true,
  },
  {
    name: "VikingSense",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-20 animate-fade-in-up">
            <p className="text-xs font-mono text-green tracking-widest mb-8">
              Charleston, SC
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-3">
              William McCants
            </h1>
            <div className="w-[60px] h-[2px] bg-green mb-6" />
            <p className="text-lg text-body">
              Founder &amp; Developer
            </p>
          </div>

          {/* Quick facts */}
          <div className="mb-16 animate-fade-in-up delay-100">
            <div className="border-t border-border">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between py-3 border-b border-border">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono">
                    {fact.label}
                  </span>
                  <span className="text-sm text-heading font-[family-name:var(--font-sans)]">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-7 text-body leading-relaxed mb-20 animate-fade-in-up delay-200">
            <p>
              William McCants is the founder of{" "}
              <span className="text-heading">WildTech Ventures, LLC</span>, a
              Charleston-based technology company building software, hardware, and service
              solutions. With over a decade of hands-on experience in engineering, metrology,
              and quality control, William brings an uncommon precision to software
              development &mdash; the same attention to detail that defines his work in
              industrial measurement.
            </p>

            <p>
              By day, William serves as Director of E-Commerce at{" "}
              <span className="text-heading">MSI-Viking Gage</span>, one of the country&apos;s
              leading suppliers of precision measuring technologies. MSI-Viking has been a
              trusted name in metrology since 1967, representing brands like ZEISS, Mitutoyo,
              Starrett, and Mahr. This role puts William at the intersection of industrial
              technology, e-commerce, and enterprise sales &mdash; experience that directly
              informs how WildTech approaches product development and go-to-market strategy.
            </p>

            <p>
              WildTech Ventures launched in 2024 with the release of{" "}
              <span className="text-heading">Spirits of Charleston</span>, an iOS app featuring
              over 75 narrated ghost stories tied to real locations across the Holy City. Within
              months, the portfolio expanded to include Spirits of Savannah, EZ Fuse Tester, and
              two ambitious new ventures: Churchd, a community platform built for churches, and
              VikingSense, a precision climate monitoring system distributed exclusively through
              MSI-Viking Gage. What started as a single app became a full ecosystem spanning
              mobile apps, web platforms, IoT hardware, and local technology services through
              WildTech CHS.
            </p>
          </div>

          {/* Ecosystem */}
          <div className="mb-20">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              The ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-10">
              Four brands, one venture
            </h2>

            <div className="space-y-0">
              {ecosystem.map((brand) => {
                const Tag = brand.external ? "a" : "a";
                const props = brand.external
                  ? { href: brand.href, target: "_blank" as const, rel: "noopener noreferrer" }
                  : { href: brand.href };
                return (
                  <Tag
                    key={brand.name}
                    {...props}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border py-5"
                  >
                    <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading transition-colors duration-300 group-hover:text-green">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                      {brand.role}
                    </p>
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* Beyond the Code */}
          <div className="border-t border-border pt-16 mb-20">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Beyond the code
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-10">
              The person
            </h2>

            <div className="space-y-7 text-body leading-relaxed">
              <p>
                Known as <span className="text-heading">&ldquo;Gadget&rdquo;</span> by
                his nieces and nephews for always tinkering and finding tech solutions to
                everyday problems &mdash; that same inventive spirit drives every project.
              </p>

              <p>
                When not coding: photography, guitars, 3D printing, camping in the Lowcountry,
                and exploring cybersecurity and hardware hacking tools. There&apos;s usually a
                Flipper Zero within arm&apos;s reach.
              </p>

              <blockquote className="border-l-2 border-green pl-6 py-2">
                <p className="text-lg font-[family-name:var(--font-serif)] italic text-heading leading-relaxed">
                  &ldquo;Whatever you do, work heartily, as for the Lord and not for men,
                  knowing that from the Lord you will receive the inheritance as your reward.
                  You are serving the Lord Christ.&rdquo;
                </p>
                <cite className="block mt-4 text-xs uppercase tracking-widest text-muted not-italic font-[family-name:var(--font-sans)]">
                  Colossians 3:23-24
                </cite>
              </blockquote>

              <p className="text-muted">
                A faith-driven entrepreneur &mdash; building with purpose, integrity,
                and excellence.
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="border-t border-border pt-16">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Connect
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-8">
              Get in touch
            </h2>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body hover:text-heading transition-colors link-underline font-[family-name:var(--font-sans)]"
              >
                Find William on LinkedIn &rarr;
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body hover:text-heading transition-colors link-underline font-[family-name:var(--font-sans)]"
              >
                See projects on GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
