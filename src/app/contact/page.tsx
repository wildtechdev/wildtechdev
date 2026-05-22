import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WildTech Development for software, hardware, and integration solutions. Based in Charleston, SC.",
  openGraph: {
    title: "Contact | WildTech Development",
    description: "Reach out to WildTech Development for your next project.",
  },
};

export default function ContactPage() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-16 animate-fade-in-up">
          <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
            Let&apos;s talk
          </p>
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 leading-[0.92]">
            Have an idea? Let&apos;s build it.
          </h1>
          <p className="text-body text-lg leading-relaxed max-w-xl">
            Whether you need an app on the App Store, a custom piece of hardware,
            or a full web platform, it all starts with a conversation. Tell us
            what you are trying to solve.
          </p>
        </div>

        {/* Form */}
        <ScrollReveal>
          <form className="relative space-y-8 bg-[#0a0c10] border border-border p-6 sm:p-10 lg:p-12">
            {/* Corner accents */}
            <span className="absolute -top-px -left-px w-8 h-8 border-t border-l border-green" aria-hidden="true" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-green" aria-hidden="true" />

            <div>
              <label
                htmlFor="name"
                className="block text-[10px] uppercase tracking-[0.22em] text-muted mb-3 font-mono"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-line"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] uppercase tracking-[0.22em] text-muted mb-3 font-mono"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-line"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[10px] uppercase tracking-[0.22em] text-muted mb-3 font-mono"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input-line resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="btn-ghost w-full sm:w-auto min-w-[220px]"
              data-cursor-label="Send"
            >
              Send message
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
            </button>
          </form>
        </ScrollReveal>

        {/* Prefer to talk */}
        <ScrollReveal>
          <div className="mt-20 border-t border-border pt-14">
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Direct
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-10">
              Other ways to reach us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3 font-mono">
                  Email
                </p>
                <a
                  href="mailto:info@wildtechdev.com"
                  className="text-base text-heading link-underline inline-flex items-center gap-2 group-hover:text-green transition-colors"
                >
                  info@wildtechdev.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3 font-mono">
                  Location
                </p>
                <p className="text-base text-heading flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                  </span>
                  Charleston, SC
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
