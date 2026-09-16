import Image from "next/image";

// Desktop counterpart to PhoneMockup, for products that are Windows apps
// rather than iOS apps. PhoneMockup wraps a real screenshot in a phone frame;
// DragIn1's shelf window is small enough to draw faithfully in markup, which
// also keeps it sharp in both themes without shipping a light and dark
// screenshot. Heights match PhoneMockup so cards in a row still line up.

type Desktop = "dragin1";

const configs: Record<
  Desktop,
  { title: string; logoSrc: string; files: string[] }
> = {
  dragin1: {
    title: "DragIn1",
    logoSrc: "/products/dragin1-logo.png",
    files: ["DOC081826.pdf", "invoice.xlsx"],
  },
};

export default function DesktopMockup({
  product,
  size = "default",
  priority = false,
}: {
  product: Desktop;
  size?: "default" | "small";
  priority?: boolean;
}) {
  const cfg = configs[product];
  const isSmall = size === "small";

  return (
    <div
      className={`relative flex items-center justify-center ${
        isSmall ? "w-36 h-[160px] sm:h-64" : "w-full max-w-[260px] h-64 sm:h-80"
      }`}
    >
      <div className="w-full rounded-lg border border-border-strong bg-surface shadow-2xl shadow-black/30 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card">
          <Image
            src={cfg.logoSrc}
            alt=""
            width={isSmall ? 14 : 18}
            height={isSmall ? 14 : 18}
            priority={priority}
            className="rounded-[3px] shrink-0"
          />
          <span
            className={`text-heading font-[family-name:var(--font-sans)] truncate ${
              isSmall ? "text-[9px]" : "text-[11px]"
            }`}
          >
            {cfg.title}
          </span>
          <span className="ml-auto flex gap-1 shrink-0" aria-hidden="true">
            <span className="w-1 h-1 rounded-full bg-faint" />
            <span className="w-1 h-1 rounded-full bg-faint" />
          </span>
        </div>

        {/* Captured files */}
        <div className={isSmall ? "p-2 space-y-1.5" : "p-3 space-y-2"}>
          {cfg.files.map((file, i) => (
            <div
              key={file}
              className={`flex items-center gap-1.5 border px-2 py-1.5 ${
                i === 0
                  ? "border-accent/40 bg-accent/[0.07]"
                  : "border-border bg-card"
              }`}
            >
              <svg
                className={`shrink-0 ${i === 0 ? "text-accent" : "text-muted"} ${
                  isSmall ? "w-2.5 h-2.5" : "w-3.5 h-3.5"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              <span
                className={`font-mono text-body truncate ${
                  isSmall ? "text-[7px]" : "text-[10px]"
                }`}
              >
                {file}
              </span>
            </div>
          ))}

          <div
            className={`border border-dashed border-border-strong flex items-center justify-center ${
              isSmall ? "py-2.5" : "py-5"
            }`}
          >
            <span
              className={`uppercase tracking-[0.15em] text-muted font-mono ${
                isSmall ? "text-[6px]" : "text-[9px]"
              }`}
            >
              Drop here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
