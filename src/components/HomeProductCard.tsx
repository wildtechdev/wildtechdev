"use client";

import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import TiltCard from "@/components/TiltCard";

type Mockup =
  | "spirits-charleston"
  | "spirits-savannah"
  | "ez-fuse"
  | "churchd"
  | "vikingsense"
  | "we-the-people";

export type HomeProduct = {
  name: string;
  mockup: Mockup;
  type: string;
  description: string;
  price?: string;
  rating?: string;
  link?: string;
  linkLabel?: string;
  accent: string;
  /** Slug for the matching case study page at /work/[slug]. Clicking anywhere
   *  on the card (outside the external link) navigates here. */
  caseStudySlug: string;
};

/* Theme-aware hover tints. Dark values are deep color washes over the dark
   card; light values are soft pastels that read correctly on white (the old
   dark-950 Tailwind tints rendered as muddy smears in light mode). Applied
   through the .accent-tint CSS in globals.css. */
const accentTints: Record<string, { dark: string; light: string }> = {
  amber: { dark: "rgba(69, 26, 3, 0.2)", light: "rgba(254, 243, 199, 0.45)" },
  teal: { dark: "rgba(4, 47, 46, 0.2)", light: "rgba(204, 251, 241, 0.45)" },
  green: { dark: "rgba(5, 46, 22, 0.2)", light: "rgba(220, 252, 231, 0.5)" },
  indigo: { dark: "rgba(30, 27, 75, 0.2)", light: "rgba(224, 231, 255, 0.45)" },
  red: { dark: "rgba(69, 10, 10, 0.2)", light: "rgba(254, 226, 226, 0.4)" },
  blue: { dark: "rgba(23, 37, 84, 0.3)", light: "rgba(219, 234, 254, 0.5)" },
};

export default function HomeProductCard({
  product,
  index,
}: {
  product: HomeProduct;
  index: number;
}) {
  const tint = accentTints[product.accent] ?? accentTints.green;

  return (
    <TiltCard
      intensity={6}
      className="group accent-tint relative h-full flex flex-col bg-surface p-8 border border-transparent transition-colors duration-500 hover:border-accent/40"
      style={
        {
          "--tint-dark": tint.dark,
          "--tint-light": tint.light,
        } as React.CSSProperties
      }
    >
      {/* Stretched primary link. Sits above the decorative content so clicking
          anywhere on the card navigates to the case study, but BELOW the App
          Store / external link below so that link still wins its own click
          target. Visually invisible; the card's hover styles do all the
          affordance work.

          CRITICAL: TiltCard uses transform-style: preserve-3d, which makes
          z-index meaningless between siblings that have different translateZ
          values. The mockup wrapper sits at translateZ(20px), so this overlay
          must use translateZ above that to actually receive clicks across the
          mockup region. The App Store link below goes even higher so it still
          wins clicks on its label. */}
      <Link
        href={`/work/${product.caseStudySlug}`}
        aria-label={`Read the ${product.name} case study`}
        className="absolute inset-0 z-[2] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        style={{ transform: "translateZ(30px)" }}
      />

      <span className="absolute top-5 left-7 text-[44px] leading-none font-[family-name:var(--font-serif)] italic text-faint group-hover:text-accent/40 transition-colors duration-500 z-[1]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute top-7 right-7 text-[11.5px] font-mono tracking-[0.2em] text-accent/80 uppercase z-[1]">
        {product.type}
      </span>

      <div
        className="relative flex justify-center mt-14 mb-6 z-[1]"
        style={{ transform: "translateZ(20px)" }}
      >
        <PhoneMockup product={product.mockup} size="small" />
      </div>

      <div className="relative z-[1] flex-1 flex flex-col">
        <h3 className="text-xl font-[family-name:var(--font-serif)] italic text-heading mb-3">
          {product.name}
        </h3>
        <p className="text-body text-sm leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Spacer pushes the price/rating/CTA block to the bottom so cards
            with shorter content (free, no rating) still fill the grid cell
            and don't expose the gap-px border color underneath. */}
        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-4 min-h-[20px]">
            {product.price && (
              <span className="text-heading text-sm font-[family-name:var(--font-sans)]">
                {product.price}
              </span>
            )}
            {product.rating && (
              <span className="text-[11.5px] text-muted font-mono flex items-center gap-1">
                <span className="text-accent">★</span>
                {product.rating}
              </span>
            )}
          </div>

          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              /* z-[3] AND translateZ(40px) together keep this above the
                 stretched case-study link overlay (z-[2] / translateZ(30px))
                 so clicking the App Store / external link opens that
                 destination in a new tab instead of navigating the card.
                 The translateZ is required because TiltCard uses
                 transform-style: preserve-3d, which makes z-index alone
                 insufficient. */
              className="relative z-[3] inline-flex items-center gap-1.5 text-accent text-sm font-[family-name:var(--font-sans)] link-underline"
              style={{ transform: "translateZ(40px)" }}
            >
              {product.linkLabel}
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
      </div>
    </TiltCard>
  );
}
