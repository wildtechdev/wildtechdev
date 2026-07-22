import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute:
      "Will McCants | Charleston, SC Software Developer & Founder of WildTech Development",
  },
  description:
    "Will McCants (William McCants) is the Charleston, SC based founder of WildTech Development and WildTech Ventures, LLC. Mount Pleasant native, Porter-Gaud alum, Director of E-Commerce at MSI-Viking Gage, and builder of Churchd, Viking Sensors, We The People: Your Rights, Spirits of Charleston, Spirits of Savannah, and EZ Fuse Tester.",
  keywords: [
    "Will McCants",
    "William McCants",
    "Will McCants Charleston",
    "Will McCants Charleston SC",
    "Will McCants Mount Pleasant",
    "Will McCants James Island",
    "Will McCants software developer",
    "Will McCants iOS developer",
    "Will McCants WildTech",
    "Will McCants WildTech Ventures",
    "Will McCants WildTech Development",
    "Will McCants MSI-Viking",
    "Will McCants Porter-Gaud",
    "Will McCants founder",
    "Will McCants entrepreneur",
    "Will McCants developer Charleston",
    "Will McCants engineer Charleston",
    "WildTech Ventures founder",
    "WildTech Development founder Charleston",
    "Churchd founder",
    "Viking Sensors founder",
    "Spirits of Charleston app developer",
    "We The People Your Rights app developer",
  ],
  alternates: {
    canonical: "https://www.wildtechdev.com/will-mccants",
  },
  openGraph: {
    title:
      "Will McCants | Charleston SC Software Developer & Founder of WildTech Development",
    description:
      "Charleston, SC based founder of WildTech Development. Builder of Churchd, Viking Sensors, We The People: Your Rights, Spirits of Charleston, Spirits of Savannah, and EZ Fuse Tester.",
    type: "profile",
    url: "https://www.wildtechdev.com/will-mccants",
    images: [
      {
        url: "/api/og?title=Will%20McCants%20%E2%80%94%20Charleston%2C%20SC%20founder%20of%20WildTech%20Development&kind=Founder",
        width: 1200,
        height: 630,
        alt: "Will McCants, Charleston SC founder of WildTech Development",
      },
      {
        url: "/headshot.jpg",
        width: 1125,
        height: 1687,
        alt: "Will McCants, Charleston SC founder of WildTech Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Will McCants | Charleston SC Software Developer & Founder of WildTech Development",
    description:
      "Charleston, SC based founder of WildTech Development. Builder of Churchd, Viking Sensors, We The People: Your Rights, Spirits of Charleston, Spirits of Savannah, and EZ Fuse Tester.",
    images: [
      "/api/og?title=Will%20McCants%20%E2%80%94%20Charleston%2C%20SC%20founder%20of%20WildTech%20Development&kind=Founder",
    ],
  },
};

// Comprehensive Person + ProfilePage schema. The ProfilePage wrapper is
// Google's preferred type for profile pages. The mainEntity Person includes
// disambiguatingDescription to differentiate from any other Will McCants,
// extensive sameAs links to anchor entity identity, hasOccupation with
// proper Occupation type, and subjectOf back-references to anchor authority.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://www.wildtechdev.com/will-mccants",
  name: "Will McCants | Charleston SC Software Developer & Founder of WildTech Development",
  description:
    "The profile of Will McCants, Charleston SC based software developer, hardware engineer, and founder of WildTech Development.",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.wildtechdev.com/headshot.jpg",
    width: 1125,
    height: 1687,
    caption:
      "Will McCants, Charleston SC founder of WildTech Development",
  },
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.wildtechdev.com/will-mccants#person",
    name: "Will McCants",
    alternateName: ["William McCants", "W. McCants"],
    givenName: "William",
    additionalName: "Will",
    familyName: "McCants",
    honorificSuffix: "Founder",
    jobTitle: "Founder & Software Developer",
    description:
      "Charleston, South Carolina based software developer, hardware engineer, and entrepreneur. Founder of WildTech Development and WildTech Ventures, LLC. Mount Pleasant, SC native, Porter-Gaud alum, FAA private pilot. Builder of the iOS apps Spirits of Charleston, Spirits of Savannah, EZ Fuse Tester, and We The People: Your Rights, the church community platform Churchd, and the precision climate monitoring product Viking Sensors. Also serves as Director of E-Commerce at MSI-Viking Gage.",
    disambiguatingDescription:
      "This Will McCants is the Charleston, SC based software developer and founder of WildTech Development. Not to be confused with any other person of the same name.",
    image: {
      "@type": "ImageObject",
      url: "https://www.wildtechdev.com/headshot.jpg",
      width: 1125,
      height: 1687,
    },
    url: "https://www.wildtechdev.com/will-mccants",
    mainEntityOfPage: "https://www.wildtechdev.com/will-mccants",
    nationality: "American",
    gender: "Male",
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
    homeLocation: {
      "@type": "Place",
      name: "James Island, Charleston, South Carolina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charleston",
        addressRegion: "SC",
        addressCountry: "US",
      },
    },
    workLocation: {
      "@type": "Place",
      name: "Charleston, South Carolina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Charleston",
        addressRegion: "SC",
        addressCountry: "US",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charleston",
      addressRegion: "SC",
      addressCountry: "US",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Porter-Gaud School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Charleston",
          addressRegion: "SC",
          addressCountry: "US",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "First Baptist Church School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Charleston",
          addressRegion: "SC",
          addressCountry: "US",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "Trident Technical College",
        description: "Aircraft Assembly Certificate via ReadySC program",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Charleston",
          addressRegion: "SC",
          addressCountry: "US",
        },
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
        legalName: "WildTech Ventures, LLC",
        url: "https://www.wildtechdev.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Charleston",
          addressRegion: "SC",
          addressCountry: "US",
        },
      },
      {
        "@type": "Organization",
        name: "MSI-Viking Gage",
        url: "https://msi-viking.com",
      },
    ],
    founder: {
      "@type": "Organization",
      name: "WildTech Ventures, LLC",
      url: "https://www.wildtechdev.com",
    },
    foundingDate: "2024",
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Software Developer",
        occupationLocation: {
          "@type": "City",
          name: "Charleston, South Carolina",
        },
        skills:
          "iOS development, Swift, SwiftUI, web development, Next.js, React, TypeScript, hardware engineering, IoT, embedded systems",
        responsibilities:
          "Designs and builds iOS apps, web platforms, and custom hardware products. Owner-operated end-to-end engineering for client projects and proprietary products.",
      },
      {
        "@type": "Occupation",
        name: "Founder",
        occupationLocation: {
          "@type": "City",
          name: "Charleston, South Carolina",
        },
        responsibilities:
          "Founded WildTech Ventures, LLC in Charleston, SC. Operates WildTech Development, the studio that builds custom software and hardware for clients.",
      },
      {
        "@type": "Occupation",
        name: "Director of E-Commerce",
        occupationLocation: {
          "@type": "City",
          name: "Charleston, South Carolina",
        },
        responsibilities:
          "Director of E-Commerce at MSI-Viking Gage, one of the country's leading precision measurement firms.",
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
      "Swift",
      "SwiftUI",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Hardware Engineering",
      "IoT",
      "Embedded Systems",
      "CAD Modeling",
      "Additive Manufacturing",
      "3D Printing",
      "Metrology",
      "ZEISS Optotechnik 3D Scanning",
      "Reverse Engineering",
      "E-Commerce",
      "NetSuite Administration",
      "Aircraft Assembly",
      "App Store Optimization",
      "Resend Email",
      "Vercel Deployment",
      "Charleston SC Software Development",
    ],
    knowsLanguage: ["English"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "FAA Private Pilot Certificate",
        credentialCategory: "license",
        dateCreated: "2012-09-19",
        recognizedBy: {
          "@type": "Organization",
          name: "Federal Aviation Administration",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Aircraft Assembly Certificate",
        credentialCategory: "certificate",
        educationalLevel: "Trident Technical College, ReadySC program",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/willmccants/",
      "https://www.wildtechdev.com",
      "https://www.wildtechdev.com/about",
      "https://www.wildtechdev.com/press",
      "https://churchd.com",
      "https://vikingsensors.com",
      "https://apps.apple.com/us/developer/wildtech-ventures-llc/id1718456894",
      "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
      "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
      "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
      "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
    ],
    subjectOf: [
      {
        "@type": "WebPage",
        url: "https://www.wildtechdev.com/will-mccants",
        name: "Will McCants Founder Page",
      },
      {
        "@type": "WebPage",
        url: "https://www.wildtechdev.com/about",
        name: "About WildTech Development",
      },
      {
        "@type": "WebPage",
        url: "https://www.wildtechdev.com/press",
        name: "Press Kit",
      },
    ],
  },
  about: {
    "@id": "https://www.wildtechdev.com/will-mccants#person",
  },
};

