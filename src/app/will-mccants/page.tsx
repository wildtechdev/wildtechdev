import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute: "Will McCants | Founder of WildTech Ventures, LLC",
  },
  description:
    "Will McCants (William McCants) is the founder of WildTech Ventures, LLC. Mount Pleasant, SC native, Porter-Gaud alum, Director of E-Commerce at MSI-Viking Gage, and Charleston-based builder of Churchd, Viking Sensors, and WildTech Development.",
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
      "Will McCants is the founder of WildTech Ventures, LLC. Charleston, SC based engineer, developer, and builder of iOS apps, web platforms, and IoT hardware.",
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
      "Will McCants is the founder of WildTech Ventures, LLC. Charleston, SC based engineer, developer, and builder of iOS apps, web platforms, and IoT hardware.",
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
    "Founder of WildTech Ventures, LLC. Mount Pleasant, SC native and Charleston-based engineer, software developer, and hardware builder behind Churchd, Viking Sensors, and WildTech Development. Also serves as Director of E-Commerce at MSI-Viking Gage.",
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
    "Additive Manufacturing",
    "Metrology",
    "ZEISS Optotechnik 3D Scanning",
    "Reverse Engineering",
    "E-Commerce",
    "NetSuite Administration",
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
  { label: "Role", value: "Director of E-Commerce, MSI-Viking" },
  { label: "Founded", value: "WildTech Ventures, 2024" },
  { label: "Co-Founded", value: "Viking Sensors, 2026" },
  { label: "Church", value: "Harbor View Presbyterian" },
];

const hobbies = [
  {
    label: "Photography",
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
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        />
      </svg>
    ),
  },
  {
    label: "Guitar",
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
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
    ),
  },
  {
    label: "Hiking",
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
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"
        />
      </svg>
    ),
  },
  {
    label: "Camping",
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    label: "3D Printing",
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
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
  {
    label: "Pilot",
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
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-green" aria-hidden="true" />
      <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-[family-name:var(--font-sans)]">
        {children}
      </h2>
    </div>
  );
}

