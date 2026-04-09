import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white mb-3">
              WildTech<span className="text-electric"> Dev</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Turning bold ideas into powerful software and hardware solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-electric transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Ecosystem</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wildtechchs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-electric transition-colors">
                  WildTech CHS
                </a>
              </li>
              <li>
                <a href="https://churchd.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-electric transition-colors">
                  Churchd
                </a>
              </li>
              <li>
                <a href="https://vikingsense.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-electric transition-colors">
                  VikingSense
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} WildTech Ventures, LLC. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-3 italic">
            &ldquo;Unless the Lord builds the house, those who build it labor in vain.&rdquo; &mdash;Ps 127:1
          </p>
        </div>
      </div>
    </footer>
  );
}
