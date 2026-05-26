"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Command = {
  id: string;
  label: string;
  group: string;
  shortcut?: string;
  action: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        group: "Pages",
        action: () => router.push("/"),
      },
      {
        id: "work",
        label: "Work / Case studies",
        group: "Pages",
        action: () => router.push("/work"),
      },
      {
        id: "products",
        label: "Products",
        group: "Pages",
        action: () => router.push("/products"),
      },
      {
        id: "services",
        label: "Services",
        group: "Pages",
        action: () => router.push("/services"),
      },
      {
        id: "process",
        label: "Process",
        group: "Pages",
        action: () => router.push("/process"),
      },
      {
        id: "journal",
        label: "Journal",
        group: "Pages",
        action: () => router.push("/journal"),
      },
      {
        id: "faq",
        label: "FAQ",
        group: "Pages",
        action: () => router.push("/faq"),
      },
      {
        id: "about",
        label: "About",
        group: "Pages",
        action: () => router.push("/about"),
      },
      {
        id: "founder",
        label: "Founder / Will McCants",
        group: "Pages",
        action: () => router.push("/will-mccants"),
      },
      {
        id: "now",
        label: "Now",
        group: "Pages",
        action: () => router.push("/now"),
      },
      {
        id: "uses",
        label: "Uses",
        group: "Pages",
        action: () => router.push("/uses"),
      },
      {
        id: "contact",
        label: "Contact",
        group: "Pages",
        action: () => router.push("/contact"),
      },
      {
        id: "email",
        label: "Email info@wildtechdev.com",
        group: "Actions",
        action: () => {
          window.location.href = "mailto:info@wildtechdev.com";
        },
      },
      {
        id: "viking",
        label: "Viking Sensors",
        group: "Case studies",
        action: () => router.push("/work/viking-sensors"),
      },
      {
        id: "wtp",
        label: "We The People: Your Rights",
        group: "Case studies",
        action: () => router.push("/work/we-the-people-your-rights"),
      },
      {
        id: "soc",
        label: "Spirits of Charleston",
        group: "Case studies",
        action: () => router.push("/work/spirits-of-charleston"),
      },
      {
        id: "sos",
        label: "Spirits of Savannah",
        group: "Case studies",
        action: () => router.push("/work/spirits-of-savannah"),
      },
      {
        id: "ez",
        label: "EZ Fuse Tester",
        group: "Case studies",
        action: () => router.push("/work/ez-fuse-tester"),
      },
      {
        id: "churchd",
        label: "Churchd",
        group: "Case studies",
        action: () => router.push("/work/churchd"),
      },
    ],
    [router]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isMod = e.metaKey || e.ctrlKey;
      // Open on Cmd-K / Ctrl-K, or "/" (when not in an input)
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (!isTyping && e.key === "/" && !isMod) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
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
          setOpen(false);
          setQuery("");
          setSelected(0);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, selected]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQuery("");
      setSelected(0);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  if (!open) return null;

  let flatIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#0a0c10] border border-border rounded shadow-2xl overflow-hidden"
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
            placeholder="Search pages, case studies, actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-heading placeholder:text-muted focus:outline-none"
          />
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-mono">
            ESC
          </span>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-1.5">
          {filtered.length === 0 && (
            <p className="p-4 text-sm text-muted text-center">
              Nothing matches.
            </p>
          )}
          {grouped.map(([group, items]) => (
            <div key={group} className="mb-2">
              <p className="px-3 pt-3 pb-1.5 text-[10px] uppercase tracking-[0.22em] text-muted font-mono">
                {group}
              </p>
              <ul>
                {items.map((c) => {
                  flatIndex++;
                  const isSelected = flatIndex === selected;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setSelected(flatIndex)}
                        onClick={() => {
                          c.action();
                          setOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          isSelected
                            ? "bg-green/15 text-heading"
                            : "text-body hover:bg-[#11141a]"
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border px-4 py-2.5 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-muted font-mono">
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
