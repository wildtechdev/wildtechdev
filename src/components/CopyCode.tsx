"use client";

import { useState } from "react";

/**
 * Small copy-to-clipboard button for code blocks. The DNS guides are full of
 * SPF strings and record values people need verbatim; this saves them the
 * triple-click.
 */
export default function CopyCode({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy code to clipboard"}
      onClick={() => {
        void navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="absolute top-2 right-2 inline-flex items-center gap-1.5 px-2 py-1 text-[11.5px] font-mono uppercase tracking-[0.12em] text-muted bg-card border border-border rounded opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 hover:text-accent hover:border-accent/40"
    >
      {copied ? (
        <>
          <svg
            className="w-3 h-3 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
