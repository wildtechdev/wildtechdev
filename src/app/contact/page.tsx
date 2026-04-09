import type { Metadata } from "next";

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
    <section className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-16 animate-fade-in-up">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            Let&apos;s talk
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
            Have an idea? Let&apos;s build it.
          </h1>
          <p className="text-body text-lg leading-relaxed">
            Whether you need an iOS app, a custom hardware solution, or a complete web
            platform, every project starts with a conversation.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8 animate-fade-in-up delay-200">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-heading placeholder-muted focus:outline-none focus:border-green transition-colors text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-heading placeholder-muted focus:outline-none focus:border-green transition-colors text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-heading placeholder-muted focus:outline-none focus:border-green transition-colors resize-none text-sm"
              placeholder="Tell us about your project..."
            />
          </div>
          <button type="submit" className="btn-ghost">
            Send message &rarr;
          </button>
        </form>

        {/* Prefer to talk */}
        <div className="mt-20 border-t border-border pt-14">
          <h2 className="text-xl font-[family-name:var(--font-serif)] italic text-heading mb-4">
            Prefer to talk?
          </h2>
          <p className="text-sm text-body leading-relaxed mb-6">
            For Charleston-area technology services including security, networking, A/V,
            and structured cabling, visit{" "}
            <a
              href="https://wildtechchs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green link-underline"
            >
              wildtechchs.com
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                Email
              </p>
              <a
                href="mailto:info@wildtechdev.com"
                className="text-sm text-heading link-underline"
              >
                info@wildtechdev.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                Location
              </p>
              <p className="text-sm text-heading flex items-center gap-2">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                Based in Charleston, SC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
