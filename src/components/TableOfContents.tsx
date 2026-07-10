import { slugify } from "@/lib/slugify";

/**
 * Server-rendered table of contents for long journal posts. Parses the
 * post's "## " headings (same slugify as the Prose renderer, so anchors
 * always match) and renders a compact jump list. Returns nothing for
 * short posts.
 */
export default function TableOfContents({
  content,
  minSections = 4,
}: {
  content: string;
  minSections?: number;
}) {
  const sections = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.slice(3).trim());

  if (sections.length < minSections) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 border border-border bg-surface p-6"
    >
      <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-4">
        In this post
      </p>
      <ol className="space-y-2">
        {sections.map((title, i) => (
          <li key={title} className="flex items-baseline gap-3">
            <span
              className="text-[11.5px] font-mono text-green tracking-wider shrink-0"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${slugify(title)}`}
              className="text-sm text-body hover:text-green transition-colors duration-300"
            >
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
