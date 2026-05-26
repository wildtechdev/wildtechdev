import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

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

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-auto overflow-hidden">
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
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
            <div className="mt-6 flex items-center gap-2 text-xs font-mono tracking-widest text-muted mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              CHARLESTON, SC
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
            <p className="text-sm text-body mt-4 italic font-[family-name:var(--font-serif)]">
              &ldquo;Unless the Lord builds the house, those who build it labor
              in vain.&rdquo; Psalm 127:1
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted font-mono">
              Press <kbd className="text-heading">&#8984;K</kbd> or{" "}
              <kbd className="text-heading">/</kbd> anywhere
            </p>
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
