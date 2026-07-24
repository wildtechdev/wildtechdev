"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Branded error boundary. Without this file, a rendering error shows
 * Next.js's unstyled default screen; with it, visitors get something that
 * still looks like the site and a way to recover.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="section-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 14%, transparent) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div className="relative text-center px-6 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-accent" />
          <p className="text-[11.5px] uppercase tracking-[0.3em] font-mono text-accent">
            Error
          </p>
          <span className="w-8 h-px bg-accent" />
        </div>

        <h1 className="mt-6 text-3xl font-[family-name:var(--font-serif)] italic text-heading">
          Something went sideways
        </h1>
        <p className="text-sm text-muted mt-4 leading-relaxed">
          The page hit an unexpected error. It has been logged on our end.
          Trying again usually clears it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button type="button" onClick={reset} className="btn-ghost">
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-body hover:text-heading transition-colors duration-300 link-underline py-2"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
