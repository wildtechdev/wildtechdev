import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WildTech Development services: iOS development, Windows development, web development, App Store optimization, systems integration, and hardware solutions.",
  alternates: {
    canonical: "https://www.wildtechdev.com/services",
  },
  openGraph: {
    title: "Services | WildTech Development",
    description:
      "End-to-end software and hardware development services from Charleston, SC.",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software and Hardware Development",
  provider: {
    "@type": "Organization",
    name: "WildTech Development",
    url: "https://www.wildtechdev.com",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WildTech Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iOS Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Windows Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Store Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Systems Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardware Solutions" } },
    ],
  },
};

const services = [
  {
    title: "iOS Development",
    description:
      "We build native iOS applications using Swift and SwiftUI that are designed to last. From the first conversation about what the app should do through design, development, testing, and App Store submission, we handle the full lifecycle. Our own apps are live on the App Store, which means we deal with the same review process, the same guidelines, and the same real-world user feedback that your app will face. That experience shows up in every decision we make during development.",
    tags: ["Swift & SwiftUI", "App Store Submission", "In-App Purchases", "Push Notifications"],
  },
  {
    title: "Windows Development",
    description:
      "Not everything belongs on a phone or in a browser. Some tools work best as desktop applications, and we build those too. Productivity tools, data processing utilities, and custom business solutions for the Windows ecosystem. Our Windows work has included privately distributed software for national clients where reliability and performance matter more than flashy design.",
    tags: [".NET & WPF", "Custom Utilities", "Data Processing", "Business Automation"],
  },
  {
    title: "Web Development",
    description:
      "We build modern, responsive web applications using Next.js, React, and Tailwind CSS. Every site we ship is fast, accessible, SEO-optimized, and built to look sharp on any screen size. This site is a working example of our approach: server-rendered for speed, designed for clarity, and deployed on infrastructure that scales without babysitting.",
    tags: ["Next.js & React", "Responsive Design", "SEO Optimization", "Performance-First"],
  },
  {
    title: "App Store Optimization",
    description:
      "Getting an app approved is only half the battle. The other half is making sure people can actually find it. We handle keyword optimization, screenshot design, review management, and analytics reporting to increase your app's visibility and downloads. Our own apps compete in crowded categories on the App Store, so the strategies we recommend are the same ones we use ourselves.",
    tags: ["Keyword Optimization", "Screenshot Design", "Review Management", "Analytics"],
  },
  {
    title: "Systems Integration",
    description:
      "Most businesses run on a patchwork of software, hardware, and third-party services that were never designed to talk to each other. We connect those pieces into unified systems with clean data pipelines and reliable automation. Whether it is linking an ERP system to an e-commerce storefront or bridging legacy equipment with modern dashboards, we build the connective tissue that makes everything work together.",
    tags: ["API Integration", "Data Pipelines", "Legacy Modernization", "Cloud Services"],
  },
  {
    title: "Hardware Solutions",
    description:
      "Custom hardware design and IoT solutions for environments where off-the-shelf sensors and consumer-grade devices fall short. We build sensor networks, embedded monitoring systems, and precision instruments backed by software that makes the data useful. Viking Sensors is the flagship example: industrial-grade climate monitoring built from scratch and distributed through one of the largest metrology companies in the country.",
    tags: ["IoT Sensors", "Embedded Systems", "Real-Time Dashboards", "Industrial-Grade"],
  },
];

const whyUs = [
  {
    title: "Owner-operated",
    description:
      "Every project is led by the founder. No account managers, no handoffs, no surprises.",
  },
  {
    title: "Full lifecycle",
    description:
      "From concept to launch to ongoing support. Design, build, ship, and iterate.",
  },
  {
    title: "Charleston-based",
    description:
      "Local expertise with a national reach. On-site when you need it, remote when you don't.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Services", url: "https://www.wildtechdev.com/services" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute -top-40 left-0 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
            What we do
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
            Services
          </h1>
          <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
            End-to-end development and integration, tailored to your vision.
          </p>
        </div>

        <div className="space-y-px bg-border">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <article className="group relative bg-black hover:bg-surface transition-colors duration-500 py-12 lg:py-14 px-6 lg:px-10 overflow-hidden">
                {/* Hover sweep */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green/[0.03] via-transparent to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                  {/* Number + heading */}
                  <div className="lg:w-[280px] shrink-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[12px] font-mono tracking-[0.2em] text-green">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-faint group-hover:bg-green transition-colors duration-500" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-semibold text-heading group-hover:text-green transition-colors duration-500">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description + tags */}
                  <div className="flex-1 min-w-0">
                    <p className="text-body leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-[11.5px] font-mono uppercase tracking-[0.16em] text-muted px-3 py-1.5 border border-border bg-surface transition-all duration-300 hover:border-green/40 hover:text-body"
                        >
                          <span className="w-0.5 h-0.5 rounded-full bg-green" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Why WildTech */}
        <ScrollReveal>
          <div className="mt-24 relative bg-surface border border-border -mx-6 px-6 lg:-mx-10 lg:px-10 py-14 lg:py-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-px bg-green" />
            <div
              className="absolute -top-20 right-0 w-[400px] h-[300px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />
            <p className="relative section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Why us
            </p>
            <h2 className="relative text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-14">
              Why WildTech.
            </h2>

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10">
              {whyUs.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 120}>
                  <div className="group">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl font-[family-name:var(--font-serif)] italic text-green/70 group-hover:text-green transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 h-px bg-border group-hover:bg-green/40 transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted font-[family-name:var(--font-sans)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-24 border-t border-border pt-16 text-center">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] justify-center">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
              Ready to start?
            </h2>
            <p className="text-body mb-10 max-w-lg mx-auto">
              Let&apos;s talk about your project and find the right approach.
            </p>
            <Link href="/contact" className="btn-ghost">
              Get in touch
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
        </ScrollReveal>
      </div>
    </section>
    </>
  );
}
