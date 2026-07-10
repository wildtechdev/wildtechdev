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
];

function MarqueeGroup() {
  return (
    <div className="flex items-center gap-12 shrink-0 pr-12">
      {tech.map((label) => (
        <div key={label} className="flex items-center gap-3 shrink-0">
          <span className="w-1 h-1 rounded-full bg-green/60" />
          <span className="text-sm font-mono uppercase tracking-[0.18em] text-muted hover:text-green transition-colors duration-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative py-10 border-y border-border bg-card overflow-hidden marquee-mask marquee-pause-on-hover">
      {/* Screen readers get one plain sentence instead of 50 looping items. */}
      <p className="sr-only">
        Technologies we work with: {tech.join(", ")}.
      </p>
      <div
        className="marquee-track"
        style={{ ["--marquee-duration" as string]: "40s" }}
        aria-hidden="true"
      >
        {/* Two identical groups make the -50% translate loop seamless.
            Each group carries its own trailing gap (pr-12) so the seam
            between copies matches the gap between items exactly. */}
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
