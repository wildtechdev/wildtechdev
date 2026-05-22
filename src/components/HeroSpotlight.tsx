"use client";

import { useEffect, useRef } from "react";

export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      // Clamp so the spotlight doesn't dive into a corner
      const cx = Math.max(15, Math.min(85, x));
      const cy = Math.max(15, Math.min(85, y));
      el.style.setProperty("--hx", `${cx}%`);
      el.style.setProperty("--hy", `${cy}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(600px circle at var(--hx, 50%) var(--hy, 50%), rgba(34,197,94,0.14), transparent 50%)",
      }}
      aria-hidden="true"
    />
  );
}
