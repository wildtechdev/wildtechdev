import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description:
    "Press, media, and brand resources for WildTech Development and founder Will McCants. Bio, headshot, company fact sheet, and direct press contact for journalists writing about Will McCants and WildTech in Charleston, SC.",
  alternates: {
    canonical: "https://www.wildtechdev.com/press",
  },
  openGraph: {
    title:
      "Press & Media Kit | WildTech Development & Will McCants, Charleston SC",
    description:
      "Bio, headshot, fact sheet, and press contact for WildTech Development and founder Will McCants.",
    url: "https://www.wildtechdev.com/press",
    images: [
      {
        url: "/api/og?title=Press%20%26%20Media%20Kit%20%E2%80%94%20Will%20McCants%20%26%20WildTech%20Development&kind=Press",
        width: 1200,
        height: 630,
        alt: "Will McCants and WildTech Development Press Kit",
      },
    ],
  },
};

// Comprehensive Person + Organization JSON-LD on the press page so any
// journalist or aggregator who imports this page has rich, authoritative
// signals to cite. Reinforces the same entity from a second URL.
const pressJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.wildtechdev.com/press#webpage",
      url: "https://www.wildtechdev.com/press",
      name: "Press & Media Kit | WildTech Development",
      description:
        "Press, media, and brand resources for WildTech Development and founder Will McCants.",
      about: {
        "@id": "https://www.wildtechdev.com/will-mccants#person",
      },
      mainEntity: {
        "@id": "https://www.wildtechdev.com#organization",
      },
      isPartOf: {
        "@id": "https://www.wildtechdev.com#website",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.wildtechdev.com/will-mccants#person",
      name: "Will McCants",
      alternateName: ["William McCants", "W. McCants"],
      givenName: "William",
      additionalName: "Will",
      familyName: "McCants",
      jobTitle: "Founder, WildTech Development",
      description:
        "Charleston, South Carolina based software developer, hardware engineer, and founder of WildTech Development.",
      image: "https://www.wildtechdev.com/headshot.jpg",
      url: "https://www.wildtechdev.com/will-mccants",
      sameAs: [
        "https://www.linkedin.com/in/willmccants/",
        "https://apps.apple.com/us/developer/wildtech-ventures-llc/id1718456894",
      ],
      worksFor: {
        "@id": "https://www.wildtechdev.com#organization",
      },
    },
  ],
};

const shortBio =
  "Will McCants is the founder of WildTech Development, a Charleston, South Carolina based software and hardware studio. He builds custom iOS apps, web platforms, and IoT devices for clients across the United States, and is the developer behind Spirits of Charleston, Spirits of Savannah, EZ Fuse Tester, and We The People: Your Rights on the App Store. He also serves as Director of E-Commerce at MSI-Viking Gage.";

const mediumBio =
  "Will McCants is a Charleston, South Carolina based software developer, hardware engineer, and entrepreneur. He founded WildTech Ventures, LLC in 2024 and operates WildTech Development, the studio that builds custom iOS apps, web platforms, and precision hardware for clients across the country. His App Store catalog includes Spirits of Charleston (the most comprehensive ghost story app in the Lowcountry), Spirits of Savannah, EZ Fuse Tester (a free utility that turns an iPhone into a fuse continuity tester), and We The People: Your Rights (a plain-English Constitution reference). He is also building Churchd, a purpose-built community platform for churches, and is the technical co-founder behind Viking Sensors, the precision climate monitoring product distributed exclusively through MSI-Viking Gage. McCants is a Mount Pleasant, SC native, Porter-Gaud School alum, and holds an FAA Part 61 Private Pilot Certificate. He also serves as Director of E-Commerce at MSI-Viking Gage. He lives on James Island in Charleston with his wife Brittany.";

const facts = [
  { label: "Founded", value: "WildTech Ventures, LLC, 2024" },
  { label: "Founder", value: "Will McCants" },
  { label: "Based", value: "Charleston, South Carolina" },
  { label: "Industries", value: "Software, Hardware, IoT, Apps" },
  { label: "Notable products", value: "Viking Sensors, Churchd, We The People: Your Rights" },
  { label: "App Store catalog", value: "4 published apps" },
  { label: "Distribution", value: "Direct + MSI-Viking Gage (Viking Sensors)" },
  { label: "Press contact", value: "info@wildtechdev.com" },
];

const milestones = [
  { date: "2012", text: "Will earns his FAA Private Pilot Certificate (VFR SEL), Sept 19" },
  { date: "2012", text: "Will joins MSI-Viking Gage in the Charleston shipping department" },
  { date: "2022", text: "Returns to MSI-Viking as Director of E-Commerce, January" },
  { date: "2023", text: "Halloween night fuse-tester idea sparks the EZ Fuse Tester prototype" },
  { date: "2024", text: "WildTech Ventures, LLC founded in Charleston, SC" },
  { date: "2024", text: "Spirits of Charleston ships on the App Store, Feb 1" },
  { date: "2024", text: "Spirits of Savannah follows on the App Store" },
  { date: "2024", text: "EZ Fuse Tester ships on the App Store, mid year" },
  { date: "2024", text: "Churchd sketched on a yellow legal pad" },
  { date: "2026", text: "Churchd domain purchased, active development begins, Mar 14" },
  { date: "2026", text: "Viking Sensors co-founded with Steven Archibald, launches under MSI-Viking Gage distribution" },
  { date: "2026", text: "We The People: Your Rights ships on the App Store" },
];

