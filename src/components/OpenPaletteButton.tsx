"use client";

import type { ReactNode } from "react";
import { OPEN_PALETTE_EVENT } from "@/components/CommandPalette";

/**
 * Small client button that opens the command palette. Lets server components
 * (like the footer) offer a clickable entry point, which also makes the
 * palette reachable on touch devices with no keyboard shortcut.
 */
export default function OpenPaletteButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_PALETTE_EVENT))}
    >
      {children}
    </button>
  );
}