// FAQ that anchors the entity. Every answer mentions the name + Charleston
// explicitly. Wrapped in FAQPage JSON-LD for rich SERP results.
const founderFaqs = [
  {
    q: "Who is Will McCants?",
    a: "Will McCants (full name William McCants) is a Charleston, South Carolina based software developer, hardware engineer, and entrepreneur. He is the founder of WildTech Ventures, LLC and runs WildTech Development, the studio that builds custom iOS apps, web platforms, and precision hardware for clients across the United States. He also serves as Director of E-Commerce at MSI-Viking Gage, one of the country's leading precision measurement firms.",
  },
  {
    q: "Where is Will McCants based?",
    a: "Will McCants lives on James Island in Charleston, South Carolina. He was born and raised in Mount Pleasant, South Carolina and has spent most of his life in the Charleston Lowcountry. WildTech Ventures, LLC is registered and operated from Charleston, SC.",
  },
  {
    q: "What companies has Will McCants founded?",
    a: "Will McCants founded WildTech Ventures, LLC in 2024, the parent company behind WildTech Development. WildTech Ventures is also the parent entity for Viking Sensors (the precision climate monitoring product distributed exclusively through MSI-Viking Gage) and Churchd (the church community platform currently in active development).",
  },
  {
    q: "What apps has Will McCants built?",
    a: "Will McCants is the developer and publisher of several iOS apps on the App Store: Spirits of Charleston (Lowcountry ghost story app), Spirits of Savannah (Savannah ghost story app), EZ Fuse Tester (free utility that turns an iPhone into a fuse continuity tester), and We The People: Your Rights (plain-English Constitution and Bill of Rights reference). All apps are published under WildTech Ventures, LLC.",
  },
  {
    q: "Where did Will McCants go to school?",
    a: "Will McCants attended Porter-Gaud School and First Baptist Church School in Charleston, South Carolina. He later completed an Aircraft Assembly Certificate at Trident Technical College through the ReadySC program. He holds an FAA Part 61 Private Pilot Certificate.",
  },
  {
    q: "What does Will McCants do at MSI-Viking Gage?",
    a: "Will McCants serves as Director of E-Commerce at MSI-Viking Gage, the precision measurement and metrology firm that is also the exclusive distributor of Viking Sensors. His role covers e-commerce strategy, NetSuite administration, and ongoing technical leadership.",
  },
  {
    q: "How do I hire Will McCants or WildTech Development?",
    a: "The fastest way to start a conversation with Will McCants is the contact form on wildtechdev.com. WildTech Development takes on a small number of client projects each year covering iOS, Windows, web, integration, and custom hardware work. The intro call is free.",
  },
  {
    q: "Is this the same Will McCants who works at Brookings Institution?",
    a: "No. The Will McCants on this site is the Charleston, South Carolina based software developer and founder of WildTech Development. He is not affiliated with any other person of the same name.",
  },
];

const founderFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: founderFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
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
    description: "Software and hardware studio founded in 2024",
    href: "/",
    meta: "Studio",
  },
  {
    name: "Viking Sensors",
    description:
      "Precision climate monitoring, co-founded with Steven Archibald in 2026",
    href: "https://vikingsensors.com",
    meta: "Hardware",
  },
  {
    name: "Churchd",
    description: "Church community platform",
    href: "https://churchd.com",
    meta: "Platform",
  },
  {
    name: "We The People: Your Rights",
    description:
      "Plain-English Constitution, Bill of Rights, and civil-liberties reference",
    href: "https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978",
    meta: "iOS App",
  },
  {
    name: "Spirits of Charleston",
    description: "75+ narrated ghost stories tied to real Charleston locations",
    href: "https://apps.apple.com/us/app/spirits-of-charleston/id6476931671",
    meta: "iOS App",
  },
  {
    name: "Spirits of Savannah",
    description: "55+ haunted tales across Savannah and the surrounding islands",
    href: "https://apps.apple.com/us/app/spirits-of-savannah/id6740187114",
    meta: "iOS App",
  },
  {
    name: "EZ Fuse Tester",
    description: "Test glass fuses with your iPhone's touchscreen",
    href: "https://apps.apple.com/us/app/ez-fuse-tester/id6737378228",
    meta: "iOS App",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-accent" aria-hidden="true" />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderFaqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "About", url: "https://www.wildtechdev.com/about" },
          {
            name: "Will McCants",
            url: "https://www.wildtechdev.com/will-mccants",
          },
        ]}
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none section-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 10%, transparent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
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

          {/* Photo + intro + quick facts - float layout so text wraps + expands */}
          <div className="mb-20">
            <aside className="lg:float-left lg:w-[300px] lg:mr-12 lg:mb-6 mb-10 flex flex-col items-center lg:items-start w-full">
              <div className="relative max-w-[220px] lg:max-w-[300px] w-full group">
                {/* Frame glow */}
                <div
                  className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden border border-border">
                  <Image
                    src="/headshot.jpg"
                    alt="Will McCants, founder of WildTech Ventures, LLC"
                    width={1125}
                    height={1687}
                    className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 220px, 300px"
                    priority
                  />
                </div>
                {/* Corner accents */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-accent" aria-hidden="true" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-accent" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <p className="text-[11.5px] font-mono text-accent tracking-[0.25em]">
                  CHARLESTON, SC
                </p>
              </div>

              <div className="mt-8 border-t border-border w-full">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between py-3 border-b border-dotted border-border gap-4"
                  >
                    <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono whitespace-nowrap">
                      {fact.label}
                    </span>
                    <span className="text-sm text-heading font-[family-name:var(--font-sans)] text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-12 text-body leading-relaxed">
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
                <div className="space-y-5">
                  <p>
                    Will McCants was born and raised in old Mount Pleasant,
                    South Carolina. He attended Porter-Gaud School and First
                    Baptist Church School. Growing up, he spent his summers at
                    a string of computer science camps, including a week-long
                    video game development program at the University of North
                    Carolina that planted the seed for everything he would
                    build later.
                  </p>
                  <p>
                    After high school, Will felt unfit for the traditional
                    four-year path. He enrolled at Trident Technical College
                    instead and earned an aircraft assembly certificate
                    through the ReadySC program, intending to start a career
                    at the Boeing Charleston campus. He graduated on the
                    Dean&apos;s List and was inducted into the Phi Theta Kappa
                    honors society. While he waited on Boeing&apos;s notoriously
                    slow hiring pipeline, he needed work to pay the bills.
                  </p>
                </div>
              </div>

              {/* MSI-Viking origin */}
              <div>
                <SectionHeading>MSI-Viking, take one</SectionHeading>
                <div className="space-y-5">
                  <p>
                    Will joined MSI-Viking Gage in the fall of 2012 as an
                    assistant in the shipping department of the Charleston
                    laboratory. A month in, he was pulled aside to help list a
                    few surplus items on eBay. That side task turned into a
                    department: within a few years he was running auction
                    bidding, sales management, large machinery repair, small
                    electronics repair, and a four-person team that bought,
                    refurbished, and resold industrial calibration and
                    metrology equipment across the country.
                  </p>
                  <p>
                    When the open-source 3D printing wave hit in 2016, most of
                    his spare energy moved to learning CAD modeling. That
                    self-taught foundation became the bridge from used
                    equipment into engineering. He joined the Applications
                    Engineering team and spent the next several months in
                    classrooms across the eastern US (Raleigh, Charlotte,
                    Nashville, Atlanta, and Detroit) learning advanced
                    modeling and inspection software including Calypso,
                    DesignX GeoMagic, PolyWorks, SolidWorks, and ZEISS
                    Optotechnik 3D scanning systems. Within a year he
                    transitioned from student to instructor, traveling to
                    customer sites to perform demos, write proposals, and
                    teach those same systems to engineers nationwide.
                  </p>
                  <p>
                    In March of 2020, Will performed a reverse-engineering
                    demo at a manufacturer whose engineering team had just
                    returned from overseas. One engineer was under the weather
                    and could not attend. Within days, Will and many of his
                    Charleston coworkers were sick too. He continued working
                    through the pandemic and finally retired from the road in
                    November 2020.
                  </p>
                </div>
              </div>

              {/* Industrial photo break */}
              <ScrollReveal>
                <figure className="relative group max-w-md mx-auto">
                  <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-accent opacity-50" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-accent opacity-50" aria-hidden="true" />
                  <div className="overflow-hidden border border-border aspect-[3/4]">
                    <Image
                      src="/william-industrial.jpg"
                      alt="Will McCants at SANY headquarters"
                      width={3024}
                      height={4032}
                      className="w-full h-full object-cover object-center brightness-110 transition-transform duration-1000 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 90vw, 28rem"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-[11.5px] font-mono text-muted tracking-[0.2em] uppercase">
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
                    Will took a new opportunity in Mitchell County, North
                    Carolina as Senior Engineer at PRC Industries, an Amazon
                    remanufacturing partner operating out of the former
                    Henredon Furniture facility in Spruce Pine, a one-million
                    square-foot campus. PRC processes returns and restores
                    defective products for major brands and retailers,
                    everything from refrigerators and vacuums to sporting
                    goods, with a team of engineers diagnosing product flaws
                    through total disassembly and reverse engineering. Will
                    wrote remanufacturing procedures, reverse-engineered
                    replacement parts, and collaborated with outside
                    engineering teams on client projects. The role sharpened
                    his ability to diagnose unfamiliar hardware quickly, a
                    skill that carries directly into the work WildTech does
                    today.
                  </p>
                  <p>
                    He lived in a log cabin in Little Switzerland and drove
                    the Blue Ridge Parkway along the Altapass every morning
                    and evening. That daily drive sparked a love for nature
                    and wildlife photography that still shapes how he works
                    and lives today. After about a year of the quiet mountain
                    life, Will was ready for the next chapter. During
                    Christmas break of 2021 he ran into his old boss at MSI
                    while visiting his parents. The conversation turned into
                    an offer to come back to Charleston as Director of
                    E-Commerce, and he started back in January 2022.
                  </p>
                </div>
              </div>

              {/* Return + e-commerce */}
              <div>
                <SectionHeading>Director of E-Commerce</SectionHeading>
                <div className="space-y-5">
                  <p>
                    Will returned to MSI-Viking Gage in January 2022 as
                    Director of E-Commerce. The company had recently moved to
                    Oracle
                    NetSuite for ERP, which gave him an excuse to start
                    learning SuiteScript and JavaScript. Once he was inside
                    the rabbit hole, he kept going. Over the following year
                    he wrote small Windows programs to automate manual
                    repricing and other operational drudgery, which freed the
                    team to focus on actual selling.
                  </p>
                  <p>
                    Today he oversees multi-channel operations across
                    msi-viking.com, Amazon, eBay, and Shopify, serves as the
                    company&apos;s NetSuite administrator, manages a
                    multimillion-dollar product inventory, and produces all
                    product photography and video content in-house. Under his
                    leadership, the team cut freight costs by over 40 percent
                    while achieving consistent three-day delivery windows on
                    in-stock inventory.
                  </p>
                </div>
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
                    in 2024 as a private software and technology company. Every
                    product since has started the same way: a real problem he
                    or someone close to him ran into, and a feeling that the
                    existing solutions were missing something obvious.
                    Alongside the WildTech-owned products that anchor the
                    portfolio, Will also takes on private client engagements,
                    most of which are covered under NDA and cannot be
                    publicly attributed.
                  </p>
                </div>
              </div>

              {/* The first app */}
              <div>
                <SectionHeading>The first app</SectionHeading>
                <p>
                  On Halloween night 2023, Will and his then-fiancée had
                  booked a ghost walk downtown and dinner reservations to make
                  a date of it. Hours before the tour, the guide called and
                  canceled: they were the only couple signed up and it was not
                  worth her time on a Tuesday. They opened the App Store at
                  dinner and downloaded an existing Charleston ghost tour app
                  instead. It had eleven stories, all of which Will, born and
                  raised in Charleston, could have told himself. Knowing the
                  city held hundreds more, he spent the next three months in
                  public and private libraries assembling what he believed to
                  be the most complete singular record of Charleston ghost
                  stories ever published. On February 1, 2024, Spirits of
                  Charleston launched on the App Store as WildTech&apos;s
                  first product, and the company officially had a portfolio.
                </p>
              </div>

              {/* Lowcountry expansion */}
              <div>
                <SectionHeading>Lowcountry to the coast</SectionHeading>
                <p>
                  Spirits of Savannah followed in January 2025, applying the same
                  care and depth to a city with even more haunted history per
                  square mile than the Lowcountry. Same coverage philosophy:
                  not just the downtown squares, but Ossabaw Island,
                  Hardeeville, colonial cemeteries, and remote locations most
                  visitors never hear about.
                </p>
              </div>

              {/* The viral spark */}
              <div>
                <SectionHeading>The viral spark</SectionHeading>
                <p>
                  Late one night Will watched a viral video that hinted an
                  iPhone&apos;s capacitive touchscreen could detect electrical
                  continuity across a small object. The weekend prototype
                  worked. After a stretch of refinement, EZ Fuse Tester
                  shipped to the App Store in the fall of 2024. Place a standard
                  glass fuse across the screen and the app gives you instant
                  pass or fail feedback. No extra hardware, no cables, no
                  batteries. It quickly became Will&apos;s most-downloaded
                  app, with dozens of new users per day where the ghost apps
                  had been pulling one or two per week.
                </p>
              </div>

              {/* The mission */}
              <div>
                <SectionHeading>The mission</SectionHeading>
                <div className="space-y-5">
                  <p>
                    Around the same time, Will and his wife had started
                    attending and volunteering at a large local church. The
                    church was blessed with resources but, like most
                    congregations, was drowning in the chaos of modern
                    communication. Small groups ran over iMessage threads
                    that had to be rebuilt every time a member joined or
                    left. Volunteer teams lived in GroupMe with no
                    permissions, where important announcements scrolled away
                    within hours. Church-wide updates required a Facebook or
                    Instagram account, which meant guys avoiding social media
                    for very real reasons were missing signups for things
                    like men&apos;s hikes.
                  </p>
                  <p>
                    In early 2024, Will hand-wrote five pages on a yellow
                    legal pad envisioning a platform built specifically for
                    the church, designed to honor God and protect the people
                    using it. He tucked the pages in a drawer after peers
                    told him it would take a team of engineers and hundreds
                    of thousands of dollars to build a functional beta. A
                    year later, during a late-night conversation on a family
                    vacation, his brother (his most honest critic) told him
                    his only criticism was the hesitation. Will started
                    building it himself the next morning.
                  </p>
                  <p>
                    The project went by the working title FindFellowship for
                    the first ten months while he saved up for the domain.
                    By the time he first thought he had enough, the price
                    had climbed past two thousand dollars and he still had
                    more saving to do. At 12:15 AM on March 14, 2026, after
                    a fourteen-hour day, WildTech Development bought
                    churchd.com. Churchd has been Will&apos;s primary mission
                    since then. Built and self-funded by him, hosted at his
                    own cost, with a firm commitment: no subscriptions, no
                    advertising, no influencer partnerships, ever.
                  </p>
                </div>
              </div>

              {/* The partnership */}
              <div>
                <SectionHeading>The partnership</SectionHeading>
                <p>
                  Shortly after the Churchd domain purchase, MSI-Viking
                  approached Will about a small hardware project: assembling
                  temperature and humidity sensors with WiFi antennas to
                  report readings into an open-source monitoring stack. Will
                  partnered with his colleague Steven Archibald and the two
                  co-founded{" "}
                  <a
                    href="https://vikingsensors.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent link-underline"
                  >
                    Viking Sensors, LLC
                  </a>{" "}
                  as the hardware company. In parallel, Will built the
                  advanced monitoring software at vikingsense.com under
                  WildTech Ventures and licensed it back to Viking Sensors.
                  The arrangement is intentional: revenue from Viking Sensors
                  and the vikingsense.com licensing helps fund the time and
                  hosting that Churchd will keep needing for years before it
                  ever earns a dollar.
                </p>
              </div>

              {/* WTP + civic literacy */}
              <div>
                <SectionHeading>Civic literacy</SectionHeading>
                <div className="space-y-5">
                  <p>
                    In May of 2026, during his introduction into a local
                    men&apos;s society, Will was handed a worn-out pocket
                    copy of the US Constitution by a dear friend and mentor.
                    The book mattered enough to the man that he had chosen
                    to include it in his Presidential portrait, which would
                    hang in the Hall alongside the likenesses of past
                    society presidents reaching back to the turn of the 19th
                    century. Will left that night wanting to carry a copy
                    himself.
                  </p>
                  <p>
                    The App Store turned out to be a crocodile pit of
                    subscription paywalls and ad-cluttered interfaces. He
                    considered it his American duty to do better. The
                    result is{" "}
                    <strong className="text-heading font-normal">
                      We The People: Your Rights
                    </strong>
                    , an app that pairs the original text with
                    plain-English interpretations, side-by-side reading,
                    and legal and court references with case summaries.
                    Available to anyone, citizen or visitor, with no
                    subscriptions, no advertising, no tracking, and no
                    account required. Free, forever. His pride and
                    privilege as an American to share.
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
                    hiking, or camping somewhere in the Lowcountry. He earned
                    his FAA Private Pilot Certificate on September 19, 2012,
                    after a stretch of training that had him seriously
                    considering aviation as a full-time career. He chose
                    instead to keep building his career at MSI-Viking Gage,
                    and these days the flying is mostly for fun.
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 py-2">
                    {hobbies.map((hobby, i) => (
                      <ScrollReveal key={hobby.label} delay={i * 50}>
                        <div className="group flex flex-col items-center gap-2 text-center">
                          <span className="text-faint group-hover:text-accent transition-colors duration-500">
                            {hobby.icon}
                          </span>
                          <span className="text-[11.5px] uppercase tracking-[0.15em] text-muted group-hover:text-body transition-colors duration-500 font-[family-name:var(--font-sans)]">
                            {hobby.label}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>

              {/* Faith quote */}
              <blockquote className="relative border-l-2 border-accent pl-7 py-3 my-4">
                <span
                  className="absolute -left-3 top-0 text-6xl text-accent/20 font-[family-name:var(--font-serif)] leading-none select-none"
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
                <cite className="block mt-4 text-[11.5px] uppercase tracking-[0.22em] text-muted not-italic font-[family-name:var(--font-sans)]">
                  Colossians 3:23, 24
                </cite>
              </blockquote>
            </div>
            <div className="clear-both" aria-hidden="true" />
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
                    <ScrollReveal key={project.name} delay={i * 60}>
                      <LinkEl
                        {...linkProps}
                        className="group relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-border py-5 overflow-hidden"
                      >
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-accent/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
                          aria-hidden="true"
                        />
                        <span className="relative text-[11.5px] font-mono uppercase tracking-[0.2em] text-faint group-hover:text-accent transition-colors duration-500 shrink-0 w-20">
                          {project.meta}
                        </span>
                        <h3 className="relative flex-1 text-xl font-[family-name:var(--font-serif)] italic text-heading transition-all duration-500 group-hover:text-accent group-hover:translate-x-1">
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

          {/* FAQ */}
          <ScrollReveal>
            <div className="border-t border-border pt-16 mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-10">
                Frequently asked about Will McCants.
              </h2>
              <div className="space-y-px bg-border">
                {founderFaqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    className="group bg-black open:bg-surface transition-colors"
                    open={i < 2}
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 flex items-start gap-4 hover:bg-surface transition-colors">
                      <span className="text-[12px] font-mono tracking-[0.2em] text-accent mt-1.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-[family-name:var(--font-sans)] text-heading">
                        {faq.q}
                      </span>
                      <span
                        className="mt-2 w-3 h-3 border-r-2 border-b-2 border-muted group-open:rotate-[225deg] -rotate-45 transition-transform shrink-0"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-6 pb-6 pl-[58px]">
                      <p className="text-body leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
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
