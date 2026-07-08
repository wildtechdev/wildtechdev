import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollReveal from "@/components/ScrollReveal";
import JournalList from "@/components/JournalList";
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
    images: [
      {
        url: "/api/og?title=Build%20logs%20and%20notes%20from%20the%20workshop&kind=Journal",
        width: 1200,
        height: 630,
        alt: "WildTech Development Journal",
      },
    ],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.wildtechdev.com/journal#blog",
  url: "https://www.wildtechdev.com/journal",
  name: "WildTech Development Journal",
  description:
    "Build logs, technical writing, and notes from the WildTech Development workshop.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "WildTech Development",
    url: "https://www.wildtechdev.com",
  },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://www.wildtechdev.com/journal/${p.slug}`,
    datePublished: p.date,
  })),
};

export default function JournalPage() {
  const listPosts = posts.map(
    ({ slug, title, summary, date, readMinutes, tags }) => ({
      slug,
      title,
      summary,
      date,
      readMinutes,
      tags,
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Journal", url: "https://www.wildtechdev.com/journal" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-0 w-[700px] h-[400px] rounded-full pointer-events-none section-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              Build logs and notes
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Journal
            </h1>
            <p className="text-body text-base sm:text-lg max-w-xl animate-fade-in-up delay-200">
              Technical writing, build logs, and notes from the workshop. New
              posts when there is something real to say. Also available as an{" "}
              <a href="/feed.xml" className="link-underline text-heading">
                RSS feed
              </a>
              .
            </p>
          </div>

          <JournalList posts={listPosts} />

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
