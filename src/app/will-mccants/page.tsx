import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Will McCants | Founder of WildTech Development",
  description:
    "Will McCants (William McCants) is the founder of WildTech Ventures, LLC and WildTech Development. Based in Charleston, South Carolina, Will builds iOS apps, web platforms, and precision IoT hardware including Churchd and VikingSense.",
  keywords: [
    "Will McCants",
    "William McCants",
    "Will McCants Charleston",
    "Will McCants WildTech",
    "Will McCants founder",
    "Will McCants developer",
    "WildTech Development founder",
    "Churchd founder",
    "VikingSense founder",
  ],
  alternates: {
    canonical: "https://wildtechdev.com/will-mccants",
  },
  openGraph: {
    title: "Will McCants | Founder of WildTech Development",
    description:
      "Will McCants is the founder of WildTech Ventures, LLC. Charleston, SC based builder of iOS apps, web platforms, and IoT hardware.",
    type: "profile",
    url: "https://wildtechdev.com/will-mccants",
    images: [
      {
        url: "/headshot.png",
        width: 1125,
        height: 1687,
        alt: "Will McCants, founder of WildTech Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Will McCants | Founder of WildTech Development",
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
  jobTitle: "Founder & Developer",
  description:
    "Founder of WildTech Ventures, LLC. Charleston, SC based software and hardware developer behind Churchd, VikingSense, and WildTech Development.",
  image: "https://wildtechdev.com/headshot.png",
  url: "https://wildtechdev.com/will-mccants",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charleston",
    addressRegion: "SC",
    addressCountry: "US",
  },
  knowsAbout: [
    "Software Development",
    "iOS Development",
    "Web Development",
    "Hardware Engineering",
    "IoT",
    "Metrology",
    "E-Commerce",
  ],
  sameAs: [
    "https://www.linkedin.com/in/willmccants/",
    "https://churchd.com",
    "https://vikingsense.com",
    "https://wildtechdev.com/about",
  ],
};

const projects = [
  {
    name: "Churchd",
    description: "Church community platform built by Will McCants",
    href: "https://churchd.com",
  },
  {
    name: "VikingSense",
    description: "Precision climate monitoring system built by Will McCants",
    href: "https://vikingsense.com",
  },
  {
    name: "WildTech Development",
    description: "Software and hardware studio founded by Will McCants",
    href: "/",
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

          {/* Photo + intro */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14 mb-20">
            <div className="lg:w-[35%] shrink-0 flex flex-col items-center lg:items-start w-full">
              <div className="max-w-[200px] lg:max-w-[280px] overflow-hidden border border-border">
                <Image
                  src="/headshot.png"
                  alt="Will McCants, founder of WildTech Development"
                  width={1125}
                  height={1687}
                  className="w-full h-auto object-cover object-top"
                  sizes="(max-width: 1024px) 200px, 280px"
                  priority
                />
              </div>
              <p className="text-xs font-mono text-green tracking-widest mt-4">
                Charleston, SC
              </p>
            </div>

            <div className="space-y-6 text-body leading-relaxed lg:w-[65%]">
              <p>
                <strong className="text-heading font-normal">Will McCants</strong>{" "}
                (William McCants) is the founder
                of <strong className="text-heading font-normal">WildTech Ventures, LLC</strong> and
                its software and hardware division, WildTech Development. Based
                in Charleston, South Carolina, Will builds iOS apps, web
                platforms, and precision IoT hardware.
              </p>

              <p>
                The WildTech portfolio includes Churchd, a church community
                platform; VikingSense, a precision climate monitoring system
                distributed exclusively through MSI-Viking Gage; and a growing
                lineup of native iOS apps on the App Store. Beyond his own
                products, Will McCants also leads custom software and hardware
                projects for clients.
              </p>

              <p className="text-sm text-muted">
                This page is a work in progress. A full biography of Will
                McCants is available on the{" "}
                <Link
                  href="/about"
                  className="text-green hover:underline"
                >
                  About page
                </Link>
                .
              </p>
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
              <Link href="/contact" className="btn-ghost inline-flex items-center gap-3">
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
