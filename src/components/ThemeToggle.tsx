"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/ThemeProvider";

const emptySubscribe = () => () => {};

/**
 * Hydration-safe "am I on the client yet" flag without the setState-in-effect
 * pattern: server snapshot is false, client snapshot is true.
 */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/**
 * Sun / moon icon toggle. Mounts a small icon button that flips the site
 * between dark and light themes. Renders a stable placeholder on the server
 * so hydration matches regardless of which theme the no-flash script picked.
 */
export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useMounted();

  const isLight = mounted && theme === "light";
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isLight}
      title={label}
      className={`group relative inline-flex h-9 w-9 items-center justify-center border border-border bg-surface text-body transition-colors duration-300 hover:border-accent/50 hover:text-accent ${className}`}
    >
      {/* Sun icon (shown when in light mode, click to go dark) */}
      <svg
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isLight
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-50 opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        />
      </svg>

      {/* Moon icon (shown when in dark mode, click to go light) */}
      <svg
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isLight
            ? "rotate-90 scale-50 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        />
      </svg>
    </button>
  );
}
