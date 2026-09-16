import DragIn1Logo from "./DragIn1Logo";

/**
 * Desktop counterpart to PhoneMockup: a miniature of the DragIn1 shelf window,
 * so the Windows tool sits beside the iOS apps in the product grids without
 * pretending to be a phone. Matches PhoneMockup's size API and heights so
 * cards in the same row line up.
 */
export default function DragIn1Mockup({
  size = "default",
  id = "mockup",
}: {
  size?: "default" | "small";
  id?: string;
}) {
  const isSmall = size === "small";

  return (
    <div
      className={`relative flex items-center justify-center ${
        isSmall ? "w-36 h-[160px] sm:h-64" : "w-48 h-64 sm:h-80 sm:w-56 lg:h-96"
      }`}
    >
      {/* Shelf window */}
      <div className="w-full rounded-lg border border-[#333] bg-[#0a0a0a] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-[#222] bg-[#111]">
          <DragIn1Logo size={isSmall ? 12 : 16} id={`${id}-title`} />
          <span
            className={`text-heading font-[family-name:var(--font-sans)] truncate ${
              isSmall ? "text-[8px]" : "text-[10px]"
            }`}
          >
            DragIn1
          </span>
          <span className="ml-auto flex gap-1 shrink-0">
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <span className="w-1 h-1 rounded-full bg-[#333]" />
          </span>
        </div>

        {/* Captured items */}
        <div className={`${isSmall ? "p-2 space-y-1.5" : "p-3 space-y-2"}`}>
          {[
            { name: "DOC081826.pdf", active: true },
            { name: "invoice.xlsx", active: false },
          ].map((file) => (
            <div
              key={file.name}
              className={`flex items-center gap-1.5 border px-1.5 py-1 ${
                file.active
                  ? "border-green/40 bg-green/[0.06]"
                  : "border-[#222] bg-[#0d0d0d]"
              }`}
            >
              <svg
                className={`shrink-0 ${
                  file.active ? "text-green" : "text-muted"
                } ${isSmall ? "w-2.5 h-2.5" : "w-3 h-3"}`}
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
                  isSmall ? "text-[7px]" : "text-[9px]"
                }`}
              >
                {file.name}
              </span>
            </div>
          ))}

          {/* Drop hint */}
          <div
            className={`border border-dashed border-[#2a2a2a] flex items-center justify-center ${
              isSmall ? "py-2" : "py-3"
            }`}
          >
            <span
              className={`uppercase tracking-[0.15em] text-muted font-mono ${
                isSmall ? "text-[6px]" : "text-[8px]"
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
