import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | WildTech Development",
  },
  description:
    "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Glow behind */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative text-center px-6 max-w-md mx-auto">
        {/* 404 number with stacked depth */}
        <div className="relative inline-block">
          <p
            className="absolute inset-0 text-[9rem] sm:text-[12rem] font-[family-name:var(--font-serif)] italic text-green/10 leading-none select-none blur-md"
            aria-hidden="true"
          >
            404
          </p>
          <p className="relative text-[9rem] sm:text-[12rem] font-[family-name:var(--font-serif)] italic text-heading leading-none select-none animate-fade-in-scale">
            404
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-green" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-green">
            Not found
          </p>
          <span className="w-8 h-px bg-green" />
        </div>

        <h2 className="mt-6 text-2xl font-[family-name:var(--font-serif)] italic text-heading">
          Lost in the static
        </h2>
        <p className="text-sm text-muted mt-4 leading-relaxed">
          The page you are looking for does not exist or has been moved
          somewhere new.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link href="/" className="btn-ghost">
            Back to home
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline py-2"
          >
            Report a broken link
          </Link>
        </div>
      </div>
    </section>
  );
}
