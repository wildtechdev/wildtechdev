import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Build logs, technical writing, and notes from the WildTech Development workshop. Apps, hardware, and the realities of running a small studio.",
  alternates: {
    canonical: "https://www.wildtechdev.com/journal",
  },
  openGraph: {
    title: "Journal | WildTech Development",
    description: "Build logs and technical writing from WildTech.",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Journal", url: "https://www.wildtechdev.com/journal" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              Build logs and notes
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Journal
            </h1>
            <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
              Technical writing, build logs, and notes from the workshop. New
              posts when there is something real to say.
            </p>
          </div>

          <div className="divide-y divide-border">
            {posts.map((post) => (
              <ScrollReveal key={post.slug}>
                <article className="group py-10">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="block transition-transform duration-300 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3 mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-muted">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="w-4 h-px bg-faint" />
                      <span>{post.readMinutes} min read</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-3 group-hover:text-green transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-body leading-relaxed mb-4">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 items-center">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted px-2.5 py-1 border border-border bg-[#0a0c10]"
                        >
                          <span className="w-0.5 h-0.5 rounded-full bg-green" />
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-xs text-muted group-hover:text-green transition-colors duration-300 inline-flex items-center gap-1">
                        Read
                        <svg
                          className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
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
                      </span>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-border">
              <NewsletterSignup
                title="Get new posts in your inbox."
                description="A short note when something new ships. No spam, no tracking, easy to unsubscribe."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
