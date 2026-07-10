import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy for EZ Fuse Tester",
  description:
    "Privacy policy for the iOS app EZ Fuse Tester, published by WildTech Ventures, LLC.",
  alternates: {
    canonical: "https://www.wildtechdev.com/privacy/ez-fuse-tester",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function EzFusePrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
            Privacy Policy
          </h1>
          <p className="text-body text-lg leading-relaxed">
            For the iOS application{" "}
            <span className="text-heading">EZ Fuse Tester</span>, published by
            WildTech Ventures, LLC.
          </p>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted font-[family-name:var(--font-sans)]">
            <span className="block mb-1">Last updated</span>
            <span className="text-heading normal-case tracking-normal text-sm">
              July 9, 2026
            </span>
          </p>
        </div>

        <ScrollReveal>
          <div className="bg-surface border border-border p-5 sm:p-8 lg:p-12 space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                The whole policy, honestly
              </h2>
              <p className="text-body text-base leading-relaxed">
                EZ Fuse Tester{" "}
                <span className="text-heading">collects nothing</span>. No
                accounts, no sign-in, no analytics, no tracking, no cookies, no
                advertising, no third-party SDKs, and no network connection of
                any kind. The app reads the phone&apos;s built-in touchscreen
                sensors to test the fuse you place on the screen, shows you
                PASS or FAIL, and that is the entire story. Nothing you do in
                the app leaves your device, because the app has no way to send
                anything anywhere. Apple&apos;s App Store listing reflects
                this: Data Not Collected.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                Your rights
              </h2>
              <p className="text-body text-base leading-relaxed">
                Privacy laws such as the GDPR and CCPA give users rights over
                their personal data. Because we collect no personal data
                through this app, we hold nothing about you to access,
                correct, delete, or transfer. The app is likewise consistent
                with COPPA, since it collects no information from anyone,
                children included.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                Changes and contact
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                If this policy ever changes, the date above updates and the
                current version always lives at this URL. Questions:
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
                    Developer
                  </p>
                  <p className="text-sm text-heading">WildTech Ventures, LLC</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
                    Email
                  </p>
                  <a
                    href="mailto:info@wildtechdev.com"
                    className="text-sm text-heading link-underline"
                  >
                    info@wildtechdev.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
