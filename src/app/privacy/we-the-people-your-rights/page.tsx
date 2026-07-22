import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy for We The People: Your Rights",
  description:
    "Privacy policy for the iOS app We The People: Your Rights, published by WildTech Ventures, LLC.",
  alternates: {
    canonical:
      "https://www.wildtechdev.com/privacy/we-the-people-your-rights",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function WeThePeoplePrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-16 animate-fade-in-up">
          <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
            Legal
          </p>
          <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
            <span className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-accent opacity-[0.05] blur-3xl pointer-events-none" />
            <span className="relative">Privacy Policy</span>
          </h1>
          <p className="text-body text-lg leading-relaxed">
            For the iOS application{" "}
            <span className="text-heading">We The People: Your Rights</span>,
            published by WildTech Ventures, LLC.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted font-[family-name:var(--font-sans)]">
            <div>
              <span className="block mb-1">Effective date</span>
              <span className="text-heading normal-case tracking-normal text-sm">
                May 17, 2026
              </span>
            </div>
            <div>
              <span className="block mb-1">Last updated</span>
              <span className="text-heading normal-case tracking-normal text-sm">
                May 17, 2026
              </span>
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="bg-surface border border-border p-5 sm:p-8 lg:p-12 space-y-12">
            {/* Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                The short version
              </h2>
              <p className="text-body text-base leading-relaxed">
                We The People: Your Rights{" "}
                <span className="text-heading">collects nothing</span>. No
                accounts, no sign-in, no analytics, no tracking, no cookies, no
                third-party SDKs. All content lives on your device. Nothing
                leaves it.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                1. Information we collect
              </h2>
              <p className="text-body text-base leading-relaxed mb-3">
                None. The app collects no personal data whatsoever.
                Specifically, the app does not:
              </p>
              <ul className="space-y-2 text-body text-base leading-relaxed pl-5 list-disc marker:text-accent">
                <li>Create user accounts or require sign-in.</li>
                <li>Collect names, email addresses, phone numbers, or any other identifiers.</li>
                <li>Access your contacts, photos, microphone, camera, location, calendar, or health data.</li>
                <li>Use analytics or telemetry of any kind.</li>
                <li>Set cookies or use any similar tracking technologies.</li>
                <li>Embed third-party software development kits (SDKs) that collect data.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                2. How the app works
              </h2>
              <p className="text-body text-base leading-relaxed">
                All content shown in We The People: Your Rights is bundled
                locally within the app at the time you download it from the App
                Store. The app does not connect to external servers to fetch
                content, and it does not transmit any data from your device.
                Everything you see and do in the app stays on your device.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                3. Third-party services
              </h2>
              <p className="text-body text-base leading-relaxed">
                None. The app does not integrate with any ad networks,
                analytics platforms, crash reporting tools, social media SDKs,
                or other third-party services that collect, process, or receive
                user data.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                4. Data sharing and sale
              </h2>
              <p className="text-body text-base leading-relaxed">
                Because no data is collected, no data is shared, sold, rented,
                or otherwise disclosed to any third party. There is no data to
                share.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                5. Data retention
              </h2>
              <p className="text-body text-base leading-relaxed">
                Not applicable. No data is stored on any server controlled by
                WildTech Ventures, LLC. Any settings or preferences you adjust
                inside the app are stored locally on your device and are
                removed if you delete the app.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                6. Children&apos;s privacy
              </h2>
              <p className="text-body text-base leading-relaxed">
                The app does not knowingly collect personal information from
                anyone, including children under the age of 13. Because no
                information is collected at all, the app is consistent with the
                requirements of the Children&apos;s Online Privacy Protection
                Act (COPPA) and similar laws worldwide.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                7. Your rights
              </h2>
              <p className="text-body text-base leading-relaxed">
                Privacy laws such as the General Data Protection Regulation
                (GDPR) and the California Consumer Privacy Act (CCPA) give
                users rights over their personal data, including the right to
                access, correct, delete, or port that data. Because we do not
                collect any personal data through the app, we hold no data
                about you to access, correct, delete, or transfer. If you have
                questions about your rights, you may contact us at the address
                below.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                8. Security
              </h2>
              <p className="text-body text-base leading-relaxed">
                Because the app does not transmit or store user data on remote
                servers, the surface area for a data breach is effectively
                zero. The app inherits the security protections provided by
                iOS, including app sandboxing and code signing.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                9. Changes to this policy
              </h2>
              <p className="text-body text-base leading-relaxed">
                This policy may be updated from time to time, for example to
                reflect changes to the app, our practices, or applicable law.
                When we make changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page. We encourage you
                to check back periodically. Material changes will be reflected
                in the version of this policy available at this URL.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                10. Contact
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                If you have any questions about this privacy policy or the
                privacy practices of We The People: Your Rights, please reach
                out:
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
                    href="mailto:will.mccants@me.com"
                    className="text-sm text-heading link-underline"
                  >
                    will.mccants@me.com
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
