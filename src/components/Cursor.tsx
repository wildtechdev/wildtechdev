"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Disable on touch devices, reduced motion, or small screens
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (isTouch || prefersReduced || isSmall) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    // Target (mouse) position
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    // Smoothed positions
    let dx = mx,
      dy = my;
    let rx = mx,
      ry = my;

    let isPointer = false;
    let isHidden = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (isHidden) {
        // Snap on first move
        dx = mx;
        dy = my;
        rx = mx;
        ry = my;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        isHidden = false;
      }

      // Hover-state detection
      const el = e.target as HTMLElement;
      const isInteractive = !!el.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      const customLabel = el.closest("[data-cursor-label]");

      if (customLabel) {
        label.textContent =
          customLabel.getAttribute("data-cursor-label") || "";
        ring.classList.add("cursor-labeled");
      } else {
        label.textContent = "";
        ring.classList.remove("cursor-labeled");
      }

      if (isInteractive !== isPointer) {
        isPointer = isInteractive;
        if (isInteractive) {
          ring.classList.add("cursor-hover");
          dot.classList.add("cursor-dot-hover");
        } else {
          ring.classList.remove("cursor-hover");
          dot.classList.remove("cursor-dot-hover");
        }
      }
    };

    const onDown = () => {
      ring.classList.add("cursor-down");
    };
    const onUp = () => {
      ring.classList.remove("cursor-down");
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isHidden = true;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);

    let rafId = 0;
    const tick = () => {
      // Dot follows quickly
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      // Ring lags
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!mounted || !enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[10000] w-1.5 h-1.5 rounded-full bg-green opacity-0 transition-[opacity,width,height,background-color] duration-200 ease-out mix-blend-difference"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[10000] w-9 h-9 rounded-full border border-green/70 opacity-0 transition-[opacity,width,height,border-color,background-color] duration-300 ease-out flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          className="text-[9px] font-mono uppercase tracking-[0.18em] text-green whitespace-nowrap"
        />
      </div>
    </>
  );
}
