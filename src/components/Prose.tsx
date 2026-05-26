import { Fragment } from "react";

// Tiny renderer for the markdown-light format used by posts and case studies.
// Splits on blank lines; treats "## " as h2, "### " as h3, "- " as list items.
// Wraps `inline code` in <code>. Triple-backtick blocks become <pre><code>.
// Plain paragraphs render as prose with the site's body styling.

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "pre"; text: string }
  | { type: "p"; text: string };

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
    // Paragraph: accumulate consecutive non-empty, non-special lines.
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("```")
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }
  return blocks;
}

function renderInline(text: string) {
  // Wrap `inline code` in <code>. Keep the rest as plain text.
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="rounded bg-[#11141a] border border-border px-1.5 py-0.5 text-[0.92em] text-heading font-mono"
        >
          {part.slice(1, -1)}
        </code>
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
          return (
            <h2
              key={i}
              className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mt-12 mb-2"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3
              key={i}
              className="text-xl font-[family-name:var(--font-sans)] font-semibold text-heading mt-8 mb-1"
            >
              {b.text}
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
        if (b.type === "pre") {
          return (
            <pre
              key={i}
              className="overflow-x-auto rounded border border-border bg-[#0a0c10] p-4 text-sm font-mono text-heading"
            >
              <code>{b.text}</code>
            </pre>
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
