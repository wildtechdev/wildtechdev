import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Will McCants | Founder of WildTech Ventures, LLC",
  },
  description:
    "Will McCants (William McCants) is the founder of WildTech Ventures, LLC. Mount Pleasant, SC native, Porter-Gaud alum, MSI-Viking Director of E-Commerce, and Charleston-based software, hardware, and IoT builder behind Churchd, Viking Sensors, and WildTech Development.",
  keywords: [
    "Will McCants",
    "William McCants",
    "Will McCants Charleston",
    "Will McCants Mount Pleasant",
    "Will McCants James Island",
    "Will McCants WildTech",
    "Will McCants WildTech Ventures",
    "Will McCants MSI-Viking",
    "Will McCants Porter-Gaud",
    "Will McCants founder",
    "Will McCants developer",
    "WildTech Ventures founder",
    "Churchd founder",
    "Viking Sensors co-founder",
  ],
  alternates: {
    canonical: "https://wildtechdev.com/will-mccants",
  },
  openGraph: {
    title: "Will McCants | Founder of WildTech Ventures, LLC",
    description:
      "Will McCants is the founder of WildTech Ventures, LLC. Charleston, SC based builder of iOS apps, web platforms, and IoT hardware.",
    type: "profile",
    url: "https://wildtechdev.com/will-mccants",
    images: [
      {
        url: "/headshot.png",
        width: 1125,
        height: 1687,
        alt: "Will McCants, founder of WildTech Ventures, LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Will McCants | Founder of WildTech Ventures, LLC",
    description:
      "Will McCants is the founder of WildTech Ventures, LLC. Charleston, SC based builder of iOS apps, web platforms, and IoT hardware.",
    images: ["/headshot.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Will McCants",
  alternateName: ["William McCants", "Will McCants"],
  givenName: "William",
  additionalName: "Will",
  familyName: "McCants",
  jobTitle: "Founder & Director of E-Commerce",
  description:
    "Founder of WildTech Ventures, LLC. Mount Pleasant, SC native and Charleston-based software, hardware, and IoT developer behind Churchd, Viking Sensors, and WildTech Development. Also serves as Director of E-Commerce at MSI-Viking Gage.",
  image: "https://wildtechdev.com/headshot.png",
  url: "https://wildtechdev.com/will-mccants",
  nationality: "American",
  birthPlace: {
    "@type": "Place",
    name: "Mount Pleasant, South Carolina",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mount Pleasant",
      addressRegion: "SC",
      addressCountry: "US",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "James Island, Charleston",
    addressRegion: "SC",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Porter-Gaud School" },
    { "@type": "EducationalOrganization", name: "First Baptist Church School" },
    {
      "@type": "EducationalOrganization",
      name: "Trident Technical College",
      description: "Aircraft Assembly Certificate via ReadySC program",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "WildTech Ventures, LLC",
      url: "https://wildtechdev.com",
    },
    {
      "@type": "Organization",
      name: "MSI-Viking Gage",
    },
  ],
  spouse: {
    "@type": "Person",
    name: "Brittany McCants",
  },
  memberOf: {
    "@type": "Organization",
    name: "Harbor View Presbyterian Church",
    address: {
      "@type": "PostalAddress",
      addressLocality: "James Island",
      addressRegion: "SC",
      addressCountry: "US",
    },
  },
  knowsAbout: [
    "Software Development",
    "iOS Development",
    "Web Development",
    "Hardware Engineering",
    "IoT",
    "CAD Modeling",
    "Metrology",
    "ZEISS Optotechnik 3D Scanning",
    "E-Commerce",
    "Aircraft Assembly",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "FAA Part 61 Private Pilot Certificate",
    credentialCategory: "license",
  },
  sameAs: [
    "https://www.linkedin.com/in/willmccants/",
    "https://churchd.com",
    "https://vikingsense.com",
    "https://wildtechdev.com/about",
  ],
};

const quickFacts = [
  { label: "Born", value: "Mount Pleasant, SC" },
  { label: "Lives", value: "James Island, SC" },
  { label: "Education", value: "Porter-Gaud, Trident Tech" },
  { label: "Founded", value: "WildTech Ventures, 2024" },
  { label: "Co-Founded", value: "Viking Sensors, 2026" },
  { label: "Church", value: "Harbor View Presbyterian" },
];

const projects = [
  {
    name: "WildTech Development",
    description: "Software and hardware studio founded by Will McCants in 2024",
    href: "/",
  },
  {
    name: "Churchd",
    description: "Church community platform built by Will McCants",
    href: "https://churchd.com",
  },
  {
    name: "Viking Sensors",
    description:
      "Precision climate monitoring, co-founded with Steven Archibald in 2026",
    href: "https://vikingsense.com",
  },
];

export default function WillMcCantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Founder
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-3">
              Will McCants
            </h1>
            <p className="text-lg text-muted mb-2">
              Founder of WildTech Ventures, LLC
            </p>
            <div className="w-[60px] h-[2px] bg-green" />
          </div>

          {/* Photo + intro + quick facts */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14 mb-20">
            <div className="lg:w-[35%] shrink-0 lg:sticky lg:top-24 flex flex-col items-center lg:items-start w-full">
              <div className="max-w-[200px] lg:max-w-[280px] overflow-hidden border border-border">
                <Image
                  src="/headshot.png"
                  alt="Will McCants, founder of WildTech Ventures, LLC"
                  width={1125}
                  height={1687}
                  className="w-full h-auto object-cover object-top"
                  sizes="(max-width: 1024px) 200px, 280px"
                  priority
                />
              </div>
              <p className="text-xs font-mono text-green tracking-widest mt-4 mb-6">
                Charleston, SC
              </p>

              <div className="border-t border-border w-full">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between py-3 border-b border-dotted border-border gap-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono whitespace-nowrap">
                      {fact.label}
                    </span>
                    <span className="text-sm text-heading font-[family-name:var(--font-sans)] text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 text-body leading-relaxed lg:w-[65%]">
              <p className="text-lg">
                <strong className="text-heading font-normal">Will McCants</strong>{" "}
                (William McCants) is the founder
                of <strong className="text-heading font-normal">WildTech Ventures, LLC</strong>,
                a Charleston, South Carolina based software and technology
                company. Will builds iOS apps, web platforms, and precision IoT
                hardware, and serves as Director of E-Commerce at MSI-Viking
                Gage.
              </p>

              {/* Roots */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Roots
                </h2>
                <p>
                  Will McCants was born and raised in old Mount Pleasant, South
                  Carolina. He attended Porter-Gaud School and First Baptist
                  Church School, then earned an aircraft assembly certificate
                  from Trident Technical College through the ReadySC program.
                  That hands-on technical training set the foundation for a
                  career that would span industrial manufacturing, hardware
                  engineering, and software development.
                </p>
              </div>

              {/* Career */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Career
                </h2>
                <div className="space-y-6">
                  <p>
                    Will began his professional career at MSI-Viking Gage in
                    2012 as a shipping assistant. Within a few years he had
                    taken over the company&apos;s used equipment purchasing and
                    sales operation and built it into a national channel. In
                    2018 he was promoted to Applications Engineer, specializing
                    in ZEISS Optotechnik 3D scanning systems and metrology. In
                    parallel, Will earned his FAA Part 61 Private Pilot
                    Certificate and taught himself CAD modeling and computer
                    programming, all while working full-time.
                  </p>
                  <p>
                    In 2020 Will relocated to the mountains of North Carolina
                    to take on the Senior Engineer role at PRC Industries, an
                    Amazon remanufacturing partner operating out of the former
                    Henredon Furniture facility in Spruce Pine, a one-million
                    square-foot campus. He lived in a log cabin in Little
                    Switzerland, NC, where he developed a deep love for nature
                    and solitude that still shapes how he works and lives
                    today.
                  </p>
                  <p>
                    In 2022, Will returned to MSI-Viking Gage as Director of
                    E-Commerce. He turned what had been a side channel into a
                    primary revenue driver across msi-viking.com, Amazon, eBay,
                    and Shopify, and continues in that role today alongside his
                    work building WildTech.
                  </p>
                </div>
              </div>

              {/* WildTech */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  WildTech Ventures
                </h2>
                <p>
                  Will founded WildTech Ventures, LLC in 2024 as a private
                  software and technology company. Through WildTech, he has
                  launched iOS apps, web platforms, and IoT hardware, including
                  Churchd, a community platform built for churches. In 2026,
                  Will co-founded{" "}
                  <a
                    href="https://vikingsense.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Viking Sensors
                  </a>{" "}
                  with Steven Archibald, a precision climate monitoring
                  venture distributed through MSI-Viking Gage.
                </p>
              </div>

              {/* Personal */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Life on James Island
                </h2>
                <div className="space-y-6">
                  <p>
                    Will met Brittany in the summer of 2022. They bonded
                    quickly over their shared love for nature and their faith
                    in Jesus, and were married on the Hawaiian island of Maui
                    in 2024. Will and Brittany currently reside on James
                    Island, South Carolina, where they are active members of
                    Harbor View Presbyterian Church.
                  </p>
                  <p>
                    At Harbor View, Will volunteers on the handicap ramp
                    building committee, hosts quarterly men&apos;s dinners, and
                    plays guitar in the weekly worship service alongside
                    Brittany, who sings in the choir.
                  </p>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Hobbies
                </h2>
                <p>
                  When he is not building software, hardware, or businesses,
                  Will enjoys playing guitar, hiking, and photography.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="border-t border-border pt-16 mb-20">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-10">
              Projects led by Will McCants
            </h2>

            <div className="space-y-0">
              {projects.map((project) => {
                const isExternal = project.href.startsWith("http");
                const linkProps = isExternal
                  ? {
                      href: project.href,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : { href: project.href };
                const LinkEl = isExternal ? "a" : Link;

                return (
                  <LinkEl
                    key={project.name}
                    {...linkProps}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-b border-border py-5"
                  >
                    <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading transition-colors duration-300 group-hover:text-green">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted group-hover:text-body transition-colors duration-300 font-[family-name:var(--font-sans)]">
                      {project.description}
                    </p>
                  </LinkEl>
                );
              })}
            </div>
          </div>

          {/* Connect */}
          <div className="border-t border-border pt-16">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Connect
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-8">
              Get in touch with Will McCants
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
                Will McCants on LinkedIn
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
