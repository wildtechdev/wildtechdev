"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Magnetic({
  children,
  strength = 0.35,
  range = 100,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let tx = 0,
      ty = 0;
    let cx = 0,
      cy = 0;
    let rafId = 0;
    let running = false;

    // The rAF loop only runs while there is movement to animate. It
    // self-cancels once the element settles back at rest, so idle pages
    // do zero per-frame work.
    const tick = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      const settled =
        tx === 0 && ty === 0 && Math.abs(cx) < 0.05 && Math.abs(cy) < 0.05;
      if (settled) {
        cx = 0;
        cy = 0;
        el.style.transform = "";
        running = false;
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);

      if (dist < range) {
        const factor = (1 - dist / range) * strength;
        tx = dx * factor;
        ty = dy * factor;
        wake();
      } else if (tx !== 0 || ty !== 0) {
        tx = 0;
        ty = 0;
        wake();
      }
    };

    const onLeave = () => {
      if (tx !== 0 || ty !== 0) {
        tx = 0;
        ty = 0;
        wake();
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, range]);

  return (
    <span ref={ref} className={`magnetic ${className}`}>
      {children}
    </span>
  );
}
