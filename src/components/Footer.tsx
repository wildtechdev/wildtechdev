import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ecosystem = [
  { href: "https://wildtechchs.com", label: "WildTech CHS" },
  { href: "https://churchd.com", label: "Churchd" },
  { href: "https://vikingsense.com", label: "VikingSense" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body hover:text-heading transition-colors link-underline"
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
                    className="text-sm text-body hover:text-heading transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} WildTech Ventures, LLC
          </p>
          <p className="text-xs text-muted/60 mt-3 italic">
            &ldquo;Unless the Lord builds the house, those who build it labor in vain.&rdquo; Psalm 127:1
          </p>
        </div>
      </div>
    </footer>
  );
}
