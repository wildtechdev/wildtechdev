"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  duration = 1800,
  suffix = "",
  prefix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    const start = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(to * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      };
      requestAnimationFrame(tick);
    };

    // If element is already in view at mount, kick off immediately
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const displayValue = Math.round(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
