type Product = "spirits-charleston" | "spirits-savannah" | "ez-fuse" | "churchd" | "vikingsense";

function CharlestonScreen() {
  return (
    <>
      {/* Header image circle */}
      <circle cx="50" cy="28" r="14" fill="currentColor" opacity="0.08" />
      {/* Ghost silhouette - prominent */}
      <svg x="28" y="14" width="44" height="34" viewBox="0 0 100 140" fill="currentColor" opacity="0.15">
        <path d="M50 10C30 10 15 30 15 55v50c0 5 3 8 5 5l7-10c2-3 5-3 7 0l6 10c2 3 5 3 7 0l6-10c2-3 5-3 7 0l6 10c2 3 5 3 7 0l6-10c2-3 5-3 7 0l0 0c2 3 5 0 5-5V55C85 30 70 10 50 10zM38 50a5 5 0 110 10 5 5 0 010-10zM62 50a5 5 0 110 10 5 5 0 010-10z" />
      </svg>
      {/* Story list lines */}
      <rect x="14" y="52" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="52" width="28" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="46" y="53" width="40" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="63" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="63" width="32" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="50" y="64" width="36" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="74" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="74" width="24" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="42" y="75" width="44" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="85" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
    </>
  );
}

function SavannahScreen() {
  return (
    <>
      {/* Header image circle */}
      <circle cx="50" cy="28" r="14" fill="currentColor" opacity="0.08" />
      {/* Oak tree - prominent */}
      <svg x="25" y="10" width="50" height="42" viewBox="0 0 120 130" fill="currentColor" opacity="0.15">
        <path d="M60 125V75" stroke="currentColor" strokeWidth="6" fill="none" />
        <ellipse cx="60" cy="50" rx="45" ry="42" />
        <ellipse cx="30" cy="55" rx="25" ry="22" />
        <ellipse cx="90" cy="55" rx="25" ry="22" />
        <ellipse cx="45" cy="35" rx="22" ry="20" />
        <ellipse cx="75" cy="35" rx="22" ry="20" />
        <path d="M25 65c0 8-2 18-2 18M35 70c0 6-1 14-1 14M85 65c0 8 2 18 2 18M95 60c0 6 1 14 1 14" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
      {/* Story list lines */}
      <rect x="14" y="55" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="55" width="30" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="48" y="56" width="38" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="66" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="66" width="26" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="44" y="67" width="42" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="77" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="14" y="77" width="34" height="6" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="52" y="78" width="34" height="3" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="14" y="88" width="72" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
    </>
  );
}

function FuseScreen() {
  return (
    <>
      {/* Large test circle */}
      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
      {/* TAP text */}
      <text x="50" y="48" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.3" fontWeight="bold">TAP</text>
      <text x="50" y="56" textAnchor="middle" fill="currentColor" fontSize="4" fontFamily="monospace" opacity="0.2">TO TEST</text>
      {/* Fuse icon below */}
      <svg x="22" y="76" width="16" height="20" viewBox="0 0 60 100" fill="none">
        <rect x="15" y="5" width="30" height="16" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="15" y="79" width="30" height="16" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="18" y="21" width="24" height="58" rx="12" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      </svg>
      {/* Status indicator */}
      <rect x="30" y="82" width="40" height="6" rx="3" fill="currentColor" opacity="0.08" />
    </>
  );
}

function ChurchdScreen() {
  return (
    <>
      {/* Tab bar at top */}
      <rect x="10" y="14" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.12" />
      <rect x="30" y="14" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.08" />
      <rect x="50" y="14" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.08" />
      <rect x="70" y="14" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.08" />
      {/* Divider */}
      <rect x="10" y="22" width="80" height="0.5" fill="currentColor" opacity="0.06" />
      {/* Cross icon */}
      <svg x="38" y="26" width="24" height="28" viewBox="0 0 80 100" fill="currentColor" opacity="0.12">
        <rect x="30" y="10" width="20" height="80" rx="2" />
        <rect x="10" y="30" width="60" height="20" rx="2" />
      </svg>
      {/* Card rectangles */}
      <rect x="12" y="58" width="34" height="22" rx="2" fill="currentColor" opacity="0.06" />
      <rect x="15" y="62" width="20" height="3" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="15" y="67" width="28" height="2" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="15" y="71" width="24" height="2" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="54" y="58" width="34" height="22" rx="2" fill="currentColor" opacity="0.06" />
      <rect x="57" y="62" width="18" height="3" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="57" y="67" width="26" height="2" rx="1" fill="currentColor" opacity="0.04" />
      <rect x="57" y="71" width="22" height="2" rx="1" fill="currentColor" opacity="0.04" />
      {/* Bottom card */}
      <rect x="12" y="84" width="76" height="10" rx="2" fill="currentColor" opacity="0.05" />
      <rect x="15" y="87" width="30" height="3" rx="1" fill="currentColor" opacity="0.06" />
    </>
  );
}

