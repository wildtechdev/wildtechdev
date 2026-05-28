import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with WildTech Development. Project cost, timeline, scope, intellectual property, ongoing support, and more.",
  alternates: {
    canonical: "https://www.wildtechdev.com/faq",
  },
  openGraph: {
    title: "FAQ | WildTech Development",
    description:
      "Common pre-sales questions answered. Cost, timeline, scope, IP, support.",
  },
};

const faqs = [
  {
    q: "How much does a project cost?",
    a: "Costs vary widely with scope. A simple iOS utility runs fifteen to thirty thousand dollars. A content-driven app with audio, GPS, or media lands between thirty and seventy thousand. A subscription or community-style platform with backend, accounts, and ongoing content runs seventy to one hundred fifty thousand. Hardware projects start at fifty thousand and run higher depending on the device. We give you a real number after a discovery call, not a guess before we have heard the actual scope.",
  },
  {
    q: "How long does a project take?",
    a: "Simple iOS utility apps take four to eight weeks. Moderate content apps take three to five months. Complex platforms with backend take six to twelve months. Hardware projects vary by complexity. We give you a real timeline after discovery, and we tell you immediately if something looks like it is going to slip.",
  },
  {
    q: "Do you have a minimum project size?",
    a: "We are happy to take on small, focused projects starting around fifteen thousand dollars. Below that the discovery and setup overhead does not leave enough room for the actual work. If your project is smaller than that, we are glad to point you to other developers who specialize in that range.",
  },
  {
    q: "Who owns the work when it is done?",
    a: "You do. Every contract assigns full intellectual property ownership of the work product to you on delivery. The code, the designs, the App Store listing, the hardware schematics. Yours, unconditionally. We retain the right to mention the project in our portfolio unless you ask us not to.",
  },
  {
    q: "Will I work with the founder or with an account manager?",
    a: "Directly with the founder, Will McCants, on every project. There are no handoffs, no junior project managers, and no team that mysteriously turns over halfway through. The person you meet on the intro call is the person doing and overseeing the actual work.",
  },
  {
    q: "Where are you located? Do you work remotely?",
    a: "WildTech Ventures is based in Charleston, South Carolina. We work with clients across the United States and beyond. Most of the work happens remotely with regular video calls. For larger projects or projects with a physical component, we travel to client sites when it makes sense.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. A mutual NDA before discovery is normal and expected for most engagements. Send us yours or we can send ours.",
  },
  {
    q: "What technology stack do you use?",
    a: "For iOS we use Swift and SwiftUI. For Windows we use C# and the .NET stack. For web we use Next.js, React, and Tailwind CSS, with TypeScript end to end. For hardware we use the appropriate microcontrollers and embedded toolchains for the project. Our full current stack is on the /uses page. We do not lock projects into proprietary frameworks. The code we deliver runs on standard tooling that any competent developer can pick up later.",
  },
  {
    q: "Do you handle App Store submission?",
    a: "Yes, end to end. We submit, respond to App Review feedback, handle the inevitable revisions, and walk the app through to live status. We have done this many times with our own apps and with client work. We know what triggers rejections and how to avoid them.",
  },
  {
    q: "What happens after launch?",
    a: "Software needs ongoing maintenance. We offer monthly retainers and hourly support depending on what makes sense. iOS updates ship every September. Bugs that did not show up in testing appear under real load. Features that turn out to be valuable need expanding. We stay engaged after launch for as long as the project is alive.",
  },
  {
    q: "Will my project go into your portfolio?",
    a: "Usually, with your permission and with whatever level of detail you are comfortable sharing. If you would rather we keep the project private we are happy to do that. Confidential work is a normal part of how we operate.",
  },
  {
    q: "Do you take equity instead of fees?",
    a: "Almost never. We work on a fixed-fee or hourly basis. Equity arrangements muddy the relationship and usually do not serve either party well. We are open to exceptions for projects where there is a specific strategic reason and where the equity stake is genuinely meaningful, but the default answer is no.",
  },
  {
    q: "Do you build with AI tools?",
    a: "We use modern AI tooling where it makes the work better or faster, the same way we use any other tool. Code completion, design generation, documentation drafting. We do not use AI as a substitute for thinking, and we do not ship AI-generated code that has not been read, tested, and understood by a human. The accountability for what ends up in your codebase or your hardware is ours.",
  },
  {
    q: "What if my project gets stuck or I want to stop?",
    a: "You can stop a project at any phase boundary. We do not believe in trapping clients with long-tail contracts. If discovery shows the project is not a fit, we end it cleanly. If you decide partway through the build that the direction changed, we close out and hand off what we have. Honest, no drama.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "FAQ", url: "https://www.wildtechdev.com/faq" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 left-1/4 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              Questions
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              FAQ
            </h1>
            <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
              Honest answers to the questions clients ask before working with us.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q}>
                <details
                  className="group bg-black open:bg-surface transition-colors"
                  open={i < 3}
                >
                  <summary className="cursor-pointer list-none px-6 py-6 flex items-start gap-4 hover:bg-surface transition-colors">
                    <span className="text-[11px] font-mono tracking-[0.2em] text-green mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-lg sm:text-xl font-[family-name:var(--font-sans)] text-heading">
                      {faq.q}
                    </span>
                    <span
                      className="mt-2 w-3 h-3 border-r-2 border-b-2 border-muted group-open:rotate-[225deg] -rotate-45 transition-transform shrink-0"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-6 pl-[58px]">
                    <p className="text-body leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 border-t border-border pt-14 text-center">
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
                Still have a question?
              </h2>
              <p className="text-body mb-8 max-w-lg mx-auto">
                The answer is probably yes, and the best way to find out is to
                ask directly.
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
