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

const ecosystem = [
  {
    name: "WildTech Development",
    url: "https://wildtechdev.com",
    role: "Software & hardware solutions",
  },
  {
    name: "WildTech CHS",
    url: "https://wildtechchs.com",
    role: "Security, structured cabling, commercial A/V, smart offices, church tech, event venues",
  },
  {
    name: "Churchd",
    url: "https://churchd.com",
    role: "Church community platform",
  },
  {
    name: "VikingSense",
    url: "https://vikingsense.com",
    role: "Precision climate monitoring",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24 animate-fade-in-up">
            <p className="text-xs uppercase tracking-widest text-muted mb-8 font-[family-name:var(--font-sans)]">
              Charleston, SC
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-6">
              William McCants
            </h1>
            <p className="text-lg text-body">
              Founder &amp; Developer
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-8 text-body leading-relaxed mb-24 animate-fade-in-up delay-200">
            <p className="text-lg">
              Born and raised in Charleston, SC, with over a decade of experience
              in engineering, metrology, and quality control.
            </p>

            <p>
              Currently serves as Director of E-Commerce at{" "}
              <span className="text-heading">MSI-Viking Gage</span>, a leading precision
              measurement and metrology company founded in 1967.
            </p>

            <p>
              Founded <span className="text-heading">WildTech Ventures, LLC</span> in 2024,
              launching the first independent iOS app on February 1, 2024. What started as a
              single app quickly grew into a full ecosystem of technology brands, each solving
              unique problems across software, hardware, and services.
            </p>
          </div>

          {/* Ecosystem */}
          <div className="mb-24">
            <p className="text-xs uppercase tracking-widest text-muted mb-8 font-[family-name:var(--font-sans)]">
              The ecosystem
            </p>

            <div className="space-y-0">
              {ecosystem.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border py-5"
                >
                  <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading transition-colors duration-300 group-hover:text-green">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                    {brand.role}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Personal */}
          <div className="border-t border-border pt-16 mb-24">
            <p className="text-xs uppercase tracking-widest text-muted mb-8 font-[family-name:var(--font-sans)]">
              Beyond the code
            </p>

            <div className="space-y-8 text-body leading-relaxed">
              <p>
                Known as <span className="text-heading">&ldquo;Gadget&rdquo;</span> by
                his nieces and nephews for always tinkering and finding tech solutions to
                everyday problems — that same inventive spirit drives every project.
              </p>

              <p>
                When not coding: photography, guitars, 3D printing, and camping
                in the Lowcountry.
              </p>

              <blockquote className="border-l border-green pl-6 py-2">
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
                A faith-driven entrepreneur — building with purpose, integrity, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
