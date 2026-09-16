/**
 * Journal entry metadata.
 *
 * Each entry has its own route folder under `src/app/journal/<slug>/` holding
 * the body. This file is the single source of truth for everything *about* an
 * entry, so the index page, the entry header, and the sitemap cannot drift.
 * Newest first.
 */

export type JournalPost = {
  slug: string;
  title: string;
  /** Shown on the index and used as the meta description. */
  excerpt: string;
  /** ISO date, used for <time> and sitemap lastModified. */
  date: string;
  readingTime: string;
  tags: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "new-outlook-drag-and-drop",
    title: "Why dragging attachments out of New Outlook does nothing",
    excerpt:
      "New Outlook advertises the file, then refuses to hand it over. We wrote a probe to find out why, and the answer is a documented Windows handshake that almost nothing implements.",
    date: "2026-09-16",
    readingTime: "8 min read",
    tags: ["Windows", "Drag and drop", "Chromium", "Build log"],
  },
  {
    slug: "windows-protected-your-pc",
    title: "“Windows protected your PC” is not what most people think",
    excerpt:
      "SmartScreen warns on unsigned software because nothing vouched for it, not because something was detected. What the warning actually checks, why it returns on every release, and what we do instead of buying our way out of it.",
    date: "2026-09-15",
    readingTime: "6 min read",
    tags: ["Windows", "SmartScreen", "Code signing", "Open source"],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
