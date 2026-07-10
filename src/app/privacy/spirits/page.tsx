import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy for Spirits of Charleston & Spirits of Savannah",
  description:
    "Privacy policy for the iOS apps Spirits of Charleston and Spirits of Savannah, published by WildTech Ventures, LLC.",
  alternates: {
    canonical: "https://www.wildtechdev.com/privacy/spirits",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    title: "1. Information we collect",
    body: [
      "None. Neither app collects any personal data whatsoever. There are no user accounts, no sign-in, no analytics or telemetry, no cookies, no advertising, and no third-party SDKs that collect data. Apple's App Store listing for both apps reflects this: Data Not Collected.",
    ],
  },
  {
    title: "2. Location",
    body: [
      "Both apps include a map of GPS-tagged story locations and an optional feature that centers the map on your current position. When you grant location permission, your location is processed entirely on your device by Apple's MapKit frameworks to position the map. It is never transmitted to us or to anyone else, never stored by us, and never leaves your phone. Declining location permission simply disables the map-centering convenience; every story remains fully accessible.",
    ],
  },
  {
    title: "3. How the apps work",
    body: [
      "All stories, audio narration, and historical photographs are bundled inside the app when you download it from the App Store. The apps work offline and do not connect to our servers, because we do not operate any servers for them.",
    ],
  },
  {
    title: "4. Purchases",
    body: [
      "Both apps are one-time purchases handled entirely by Apple through your App Store account. We never see your payment details, and there are no in-app purchases or subscriptions.",
    ],
  },
  {
    title: "5. Children's privacy",
    body: [
      "The apps do not knowingly collect personal information from anyone, including children. Because no information is collected at all, the apps are consistent with the requirements of the Children's Online Privacy Protection Act (COPPA) and similar laws worldwide.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "Privacy laws such as the GDPR and CCPA give users rights over their personal data. Because we do not collect any personal data through these apps, we hold no data about you to access, correct, delete, or transfer. If you have questions about your rights, contact us at the address below.",
    ],
  },
  {
    title: "7. Changes to this policy",
    body: [
      "This policy may be updated from time to time. When we make changes, the date at the top of this page updates, and the current version always lives at this URL.",
    ],
  },
];

export default function SpiritsPrivacyPolicyPage() {
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
            For the iOS applications{" "}
            <span className="text-heading">Spirits of Charleston</span> and{" "}
            <span className="text-heading">Spirits of Savannah</span>,
            published by WildTech Ventures, LLC.
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
                The short version
              </h2>
              <p className="text-body text-base leading-relaxed">
                Both apps <span className="text-heading">collect nothing</span>.
                No accounts, no analytics, no tracking, no ads, no third-party
                SDKs. All content lives on your device. Location, if you allow
                it, is used on your device to position the map and never leaves
                your phone.
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                  {s.title}
                </h2>
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-body text-base leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                8. Contact
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                Questions about this privacy policy:
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
