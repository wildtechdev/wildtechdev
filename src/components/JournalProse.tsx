import type { ReactNode } from "react";

/**
 * Long-form primitives for journal entries. The rest of the site is short
 * marketing copy with inline classes; these keep article bodies readable
 * without repeating the same class strings on every paragraph.
 */

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-body text-lg sm:text-xl leading-relaxed mb-10">{children}</p>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-body leading-relaxed mb-6">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mt-16 mb-6 scroll-mt-24">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-[family-name:var(--font-sans)] font-bold text-heading mt-10 mb-4">
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-3 mb-6 pl-5 list-disc marker:text-green text-body leading-relaxed">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="space-y-3 mb-6 pl-5 list-decimal marker:text-green marker:font-mono text-body leading-relaxed">
      {children}
    </ol>
  );
}

/** Inline code — also used for the Win32 symbol names this post leans on. */
export function C({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-[0.85em] text-green bg-green/[0.07] border border-green/20 rounded px-1.5 py-0.5 break-words">
      {children}
    </code>
  );
}

/**
 * Terminal/log output. `label` sits on the top border so excerpts can say what
 * they are without a separate caption paragraph.
 */
export function CodeBlock({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <figure className="mb-8">
      {label && (
        <figcaption className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono border border-border border-b-0 bg-[#0a0a0a] px-4 py-2.5">
          {label}
        </figcaption>
      )}
      <pre className="bg-[#0a0a0a] border border-border p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono text-body">
        <code>{children}</code>
      </pre>
    </figure>
  );
}

/** Pulled-aside note. Green rule on the left, quieter type. */
export function Aside({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-2 border-green/40 pl-5 py-1 mb-8">
      <div className="text-sm text-body/90 leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-green link-underline"
    >
      {children}
    </a>
  );
}
