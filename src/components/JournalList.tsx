"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { formatDate } from "@/lib/format";

export type JournalListPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readMinutes: number;
  tags: string[];
};

/**
 * Filterable journal index. Client-side so the page itself stays statically
 * generated; reads ?q= from the URL, which makes the WebSite SearchAction
 * JSON-LD in the root layout point at a real, working search.
 */
function JournalListInner({ posts }: { posts: JournalListPost[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const q = query.toLowerCase();
  const filtered = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    : posts;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = new FormData(e.currentTarget).get("q");
    const next = String(value ?? "").trim();
    router.replace(next ? `/journal?q=${encodeURIComponent(next)}` : "/journal", {
      scroll: false,
    });
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        role="search"
        className="mb-10 flex items-center gap-3"
      >
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
            />
          </svg>
          <input
            key={query}
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search posts by title, topic, or tag..."
            aria-label="Search journal posts"
            className="input-line pl-7"
          />
        </div>
        <button type="submit" className="btn-ghost shrink-0">
          Search
        </button>
      </form>

      {query && (
        <p className="mb-8 text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
          {filtered.length}{" "}
          {filtered.length === 1 ? "post matches" : "posts match"} &ldquo;
          {query}&rdquo;{" "}
          <Link href="/journal" className="text-accent hover:underline">
            Clear
          </Link>
        </p>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-body">
          Nothing matches that search. Try a broader term, or{" "}
          <Link href="/journal" className="text-accent link-underline">
            browse all posts
          </Link>
          .
        </p>
      )}

      <div className="divide-y divide-border">
        {filtered.map((post) => (
          <ScrollReveal key={post.slug}>
            <article className="group py-10">
              <Link
                href={`/journal/${post.slug}`}
                className="block transition-transform duration-300 hover:translate-x-1"
              >
                <div className="flex items-center gap-3 mb-3 text-[11.5px] font-mono uppercase tracking-[0.22em] text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="w-4 h-px bg-faint" />
                  <span>{post.readMinutes} min read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-3 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-body leading-relaxed mb-4">{post.summary}</p>
              </Link>
              <div className="flex flex-wrap gap-2 items-center">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/journal?q=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-mono uppercase tracking-[0.16em] text-muted px-2.5 py-1 border border-border bg-surface transition-colors duration-300 hover:border-accent/40 hover:text-body"
                  >
                    <span className="w-0.5 h-0.5 rounded-full bg-accent" />
                    {tag}
                  </Link>
                ))}
                <Link
                  href={`/journal/${post.slug}`}
                  className="ml-auto text-xs text-muted hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                >
                  Read
                  <svg
                    className="w-3 h-3"
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
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}

export default function JournalList({ posts }: { posts: JournalListPost[] }) {
  return (
    <Suspense fallback={null}>
      <JournalListInner posts={posts} />
    </Suspense>
  );
}
