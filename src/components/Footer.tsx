import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products#spirits-of-charleston", label: "Spirits of Charleston" },
  { href: "/products#spirits-of-savannah", label: "Spirits of Savannah" },
  { href: "/products#ez-fuse-tester", label: "EZ Fuse Tester" },
  { href: "/products#churchd", label: "Churchd" },
  { href: "/products#vikingsense", label: "VikingSense" },
];

const ecosystem = [
  { href: "https://churchd.com", label: "Churchd" },
  { href: "https://vikingsense.com", label: "VikingSense" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Wordmark + tagline */}
          <div className="lg:w-1/4 shrink-0">
            <Link href="/" className="block">
              <span className="text-[32px] font-[family-name:var(--font-serif)] italic text-heading tracking-tight">
                WildTech
              </span>
            </Link>
            <p className="text-sm text-muted mt-2 font-[family-name:var(--font-sans)]">
              Software, hardware, and services from Charleston, SC
            </p>
          </div>

          {/* Link columns - stack on mobile */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body hover:text-heading hover:translate-x-1 transition-all duration-200 link-underline inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                Products
              </p>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body hover:text-heading hover:translate-x-1 transition-all duration-200 link-underline inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                Ecosystem
              </p>
              <ul className="space-y-3">
                {ecosystem.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-body hover:text-heading hover:translate-x-1 transition-all duration-200 link-underline inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} WildTech Ventures, LLC
            </p>
            <p className="text-xs text-muted/60 mt-3 italic">
              &ldquo;Unless the Lord builds the house, those who build it labor in vain.&rdquo; Psalm 127:1
            </p>
          </div>
          <a
            href="#top"
            className="text-xs text-muted hover:text-heading transition-colors link-underline shrink-0 text-center sm:text-right w-full sm:w-auto"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
