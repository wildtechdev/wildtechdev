"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // The cursor elements always render (hidden, pointer-events-none, so they
  // are inert). The effect activates them only on fine-pointer desktop
  // devices; no state gate needed, which also avoids a second render pass.
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (isTouch || prefersReduced || isSmall) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx,
      dy = my;
    let rx = mx,
      ry = my;
    let isPointer = false;
    let isHidden = true;
    let isDown = false;
    let isText = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (isHidden) {
        dx = mx;
        dy = my;
        rx = mx;
        ry = my;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        isHidden = false;
      }

      const el = e.target as HTMLElement;
      // Over text fields the native I-beam takes over (see globals.css), so
      // the custom cursor gets out of the way entirely.
      const overText = !!el.closest("input, textarea, select");
      if (overText !== isText) {
        isText = overText;
        dot.style.opacity = isText ? "0" : "1";
        ring.style.opacity = isText ? "0" : "1";
      }

      const isInteractive =
        !overText &&
        !!el.closest(
          "a, button, [role='button'], label, [data-cursor='hover']"
        );
      const customLabelEl = el.closest("[data-cursor-label]");

      if (customLabelEl) {
        const text = customLabelEl.getAttribute("data-cursor-label") || "";
        if (label.textContent !== text) label.textContent = text;
        ring.classList.add("cursor-labeled");
      } else {
        if (label.textContent !== "") label.textContent = "";
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
      isDown = true;
    };
    const onUp = () => {
      isDown = false;
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isHidden = true;
    };
    const onEnter = () => {
      // unhide on enter even before move
      if (!isText) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let rafId = 0;
    let ringScale = 1;
    const tick = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      // Click feedback: the ring compresses while the button is held.
      ringScale += ((isDown ? 0.82 : 1) - ringScale) * 0.3;
      dot.style.transform = `translate3d(${dx - 4}px, ${dy - 4}px, 0)`;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${ringScale.toFixed(3)})`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[10000] w-2 h-2 rounded-full bg-accent opacity-0 transition-[opacity] duration-200"
        style={{ boxShadow: "0 0 12px color-mix(in srgb, var(--color-accent) 70%, transparent)" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[10000] w-9 h-9 rounded-full border border-accent/70 opacity-0 transition-[opacity,width,height,border-color,background-color,border-radius,padding] duration-300 ease-out flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          className="text-[9px] font-mono uppercase tracking-[0.18em] whitespace-nowrap"
        />
      </div>
    </>
  );
}
