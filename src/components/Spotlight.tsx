"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Spotlight({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // rAF-throttled coordinate updates (one style write per frame max).
    let rafId = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${lastX - rect.left}px`);
      el.style.setProperty("--my", `${lastY - rect.top}px`);
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`spotlight ${className}`}
    >
      {children}
    </Tag>
  );
}
