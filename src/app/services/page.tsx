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
      "We build native iOS applications using Swift and SwiftUI that are fast, beautiful, and built to last. From concept to App Store launch, we handle the full lifecycle — including design, development, testing, and submission.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    highlights: ["Swift & SwiftUI", "App Store submission", "In-app purchases", "Push notifications"],
  },
  {
    title: "Windows Development",
    description:
      "Desktop applications and utilities for the Windows ecosystem. Whether you need a productivity tool, a data processing application, or a custom business solution, we deliver polished software for Windows.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlights: [".NET & WPF", "Custom utilities", "Data processing", "Business automation"],
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with frameworks like Next.js, React, and Tailwind CSS. We create fast, accessible, and SEO-optimized websites that look great on every device.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    highlights: ["Next.js & React", "Responsive design", "SEO optimization", "Performance-first"],
  },
  {
    title: "App Store Optimization",
    description:
      "Maximize your app's visibility and downloads with data-driven ASO strategies. We optimize metadata, keywords, screenshots, and review management to help your app stand out in a crowded marketplace.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    highlights: ["Keyword optimization", "Screenshot design", "Review management", "Analytics & reporting"],
  },
  {
    title: "Systems Integration",
    description:
      "Connect your software, hardware, and third-party platforms into a unified system. We specialize in bridging the gap between disparate technologies to create seamless workflows and data pipelines.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    highlights: ["API integration", "Data pipelines", "Legacy modernization", "Cloud services"],
  },
  {
    title: "Hardware Solutions",
    description:
      "Custom hardware design and IoT solutions for precision monitoring and control. From sensor networks to embedded systems, we build reliable hardware backed by intuitive software dashboards.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    highlights: ["IoT sensors", "Embedded systems", "Real-time dashboards", "Industrial-grade reliability"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our <span className="text-orange">Services</span>
            </h1>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              End-to-end development and integration services tailored to your vision.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col md:flex-row gap-8 bg-charcoal-light border border-white/10 rounded-xl p-8 hover:border-orange/40 transition-all ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/4 flex items-start justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-xl bg-electric/10 flex items-center justify-center text-electric">
                    {service.icon}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-5">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-slate-300">
                        <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-electric/10 to-orange/10 border border-white/10 rounded-xl p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let&apos;s talk about your project. We&apos;ll help you figure out the best approach and get started.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-electric hover:bg-electric-dark text-white font-semibold transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
