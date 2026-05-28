import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of WildTech Development projects: precision sensors, civic apps, ghost story platforms, fuse testers, and a church community platform in active development.",
  alternates: {
    canonical: "https://www.wildtechdev.com/work",
  },
  openGraph: {
    title: "Work | WildTech Development",
    description: "Deep case studies of every WildTech project.",
  },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Work", url: "https://www.wildtechdev.com/work" },
        ]}
      />
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-1/4 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)] animate-fade-in-up">
              Case studies
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
              Work
            </h1>
            <p className="text-body text-base sm:text-lg max-w-2xl animate-fade-in-up delay-200">
              The full story behind every product. Problem, approach, the
              decisions that mattered, and what shipped.
            </p>
          </div>

          <div className="divide-y divide-border">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.slug}>
                <Link href={`/work/${cs.slug}`} className="block group py-10">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-xs font-mono tracking-[0.2em] text-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-8 h-px bg-faint group-hover:bg-green transition-colors duration-500" />
                    <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
                      {cs.year}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-3 group-hover:text-green transition-colors">
                    {cs.product}
                  </h2>
                  <p className="text-body leading-relaxed mb-4 max-w-3xl">
                    {cs.summary}
                  </p>
                  <p className="text-xs text-muted font-mono uppercase tracking-[0.18em]">
                    Read case study
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
