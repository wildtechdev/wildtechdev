import Link from "next/link";

// Answer-first summary card for pages that rank on problem searches: the
// visitor arriving from Google wants the solution, not the story. Used by
// case studies (CaseStudy.tldr) and journal posts (Post.tldr). Internal
// hrefs (starting with /) render as client-side links; everything else
// opens in a new tab.

export type TldrAction = { href: string; label: string; primary?: boolean };

const ARROW = (
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
);

export default function TldrCard({
  text,
  actions,
  className = "",
}: {
  text: string;
  actions: TldrAction[];
  className?: string;
}) {
  return (
    <div
      className={`relative bg-surface border border-border overflow-hidden p-6 sm:p-8 ${className}`}
    >
      <span
        className="absolute top-0 left-0 w-16 h-[2px] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 right-0 w-[360px] h-[220px] rounded-full pointer-events-none section-glow"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 9%, transparent) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <p className="relative text-[11.5px] font-mono uppercase tracking-[0.22em] text-accent mb-4">
        Just want the fix?
      </p>
      <p className="relative text-heading text-base sm:text-lg leading-relaxed max-w-3xl mb-7">
        {text}
      </p>
      <div className="relative flex flex-wrap gap-3">
        {actions.map((action) =>
          action.href.startsWith("/") ? (
            <Link
              key={action.href}
              href={action.href}
              className={action.primary ? "btn-solid" : "btn-ghost"}
            >
              {action.label}
              {ARROW}
            </Link>
          ) : (
            <a
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={action.primary ? "btn-solid" : "btn-ghost"}
            >
              {action.label}
              {ARROW}
            </a>
          )
        )}
      </div>
    </div>
  );
}
