"use client";

import { useState } from "react";

/**
 * Compact share affordances for journal posts: copy the link, share by
 * email, LinkedIn, or X. No tracking parameters, no share-widget SDKs,
 * just plain intent URLs (consistent with the site's no-tracking stance).
 */
export default function ShareRow({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const buttonClass =
    "inline-flex h-8 items-center gap-1.5 px-2.5 border border-border bg-surface text-[11.5px] font-mono uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono mr-1">
        Share
      </span>
      <button
        type="button"
        onClick={() => {
          void navigator.clipboard?.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className={buttonClass}
        aria-label="Copy link to this post"
      >
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
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className={buttonClass}
        aria-label="Share this post by email"
      >
        Email
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share this post on LinkedIn"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share this post on X"
      >
        X
      </a>
    </div>
  );
}
