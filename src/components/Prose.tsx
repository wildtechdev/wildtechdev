import { Fragment } from "react";
import Link from "next/link";
import CopyCode from "@/components/CopyCode";
import { slugify } from "@/lib/slugify";

// Tiny renderer for the markdown-light format used by posts and case studies.
// Splits on blank lines; treats "## " as h2, "### " as h3, "- " as list items,
// and "1. " style lines as ordered list items. Wraps `inline code` in <code>,
// **bold** in <strong>, and [text](url) in links (internal /paths get
// client-side navigation via next/link). Triple-backtick blocks become
// <pre><code>. Plain paragraphs render as prose with the site's body styling.

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "pre"; text: string }
  | { type: "p"; text: string };

const OL_RE = /^\d+\.\s+/;

function parse(markdown: string): Block[] {
  const blocks: Block[] = [];
  const lines = markdown.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push({ type: "pre", text: buf.join("\n") });
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (OL_RE.test(line)) {
      // Numbered items may be separated by blank lines in the source; keep
      // consuming as long as the next non-empty line is numbered too.
      const items: string[] = [];
      while (i < lines.length) {
        if (OL_RE.test(lines[i])) {
          items.push(lines[i].replace(OL_RE, "").trim());
          i++;
        } else if (
          lines[i].trim() === "" &&
          i + 1 < lines.length &&
          OL_RE.test(lines[i + 1])
        ) {
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    // Paragraph: accumulate consecutive non-empty, non-special lines.
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !OL_RE.test(lines[i]) &&
      !lines[i].startsWith("```")
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }
  return blocks;
}

/** Hover-revealed "#" link so readers can grab a deep link to any section. */
function HeadingAnchor({ id, text }: { id: string; text: string }) {
  return (
    <a
      href={`#${id}`}
      className="heading-anchor"
      aria-label={`Link to section: ${text}`}
    >
      #
    </a>
  );
}

const LINK_CLASS = "text-green link-underline";

function renderInline(text: string) {
  // Handle `inline code`, **bold**, and [text](url) spans; everything else
  // is plain text.
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="rounded bg-card border border-border px-1.5 py-0.5 text-[0.92em] text-heading font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="text-heading font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (href.startsWith("/")) {
        return (
          <Link key={idx} href={href} className={LINK_CLASS}>
            {label}
          </Link>
        );
      }
      return (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {label}
          <span aria-hidden="true" className="text-[0.8em] ml-0.5">
            &#8599;
          </span>
        </a>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

export default function Prose({ content }: { content: string }) {
  const blocks = parse(content);
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          const id = slugify(b.text);
          return (
            <h2
              key={i}
              id={id}
              className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mt-12 mb-2 scroll-mt-24"
            >
              {b.text}
              <HeadingAnchor id={id} text={b.text} />
            </h2>
          );
        }
        if (b.type === "h3") {
          const id = slugify(b.text);
          return (
            <h3
              key={i}
              id={id}
              className="text-xl font-[family-name:var(--font-sans)] font-semibold text-heading mt-8 mb-1 scroll-mt-24"
            >
              {b.text}
              <HeadingAnchor id={id} text={b.text} />
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {b.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-body leading-relaxed"
                >
                  <span
                    className="mt-2.5 w-1 h-1 bg-green rounded-full shrink-0 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                    aria-hidden="true"
                  />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === "ol") {
          return (
            <ol key={i} className="space-y-3 pl-1">
              {b.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-body leading-relaxed"
                >
                  <span
                    className="mt-0.5 text-[12px] font-mono text-green tracking-wider shrink-0"
                    aria-hidden="true"
                  >
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (b.type === "pre") {
          return (
            <div key={i} className="group relative">
              <CopyCode text={b.text} />
              <pre className="overflow-x-auto rounded border border-border bg-surface p-4 text-sm font-mono text-heading">
                <code>{b.text}</code>
              </pre>
            </div>
          );
        }
        return (
          <p key={i} className="text-body leading-relaxed">
            {renderInline(b.text)}
          </p>
        );
      })}
    </div>
  );
}
