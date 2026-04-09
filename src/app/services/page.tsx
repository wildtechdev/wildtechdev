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
      "We build native iOS applications using Swift and SwiftUI that are fast, beautiful, and built to last. From concept to App Store launch, we handle the full lifecycle — design, development, testing, and submission.",
    details: ["Swift & SwiftUI", "App Store submission", "In-app purchases", "Push notifications"],
  },
  {
    title: "Windows Development",
    description:
      "Desktop applications and utilities for the Windows ecosystem. Productivity tools, data processing applications, and custom business solutions — polished software for Windows.",
    details: [".NET & WPF", "Custom utilities", "Data processing", "Business automation"],
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with Next.js, React, and Tailwind CSS. Fast, accessible, and SEO-optimized — great on every device.",
    details: ["Next.js & React", "Responsive design", "SEO optimization", "Performance-first"],
  },
  {
    title: "App Store Optimization",
    description:
      "Data-driven ASO strategies to maximize your app's visibility and downloads. We optimize metadata, keywords, screenshots, and review management.",
    details: ["Keyword optimization", "Screenshot design", "Review management", "Analytics & reporting"],
  },
  {
    title: "Systems Integration",
    description:
      "Connect your software, hardware, and third-party platforms into a unified system. We bridge disparate technologies to create seamless workflows and data pipelines.",
    details: ["API integration", "Data pipelines", "Legacy modernization", "Cloud services"],
  },
  {
    title: "Hardware Solutions",
    description:
      "Custom hardware design and IoT solutions for precision monitoring and control. Sensor networks, embedded systems, and reliable hardware backed by intuitive software.",
    details: ["IoT sensors", "Embedded systems", "Real-time dashboards", "Industrial-grade reliability"],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          What we do
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Services
        </h1>
        <p className="text-body text-lg mb-20 animate-fade-in-up delay-200">
          End-to-end development and integration, tailored to your vision.
        </p>

        <div className="space-y-0">
          {services.map((service) => (
            <article
              key={service.title}
              className="border-b border-border py-14 first:pt-0"
            >
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-5">
                {service.title}
              </h2>
              <p className="text-body leading-relaxed mb-8 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {service.details.map((d) => (
                  <p key={d} className="text-xs text-muted flex items-center gap-2 font-mono uppercase tracking-wider">
                    <span className="w-1 h-1 bg-green rounded-full" />
                    {d}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-border pt-16">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
            Ready to start?
          </h2>
          <p className="text-body mb-8 max-w-lg">
            Let&apos;s talk about your project and find the right approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green text-black text-sm font-medium tracking-wide hover:bg-green-dark transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
