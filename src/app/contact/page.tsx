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
    <section className="py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)] animate-fade-in-up">
          Let&apos;s talk
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100">
          Get in touch
        </h1>
        <p className="text-body text-lg mb-16 animate-fade-in-up delay-200">
          Have a project in mind? We&apos;d love to hear about it.
        </p>

        {/* Form */}
        <form className="space-y-8 animate-fade-in-up delay-300">
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
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-green text-black text-sm font-medium tracking-wide hover:bg-green-dark transition-colors"
          >
            Send message &rarr;
          </button>
        </form>

        {/* Info */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="flex flex-col sm:flex-row gap-12">
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
                Service inquiries
              </p>
              <a
                href="https://wildtechchs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-heading link-underline"
              >
                wildtechchs.com &rarr;
              </a>
            </div>
          </div>
          <p className="text-xs text-muted mt-12">
            Charleston, SC &middot; WildTech Ventures, LLC
          </p>
        </div>
      </div>
    </section>
  );
}
