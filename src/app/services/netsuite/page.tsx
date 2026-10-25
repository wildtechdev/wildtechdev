import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "NetSuite Consulting & SuiteScript Development",
  description:
    "NetSuite consulting from people who run NetSuite every day: SuiteScript 2.1 development, SuiteQL reporting, integrations, workflow automation, and AI assisted operations. Charleston, SC.",
  alternates: {
    canonical: "https://www.wildtechdev.com/services/netsuite",
  },
  openGraph: {
    title: "NetSuite Consulting | WildTech Development",
    description:
      "SuiteScript development, SuiteQL reporting, integrations, and AI assisted NetSuite operations from Charleston, SC.",
    images: [
      {
        url: "/api/og?title=NetSuite%20consulting%20from%20people%20who%20run%20it%20daily&kind=Services",
        width: 1200,
        height: 630,
        alt: "NetSuite Consulting at WildTech Development",
      },
    ],
  },
};

const netsuiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "NetSuite Consulting and SuiteScript Development",
  provider: {
    "@type": "Organization",
    name: "WildTech Development",
    url: "https://www.wildtechdev.com",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NetSuite Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SuiteScript Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow & Process Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reporting & SuiteQL" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Assisted Operations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin, Cleanup & Rescue" } },
    ],
  },
};

const offerings = [
  {
    title: "SuiteScript Development",
    description:
      "Custom SuiteScript 2.1 across the whole script family. User Event and Client scripts that enforce your rules at the moment of entry, Scheduled and Map/Reduce scripts that chew through bulk work overnight, Suitelets for the internal tools NetSuite never shipped, and RESTlets when the outside world needs a clean door in. Everything is built in sandbox, tested against your real edge cases, documented, and deployed the way long-lived ERP code should be: so the next administrator can read it without calling us.",
    tags: ["SuiteScript 2.1", "User Event & Client", "Scheduled & Map/Reduce", "Suitelets & RESTlets"],
  },
  {
    title: "Workflow & Process Automation",
    description:
      "Most NetSuite teams have a handful of chores that eat the same twenty minutes every time: discontinuing an item without breaking the web store, handling a vendor part number supersession without orphaning open orders, receiving a dock full of packing lists, cutting an inventory transfer with the memo your auditors expect. We turn those ten-step UI rituals into single actions that cannot skip a step, with SuiteFlow where it fits and script where it does not.",
    tags: ["SuiteFlow", "Item Lifecycle", "Order Operations", "Receiving & Transfers"],
  },
  {
    title: "Reporting & SuiteQL",
    description:
      "The data is in there. Getting it out in a form a decision can rest on is the hard part. We build saved searches that actually answer the question being asked, reach for SuiteQL when saved search hits its ceiling, and wire results into scheduled deliveries and dashboards so the people who need numbers stop asking someone to export a CSV every Monday.",
    tags: ["SuiteQL", "Saved Searches", "Dashboards", "Scheduled Delivery"],
  },
  {
    title: "Integrations",
    description:
      "NetSuite is rarely alone. It needs to talk to the web store, the shipping desk, the label printers, the bank, and the one legacy system nobody is allowed to turn off. We build integrations over REST web services and RESTlets with token based authentication, sensible retry behavior, and logging you can actually read when something goes sideways at quarter close.",
    tags: ["REST Web Services", "E-commerce", "Shipping & Freight", "Middleware"],
  },
  {
    title: "AI Assisted Operations",
    description:
      "This is where our practice is genuinely different. We wire modern AI assistants directly into NetSuite so repetitive transaction work becomes a one sentence request: a receiving batch processed from scanned packing lists, a discontinuation applied with every step in the right order, a transfer cut and verified against the sales order it serves. Guardrails come first. The assistant proves what it did, writes an exception instead of guessing, and never touches a record it cannot verify. Your team reviews outcomes instead of typing them.",
    tags: ["AI Copilots", "Guardrailed Automation", "Document Intake", "Exception Reports"],
  },
  {
    title: "Admin, Cleanup & Rescue",
    description:
      "For when the consultant who built it is long gone. We untangle broken scripts and stuck deployments, chase governance limit errors to their cause, clean up roles and permissions that grew by accretion, and run the data hygiene passes (CSV imports, duplicate merges, field standardization) that make every other report trustworthy again. Unglamorous work, honestly billed.",
    tags: ["Script Debugging", "Performance", "Roles & Permissions", "Data Hygiene"],
  },
];

