import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, and services Will McCants and WildTech Development actually use to design, build, and ship apps, web platforms, and hardware.",
  alternates: {
    canonical: "https://www.wildtechdev.com/uses",
  },
  openGraph: {
    title: "Uses | WildTech Development",
    description: "Hardware, software, and services we actually use.",
  },
};

const sections = [
  {
    label: "Hardware",
    items: [
      { name: "M-series Mac mini", note: "Primary development machine" },
      { name: "MacBook Pro", note: "Travel and on-site work" },
      { name: "iPhone Pro", note: "Primary iOS test device" },
      { name: "iPad Pro", note: "Reading, sketching, secondary review" },
      { name: "Apple Studio Display", note: "Main monitor, color-managed" },
      { name: "Mechanical keyboard", note: "Quiet switches, charcoal keys" },
      { name: "Standing desk", note: "Sit-stand cycle through the day" },
    ],
  },
  {
    label: "Editor and shell",
    items: [
      { name: "Xcode", note: "iOS and Swift work" },
      { name: "Cursor", note: "TypeScript, React, Next.js" },
      { name: "Visual Studio Code", note: "Backup editor and quick edits" },
      { name: "iTerm2 with Oh My Zsh", note: "Shell" },
      { name: "GitHub", note: "Code hosting and CI" },
    ],
  },
  {
    label: "Web stack",
    items: [
      { name: "Next.js", note: "App Router, server components, Turbopack" },
      { name: "React 19", note: "UI" },
      { name: "TypeScript", note: "End to end on every web project" },
      { name: "Tailwind CSS", note: "Design tokens via @theme inline" },
      { name: "Vercel", note: "Hosting and deploys" },
      { name: "Supabase", note: "Postgres and auth where appropriate" },
    ],
  },
  {
    label: "iOS stack",
    items: [
      { name: "Swift", note: "Primary language" },
      { name: "SwiftUI", note: "Modern UI" },
      { name: "UIKit", note: "Where the platform still demands it" },
      { name: "AVFoundation", note: "Audio and media playback" },
      { name: "MapKit and Core Location", note: "GPS-tagged apps" },
      { name: "App Store Connect", note: "Submission, review, analytics" },
    ],
  },
  {
    label: "Windows stack",
    items: [
      { name: "C# and .NET", note: "Native Windows productivity tools" },
      { name: "WPF", note: "Desktop UI" },
      { name: "MSIX and ClickOnce", note: "Distribution where appropriate" },
    ],
  },
  {
    label: "Hardware and embedded",
    items: [
      { name: "ESP and ARM microcontrollers", note: "Sensor and IoT work" },
      { name: "PlatformIO and ESP-IDF", note: "Embedded toolchain" },
      { name: "Custom PCB design", note: "Through trusted fab partners" },
      { name: "Real-time telemetry pipelines", note: "Cloud-side ingestion" },
    ],
  },
  {
    label: "Services we trust",
    items: [
      { name: "Resend", note: "Transactional email" },
      { name: "Namecheap", note: "Domain registrar and Private Email" },
      { name: "Vercel", note: "Deploy and edge" },
      { name: "Cloudflare", note: "DNS where Namecheap is not the answer" },
      { name: "Stripe", note: "Payments when needed" },
    ],
  },
  {
    label: "Design tools",
    items: [
      { name: "Figma", note: "Wireframes, designs, prototypes" },
      { name: "Affinity Photo and Designer", note: "Bitmap and vector edits" },
      { name: "ImageOptim", note: "Asset compression before shipping" },
    ],
  },
  {
    label: "Day to day",
    items: [
      { name: "Notion", note: "Project notes and client docs" },
      { name: "Things 3", note: "Personal task list" },
      { name: "Apple Notes", note: "Meeting notes and napkin sketches" },
      { name: "Granola", note: "Meeting transcription and summaries" },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Uses", url: "https://www.wildtechdev.com/uses" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 left-0 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              Stack and gear
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Uses
            </h1>
            <p className="text-body text-base sm:text-lg max-w-2xl animate-fade-in-up delay-200">
              The hardware, software, and services we actually use to build the
              apps, sites, and devices we ship. No affiliate links. No
              sponsorships. Just what we reach for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {sections.map((section) => (
              <ScrollReveal key={section.label}>
                <div>
                  <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-5 font-[family-name:var(--font-sans)]">
                    {section.label}
                  </p>
                  <ul className="space-y-3 border-l-2 border-border pl-5">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <p className="text-sm text-heading font-[family-name:var(--font-sans)] font-medium">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted leading-relaxed mt-0.5">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 border-t border-border pt-10">
              <p className="text-sm text-muted leading-relaxed">
                Inspired by the{" "}
                <a
                  href="https://uses.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-heading"
                >
                  uses.tech
                </a>{" "}
                collection. Want to talk about anything on this list, or get a
                recommendation for your own project?{" "}
                <Link href="/contact" className="link-underline text-heading">
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