const assets = [
  {
    label: "Headshot (3:4)",
    description: "Will McCants, color, high resolution.",
    href: "/headshot.jpg",
    fileName: "will-mccants-headshot.jpg",
  },
  {
    label: "Industrial photo",
    description: "Will at SANY headquarters, professional setting.",
    href: "/william-industrial.jpg",
    fileName: "will-mccants-industrial.jpg",
  },
  {
    label: "WildTech logo (PNG)",
    description: "Square 512px brand mark.",
    href: "/android-chrome-512x512.png",
    fileName: "wildtech-logo-512.png",
  },
];

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Press", url: "https://www.wildtechdev.com/press" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              For journalists and editors
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Press &amp; Media Kit
            </h1>
            <p className="text-body text-base sm:text-lg max-w-2xl animate-fade-in-up delay-200">
              Bio, headshot, fact sheet, and direct press contact for
              WildTech Development and founder Will McCants. Everything on
              this page is free to use in coverage. Email{" "}
              <a
                href="mailto:info@wildtechdev.com?subject=Press%20Inquiry"
                className="link-underline text-heading"
              >
                info@wildtechdev.com
              </a>{" "}
              for interviews, original quotes, or anything not here.
            </p>
          </div>

          {/* At a glance facts */}
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                At a glance
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {facts.map((f) => (
                  <div key={f.label} className="bg-black p-5">
                    <dt className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-2">
                      {f.label}
                    </dt>
                    <dd className="text-sm text-heading font-[family-name:var(--font-sans)]">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          {/* Bios */}
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                Bio
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                Short bio
              </h2>
              <p className="text-body leading-relaxed mb-10 max-w-3xl">
                {shortBio}
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                Medium bio
              </h2>
              <p className="text-body leading-relaxed max-w-3xl">{mediumBio}</p>
            </div>
          </ScrollReveal>

          {/* Headshot + assets */}
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                Assets
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
                <div>
                  <figure className="relative">
                    <span
                      className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-green opacity-50"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-green opacity-50"
                      aria-hidden="true"
                    />
                    <div className="overflow-hidden border border-border aspect-[3/4]">
                      <Image
                        src="/headshot.jpg"
                        alt="Will McCants, Charleston SC founder of WildTech Development"
                        width={1125}
                        height={1687}
                        className="w-full h-full object-cover object-center brightness-110"
                        sizes="(max-width: 1024px) 90vw, 280px"
                      />
                    </div>
                    <figcaption className="mt-3 text-[11.5px] font-mono text-muted tracking-[0.18em] uppercase">
                      Will McCants &middot; Charleston, SC
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <ul className="divide-y divide-border border-y border-border">
                    {assets.map((a) => (
                      <li
                        key={a.label}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4"
                      >
                        <div>
                          <p className="text-sm text-heading font-[family-name:var(--font-sans)] font-medium">
                            {a.label}
                          </p>
                          <p className="text-xs text-muted">{a.description}</p>
                        </div>
                        <a
                          href={a.href}
                          download={a.fileName}
                          className="btn-ghost shrink-0"
                        >
                          Download
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
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Milestones */}
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                Milestones
              </p>
              <ol className="border-l-2 border-border pl-6 space-y-4">
                {milestones.map((m) => (
                  <li key={m.text} className="flex items-baseline gap-4">
                    <span className="text-xs font-mono tracking-[0.18em] text-green w-12 shrink-0">
                      {m.date}
                    </span>
                    <span className="text-sm text-body leading-relaxed">
                      {m.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* Cite-ready quote */}
          <ScrollReveal>
            <div className="mb-20 bg-surface border border-border p-8">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-4 font-[family-name:var(--font-sans)]">
                Cite-ready quote
              </p>
              <blockquote className="text-lg sm:text-xl font-[family-name:var(--font-serif)] italic text-heading leading-relaxed mb-4">
                &ldquo;Charleston has the talent, the appetite, and the right
                rhythm for the kind of small, owner-operated software work
                that does not happen at scale anywhere else. Building from
                here is a feature, not a constraint.&rdquo;
              </blockquote>
              <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
                Will McCants &middot; Founder, WildTech Development
              </p>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal>
            <div className="border-t border-border pt-14">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                Press contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-3">
                Direct line.
              </h2>
              <p className="text-body mb-6 max-w-xl">
                Will McCants responds personally to press inquiries. Reach out
                with deadlines, questions, or interview requests.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@wildtechdev.com?subject=Press%20Inquiry"
                  className="btn-ghost"
                >
                  info@wildtechdev.com
                </a>
                <Link href="/contact" className="btn-ghost">
                  Contact form
                </Link>
                <Link href="/will-mccants" className="btn-ghost">
                  About Will McCants
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