const whyOperator = [
  {
    title: "We live in it daily",
    description:
      "We run NetSuite every business day inside a national industrial distributor: purchasing, receiving, inventory, and service operations. The scripts we write are scripts we have to live with on Monday morning.",
  },
  {
    title: "Ops first, code second",
    description:
      "We learn how your team actually works before we customize anything. The best NetSuite instances have fewer, better customizations, not more of them.",
  },
  {
    title: "Plain English",
    description:
      "You get explanations your controller understands, documentation your next administrator can follow, and a straight answer when something is not worth building.",
  },
];

export default function NetSuitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(netsuiteJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Services", url: "https://www.wildtechdev.com/services" },
          { name: "NetSuite", url: "https://www.wildtechdev.com/services/netsuite" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[700px] h-[400px] rounded-full pointer-events-none section-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              <Link href="/services" className="hover:text-body transition-colors">
                Services
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              NetSuite
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              NetSuite Consulting
            </h1>
            <p className="text-body text-base sm:text-lg max-w-2xl animate-fade-in-up delay-200 leading-relaxed">
              Most NetSuite consultants configure the system. We also run one,
              every day, inside a real operating business. That difference
              shows up in everything we build: SuiteScript that respects how
              your team actually works, reporting that answers real questions,
              and automation your auditors can trust.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {offerings.map((offering, i) => (
              <ScrollReveal key={offering.title}>
                <article className="group relative bg-black hover:bg-surface transition-colors duration-500 py-12 lg:py-14 px-6 lg:px-10 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                    <div className="lg:w-[280px] shrink-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-[12px] font-mono tracking-[0.2em] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-6 h-px bg-faint group-hover:bg-accent transition-colors duration-500" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-sans)] font-semibold text-heading group-hover:text-accent transition-colors duration-500">
                        {offering.title}
                      </h2>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-body leading-relaxed mb-6">
                        {offering.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {offering.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 text-[11.5px] font-mono uppercase tracking-[0.16em] text-muted px-3 py-1.5 border border-border bg-surface transition-all duration-300 hover:border-accent/40 hover:text-body"
                          >
                            <span className="w-0.5 h-0.5 rounded-full bg-accent" />
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

          {/* Why an operator */}
          <ScrollReveal>
            <div className="mt-24 relative bg-surface border border-border -mx-6 px-6 lg:-mx-10 lg:px-10 py-14 lg:py-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-12 h-px bg-accent" />
              <div
                className="absolute -top-20 right-0 w-[400px] h-[300px] rounded-full pointer-events-none section-glow"
                style={{
                  background:
                    "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                aria-hidden="true"
              />
              <p className="relative section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                Why it works
              </p>
              <h2 className="relative text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-14">
                An operator, not just a consultant.
              </h2>

              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10">
                {whyOperator.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 120}>
                    <div className="group">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-2xl font-[family-name:var(--font-serif)] italic text-accent/70 group-hover:text-accent transition-colors duration-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 h-px bg-border group-hover:bg-accent/40 transition-colors duration-500" />
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

          {/* Honest fit */}
          <ScrollReveal>
            <div className="mt-24 max-w-2xl">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                A straight answer about fit
              </p>
              <p className="text-body leading-relaxed">
                If you need a forty seat implementation partner for a ground-up
                go-live, that is a different kind of firm, and we will say so
                on the first call. Where we earn our keep is everything after
                go-live: the scripts, searches, integrations, and cleanup that
                decide whether your team actually trusts the system it paid
                for. Small engagements welcome. A single stubborn script is a
                perfectly good place to start.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-24 border-t border-border pt-16 text-center">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] justify-center">
                Get in touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                Tell us what NetSuite is doing to you.
              </h2>
              <p className="text-body mb-10 max-w-lg mx-auto">
                Describe the chore, the broken script, or the report nobody
                can build. We will give you a straight answer about whether it
                is worth fixing.
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
