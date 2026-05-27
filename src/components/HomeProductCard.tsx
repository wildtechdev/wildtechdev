"use client";

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
};

const accentTints: Record<string, string> = {
  amber: "hover:bg-amber-950/20",
  teal: "hover:bg-teal-950/20",
  green: "hover:bg-green-950/20",
  indigo: "hover:bg-indigo-950/20",
  red: "hover:bg-red-950/20",
  blue: "hover:bg-blue-950/30",
};

export default function HomeProductCard({
  product,
  index,
}: {
  product: HomeProduct;
  index: number;
}) {
  return (
    <TiltCard
      intensity={6}
      className={`group relative h-full flex flex-col bg-[#0a0c10] p-8 border border-transparent transition-colors duration-500 hover:border-green/40 ${
        accentTints[product.accent]
      }`}
    >
      <span className="absolute top-5 left-7 text-[44px] leading-none font-[family-name:var(--font-serif)] italic text-faint group-hover:text-green/40 transition-colors duration-500 z-[1]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute top-7 right-7 text-[10px] font-mono tracking-[0.2em] text-green/80 uppercase z-[1]">
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
              <span className="text-[10px] text-muted font-mono flex items-center gap-1">
                <span className="text-green">★</span>
                {product.rating}
              </span>
            )}
          </div>

          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-green text-sm font-[family-name:var(--font-sans)] link-underline"
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