export default function WillMcCantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Founder
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.92] mb-3">
              Will McCants
            </h1>
            <p className="text-lg text-muted">
              Founder of WildTech Ventures, LLC
            </p>
          </div>

          {/* Photo + intro + quick facts */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-20">
            <div className="lg:w-[36%] shrink-0 lg:sticky lg:top-24 flex flex-col items-center lg:items-start w-full">
              <div className="relative max-w-[220px] lg:max-w-[300px] w-full group">
                {/* Frame glow */}
                <div
                  className="absolute -inset-1 bg-gradient-to-br from-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden border border-border">
                  <Image
                    src="/headshot.png"
                    alt="Will McCants, founder of WildTech Ventures, LLC"
                    width={1125}
                    height={1687}
                    className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 220px, 300px"
                    priority
                  />
                </div>
                {/* Corner accents */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-green" aria-hidden="true" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-green" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green" />
                </span>
                <p className="text-[10px] font-mono text-green tracking-[0.25em]">
                  CHARLESTON, SC
                </p>
              </div>

              <div className="mt-8 border-t border-border w-full">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between py-3 border-b border-dotted border-border gap-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-mono whitespace-nowrap">
                      {fact.label}
                    </span>
                    <span className="text-sm text-heading font-[family-name:var(--font-sans)] text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12 text-body leading-relaxed lg:w-[64%]">
              <p className="text-lg sm:text-xl text-heading/95 leading-relaxed font-light">
                <strong className="font-normal">Will McCants</strong>{" "}
                (William McCants) is the founder of{" "}
                <strong className="font-normal">WildTech Ventures, LLC</strong>
                , a Charleston, South Carolina based software and technology
                company. Will builds iOS apps, web platforms, and precision
                IoT hardware, and serves as Director of E-Commerce at
                MSI-Viking Gage.
              </p>

              {/* Roots */}
              <div>
                <SectionHeading>Roots</SectionHeading>
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
                <SectionHeading>Career</SectionHeading>
                <div className="space-y-5">
                  <p>
                    Will began his professional career at MSI-Viking Gage in
                    2012 as a shipping assistant. He quickly took over the
                    company&apos;s used equipment operation and built it into a
                    standalone Equipment Recovery and Sales department, growing
                    a one-person desk into a four-employee team with national
                    market presence. The group bought, refurbished, and resold
                    industrial calibration and metrology equipment to customers
                    across the country.
                  </p>
                  <p>
                    In 2018, Will was promoted to Applications Engineer,
                    specializing in ZEISS Optotechnik 3D scanning systems,
                    scan-to-CAD reverse engineering, and custom fixturing built
                    with additive manufacturing. During this same period he
                    earned his FAA Part 61 Private Pilot Certificate and taught
                    himself CAD modeling and computer programming, all while
                    working full-time.
                  </p>
                </div>
              </div>

              {/* Industrial photo break */}
              <ScrollReveal>
                <figure className="relative group">
                  <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-green opacity-50" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-green opacity-50" aria-hidden="true" />
                  <div className="overflow-hidden border border-border">
                    <Image
                      src="/william-industrial.jpg"
                      alt="Will McCants at SANY headquarters"
                      width={3024}
                      height={4032}
                      className="w-full h-auto object-cover brightness-110 transition-transform duration-1000 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-[10px] font-mono text-muted tracking-[0.2em] uppercase">
                    <span className="w-4 h-px bg-faint" />
                    Will at SANY headquarters
                  </figcaption>
                </figure>
              </ScrollReveal>

              {/* Mountain years */}
              <div>
                <SectionHeading>The mountain years</SectionHeading>
                <div className="space-y-5">
                  <p>
                    In 2020, Will relocated to the mountains of North Carolina
                    to take on the Senior Engineer role at PRC Industries, an
                    Amazon remanufacturing partner operating out of the former
                    Henredon Furniture facility in Spruce Pine, a one-million
                    square-foot campus. PRC processes returns and restores
                    defective products for major brands and retailers,
                    everything from refrigerators and vacuums to sporting
                    goods, with a team of engineers diagnosing product flaws
                    through total disassembly and reverse engineering.
                  </p>
                  <p>
                    At PRC, Will wrote remanufacturing procedures,
                    reverse-engineered replacement parts, and collaborated with
                    outside engineering teams on client projects. The role
                    sharpened his ability to diagnose unfamiliar hardware
                    quickly, a skill that carries directly into the work
                    WildTech does today.
                  </p>
                  <p>
                    He lived in a log cabin in Little Switzerland, North
                    Carolina during this season, where he developed a deep love
                    for nature and solitude that still shapes how he works and
                    lives today.
                  </p>
                </div>
              </div>

              {/* Return + e-commerce */}
              <div>
                <SectionHeading>Director of E-Commerce</SectionHeading>
                <p>
                  Will returned to MSI-Viking Gage in 2022 as Director of
                  E-Commerce, where he turned what had been a side channel
                  into a primary revenue driver. Today he oversees
                  multi-channel operations across msi-viking.com, Amazon,
                  eBay, and Shopify, serves as the company&apos;s NetSuite
                  administrator, manages a multimillion-dollar product
                  inventory, and produces all product photography and video
                  content in-house. Under his leadership, the team cut freight
                  costs by over 40 percent while achieving consistent
                  three-day delivery windows on in-stock inventory.
                </p>
              </div>

              {/* WildTech */}
              <div>
                <SectionHeading>Building WildTech</SectionHeading>
                <div className="space-y-5">
                  <p>
                    Will founded{" "}
                    <strong className="text-heading font-normal">
                      WildTech Ventures, LLC
                    </strong>{" "}
                    in 2024 as a private software and technology company. The
                    company launched on February 1, 2024 with the release of
                    Spirits of Charleston, a ghost story iOS app for the
                    Lowcountry. Within the first year, the portfolio grew to
                    include Spirits of Savannah, EZ Fuse Tester, and two
                    larger ventures: Churchd, a community platform built for
                    churches, and a growing roster of native iOS applications
                    on the App Store.
                  </p>
                  <p>
                    In 2026, Will co-founded{" "}
                    <a
                      href="https://vikingsense.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green link-underline"
                    >
                      Viking Sensors
                    </a>{" "}
                    with Steven Archibald, a precision climate monitoring
                    venture distributed through MSI-Viking Gage. Beyond his
                    own products, Will and WildTech also build custom
                    software and hardware solutions for clients.
                  </p>
                </div>
              </div>

              {/* Mindset */}
              <div>
                <SectionHeading>The Gadget mindset</SectionHeading>
                <div className="space-y-5">
                  <p>
                    His nieces and nephews call him{" "}
                    <strong className="text-heading font-normal">
                      &ldquo;Gadget&rdquo;
                    </strong>
                    , because there is always a project on the workbench, a 3D
                    printer running, or some piece of technology being taken
                    apart and put back together. That same restless curiosity
                    is what drives WildTech.
                  </p>
                  <p>
                    WildTech Ventures grew out of the same mindset that has
                    defined Will&apos;s entire career: see a problem,
                    understand it deeply, and build something that fixes it.
                    Every product in the WildTech portfolio started as a real
                    problem that did not have a good enough solution.
                  </p>
                </div>
              </div>

              {/* Life on James Island */}
              <div>
                <SectionHeading>Life on James Island</SectionHeading>
                <div className="space-y-5">
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
                    building committee, hosts quarterly men&apos;s dinners,
                    and plays guitar in the weekly worship service alongside
                    Brittany, who sings in the choir.
                  </p>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <SectionHeading>Beyond the work</SectionHeading>
                <div className="space-y-6">
                  <p>
                    When he is not building software, hardware, or businesses,
                    Will spends his time behind a camera, playing guitar,
                    hiking, or camping somewhere in the Lowcountry. He still
                    holds his private pilot certificate, though these days the
                    flying is mostly for fun.
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 py-2">
                    {hobbies.map((hobby, i) => (
                      <ScrollReveal key={hobby.label} delay={i * 50}>
                        <div className="group flex flex-col items-center gap-2 text-center">
                          <span className="text-faint group-hover:text-green transition-colors duration-500">
                            {hobby.icon}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.15em] text-muted group-hover:text-body transition-colors duration-500 font-[family-name:var(--font-sans)]">
                            {hobby.label}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>

              {/* Faith quote */}
              <blockquote className="relative border-l-2 border-green pl-7 py-3 my-4">
                <span
                  className="absolute -left-3 top-0 text-6xl text-green/20 font-[family-name:var(--font-serif)] leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-lg font-[family-name:var(--font-serif)] italic text-heading leading-relaxed">
                  Whatever you do, work heartily, as for the Lord and not for
                  men, knowing that from the Lord you will receive the
                  inheritance as your reward. You are serving the Lord
                  Christ.
                </p>
                <cite className="block mt-4 text-[10px] uppercase tracking-[0.22em] text-muted not-italic font-[family-name:var(--font-sans)]">
                  Colossians 3:23, 24
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Projects */}
          <ScrollReveal>
            <div className="border-t border-border pt-16 mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                Projects
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
                Projects led by Will McCants
              </h2>

              <div className="space-y-0 border-t border-border">
                {projects.map((project, i) => {
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
                    <ScrollReveal key={project.name} delay={i * 80}>
                      <LinkEl
                        {...linkProps}
                        className="group relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-border py-6 overflow-hidden"
                      >
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-green/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
                          aria-hidden="true"
                        />
                        <h3 className="relative flex-1 text-xl sm:text-2xl font-[family-name:var(--font-serif)] italic text-heading transition-all duration-500 group-hover:text-green group-hover:translate-x-1">
                          {project.name}
                        </h3>
                        <p className="relative text-sm text-muted group-hover:text-body transition-colors duration-500 font-[family-name:var(--font-sans)]">
                          {project.description}
                        </p>
                      </LinkEl>
                    </ScrollReveal>
                  );
                })}
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
                Get in touch with Will McCants
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
                  Will McCants on LinkedIn
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
