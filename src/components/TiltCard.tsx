"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  style,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    // rAF-throttled: mousemove events only stash coordinates; layout reads
    // and style writes happen at most once per frame.
    let rafId = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      const x = lastX - rect.left;
      const y = lastY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -intensity;
      const rotY = ((x - cx) / cx) * intensity;
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      el.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={`tilt-card ${className}`} style={style}>
      <div className="tilt-shine" aria-hidden="true" />
      {children}
    </div>
  );
}
