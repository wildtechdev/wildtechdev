import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import OpenPaletteButton from "@/components/OpenPaletteButton";

const workLinks = [
  { href: "/work", label: "All case studies" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/will-mccants", label: "Founder" },
  { href: "/now", label: "Now" },
  { href: "/uses", label: "Uses" },
];

const resourceLinks = [
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/willmccants/",
    label: "WildTech on LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://apps.apple.com/us/developer/wildtech-ventures-llc/id1718456894",
    label: "WildTech Ventures on the App Store",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    href: "/feed.xml",
    label: "Journal RSS feed",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 012.18-2.18M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-auto overflow-hidden">
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none section-glow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Wordmark + tagline + newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-1.5 group">
              <span className="text-[34px] font-[family-name:var(--font-serif)] italic text-heading tracking-tight transition-all duration-500 group-hover:[text-shadow:0_0_24px_rgba(34,197,94,0.4)]">
                WildTech
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-body mt-3 max-w-sm leading-relaxed">
              Software, hardware, and services from Charleston, SC. Built with
              care by Will McCants and the WildTech team.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono tracking-widest text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              CHARLESTON, SC
            </div>
            <div className="mt-5 flex items-center gap-2 mb-10">
              {socialLinks.map((s) => {
                const isExternal = s.href.startsWith("http");
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex h-9 w-9 items-center justify-center border border-border bg-surface text-muted transition-colors duration-300 hover:border-green/50 hover:text-green"
                  >
                    {s.icon}
                  </a>
                );
              })}
            </div>
            <NewsletterSignup
              compact
              title="Stay in the loop"
              description="A short note when something new ships."
            />
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-5 font-[family-name:var(--font-sans)]">
                Work
              </p>
              <ul className="space-y-3">
                {workLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300"
                    >
                      <span
                        className="w-0 h-px bg-green transition-all duration-300 group-hover:w-3"
                        aria-hidden="true"
                      />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-5 font-[family-name:var(--font-sans)]">
                Company
              </p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300"
                    >
                      <span
                        className="w-0 h-px bg-green transition-all duration-300 group-hover:w-3"
                        aria-hidden="true"
                      />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted mb-5 font-[family-name:var(--font-sans)]">
                Resources
              </p>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300"
                    >
                      <span
                        className="w-0 h-px bg-green transition-all duration-300 group-hover:w-3"
                        aria-hidden="true"
                      />
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} WildTech Ventures, LLC. All
              rights reserved.
            </p>
            <div className="mt-2 flex items-center gap-4 text-xs text-muted">
              <Link
                href="/privacy"
                className="hover:text-body transition-colors duration-300"
              >
                Privacy
              </Link>
              <a
                href="/feed.xml"
                className="hover:text-body transition-colors duration-300"
              >
                RSS
              </a>
            </div>
            <p className="text-sm text-body mt-4 italic font-[family-name:var(--font-serif)]">
              &ldquo;Unless the Lord builds the house, those who build it labor
              in vain.&rdquo; Psalm 127:1
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <OpenPaletteButton className="text-[11.5px] uppercase tracking-[0.18em] text-muted font-mono hover:text-body transition-colors duration-300 cursor-pointer">
              Press <kbd className="text-heading">&#8984;K</kbd> or{" "}
              <kbd className="text-heading">/</kbd> anywhere
            </OpenPaletteButton>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted hover:text-green transition-colors duration-300"
            >
              <span>Back to top</span>
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
