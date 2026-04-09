"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "WildTech CHS installed our Nest cam system flawlessly. Professional, clean work and they walked us through everything. Couldn't be happier with the results.",
    author: "Charleston Homeowner",
  },
  {
    quote:
      "They designed and installed our complete Verkada security system with LPR and facial recognition, plus integrated digital signage across our facility. Truly next-level.",
    author: "Commercial Client",
  },
  {
    quote:
      "Our Starlink installation was quick and reliable. WildTech CHS knew exactly how to position everything for the best signal. Outstanding service from start to finish.",
    author: "Rural Property Owner",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted mb-12 font-[family-name:var(--font-sans)]">
          What clients say
        </p>

        <div className="min-h-[280px] flex flex-col justify-center">
          <blockquote
            key={current}
            className="animate-fade-in"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-serif)] italic text-heading leading-snug">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <cite className="block mt-8 text-xs uppercase tracking-widest text-muted not-italic font-[family-name:var(--font-sans)]">
              {testimonials[current].author}
            </cite>
          </blockquote>
        </div>

        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-green w-6"
                  : "bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
