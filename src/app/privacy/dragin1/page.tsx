import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { dragin1 } from "@/lib/dragin1";

export const metadata: Metadata = {
  title: "Privacy Policy for DragIn1",
  description:
    "Privacy policy for the DragIn1 desktop helper and Chrome extension, published by WildTech Ventures, LLC.",
  alternates: {
    canonical: "https://www.wildtechdev.com/privacy/dragin1",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DragIn1PrivacyPolicyPage() {
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
            For <span className="text-heading">DragIn1</span>, covering both the
            Windows desktop helper and the DragIn1 Chrome extension, published
            by WildTech Ventures, LLC.
          </p>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted font-[family-name:var(--font-sans)]">
            <span className="block mb-1">Last updated</span>
            <span className="text-heading normal-case tracking-normal text-sm">
              September 16, 2026
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
                DragIn1{" "}
                <span className="text-heading">collects nothing</span>. No
                accounts, no sign-in, no analytics, no tracking, no cookies, no
                advertising, and no third-party SDKs. The desktop helper makes
                no network connections of any kind, and the extension talks
                only to that helper on your own machine. A file you drag is
                copied to your own disk and handed to whatever you drop it on.
                That is the entire data flow, and because the helper&apos;s
                source is public you do not have to take our word for it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                The desktop helper
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                When you drop an attachment on DragIn1, it asks the source
                application for the file and writes the result to your own
                machine at{" "}
                <code className="font-mono text-xs text-heading">
                  %LOCALAPPDATA%\DragIn1\
                </code>
                . Those files are yours, they stay on your disk, and DragIn1
                deletes them automatically after seven days. You can open the
                folder, copy anything out of it, or empty it yourself at any
                time.
              </p>
              <p className="text-body text-base leading-relaxed">
                The helper makes no network connections. There are no accounts,
                no licence checks, no update pings and no analytics. It installs
                no services, drivers, shell extensions or scheduled tasks, needs
                no administrator rights, and loads no code into any other
                process. Uninstalling asks whether to keep the files it
                captured, and leaves nothing behind either way.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                The Chrome extension
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                The extension exists to hand a dragged file to the upload
                control on the page you drop it onto. It requests two things,
                and uses them only for that:
              </p>
              <ul className="space-y-3 mb-4 pl-5 list-disc marker:text-accent text-body text-base leading-relaxed">
                <li>
                  <strong className="text-heading">
                    Access to the sites you use.
                  </strong>{" "}
                  A web page&apos;s uploader has to receive the file from within
                  that page, so the extension needs permission to act on the
                  page you drop onto. It does not read your browsing history,
                  monitor the pages you visit, or collect page content.
                </li>
                <li>
                  <strong className="text-heading">Native messaging.</strong>{" "}
                  This is the channel the extension uses to receive the dragged
                  file from the DragIn1 helper running locally. It connects to
                  that helper and to nothing else.
                </li>
              </ul>
              <p className="text-body text-base leading-relaxed">
                The extension has no server of its own. Nothing you drag is
                uploaded to us, and the extension sends no data to any
                third party. Without the desktop helper installed, the extension
                has nothing to receive and does nothing at all.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                What we never do
              </h2>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-accent text-body text-base leading-relaxed">
                <li>Upload, read, or retain the contents of your files.</li>
                <li>Collect names, email addresses, or any other identifier.</li>
                <li>Track your browsing, or record which sites you visit.</li>
                <li>Sell, rent, or share data with anyone, because we hold none.</li>
                <li>Show advertising, or build a profile of you.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                Verifying any of this
              </h2>
              <p className="text-body text-base leading-relaxed">
                A privacy policy is a promise, and promises are worth more when
                you can check them. The helper is MIT licensed and its full
                source is public, every release is built by a public workflow
                that publishes a SHA256 you can compare against your download,
                and you can build the whole thing yourself from source instead
                of running ours. The{" "}
                <a
                  href={dragin1.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link-underline"
                >
                  repository
                </a>{" "}
                and the{" "}
                <a
                  href={dragin1.signingPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link-underline"
                >
                  code signing policy
                </a>{" "}
                spell out exactly what is installed and what changes on your
                system.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                Your rights
              </h2>
              <p className="text-body text-base leading-relaxed">
                Privacy laws such as the GDPR and CCPA give users rights over
                their personal data. Because we collect no personal data through
                DragIn1, we hold nothing about you to access, correct, delete,
                or transfer. DragIn1 is likewise consistent with COPPA, since it
                collects no information from anyone, children included.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-4">
                Changes and contact
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                If this policy ever changes, the date above updates and the
                current version always lives at this URL. Questions, or anything
                that looks wrong:
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
                    href={`mailto:${dragin1.supportEmail}`}
                    className="text-sm text-heading link-underline"
                  >
                    {dragin1.supportEmail}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
                    Support
                  </p>
                  <Link
                    href="/dragin1/support"
                    className="text-sm text-heading link-underline"
                  >
                    DragIn1 support and troubleshooting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
