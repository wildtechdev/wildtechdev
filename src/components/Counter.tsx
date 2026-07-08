"use client";

import { useEffect, useRef } from "react";

/**
 * Animated count-up. Writes textContent directly through a ref, so the
 * animation causes zero React re-renders (the old version set state on
 * every animation frame).
 */
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
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setDisplay = (value: number) => {
      el.textContent = `${prefix}${Math.round(value)}${suffix}`;
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(to);
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
        setDisplay(to * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplay(to);
        }
      };
      requestAnimationFrame(tick);
    };

    // If element is already in view at mount, kick off immediately
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
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
  }, [to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
