import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { journalPosts, formatPostDate } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Build logs and technical write-ups from WildTech Development. What broke, what we found, and how we fixed it.",
  openGraph: {
    title: "Journal | WildTech Development",
    description:
      "Build logs and technical write-ups from WildTech Development.",
  },
};

export default function JournalPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          Notes from the bench
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Journal
        </h1>
        <p className="text-body text-lg mb-16 animate-fade-in-up delay-200">
          Build logs and technical write-ups. What broke, what we found
          underneath it, and what we shipped.
        </p>

        <div className="divide-y divide-border border-t border-border">
          {journalPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 100}>
              <article className="py-10 group">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                  <time
                    dateTime={post.date}
                    className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <span className="text-[10px] text-muted font-mono">
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-4 leading-tight">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="transition-colors duration-300 group-hover:text-green"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-body leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.15em] text-muted font-mono border border-border px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/journal/${post.slug}`}
                  className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
                >
                  Read the write-up &rarr;
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
