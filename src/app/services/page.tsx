import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WildTech Development services: iOS development, Windows development, web development, App Store optimization, systems integration, and hardware solutions.",
  openGraph: {
    title: "Services | WildTech Development",
    description:
      "End-to-end software and hardware development services from Charleston, SC.",
  },
};

const services = [
  {
    title: "iOS Development",
    description:
      "We build native iOS applications using Swift and SwiftUI that are fast, beautiful, and built to last. From concept to App Store launch, we handle the full lifecycle: design, development, testing, and submission.",
    tags: ["Swift & SwiftUI", "App Store Submission", "In-App Purchases", "Push Notifications"],
  },
  {
    title: "Windows Development",
    description:
      "Desktop applications and utilities for the Windows ecosystem. Productivity tools, data processing applications, and custom business solutions. Polished software for Windows.",
    tags: [".NET & WPF", "Custom Utilities", "Data Processing", "Business Automation"],
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with Next.js, React, and Tailwind CSS. Fast, accessible, SEO-optimized, and great on every device.",
    tags: ["Next.js & React", "Responsive Design", "SEO Optimization", "Performance-First"],
  },
  {
    title: "App Store Optimization",
    description:
      "Data-driven ASO strategies to maximize your app's visibility and downloads. We optimize metadata, keywords, screenshots, and review management.",
    tags: ["Keyword Optimization", "Screenshot Design", "Review Management", "Analytics"],
  },
  {
    title: "Systems Integration",
    description:
      "Connect your software, hardware, and third-party platforms into a unified system. We bridge disparate technologies to create seamless workflows and data pipelines.",
    tags: ["API Integration", "Data Pipelines", "Legacy Modernization", "Cloud Services"],
  },
  {
    title: "Hardware Solutions",
    description:
      "Custom hardware design and IoT solutions for precision monitoring and control. Sensor networks, embedded systems, and reliable hardware backed by intuitive software.",
    tags: ["IoT Sensors", "Embedded Systems", "Real-Time Dashboards", "Industrial-Grade"],
  },
];

const whyUs = [
  {
    title: "Owner-operated",
    description: "Every project is led by the founder. No account managers, no handoffs, no surprises.",
  },
  {
    title: "Full lifecycle",
    description: "From concept to launch to ongoing support. Design, build, ship, and iterate.",
  },
  {
    title: "Charleston-based",
    description: "Local expertise with a national reach. On-site when you need it, remote when you don\u2019t.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          What we do
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Services
        </h1>
        <p className="text-body text-lg mb-16 animate-fade-in-up delay-200">
          End-to-end development and integration, tailored to your vision.
        </p>

        <div className="space-y-0">
          {services.map((service, i) => (
            <React.Fragment key={service.title}>
            {i === 3 && (
              <div className="border-b border-dashed border-[#1a1a1a] my-0" />
            )}
            <article
              className={`border-b border-border py-12 first:pt-0 ${
                i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#080808]"
              } -mx-4 px-4`}
            >
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-semibold text-heading mb-4">
                <span className="text-green text-lg mr-3 font-normal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted mx-2 font-[family-name:var(--font-sans)] text-sm">/</span>
                {service.title}
              </h2>
              <p className="text-body leading-relaxed mb-6 max-w-2xl pl-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pl-1">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-muted px-3 py-1.5 border border-border border-l-2 border-l-green bg-card"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            </React.Fragment>
          ))}
        </div>

        {/* Why WildTech */}
        <div className="mt-20 border-t border-border pt-16 bg-[#050505] -mx-4 px-4 lg:-mx-8 lg:px-8 pb-10 rounded-sm">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            Why us
          </p>
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-12">
            Why WildTech?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {whyUs.map((item, i) => (
              <div key={item.title}>
                <span className="text-2xl font-[family-name:var(--font-sans)] text-green font-light mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted font-[family-name:var(--font-sans)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-green/20 pt-16">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
            Ready to start?
          </h2>
          <p className="text-body mb-8 max-w-lg">
            Let&apos;s talk about your project and find the right approach.
          </p>
          <Link href="/contact" className="btn-ghost">
            Get in touch &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
