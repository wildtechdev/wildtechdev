import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | WildTech Development",
  description:
    "Learn about WildTech Development, a Charleston-based software and hardware company, and its founder William McCants. iOS apps, web platforms, IoT hardware, and technology services.",
  keywords: [
    "William McCants",
    "WildTech Development",
    "Charleston SC",
    "software developer",
    "WildTech Ventures",
    "MSI-Viking Gage",
  ],
  openGraph: {
    title: "About | WildTech Development",
    description:
      "Learn about WildTech Development, a Charleston-based software and hardware company, and its founder William McCants.",
    type: "website",
    url: "https://wildtechdev.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | WildTech Development",
    description:
      "Learn about WildTech Development, a Charleston-based software and hardware company, and its founder William McCants.",
  },
};

const personJsonLd = {
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

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WildTech Development",
  url: "https://wildtechdev.com",
  logo: "https://wildtechdev.com/icon.png",
  description:
    "Software and hardware development arm of WildTech Ventures, LLC. iOS apps, web platforms, IoT hardware, and technology services from Charleston, SC.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "William McCants",
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
};

const quickFacts = [
  { label: "Location", value: "Charleston, SC" },
  { label: "Background", value: "Engineering, Metrology, E-Commerce" },
  { label: "Role", value: "Director of E-Commerce, MSI-Viking Gage" },
  { label: "Founded", value: "WildTech Ventures, 2024" },
  { label: "At MSI-Viking", value: "13+ years across 3 roles" },
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

const hobbies = [
  {
    label: "Photography",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    label: "Guitars",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    label: "3D Printing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    label: "Camping",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: "Pilot",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    label: "Cybersecurity",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* SECTION 1: THE COMPANY */}
          <div className="mb-10 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              About
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-3">
              WildTech Development
            </h1>
            <p className="text-lg text-muted mb-10">
              A WildTech Ventures company
            </p>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
              {/* Industrial photo */}
              <div className="lg:w-1/2 shrink-0">
                <div className="overflow-hidden border border-border">
                  <Image
                    src="/william-industrial.jpg"
                    alt="William McCants at SANY headquarters"
                    width={3024}
                    height={4032}
                    className="w-full h-auto object-cover brightness-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <p className="text-[10px] font-mono text-muted tracking-widest mt-3">
                  William at SANY headquarters
                </p>
              </div>

              {/* Company copy */}
              <div className="space-y-7 text-body leading-relaxed lg:w-1/2">
                <p>
                  WildTech Development is the software and hardware division
                  of <strong className="text-heading font-normal">WildTech Ventures, LLC</strong>. We
                  are a small, founder-led technology company based in Charleston, South
                  Carolina that builds products people actually use. Our work spans iOS
                  apps on the App Store, web platforms, and precision IoT hardware.
                </p>

                <p>
                  The company launched on February 1, 2024, with the release of Spirits
                  of Charleston, a ghost story app for the Lowcountry. Within the first
                  year, the portfolio grew to include Spirits of Savannah, EZ Fuse
                  Tester, and two larger ventures: Churchd, a community platform built
                  for churches, and VikingSense, a precision climate monitoring system
                  distributed exclusively through MSI-Viking Gage.
                </p>

                <p>
                  WildTech Development operates
                  alongside <strong className="text-heading font-normal">WildTech CHS</strong>, our
                  local technology services division. WildTech CHS handles security
                  camera installations, structured cabling, commercial audio and video,
                  and smart office setups across the Charleston area. Between the two
                  divisions plus Churchd and VikingSense, WildTech Ventures covers
                  software, hardware, services, and platforms under one roof.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border my-20" />

          {/* SECTION 2: THE ECOSYSTEM */}
          <div className="mb-20 bg-[#050505] -mx-6 px-6 lg:-mx-8 lg:px-8 py-10 rounded-sm">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              The ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-10">
              Four brands, one venture
            </h2>

            <div className="space-y-0">
              {ecosystem.map((brand) => {
                const props = brand.external
                  ? { href: brand.href, target: "_blank" as const, rel: "noopener noreferrer" }
                  : { href: brand.href };
                return (
                  <a
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
                  </a>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: THE FOUNDER */}
          <div className="border-t border-border pt-16 mb-20">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              The founder
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading leading-[0.95] mb-3">
              William McCants
            </h2>
            <p className="text-lg text-muted mb-2">
              Founder &amp; Developer
            </p>
            <div className="w-[60px] h-[2px] bg-green mb-12" />

            {/* Two-column: headshot + facts left, bio right */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14">
              {/* LEFT: headshot + quick facts */}
              <div className="lg:w-[35%] shrink-0 lg:sticky lg:top-24">
                <div className="max-w-[280px] overflow-hidden border border-border">
                  <Image
                    src="/headshot.png"
                    alt="William McCants, founder of WildTech Development"
                    width={1125}
                    height={1687}
                    className="w-full h-auto object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 280px"
                  />
                </div>
                <p className="text-xs font-mono text-green tracking-widest mt-4 mb-6">
                  Charleston, SC
                </p>

                {/* Quick facts */}
                <div className="border-t border-border">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-baseline justify-between py-3 border-b border-dotted border-border gap-4">
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

              {/* RIGHT: bio paragraphs */}
              <div className="space-y-7 text-body leading-relaxed lg:w-[65%]">
                <p>
                  William McCants is the founder
                  of <strong className="text-heading font-normal">WildTech Ventures, LLC</strong>. He
                  grew up in Charleston, South Carolina and has spent his career solving
                  technical problems across industries ranging from aerospace
                  manufacturing to industrial metrology to e-commerce.
                </p>

                <p>
                  William&apos;s professional path started at <strong className="text-heading font-normal">MSI-Viking Gage </strong>in 2012, where he built the company&apos;s Equipment Recovery and Sales department
                  from the ground up. What began as a one-person operation grew into a
                  four-employee department with a national market presence, buying,
                  refurbishing, and reselling industrial calibration and metrology
                  equipment. He later moved into an Application Engineer role at
                  MSI-Viking, specializing in ZEISS Optotechnik 3D scanning systems,
                  scan-to-CAD reverse engineering, and custom fixturing using additive
                  manufacturing.
                </p>

                <p>
                  In 2020, William
                  joined <strong className="text-heading font-normal">PRC Industries </strong>in Spruce
                  Pine, North Carolina as a Senior Engineer. PRC Industries is a
                  large-scale product remanufacturing company that processes returns and
                  restores defective products for major brands and retailers, most
                  notably <strong className="text-heading font-normal">Amazon</strong>. The
                  company&apos;s campus handles everything from refrigerators and vacuums
                  to sporting goods, with a team of engineers diagnosing product flaws
                  through total disassembly and reverse engineering. William wrote
                  remanufacturing procedures, reverse-engineered replacement parts, and
                  collaborated with outside engineering teams on client projects. The
                  role sharpened his ability to diagnose unfamiliar hardware quickly, a
                  skill that carries directly into the work WildTech does today.
                </p>

                <p>
                  He returned to MSI-Viking in 2022 as Director of E-Commerce, where he
                  turned what had been a side channel into a primary revenue driver for
                  the company. Today he oversees multi-channel operations across
                  msi-viking.com, Amazon, eBay, and Shopify, serves as the
                  company&apos;s NetSuite administrator, manages a multimillion-dollar
                  product inventory, and produces all product photography and video
                  content in-house. Under his leadership, the team cut freight costs by
                  over 40% while achieving consistent three-day delivery windows on
                  in-stock inventory.
                </p>

                <p>
                  WildTech Ventures grew out of the same mindset that has defined
                  William&apos;s entire career: see a problem, understand it deeply, and
                  build something that fixes it. Every product in the WildTech portfolio
                  started as a real problem that did not have a good enough solution.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond the Code */}
          <div className="border-t border-border pt-16 mb-20 bg-[#050505] -mx-6 px-6 lg:-mx-8 lg:px-8 pb-10 rounded-sm">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-10">
              Beyond the code
            </h2>

            <div className="space-y-7 text-body leading-relaxed">
              <p>
                His nieces and nephews call him{" "}
                <strong className="text-heading font-normal">&ldquo;Gadget&rdquo;</strong> because
                there is always a project on the workbench, a 3D printer running, or
                some piece of technology being taken apart and put back together. That
                same restless curiosity is what drives WildTech.
              </p>

              <p>
                When he is not writing code or building hardware, William spends his
                time behind a camera, playing guitar at his church&apos;s Sunday worship
                service, or camping somewhere in the Lowcountry. He also volunteers
                with his church&apos;s handicap ramp building team and holds a private
                pilot certificate, though these days the flying is mostly for fun.
              </p>

              {/* Hobby icons */}
              <div className="flex flex-wrap gap-8 py-4">
                {hobbies.map((hobby) => (
                  <div key={hobby.label} className="flex items-center gap-2.5">
                    <span className="text-[#333]">{hobby.icon}</span>
                    <span className="text-sm text-muted font-[family-name:var(--font-sans)]">{hobby.label}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-[3px] border-green pl-6 py-2">
                <p className="text-lg font-[family-name:var(--font-serif)] italic text-heading leading-relaxed">
                  &ldquo;Whatever you do, work heartily, as for the Lord and not for men,
                  knowing that from the Lord you will receive the inheritance as your reward.
                  You are serving the Lord Christ.&rdquo;
                </p>
                <cite className="block mt-4 text-xs uppercase tracking-widest text-muted not-italic font-[family-name:var(--font-sans)]">
                  Colossians 3:23-24
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Connect */}
          <div className="border-t border-border pt-16">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Connect
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-8">
              Get in touch
            </h2>

            <a
              href="https://www.linkedin.com/in/willmccants/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
