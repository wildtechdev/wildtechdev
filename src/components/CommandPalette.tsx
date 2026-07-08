"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { posts } from "@/lib/posts";

type Command = {
  id: string;
  label: string;
  group: string;
  /** Extra words that should match this command in search. */
  keywords?: string;
  action: () => void;
};

/** Name of the window event that opens the palette (used by the footer hint
 *  button so mouse/touch users can open it without the keyboard). */
export const OPEN_PALETTE_EVENT = "wtd:open-palette";

export default function CommandPalette() {
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  const commands: Command[] = useMemo(
    () => [
      { id: "home", label: "Home", group: "Pages", action: () => router.push("/") },
      { id: "work", label: "Work / Case studies", group: "Pages", keywords: "portfolio projects", action: () => router.push("/work") },
      { id: "products", label: "Products", group: "Pages", keywords: "apps", action: () => router.push("/products") },
      { id: "services", label: "Services", group: "Pages", keywords: "ios web hardware", action: () => router.push("/services") },
      { id: "process", label: "Process", group: "Pages", keywords: "how we work", action: () => router.push("/process") },
      { id: "journal", label: "Journal", group: "Pages", keywords: "blog posts writing", action: () => router.push("/journal") },
      { id: "faq", label: "FAQ", group: "Pages", keywords: "questions pricing cost", action: () => router.push("/faq") },
      { id: "about", label: "About", group: "Pages", keywords: "company", action: () => router.push("/about") },
      { id: "founder", label: "Founder / Will McCants", group: "Pages", keywords: "bio", action: () => router.push("/will-mccants") },
      { id: "press", label: "Press & Media Kit", group: "Pages", keywords: "media journalists", action: () => router.push("/press") },
      { id: "now", label: "Now", group: "Pages", action: () => router.push("/now") },
      { id: "uses", label: "Uses", group: "Pages", keywords: "gear stack tools", action: () => router.push("/uses") },
      { id: "contact", label: "Contact", group: "Pages", keywords: "hire email reach", action: () => router.push("/contact") },
      {
        id: "theme",
        label: "Toggle light / dark theme",
        group: "Actions",
        keywords: "dark mode light mode appearance",
        action: () => toggleTheme(),
      },
      {
        id: "email",
        label: "Email info@wildtechdev.com",
        group: "Actions",
        keywords: "mail contact",
        action: () => {
          window.location.href = "mailto:info@wildtechdev.com";
        },
      },
      {
        id: "copy-email",
        label: "Copy email address",
        group: "Actions",
        keywords: "clipboard mail",
        action: () => {
          void navigator.clipboard?.writeText("info@wildtechdev.com");
          setCopied(true);
        },
      },
      { id: "viking", label: "Viking Sensors", group: "Case studies", keywords: "hardware sensors climate", action: () => router.push("/work/viking-sensors") },
      { id: "wtp", label: "We The People: Your Rights", group: "Case studies", keywords: "constitution civic", action: () => router.push("/work/we-the-people-your-rights") },
      { id: "soc", label: "Spirits of Charleston", group: "Case studies", keywords: "ghost stories", action: () => router.push("/work/spirits-of-charleston") },
      { id: "sos", label: "Spirits of Savannah", group: "Case studies", keywords: "ghost stories", action: () => router.push("/work/spirits-of-savannah") },
      { id: "ez", label: "EZ Fuse Tester", group: "Case studies", keywords: "utility fuse", action: () => router.push("/work/ez-fuse-tester") },
      { id: "churchd", label: "Churchd", group: "Case studies", keywords: "church platform community", action: () => router.push("/work/churchd") },
      ...posts.map((p) => ({
        id: `post-${p.slug}`,
        label: p.title,
        group: "Journal",
        keywords: p.tags.join(" "),
        action: () => router.push(`/journal/${p.slug}`),
      })),
    ],
    [router, toggleTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    const tokens = q.split(/\s+/);
    const haystack = (c: Command) =>
      `${c.label} ${c.group} ${c.keywords ?? ""}`.toLowerCase();
    const scored = commands
      .map((c) => {
        const hay = haystack(c);
        const words = hay.split(/[^a-z0-9@.]+/);
        let score = 0;
        for (const t of tokens) {
          if (!hay.includes(t)) return null; // every token must match somewhere
          if (c.label.toLowerCase().startsWith(t)) score += 3;
          else if (words.some((w) => w.startsWith(t))) score += 2;
          else score += 1;
        }
        return { c, score };
      })
      .filter((x): x is { c: Command; score: number } => x !== null);
    scored.sort((a, b) => b.score - a.score);
    return scored.map((x) => x.c);
  }, [commands, query]);

  // Group filtered commands for display
  const grouped = useMemo(() => {
    const map = new Map<string, Command[]>();
    for (const c of filtered) {
      const arr = map.get(c.group) ?? [];
      arr.push(c);
      map.set(c.group, arr);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to wherever the user was before the palette opened.
    lastFocusedRef.current?.focus?.();
    lastFocusedRef.current = null;
  }, []);

  const openPalette = useCallback(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setCopied(false);
    setOpen(true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isMod = e.metaKey || e.ctrlKey;
      // Open on Cmd-K / Ctrl-K, or "/" (when not in an input)
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          close();
        } else {
          openPalette();
        }
        return;
      }
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (!isTyping && e.key === "/" && !isMod && !open) {
        e.preventDefault();
        openPalette();
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab") {
        // Keep focus inside the palette (the input is the only tab stop).
        e.preventDefault();
        inputRef.current?.focus();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const c = filtered[selected];
        if (c) {
          c.action();
          if (c.id === "copy-email" || c.id === "theme") {
            // Keep the palette open for feedback-style actions.
            setQuery("");
            setSelected(0);
            return;
          }
          close();
          setQuery("");
          setSelected(0);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, selected, close, openPalette]);

  // Open via custom event (footer hint button, mobile affordance).
  useEffect(() => {
    const onOpenEvent = () => openPalette();
    window.addEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
    return () => window.removeEventListener(OPEN_PALETTE_EVENT, onOpenEvent);
  }, [openPalette]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      // Lock page scroll behind the overlay.
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setSelected(0);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  // Keep the keyboard-selected option visible in the scrollable list.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector('[aria-selected="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [selected, open, filtered]);

  if (!open) return null;

  let flatIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4 animate-fade-in"
      onClick={close}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-surface border border-border rounded shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(34,197,94,0.15)" }}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <svg
            className="w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-listbox"
            aria-activedescendant={
              filtered[selected] ? `palette-opt-${filtered[selected].id}` : undefined
            }
            aria-autocomplete="list"
            placeholder="Search pages, case studies, posts, actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-heading placeholder:text-muted focus:outline-none"
          />
          <span className="text-[11.5px] uppercase tracking-[0.18em] text-muted font-mono">
            ESC
          </span>
        </div>
        <div
          ref={listRef}
          id="palette-listbox"
          role="listbox"
          aria-label="Commands"
          className="max-h-[60vh] overflow-y-auto p-1.5"
        >
          {filtered.length === 0 && (
            <p className="p-4 text-sm text-muted text-center">
              Nothing matches.
            </p>
          )}
          {grouped.map(([group, items]) => (
            <div key={group} className="mb-2" role="group" aria-label={group}>
              <p className="px-3 pt-3 pb-1.5 text-[11.5px] uppercase tracking-[0.22em] text-muted font-mono">
                {group}
              </p>
              <ul>
                {items.map((c) => {
                  flatIndex++;
                  const isSelected = flatIndex === selected;
                  const thisIndex = flatIndex;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        id={`palette-opt-${c.id}`}
                        role="option"
                        aria-selected={isSelected}
                        onMouseEnter={() => setSelected(thisIndex)}
                        onClick={() => {
                          c.action();
                          if (c.id === "copy-email" || c.id === "theme") {
                            return;
                          }
                          close();
                        }}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          isSelected
                            ? "bg-green/15 text-heading"
                            : "text-body hover:bg-card"
                        }`}
                      >
                        {c.id === "copy-email" && copied
                          ? "Copied to clipboard"
                          : c.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border px-4 py-2.5 flex items-center gap-4 text-[11.5px] uppercase tracking-[0.18em] text-muted font-mono">
          <span>
            <kbd className="text-heading">&uarr;&darr;</kbd> Navigate
          </span>
          <span>
            <kbd className="text-heading">&crarr;</kbd> Select
          </span>
          <span className="ml-auto">
            <kbd className="text-heading">&#8984;K</kbd> or <kbd className="text-heading">/</kbd> to open
          </span>
        </div>
      </div>
    </div>
  );
}
