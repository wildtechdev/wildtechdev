import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import PhoneMockup from "@/components/PhoneMockup";
import Prose from "@/components/Prose";
import ScrollReveal from "@/components/ScrollReveal";
import {
  caseStudies,
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/work";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case study not found" };
  const ogImage = `/api/og?title=${encodeURIComponent(cs.product)}&kind=${encodeURIComponent("Case Study")}`;
  return {
    title: `${cs.product} case study`,
    description: cs.summary,
    alternates: {
      canonical: `https://www.wildtechdev.com/work/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.product} | WildTech Case Study`,
      description: cs.summary,
      type: "article",
      images: [
        { url: ogImage, width: 1200, height: 630, alt: `${cs.product} case study` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.product} | WildTech Case Study`,
      description: cs.summary,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prev =
    caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${cs.product}: ${cs.title}`,
    description: cs.summary,
    url: `https://www.wildtechdev.com/work/${cs.slug}`,
    image: `https://www.wildtechdev.com/api/og?title=${encodeURIComponent(cs.product)}&kind=${encodeURIComponent("Case Study")}`,
    author: {
      "@type": "Organization",
      name: "WildTech Development",
      url: "https://www.wildtechdev.com",
    },
    publisher: {
      "@type": "Organization",
      name: "WildTech Development",
      url: "https://www.wildtechdev.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.wildtechdev.com/work/${cs.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Work", url: "https://www.wildtechdev.com/work" },
          {
            name: cs.product,
            url: `https://www.wildtechdev.com/work/${cs.slug}`,
          },
        ]}
      />
      <article className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 left-0 w-[700px] h-[400px] rounded-full pointer-events-none section-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[11.5px] font-mono uppercase tracking-[0.22em] text-muted hover:text-green transition-colors mb-10"
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
            All work
          </Link>

          <header className="mb-14">
            {/* Top: title block + product mockup side-by-side on desktop,
                stacked on mobile with the mockup below the title. */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 mb-12">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono tracking-[0.2em] text-green mb-3">
                  {cs.year}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-4 leading-[1.05]">
                  {cs.product}
                </h1>
                <p className="text-body text-lg leading-relaxed max-w-2xl">
                  {cs.title}
                </p>

                {/* Top-of-page product CTA. Duplicates the App Store / Visit
                    site buttons from the bottom CTA block so visitors who
                    don't scroll the whole case study can still follow through
                    to the product directly from the header. */}
                {(cs.appStoreUrl || cs.externalUrl) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {cs.appStoreUrl && (
                      <a
                        href={cs.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-solid"
                      >
                        View on App Store
                        <svg
                          className="w-3.5 h-3.5"
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
                      </a>
                    )}
                    {cs.externalUrl && (
                      <a
                        href={cs.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-solid"
                      >
                        Visit site
                        <svg
                          className="w-3.5 h-3.5"
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
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div
                className="shrink-0 self-center lg:self-start"
                style={{ transform: "translateZ(0)" }}
              >
                <PhoneMockup product={cs.mockup} priority />
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <dt className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-2">
                  Client
                </dt>
                <dd className="text-sm text-heading">{cs.client}</dd>
              </div>
              <div>
                <dt className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-2">
                  Role
                </dt>
                <dd className="text-sm text-heading">{cs.role}</dd>
              </div>
              <div>
                <dt className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-2">
                  Stack
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center text-[11.5px] font-mono uppercase tracking-[0.16em] text-muted px-2 py-1 border border-border bg-surface"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {cs.metrics && cs.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mt-10">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-surface p-6">
                    <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mb-2">
                      {m.label}
                    </p>
                    <p className="text-lg sm:text-xl text-heading font-[family-name:var(--font-serif)] italic">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </header>

          <div className="border-t border-border pt-10 max-w-3xl mx-auto">
            <Prose content={cs.content} />
          </div>

          <ScrollReveal>
            <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-3">
                {cs.appStoreUrl && (
                  <a
                    href={cs.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    View on App Store
                  </a>
                )}
                {cs.externalUrl && (
                  <a
                    href={cs.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Visit site
                  </a>
                )}
                <Link
                  href={`/products#${cs.productAnchor}`}
                  className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline py-2"
                >
                  See on products page
                </Link>
              </div>
              <Link
                href="/contact"
                className="text-sm text-body hover:text-heading transition-colors duration-300 link-underline"
              >
                Have a project like this?
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 pt-10 border-t border-border max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                  Previous
                </p>
                <Link href={`/work/${prev.slug}`} className="block group">
                  <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading group-hover:text-green transition-colors mb-2">
                    {prev.product}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {prev.summary}
                  </p>
                </Link>
              </div>
              <div>
                <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-6 font-[family-name:var(--font-sans)]">
                  Up next
                </p>
                <Link href={`/work/${next.slug}`} className="block group">
                  <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading group-hover:text-green transition-colors mb-2">
                    {next.product}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {next.summary}
                  </p>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
