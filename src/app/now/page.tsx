import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Will McCants and WildTech Development are working on this month. Updated regularly. Following the nownownow.com convention.",
  alternates: {
    canonical: "https://www.wildtechdev.com/now",
  },
  openGraph: {
    title: "Now | WildTech Development",
    description: "What we are working on this month, in plain language.",
  },
};

// Update this date when you refresh the page content.
const lastUpdated = "May 25, 2026";

const sections = [
  {
    label: "Building",
    items: [
      {
        title: "Churchd",
        body: "Core messaging, calendars, and the Bible reader are in active development. Targeting a closed beta with a partner congregation late this year.",
      },
      {
        title: "We The People: Your Rights",
        body: "First public version is live on the App Store. Planning the next content drop with additional founding documents and a new set of real-life scenarios.",
      },
      {
        title: "wildtechdev.com",
        body: "Just shipped case studies for every product, a journal, an FAQ, a /now and /uses page, dynamic OG images, a Cmd-K command palette, and a newsletter signup. The site is becoming the office.",
      },
    ],
  },
  {
    label: "Operating",
    items: [
      {
        title: "Viking Sensors",
        body: "Production units continuing to ship through MSI-Viking Gage. Working on firmware improvements that came out of feedback from calibration lab deployments.",
      },
      {
        title: "Spirits of Charleston and Savannah",
        body: "Both apps maintaining their 5.0 ratings. Adding a handful of new stories before the fall tourist season.",
      },
    ],
  },
  {
    label: "Reading",
    items: [
      {
        title: "The current Apple human interface guidelines",
        body: "Refreshing the foundation after the latest iOS release. Always worth re-reading even after a decade of building iOS apps.",
      },
      {
        title: "Field notes on small business",
        body: "Working through the long-term thinking that good operators write down in the trades, not just in tech.",
      },
    ],
  },
  {
    label: "Local",
    items: [
      {
        title: "Charleston, SC",
        body: "Home base. Most of the work happens here. Available for in-person meetings around the Lowcountry, and willing to travel for the right project.",
      },
    ],
  },
];

export default function NowPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Now", url: "https://www.wildtechdev.com/now" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              This month
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Now
            </h1>
            <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
              What I am working on right now. A snapshot, refreshed regularly.
              Inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-heading"
              >
                Derek Sivers' /now page
              </a>{" "}
              convention.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-muted font-mono">
              Last updated {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <ScrollReveal key={section.label}>
                <div>
                  <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-4 font-[family-name:var(--font-sans)]">
                    {section.label}
                  </p>
                  <div className="space-y-6 border-l-2 border-border pl-6">
                    {section.items.map((item) => (
                      <div key={item.title}>
                        <h2 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-1">
                          {item.title}
                        </h2>
                        <p className="text-sm text-body leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 border-t border-border pt-10">
              <p className="text-sm text-muted leading-relaxed">
                Looking for something more permanent? See the{" "}
                <Link href="/will-mccants" className="link-underline text-heading">
                  founder page
                </Link>
                , the{" "}
                <Link href="/products" className="link-underline text-heading">
                  full product list
                </Link>
                , or get in touch on the{" "}
                <Link href="/contact" className="link-underline text-heading">
                  contact page
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
