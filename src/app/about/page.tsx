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
    description: "Software & hardware development solutions",
  },
  {
    name: "WildTech CHS",
    url: "https://wildtechchs.com",
    description:
      "Charleston's trusted technology service provider for security, structured cabling, commercial A/V, smart offices, church tech, and event venues",
  },
  {
    name: "Churchd",
    url: "https://churchd.com",
    description: "Church community platform",
  },
  {
    name: "VikingSense",
    url: "https://vikingsense.com",
    description:
      "Precision climate monitoring with exclusive distribution through MSI-Viking Gage",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About <span className="text-electric">WildTech</span>
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              The story behind the code.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="bg-charcoal-light border border-white/10 rounded-xl p-8 sm:p-10 mb-10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric to-orange flex items-center justify-center text-3xl font-bold text-white shrink-0">
                WM
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">William McCants</h2>
                <p className="text-electric font-medium mt-1">Founder &amp; Developer</p>
                <p className="text-slate-500 text-sm mt-1">Charleston, SC</p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-slate-300 leading-relaxed">
              <p>
                Born and raised in Charleston, SC, William McCants brings over a decade of experience
                in engineering, metrology, and quality control to everything he builds. He currently
                serves as Director of E-Commerce at{" "}
                <strong className="text-white">MSI-Viking Gage</strong>, a leading precision
                measurement and metrology company founded in 1967.
              </p>
              <p>
                In 2024, William founded{" "}
                <strong className="text-white">WildTech Ventures, LLC</strong>, launching his first
                independent iOS app on February 1, 2024. What started as a single app quickly grew
                into a full ecosystem of technology brands, each solving unique problems across
                software, hardware, and services.
              </p>
              <p>
                The WildTech ecosystem now includes{" "}
                <strong className="text-electric">WildTech Development</strong> (software and hardware
                solutions),{" "}
                <strong className="text-electric">WildTech CHS</strong> (Charleston&apos;s trusted
                technology service provider for security, structured cabling, commercial A/V, smart
                offices, church tech, and event venues),{" "}
                <strong className="text-electric">Churchd.com</strong> (church community platform),
                and <strong className="text-electric">VikingSense</strong> (precision climate
                monitoring with exclusive distribution through MSI-Viking Gage).
              </p>
            </div>
          </div>

          {/* Personal */}
          <div className="bg-charcoal-light border border-white/10 rounded-xl p-8 sm:p-10 mb-10">
            <h2 className="text-xl font-bold text-white mb-5">
              Beyond the <span className="text-orange">Code</span>
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Known as <strong className="text-white">&ldquo;Gadget&rdquo;</strong> by his nieces
                and nephews for always tinkering and finding tech solutions to everyday problems,
                William brings that same inventive spirit to every project.
              </p>
              <p>
                When he&apos;s not coding, you&apos;ll find him behind a camera, strumming a guitar,
                designing 3D prints, or camping in the Lowcountry. His hobbies fuel his creativity
                and keep his problem-solving sharp.
              </p>
              <p className="text-slate-400 italic border-l-4 border-electric pl-4">
                &ldquo;Whatever you do, work heartily, as for the Lord and not for men, knowing that
                from the Lord you will receive the inheritance as your reward. You are serving the
                Lord Christ.&rdquo;
                <span className="block mt-2 text-electric not-italic font-medium">
                  &mdash; Colossians 3:23-24
                </span>
              </p>
              <p>
                A faith-driven entrepreneur, William approaches every endeavor guided by this verse —
                building with purpose, integrity, and excellence.
              </p>
            </div>
          </div>

          {/* WildTech Ecosystem */}
          <div className="bg-charcoal-light border border-white/10 rounded-xl p-8 sm:p-10">
            <h2 className="text-xl font-bold text-white mb-6">
              The WildTech <span className="text-electric">Ecosystem</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecosystem.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-charcoal border border-white/10 rounded-lg p-5 hover:border-electric/50 transition-all group"
                >
                  <h3 className="text-white font-bold group-hover:text-electric transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{brand.description}</p>
                  <span className="text-electric text-xs mt-2 inline-block">{brand.url.replace("https://", "")} &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
