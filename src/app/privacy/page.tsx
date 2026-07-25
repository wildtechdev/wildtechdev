import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How wildtechdev.com handles your information: what the contact form collects, how it is used, and what we deliberately do not do (no analytics, no ads, no tracking).",
  alternates: {
    canonical: "https://www.wildtechdev.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | WildTech Development",
    description:
      "What this site collects, how it is used, and what we deliberately do not do.",
    images: [
      {
        url: "/api/og?title=Privacy%20Policy&kind=Legal",
        width: 1200,
        height: 630,
        alt: "WildTech Development Privacy Policy",
      },
    ],
  },
};

const sections = [
  {
    title: "1. What we collect",
    body: [
      "This site collects information in exactly two places, and only when you choose to submit it.",
      "The contact form collects your name, email address, and the message you write. (The site previously offered an email newsletter; it has been retired, its signup form is gone, and addresses that were submitted to it are not used for anything.)",
      "That is the complete list. There are no user accounts, no analytics scripts, no advertising pixels, and no tracking cookies anywhere on this site.",
    ],
  },
  {
    title: "2. How we use it",
    body: [
      "Contact form submissions are emailed to our inbox so we can reply to you, and you receive a confirmation copy at the address you provided. We use your message to respond to your inquiry and for nothing else.",
    ],
  },
  {
    title: "3. Who processes it",
    body: [
      "Form submissions are delivered through Resend, a transactional email service, acting as our processor. Your data is not sold, rented, shared with advertisers, or disclosed to any other third party.",
      "This site is hosted on Vercel, which processes standard server request logs (such as IP addresses) as part of operating the infrastructure.",
    ],
  },
  {
    title: "4. Cookies and local storage",
    body: [
      "The site sets no tracking cookies. The only thing stored in your browser is a single localStorage key that remembers your light or dark theme choice. It never leaves your device.",
    ],
  },
  {
    title: "5. Retention",
    body: [
      "Contact messages live in our email inbox for as long as they are useful for the conversation you started. You can request deletion at any time by emailing us.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "You can ask what information we hold about you, ask us to correct it, or ask us to delete it. Email info@wildtechdev.com and we will handle it directly. There is no form, no portal, and no runaround.",
    ],
  },
  {
    title: "7. Changes",
    body: [
      "If this policy changes, the date below updates and the current version always lives at this URL.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Privacy", url: "https://www.wildtechdev.com/privacy" },
        ]}
      />
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Privacy Policy
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-xl">
              The short version: this site collects almost nothing, tracks
              nothing, and only knows what you choose to tell us through the
              contact form.
            </p>
            <p className="mt-8 text-xs uppercase tracking-widest text-muted font-[family-name:var(--font-sans)]">
              <span className="block mb-1">Last updated</span>
              <span className="text-heading normal-case tracking-normal text-sm">
                July 24, 2026
              </span>
            </p>
          </div>

          <ScrollReveal>
            <div className="bg-surface border border-border p-5 sm:p-8 lg:p-12 space-y-12">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                    {s.title}
                  </h2>
                  <div className="space-y-3">
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-body text-base leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                  8. Contact
                </h2>
                <p className="text-body text-base leading-relaxed mb-4">
                  Questions about this policy or your data:
                </p>
                <a
                  href="mailto:info@wildtechdev.com"
                  className="text-sm text-heading link-underline"
                >
                  info@wildtechdev.com
                </a>
                <p className="text-body text-sm leading-relaxed mt-8">
                  Looking for the privacy policy of the We The People: Your
                  Rights iOS app?{" "}
                  <Link
                    href="/privacy/we-the-people-your-rights"
                    className="link-underline text-heading"
                  >
                    It lives here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