function VikingSenseScreen() {
  return (
    <>
      {/* Temperature gauge icon - prominent */}
      <svg x="36" y="10" width="28" height="34" viewBox="0 0 60 110" fill="none">
        <circle cx="30" cy="88" r="16" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <circle cx="30" cy="88" r="9" fill="currentColor" opacity="0.12" />
        <rect x="24" y="12" width="12" height="65" rx="6" stroke="currentColor" strokeWidth="2" opacity="0.15" />
        <rect x="27" y="40" width="6" height="37" rx="3" fill="currentColor" opacity="0.12" />
        <line x1="38" y1="25" x2="44" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
        <line x1="38" y1="37" x2="44" y2="37" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
        <line x1="38" y1="49" x2="44" y2="49" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
      </svg>
      {/* Dashboard data readouts */}
      <rect x="10" y="50" width="36" height="16" rx="2" fill="currentColor" opacity="0.06" />
      <rect x="13" y="53" width="14" height="3" rx="1" fill="currentColor" opacity="0.1" />
      <rect x="13" y="58" width="30" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="13" y="61" width="26" height="1" rx="0.5" fill="currentColor" opacity="0.04" />
      <rect x="54" y="50" width="36" height="16" rx="2" fill="currentColor" opacity="0.06" />
      <rect x="57" y="53" width="12" height="3" rx="1" fill="currentColor" opacity="0.1" />
      <rect x="57" y="58" width="28" height="1" rx="0.5" fill="currentColor" opacity="0.06" />
      <rect x="57" y="61" width="24" height="1" rx="0.5" fill="currentColor" opacity="0.04" />
      {/* Bottom readout */}
      <rect x="10" y="72" width="80" height="16" rx="2" fill="currentColor" opacity="0.05" />
      <rect x="13" y="75" width="18" height="3" rx="1" fill="currentColor" opacity="0.08" />
      <rect x="13" y="80" width="74" height="1" rx="0.5" fill="currentColor" opacity="0.04" />
      <rect x="13" y="83" width="60" height="1" rx="0.5" fill="currentColor" opacity="0.04" />
    </>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
    </svg>
  );
}

const configs: Record<Product, {
  gradient: string;
  screenContent: React.ReactNode;
  accentIcon: React.ReactNode;
  label: string;
  labelStyle: string;
}> = {
  "spirits-charleston": {
    gradient: "from-amber-950/80 via-amber-900/40 to-stone-950",
    screenContent: <CharlestonScreen />,
    accentIcon: <MapPinIcon className="w-4 h-4 text-amber-500/50" />,
    label: "75+ Stories",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-amber-300/70",
  },
  "spirits-savannah": {
    gradient: "from-teal-950/80 via-emerald-900/30 to-stone-950",
    screenContent: <SavannahScreen />,
    accentIcon: <MapPinIcon className="w-4 h-4 text-teal-500/50" />,
    label: "55+ Stories",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-teal-300/70",
  },
  "ez-fuse": {
    gradient: "from-green-950/80 via-green-900/30 to-stone-950",
    screenContent: <FuseScreen />,
    accentIcon: <LightningIcon className="w-4 h-4 text-green-500/50" />,
    label: "PASS / FAIL",
    labelStyle: "font-mono text-xs tracking-[0.3em] text-green-400/70",
  },
  churchd: {
    gradient: "from-indigo-950/80 via-indigo-900/30 to-stone-950",
    screenContent: <ChurchdScreen />,
    accentIcon: null,
    label: "Community",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-indigo-300/70",
  },
  vikingsense: {
    gradient: "from-red-950/80 via-red-900/20 to-stone-950",
    screenContent: <VikingSenseScreen />,
    accentIcon: null,
    label: "Precision",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-red-300/70",
  },
};

export default function PhoneMockup({
  product,
  size = "default",
}: {
  product: Product;
  size?: "default" | "small";
}) {
  const cfg = configs[product];
  const isSmall = size === "small";

  return (
    <div className={`relative ${isSmall ? "w-36 h-64" : "w-48 h-80 sm:w-56 sm:h-96"}`}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[20px] border border-[#333] bg-[#0a0a0a] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#0a0a0a] rounded-b-lg z-10 ${
          isSmall ? "w-12 h-3" : "w-16 h-4"
        }`} />

        {/* Screen content */}
        <div className={`absolute inset-[3px] rounded-[17px] overflow-hidden bg-gradient-to-b ${cfg.gradient}`}>
          {/* SVG screen details */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {cfg.screenContent}
          </svg>

          {/* Label overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 z-10">
            <p className={`${cfg.labelStyle} ${isSmall ? "text-sm" : "text-lg"}`}>
              {cfg.label}
            </p>
            {cfg.accentIcon && (
              <div className="mt-1">{cfg.accentIcon}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
