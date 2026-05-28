import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import Prose from "@/components/Prose";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllSlugs, getPostBySlug, posts } from "@/lib/posts";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `https://www.wildtechdev.com/journal/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | WildTech Development`,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: ["Will McCants"],
      tags: post.tags,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: "Will McCants",
      url: "https://www.wildtechdev.com/will-mccants",
    },
    publisher: {
      "@type": "Organization",
      name: "WildTech Development",
      url: "https://www.wildtechdev.com",
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.wildtechdev.com/journal/${post.slug}`,
    },
  };

  // Related posts: same tags, exclude this one, max 2.
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Journal", url: "https://www.wildtechdev.com/journal" },
          {
            name: post.title,
            url: `https://www.wildtechdev.com/journal/${post.slug}`,
          },
        ]}
      />
      <article className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 left-1/4 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted hover:text-green transition-colors mb-10"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to journal
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="w-4 h-px bg-faint" />
              <span>{post.readMinutes} min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 leading-[1.05]">
              {post.title}
            </h1>
            <p className="text-body text-lg leading-relaxed">{post.summary}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-muted px-2.5 py-1 border border-border bg-surface"
                >
                  <span className="w-0.5 h-0.5 rounded-full bg-green" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="border-t border-border pt-10">
            <Prose content={post.content} />
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <Link
              href="/will-mccants"
              className="group inline-flex items-center gap-4 -mx-2 px-2 py-2 rounded transition-colors duration-300 hover:bg-surface"
              aria-label="About Will McCants, founder of WildTech Development"
            >
              <span className="relative block w-12 h-12 rounded-full overflow-hidden border border-border transition-all duration-500 group-hover:border-green/60 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.25)]">
                <Image
                  src="/headshot.jpg"
                  alt="Will McCants, founder of WildTech Development"
                  width={1125}
                  height={1687}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "50% 22%" }}
                  sizes="48px"
                />
              </span>
              <span className="block">
                <span className="block text-sm text-heading font-medium group-hover:text-green transition-colors duration-300">
                  Will McCants
                </span>
                <span className="block text-xs text-muted">
                  Founder, WildTech Development
                </span>
              </span>
              <span
                className="ml-2 text-[10px] uppercase tracking-[0.22em] text-faint font-mono opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                aria-hidden="true"
              >
                Read more &rarr;
              </span>
            </Link>
          </div>

          {related.length > 0 && (
            <ScrollReveal>
              <div className="mt-16 pt-10 border-t border-border">
                <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                  Keep reading
                </p>
                <div className="space-y-6">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/journal/${p.slug}`}
                      className="block group"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted mb-1">
                        {formatDate(p.date)}
                      </p>
                      <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading group-hover:text-green transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal>
            <div className="mt-16 pt-10 border-t border-border">
              <NewsletterSignup
                title="Want the next post in your inbox?"
                description="Short notes when something new ships. No spam."
              />
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
