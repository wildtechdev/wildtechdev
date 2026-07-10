import { posts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown-html";

const SITE = "https://www.wildtechdev.com";

/** Wrap HTML in CDATA, splitting any literal "]]>" so it cannot terminate
 *  the section early. */
function cdata(html: string): string {
  return `<![CDATA[${html.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = posts
    .map((p) => {
      const url = `${SITE}/journal/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(p.summary)}</description>
      <content:encoded>${cdata(markdownToHtml(p.content))}</content:encoded>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
${p.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>WildTech Development Journal</title>
    <link>${SITE}/journal</link>
    <description>Build logs, technical writing, and notes from the WildTech Development workshop in Charleston, SC.</description>
    <language>en-us</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date(posts[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
