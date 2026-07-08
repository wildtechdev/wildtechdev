"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu when the route changes. Adjusting state during
  // render (comparing against the previous pathname) is React's sanctioned
  // pattern for this and avoids an extra effect-triggered render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group relative flex items-center gap-2">
            <span
              className="absolute -left-1 -right-1 -top-1 -bottom-1 rounded-full bg-green/0 group-hover:bg-green/10 blur-md transition-all duration-500"
              aria-hidden="true"
            />
            <span className="relative text-lg font-[family-name:var(--font-serif)] italic text-heading tracking-tight transition-all duration-500 group-hover:[text-shadow:0_0_20px_rgba(34,197,94,0.4)]">
              WildTech
            </span>
            <span
              className="relative w-1 h-1 rounded-full bg-green opacity-70 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-heading"
                      : "text-body hover:text-heading"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-px transition-all duration-500 ${
                      isActive
                        ? "bg-green scale-x-100"
                        : "bg-green scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "left" }}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <ThemeToggle className="ml-2" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-body hover:text-heading transition-colors p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 top-1.5 w-5 h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-1.5 w-5 h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          mobileOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-border px-6 py-8 space-y-1">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 py-3 text-base transition-all duration-300 ${
                  mobileOpen ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                } ${
                  isActive ? "text-heading" : "text-body hover:text-heading"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 60 + 80}ms` : "0ms",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-green" : "bg-faint"
                  }`}
                  aria-hidden="true"
                />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
