const tech = [
  "Swift",
  "SwiftUI",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Supabase",
  "Firebase",
  "Vercel",
  "Capacitor",
  "ESP32",
  "Arduino",
  "C++",
  "Python",
  ".NET",
  "WPF",
  "NetSuite",
  "Shopify",
  "Stripe",
  "PostgreSQL",
  "WebSockets",
  "REST APIs",
  "GraphQL",
  "ZEISS Optotechnik",
];

export default function TechMarquee() {
  // Duplicate the list so the loop is seamless
  const items = [...tech, ...tech];

  return (
    <div className="relative py-10 border-y border-border bg-[#070a0f] overflow-hidden marquee-mask marquee-pause-on-hover">
      <div
        className="marquee-track gap-12"
        style={{ ["--marquee-duration" as string]: "60s" }}
      >
        {items.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-3 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-green/60" />
            <span className="text-sm font-mono uppercase tracking-[0.18em] text-muted hover:text-green transition-colors duration-300">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
