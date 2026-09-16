import DragIn1Logo from "./DragIn1Logo";

/**
 * The before/after diagram for the DragIn1 product page.
 *
 * Top track: the drag everyone already knows — the file sets off and is
 * refused. Bottom track: the same drag relayed through the shelf. Pure CSS on
 * a shared 6s loop; `prefers-reduced-motion` pins every chip to a resting
 * position (see globals.css) so the diagram still reads as a diagram.
 */

function FileChip({ animation }: { animation: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card border border-border px-1.5 sm:px-2 py-1 whitespace-nowrap ${animation}`}
    >
      <svg className="w-3 h-3 text-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
      {/* The filename would be wider than the whole rail on a phone. */}
      <span className="hidden sm:inline text-[9px] font-mono text-body">
        report.pdf
      </span>
    </span>
  );
}

function Node({
  label,
  sublabel,
  tone = "neutral",
  glow = false,
  children,
}: {
  label: string;
  sublabel?: string;
  tone?: "neutral" | "green";
  glow?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`shrink-0 w-[72px] sm:w-[132px] bg-[#0a0a0a] border px-1.5 sm:px-3 py-3 sm:py-4 text-center ${
        tone === "green" ? "border-green/40" : "border-border"
      } ${glow ? "animate-shelf-hold" : ""}`}
    >
      {children}
      <p className="text-[10px] sm:text-xs text-heading font-[family-name:var(--font-sans)] leading-tight">
        {label}
      </p>
      {sublabel && (
        <p className="text-[9px] uppercase tracking-[0.15em] text-muted font-mono mt-1.5 leading-tight">
          {sublabel}
        </p>
      )}
    </div>
  );
}

/** Dashed rail with a travelling chip on it. */
function Connector({
  children,
  dashed = false,
}: {
  children: React.ReactNode;
  dashed?: boolean;
}) {
  return (
    <div className="relative flex-1 min-w-[24px] sm:min-w-[56px] h-14 flex items-center">
      <div
        className={`w-full border-t ${
          dashed ? "border-dashed border-[#3f2129]" : "border-border"
        }`}
      />
      {children}
    </div>
  );
}

export default function DragIn1Flow() {
  return (
    <div className="space-y-px bg-border">
      {/* Without */}
      <div className="bg-black p-5 sm:p-8 overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono">
            What happens today
          </p>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Node label="New Outlook" sublabel="Chromium" />
          <Connector dashed>
            <FileChip animation="animate-drag-refused" />
            {/* Refusal mark sits where the chip stalls */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-[52%] animate-drag-refused-mark"
            >
              <svg className="w-5 h-5 text-red-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </span>
          </Connector>
          <Node label="Anywhere else" sublabel="No file" />
        </div>

        <p className="text-sm text-body leading-relaxed mt-6">
          The file is offered, then never handed over. No error appears, which
          is why it feels like the email client is broken.
        </p>
      </div>

      {/* With */}
      <div className="bg-black p-5 sm:p-8 overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-green font-mono">
            What happens with DragIn1
          </p>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Node label="New Outlook" sublabel="Chromium" />
          <Connector>
            <FileChip animation="animate-drag-hop-in" />
          </Connector>
          <Node label="DragIn1" sublabel="Shelf" tone="green" glow>
            <div className="flex justify-center mb-2.5">
              <DragIn1Logo size={26} id="flow-shelf" />
            </div>
          </Node>
          <Connector>
            <FileChip animation="animate-drag-hop-out" />
          </Connector>
          <Node label="Anywhere else" sublabel="Real file" />
        </div>

        <p className="text-sm text-body leading-relaxed mt-6">
          DragIn1 asks the way the handshake requires, saves the real file, then
          offers it again as an ordinary Windows file drag. The destination
          never has to know DragIn1 exists.
        </p>
      </div>
    </div>
  );
}
