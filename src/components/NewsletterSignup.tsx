"use client";

import { useState } from "react";

type Props = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export default function NewsletterSignup({
  title = "Get new posts and product updates.",
  description = "A short note when something new ships. No spam, no tracking, easy to unsubscribe.",
  compact = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [honey, setHoney] = useState(""); // honeypot
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company: honey }),
      });
      const json = await res.json();
      if (json.ok) {
        setState("ok");
        setEmail("");
        setName("");
      } else {
        setState("error");
        setError(json.error ?? "Could not subscribe. Please try again.");
      }
    } catch {
      setState("error");
      setError("Network error. Please try again.");
    }
  }

  if (state === "ok") {
    return (
      <div className="bg-[#0a0c10] border border-green/30 rounded p-6">
        <p className="text-sm text-green font-mono uppercase tracking-[0.18em] mb-1">
          Subscribed
        </p>
        <p className="text-body text-sm leading-relaxed">
          Thanks for subscribing. We will only email when there is something
          worth saying.
        </p>
      </div>
    );
  }

  return (
    <div className={compact ? "" : "max-w-xl"}>
      {!compact && (
        <>
          <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
            Newsletter
          </p>
          <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-3">
            {title}
          </h3>
          <p className="text-body text-sm leading-relaxed mb-6">
            {description}
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Honeypot */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            opacity: 0,
            height: 0,
            width: 0,
            pointerEvents: "none",
          }}
        >
          <label htmlFor="ns-company">Company (leave blank)</label>
          <input
            id="ns-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
          />
        </div>
        {!compact && (
          <input
            type="text"
            placeholder="Your first name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-border px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-green transition-colors"
            disabled={state === "loading"}
          />
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border border-border px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-green transition-colors"
            disabled={state === "loading"}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="btn-ghost justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "loading" ? "Sending..." : "Subscribe"}
            {state !== "loading" && (
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
          </button>
        </div>
        {state === "error" && error && (
          <p className="text-xs text-red-400 mt-1">{error}</p>
        )}
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted font-mono mt-2">
          Unsubscribe any time
        </p>
      </form>
    </div>
  );
}
