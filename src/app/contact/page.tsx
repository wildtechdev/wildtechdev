import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WildTech Development for software, hardware, and integration solutions. Based in Charleston, SC.",
  openGraph: {
    title: "Contact | WildTech Development",
    description:
      "Reach out to WildTech Development for your next project.",
  },
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Get In <span className="text-electric">Touch</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-charcoal-light border border-white/10 rounded-xl p-8 sm:p-10 mb-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-charcoal border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-charcoal border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-charcoal border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-lg bg-electric hover:bg-electric-dark text-white font-semibold transition-all hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-charcoal-light border border-white/10 rounded-xl p-6 text-center">
            <svg className="w-8 h-8 text-electric mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-white font-bold mb-1">Email</h3>
            <a href="mailto:info@wildtechdev.com" className="text-slate-400 hover:text-electric transition-colors text-sm">
              info@wildtechdev.com
            </a>
          </div>

          <div className="bg-charcoal-light border border-white/10 rounded-xl p-6 text-center">
            <svg className="w-8 h-8 text-orange mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <h3 className="text-white font-bold mb-1">Service Inquiries</h3>
            <a
              href="https://wildtechchs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange transition-colors text-sm"
            >
              Visit wildtechchs.com &rarr;
            </a>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Based in Charleston, SC &middot; WildTech Ventures, LLC
        </p>
      </div>
    </section>
  );
}
