type Product = "spirits-charleston" | "spirits-savannah" | "ez-fuse" | "churchd" | "vikingsense";

function GhostSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <path d="M50 10C30 10 15 30 15 55v50c0 5 3 8 5 5l7-10c2-3 5-3 7 0l6 10c2 3 5 3 7 0l6-10c2-3 5-3 7 0l6 10c2 3 5 3 7 0l6-10c2-3 5-3 7 0l0 0c2 3 5 0 5-5V55C85 30 70 10 50 10zM38 50a5 5 0 110 10 5 5 0 010-10zM62 50a5 5 0 110 10 5 5 0 010-10z" />
    </svg>
  );
}

function OakTreeSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 130" fill="currentColor" className={className}>
      <path d="M60 125V75" stroke="currentColor" strokeWidth="6" fill="none" />
      <path d="M48 125h24" stroke="currentColor" strokeWidth="3" fill="none" />
      <ellipse cx="60" cy="50" rx="45" ry="42" />
      <ellipse cx="30" cy="55" rx="25" ry="22" />
      <ellipse cx="90" cy="55" rx="25" ry="22" />
      <ellipse cx="45" cy="35" rx="22" ry="20" />
      <ellipse cx="75" cy="35" rx="22" ry="20" />
      <ellipse cx="60" cy="28" rx="18" ry="16" />
      {/* Hanging moss strands */}
      <path d="M25 65c0 8-2 18-2 18M35 70c0 6-1 14-1 14M85 65c0 8 2 18 2 18M95 60c0 6 1 14 1 14M50 68c0 6-1 12-1 12M70 68c0 6 1 12 1 12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

function FuseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className}>
      {/* Caps */}
      <rect x="15" y="5" width="30" height="16" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="15" y="79" width="30" height="16" rx="2" fill="currentColor" opacity="0.7" />
      {/* Glass body */}
      <rect x="18" y="21" width="24" height="58" rx="12" stroke="currentColor" strokeWidth="2" />
      {/* Wire */}
      <line x1="30" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="currentColor" className={className}>
      <rect x="30" y="10" width="20" height="80" rx="2" />
      <rect x="10" y="30" width="60" height="20" rx="2" />
    </svg>
  );
}

function TempGaugeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 110" fill="none" className={className}>
      {/* Bulb */}
      <circle cx="30" cy="88" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="88" r="9" fill="currentColor" opacity="0.6" />
      {/* Stem */}
      <rect x="24" y="12" width="12" height="65" rx="6" stroke="currentColor" strokeWidth="2" />
      {/* Fill */}
      <rect x="27" y="40" width="6" height="37" rx="3" fill="currentColor" opacity="0.6" />
      {/* Tick marks */}
      <line x1="38" y1="25" x2="44" y2="25" stroke="currentColor" strokeWidth="1.5" />
      <line x1="38" y1="37" x2="44" y2="37" stroke="currentColor" strokeWidth="1.5" />
      <line x1="38" y1="49" x2="44" y2="49" stroke="currentColor" strokeWidth="1.5" />
      <line x1="38" y1="61" x2="44" y2="61" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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
  icon: React.ReactNode;
  accentIcon: React.ReactNode;
  label: string;
  labelStyle: string;
}> = {
  "spirits-charleston": {
    gradient: "from-amber-950/80 via-amber-900/40 to-stone-950",
    icon: <GhostSilhouette className="w-24 h-24 text-amber-400/10" />,
    accentIcon: <MapPinIcon className="w-4 h-4 text-amber-500/50" />,
    label: "75+ Stories",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-amber-300/70",
  },
  "spirits-savannah": {
    gradient: "from-teal-950/80 via-emerald-900/30 to-stone-950",
    icon: <OakTreeSilhouette className="w-28 h-28 text-teal-400/10" />,
    accentIcon: <MapPinIcon className="w-4 h-4 text-teal-500/50" />,
    label: "55+ Stories",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-teal-300/70",
  },
  "ez-fuse": {
    gradient: "from-green-950/80 via-green-900/30 to-stone-950",
    icon: <FuseIcon className="w-16 h-24 text-green-400/15" />,
    accentIcon: <LightningIcon className="w-4 h-4 text-green-500/50" />,
    label: "PASS / FAIL",
    labelStyle: "font-mono text-xs tracking-[0.3em] text-green-400/70",
  },
  churchd: {
    gradient: "from-indigo-950/80 via-indigo-900/30 to-stone-950",
    icon: <CrossIcon className="w-20 h-24 text-indigo-400/10" />,
    accentIcon: null,
    label: "Community",
    labelStyle: "font-[family-name:var(--font-serif)] italic text-indigo-300/70",
  },
  vikingsense: {
    gradient: "from-red-950/80 via-red-900/20 to-stone-950",
    icon: <TempGaugeIcon className="w-16 h-28 text-red-400/15" />,
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
    <div className={`relative ${isSmall ? "w-32 h-56" : "w-48 h-80 sm:w-56 sm:h-96"}`}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[20px] border border-[#333] bg-[#0a0a0a] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#0a0a0a] rounded-b-lg z-10 ${
          isSmall ? "w-12 h-3" : "w-16 h-4"
        }`} />

        {/* Screen content */}
        <div className={`absolute inset-[3px] rounded-[17px] overflow-hidden bg-gradient-to-b ${cfg.gradient} flex flex-col items-center justify-center gap-3`}>
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-100">
            {cfg.icon}
          </div>

          {/* Label */}
          <div className="relative z-10 flex flex-col items-center gap-2">
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
