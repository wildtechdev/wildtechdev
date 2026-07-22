import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a WildTech Development engagement actually works. Discovery, scope, build, ship, and ongoing support. Owner-operated from start to finish.",
  alternates: {
    canonical: "https://www.wildtechdev.com/process",
  },
  openGraph: {
    title: "Process | WildTech Development",
    description:
      "How we work with clients from first conversation to shipped product. Five phases, no surprises.",
    images: [
      {
        url: "/api/og?title=Five%20phases%2C%20no%20surprises&kind=Process",
        width: 1200,
        height: 630,
        alt: "The WildTech Development process",
      },
    ],
  },
};

const phases = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    description:
      "We start with a free conversation, usually thirty minutes by phone or video. The goal is to understand what you are trying to build and why, not to sell you something. By the end of the call we both know whether the project is a fit. If it is, we move into a paid discovery phase where we map out the full scope, talk to anyone we need to talk to, and produce a written proposal with a fixed price or a clearly bounded estimate.",
    deliverables: [
      "Free intro call",
      "Written scope document",
      "Fixed price or bounded estimate",
      "Timeline with key milestones",
    ],
  },
  {
    number: "02",
    title: "Design",
    duration: "Week 2 to 3",
    description:
      "Before we write production code we figure out what we are building. For a software project this means wireframes, then visual designs, then a clickable prototype if the scope warrants it. For hardware it means schematics, mechanical drawings, and material selection. We share work in progress throughout, not just at the end, so the final designs do not surprise anyone.",
    deliverables: [
      "Wireframes and visual designs",
      "Clickable prototype where useful",
      "Hardware schematics and drawings",
      "Approval gate before build starts",
    ],
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 3 to 12",
    description:
      "The longest phase of any project. We work in short cycles, usually two weeks, with a working build shared at the end of each cycle so you can see progress and give feedback while it is still cheap to change direction. Communication is direct and honest. We tell you when something is harder than expected and we tell you when something turns out simpler than we thought.",
    deliverables: [
      "Working builds every two weeks",
      "Direct contact with the founder, not an account manager",
      "Real progress, not status theater",
      "Honest updates when scope shifts",
    ],
  },
  {
    number: "04",
    title: "Ship",
    duration: "Final week",
    description:
      "The most underrated phase. Shipping means real testing on real devices, App Store submission and review for iOS work, deployment to production infrastructure for web work, and the final paperwork for hardware. We handle the App Store process end to end because we have done it many times. We do not consider a project done until it is live in front of real users.",
    deliverables: [
      "App Store submission and approval",
      "Production deployment for web platforms",
      "Final hardware certification",
      "Launch checklist and handoff",
    ],
  },
  {
    number: "05",
    title: "Support",
    duration: "Ongoing",
    description:
      "Software needs maintenance. iOS updates ship every September. Bugs that did not appear in testing show up under real user load. Features that turned out to be valuable need expanding. We offer ongoing support on a monthly retainer or hourly basis, depending on what makes sense for your project. We are not going to disappear after launch.",
    deliverables: [
      "Monthly retainer or hourly support",
      "OS upgrade compatibility work",
      "Bug fixes and improvements",
      "Long-term partnership, not a one-shot delivery",
    ],
  },
];

const principles = [
  {
    title: "Owner operated",
    description:
      "Every project is led by the founder. No account managers. No handoffs. The person you meet on the intro call is the person doing the work and the person you call when something goes wrong.",
  },
  {
    title: "Honest estimates",
    description:
      "We give you a real number after discovery. If a project will run over, we tell you while there is still time to make a decision. We do not gold plate. We do not pad. The estimate is the estimate.",
  },
  {
    title: "Direct communication",
    description:
      "Text us. Call us. Reply to an email. There is no portal you have to log into and no ticket queue. We answer fast because there are not many of us and we care about the work.",
  },
  {
    title: "Built to last",
    description:
      "We build with care because we will be the ones maintaining it. Every decision is made with the question of whether we want to be supporting it in three years. That keeps the code clean and the architecture honest.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Process", url: "https://www.wildtechdev.com/process" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-1/4 w-[700px] h-[400px] rounded-full pointer-events-none section-glow"
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
              How we work
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Process
            </h1>
            <p className="text-body text-base sm:text-lg max-w-2xl animate-fade-in-up delay-200">
              Five phases, no surprises. The same process whether the project is
              an iOS app, a web platform, or a custom hardware product.
            </p>
          </div>

          <div className="space-y-2 mb-24">
            {phases.map((phase) => (
              <ScrollReveal key={phase.number}>
                <article className="group relative bg-black hover:bg-surface transition-colors duration-500 border-l-[3px] border-l-accent/30 hover:border-l-accent py-12 lg:py-14 pl-8 pr-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                    <div className="lg:w-[260px] shrink-0">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-xs font-mono tracking-[0.2em] text-accent">
                          {phase.number}
                        </span>
                        <span className="w-6 h-px bg-faint group-hover:bg-accent transition-colors duration-500" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading">
                        {phase.title}
                      </h2>
                      <p className="mt-2 text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
                        {phase.duration}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-body leading-relaxed mb-6">
                        {phase.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                        {phase.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-muted"
                          >
                            <span
                              className="mt-2 w-1 h-1 bg-accent rounded-full shrink-0 shadow-[0_0_6px_color-mix(in_srgb,var(--color-accent)_60%,transparent)]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="relative bg-surface border border-border -mx-6 px-6 lg:-mx-10 lg:px-10 py-14 overflow-hidden mb-24">
              <div className="absolute top-0 left-0 w-12 h-px bg-accent" />
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
                Principles
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
                What you can expect.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {principles.map((p, i) => (
                  <ScrollReveal key={p.title} delay={i * 120}>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-border pt-16 text-center">
              <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] justify-center">
                Ready to start
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                Let&apos;s run the first phase together.
              </h2>
              <p className="text-body mb-10 max-w-lg mx-auto">
                A free thirty minute call to see if the project is a fit. No
                sales pressure, just an honest conversation.
              </p>
              <Link href="/contact" className="btn-ghost">
                Book the intro call
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
