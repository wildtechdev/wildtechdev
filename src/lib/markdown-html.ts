import { slugify } from "@/lib/slugify";

// Converts the site's markdown-light post format to plain HTML for the RSS
// feed's content:encoded payload, mirroring the rules the Prose component
// renders on the site: ## / ### headings, - lists, 1. lists, **bold**,
// `inline code`, [text](url) links, fenced code blocks, and standalone
// ![alt](src "caption") figure lines (image paths made absolute for readers).

const SITE = "https://www.wildtechdev.com";
const OL_RE = /^\d+\.\s+/;
const IMG_RE = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineHtml(text: string): string {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts
    .map((part) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return `<strong>${escapeHtml(part.slice(2, -2))}</strong>`;
      }
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2].startsWith("/") ? `${SITE}${link[2]}` : link[2];
        return `<a href="${escapeHtml(href)}">${escapeHtml(link[1])}</a>`;
      }
      return escapeHtml(part);
    })
    .join("");
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
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
      i++;
      out.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      out.push(`<h2 id="${slugify(text)}">${inlineHtml(text)}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      out.push(`<h3 id="${slugify(text)}">${inlineHtml(text)}</h3>`);
      i++;
      continue;
    }
    const img = line.match(IMG_RE);
    if (img) {
      const src = img[2].startsWith("/") ? `${SITE}${img[2]}` : img[2];
      const caption = img[3]
        ? `<figcaption>${escapeHtml(img[3])}</figcaption>`
        : "";
      out.push(
        `<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(img[1])}"/>${caption}</figure>`
      );
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(`<li>${inlineHtml(lines[i].slice(2).trim())}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }
    if (OL_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        if (OL_RE.test(lines[i])) {
          items.push(`<li>${inlineHtml(lines[i].replace(OL_RE, "").trim())}</li>`);
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
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !OL_RE.test(lines[i]) &&
      !lines[i].startsWith("```") &&
      !IMG_RE.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push(`<p>${inlineHtml(buf.join(" "))}</p>`);
  }
  return out.join("\n");
}
