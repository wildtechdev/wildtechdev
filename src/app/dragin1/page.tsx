import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import DragIn1Flow from "@/components/DragIn1Flow";
import { dragin1, dragSources, dragDestinations } from "@/lib/dragin1";

export const metadata: Metadata = {
  title: "DragIn1 — Fix drag and drop from New Outlook",
  description:
    "Free, open source Windows tool that fixes drag and drop from New Outlook, Teams, Gmail, SharePoint and OneDrive. Drop the attachment on DragIn1, then drag it anywhere. No account, no network, no telemetry.",
  keywords: [
    "New Outlook drag and drop not working",
    "can't drag attachment from New Outlook",
    "drag email attachment to folder Outlook",
    "Teams drag file not working",
    "New Outlook attachment drag fails",
    "SharePoint drag file not working",
    "free Outlook drag and drop fix",
  ],
  alternates: {
    canonical: "https://www.wildtechdev.com/dragin1",
  },
  openGraph: {
    title: "DragIn1 — Fix drag and drop from New Outlook",
    description:
      "Drag attachments out of New Outlook again. Free, open source, runs entirely on your PC.",
    images: [
      {
        url: "/api/og?title=Drag%20attachments%20out%20of%20New%20Outlook%20again&kind=DragIn1",
        width: 1200,
        height: 630,
        alt: "DragIn1 by WildTech Development",
      },
    ],
  },
};

const steps = [
  {
    n: "01",
    title: "Drop it on DragIn1",
    body: "Drag the attachment out of New Outlook and onto the small DragIn1 window instead of your final destination.",
  },
  {
    n: "02",
    title: "DragIn1 saves the real file",
    body: "It asks for the file the specific way the source is waiting to be asked, then writes the actual bytes to your disk.",
  },
  {
    n: "03",
    title: "Drag it anywhere",
    body: "Drag it out of DragIn1 into a folder, an upload box, or any app. It is an ordinary file now, so everything accepts it.",
  },
];

const faqs = [
  {
    q: "Why is drag and drop not working in New Outlook?",
    a: "New Outlook is built on Chromium, and Chromium hands dragged files over differently from a normal Windows application. It offers the file, then waits for the receiving app to ask for it in a specific way that almost nothing implements. Nothing is broken on your machine, and no setting will change it.",
  },
  {
    q: "Why can I drag attachments in Classic Outlook but not New Outlook?",
    a: "Classic Outlook is a native Windows application and puts a real file on the drag immediately. New Outlook cannot, because at the moment you start dragging the attachment is still on a server rather than on your disk.",
  },
  {
    q: "Does this work for Teams, Gmail, SharePoint and OneDrive?",
    a: "Yes. They are all Chromium based and fail in exactly the same way, so the same fix covers all of them.",
  },
  {
    q: "Does DragIn1 send my files anywhere?",
    a: "No. DragIn1 makes no network connections of any kind. There are no accounts, no licence checks, no update pings and no analytics. Files are copied to your own machine and cleaned up after seven days.",
  },
  {
    q: "Is DragIn1 really free?",
    a: "Yes, and it is MIT licensed with the full source on GitHub. There is no paid tier, no trial and no upsell.",
  },
  {
    q: "Why does Windows warn me when I install it?",
    a: "DragIn1 is not code signed, and SmartScreen warns about any application that has not built up reputation. The warning means nothing has vouched for the file yet, not that anything was detected in it. Click More info, then Run anyway.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "DragIn1",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Windows 10, Windows 11",
      description:
        "Free, open source Windows tool that fixes drag and drop from New Outlook, Teams, Gmail, SharePoint and OneDrive.",
      url: "https://www.wildtechdev.com/dragin1",
      downloadUrl: dragin1.releases,
      license: dragin1.license,
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: {
        "@type": "Organization",
        name: "WildTech Ventures, LLC",
        url: "https://www.wildtechdev.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function DragIn1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.wildtechdev.com" },
          { name: "Products", url: "https://www.wildtechdev.com/products" },
          { name: "DragIn1", url: "https://www.wildtechdev.com/dragin1" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute -top-40 right-1/4 w-[700px] h-[400px] rounded-full pointer-events-none section-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-10">
            <div className="shrink-0 animate-fade-in-scale">
              <Image
                src="/products/dragin1-logo.png"
                alt="DragIn1"
                width={104}
                height={104}
                priority
                className="rounded-[22px]"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 animate-fade-in-up">
                <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-mono">
                  Free &amp; open source
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono">
                  Windows 10 &amp; 11
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono">
                  MIT
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-serif)] italic text-heading mb-6 animate-fade-in-up delay-100 leading-[0.92]">
                DragIn1
              </h1>

              <p className="text-body text-base sm:text-lg leading-relaxed mb-4 max-w-2xl animate-fade-in-up delay-200">
                Drag an attachment out of New Outlook and nothing happens.
                DragIn1 fixes that.
              </p>

              <p className="text-muted text-sm leading-relaxed mb-9 max-w-xl animate-fade-in-up delay-300">
                Drop the attachment on DragIn1, then drag it wherever you
                actually wanted it. Works from New Outlook, Teams, Gmail,
                SharePoint and OneDrive, into anything at all.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 animate-fade-in-up delay-400">
                <a
                  href={dragin1.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid"
                >
                  Download for Windows
                </a>
                <a
                  href={dragin1.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body hover:text-heading transition-colors link-underline font-[family-name:var(--font-sans)]"
                >
                  Source on GitHub
                </a>
                <a
                  href={dragin1.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body hover:text-heading transition-colors link-underline font-[family-name:var(--font-sans)]"
                >
                  Chrome extension
                </a>
              </div>

              <p className="text-xs text-muted mt-5 animate-fade-in-up delay-500">
                Downloads come from GitHub Releases. Nothing is hosted on this
                domain, and every release publishes a SHA256.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 sm:py-24 border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Why this happens
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-8">
              It is not your computer
            </h2>

            <div className="space-y-5 text-body leading-relaxed">
              <p>
                When you drag an attachment, the app you are dragging{" "}
                <em>from</em> has to hand a real file to the app you are
                dragging <em>to</em>. Classic Outlook does that instantly,
                because the file is already on your disk.
              </p>
              <p>
                New Outlook cannot. The attachment is still sitting on a server
                when you press the mouse button, and downloading it takes a
                moment that a drag is not allowed to wait for. So instead of
                handing over a file, it offers one, and waits to be asked for it
                in a particular way.
              </p>
              <p>
                Almost no Windows application knows to ask that way. So the
                offer is never taken up, the file never arrives, and{" "}
                <strong className="text-heading">nobody reports an error</strong>
                . It looks like your email is broken. It is really two pieces of
                software talking past each other.
              </p>
              <p>
                That is also why it fails identically from Teams, Gmail,
                SharePoint and OneDrive. They are all built the same way
                underneath.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/journal/new-outlook-drag-and-drop"
                className="text-accent text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                The technical version, with the evidence &rarr;
              </Link>
              <Link
                href="/work/dragin1"
                className="text-accent text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                Read the case study
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
              One stop on the way
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <DragIn1Flow />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border-x border-b border-border">
            {steps.map((step) => (
              <ScrollReveal key={step.n}>
                <div className="bg-black p-7 sm:p-8 h-full">
                  <span className="block text-[40px] leading-none font-[family-name:var(--font-serif)] text-faint mb-5">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-[family-name:var(--font-sans)] font-semibold text-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 border-l-2 border-accent/40 pl-5 py-1">
              <p className="text-sm text-body leading-relaxed mb-3">
                <strong className="text-heading">
                  Yes, that is two gestures instead of one.
                </strong>{" "}
                Making the desktop app a single drag would mean injecting code
                inside Outlook and Chrome, which trips antivirus and breaks on
                every Outlook update. DragIn1 stays outside every other process.
                One extra gesture, and it cannot break your email client.
              </p>
              <p className="text-sm text-body leading-relaxed">
                One exception worth knowing: if the place you are dropping onto
                is an{" "}
                <strong className="text-heading">
                  upload box on a web page
                </strong>
                , the{" "}
                <a
                  href={dragin1.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link-underline"
                >
                  Chrome extension
                </a>{" "}
                does make it a single motion. It receives the captured file
                from the helper and hands it straight to the page&apos;s
                uploader, so you drag from Outlook to the upload box and
                nothing else. The two-step shelf is what covers everywhere
                else: folders, desktop apps, anything that takes a file.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm text-body leading-relaxed mt-8">
              There is also a <strong className="text-heading">Ctrl+C</strong>{" "}
              shortcut that puts captured files on the clipboard, for upload
              dialogs that take a paste instead of a drag.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 sm:py-24 border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-black border border-accent/30 p-6 sm:p-10 overflow-hidden">
              <div
                className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 10%, transparent) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-mono">
                    Privacy
                  </p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
                  It never touches the network. At all.
                </h2>

                <p className="text-body leading-relaxed mb-8 max-w-2xl">
                  DragIn1 makes no network connections of any kind. It reads the
                  file you dropped, writes it to your own disk, and hands it to
                  whatever you drag it to. That is the entire data flow, and
                  because the source is public you do not have to take our word
                  for it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
                  {[
                    "No accounts, no sign-in",
                    "No analytics or telemetry",
                    "No licence checks",
                    "No update pings",
                    "No third-party SDKs",
                    "No data leaves your PC",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm text-body flex items-start gap-2.5 font-[family-name:var(--font-sans)]"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2" />
                      {item}
                    </p>
                  ))}
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  Captured files are stored at{" "}
                  <code className="font-mono text-xs text-body">
                    %LOCALAPPDATA%\DragIn1\
                  </code>{" "}
                  on your machine and cleaned up automatically after seven days.
                  The installer adds no services, drivers, shell extensions or
                  scheduled tasks, and requires no administrator rights.
                </p>

                <p className="text-sm text-muted leading-relaxed mt-5">
                  The full policy, covering both the desktop helper and the
                  Chrome extension:{" "}
                  <Link
                    href="/privacy/dragin1"
                    className="text-accent link-underline"
                  >
                    DragIn1 privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Compatibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
              Drag from these, drop onto anything
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
            <ScrollReveal>
              <div className="bg-black p-7 sm:p-8 h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-mono mb-6">
                  Drag from
                </p>
                <ul className="space-y-4">
                  {dragSources.map((s) => (
                    <li key={s.name} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2.5" />
                      <span>
                        <span className="block text-sm text-heading font-[family-name:var(--font-sans)]">
                          {s.name}
                        </span>
                        <span className="block text-xs text-muted mt-0.5">
                          {s.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-black p-7 sm:p-8 h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono mb-6">
                  Drop onto
                </p>
                <ul className="space-y-4">
                  {dragDestinations.map((d) => (
                    <li key={d.name} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-faint rounded-full shrink-0 mt-2.5" />
                      <span>
                        <span className="block text-sm text-heading font-[family-name:var(--font-sans)]">
                          {d.name}
                        </span>
                        <span className="block text-xs text-muted mt-0.5">
                          {d.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-sm text-muted leading-relaxed mt-8">
              Windows 10 and 11. Needs .NET Framework 4.x, which is already on
              every Windows 10 and 11 machine. Nothing on the receiving end has
              to cooperate, or even know DragIn1 exists.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SmartScreen */}
      <section className="py-16 sm:py-24 border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Before you install
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-8">
              Windows will warn you. Here is why.
            </h2>

            <div className="bg-black border border-border p-5 sm:p-7 mb-8">
              <p className="text-sm text-heading font-[family-name:var(--font-sans)] mb-2">
                &ldquo;Windows protected your PC&rdquo;
              </p>
              <p className="text-sm text-body leading-relaxed">
                Click <strong className="text-heading">More info</strong>, then{" "}
                <strong className="text-heading">Run anyway</strong>.
              </p>
            </div>

            <div className="space-y-5 text-body leading-relaxed">
              <p>
                This is SmartScreen, and it appears because DragIn1 is not code
                signed. A certificate that removes the warning costs a few
                hundred dollars a year, which is not something a free tool can
                carry.{" "}
                <strong className="text-heading">
                  The warning is about the absence of a paid certificate, not
                  about anything detected in the file.
                </strong>
              </p>
              <p>
                It will also come back on every new release, because SmartScreen
                ties its reputation to a specific file hash and every release is
                a new file.
              </p>
              <p>If you would rather not take that on faith, you do not have to:</p>
            </div>

            <ul className="space-y-4 mt-6">
              {[
                {
                  t: "Read the source",
                  d: "The whole app is two C# files, MIT licensed, public.",
                },
                {
                  t: "Check the hash",
                  d: "Every release publishes a SHA256 computed by the public build workflow.",
                },
                {
                  t: "Build it yourself",
                  d: "About two seconds, using a compiler already on your machine. No SDK, no downloads.",
                },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2.5" />
                  <span>
                    <span className="block text-sm text-heading font-[family-name:var(--font-sans)]">
                      {item.t}
                    </span>
                    <span className="block text-sm text-muted mt-0.5">
                      {item.d}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
              <Link
                href="/journal/windows-protected-your-pc"
                className="text-accent text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                What SmartScreen actually checks &rarr;
              </Link>
              <a
                href={dragin1.signingPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                Code signing policy
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label text-xs uppercase tracking-[0.18em] text-muted mb-3 font-[family-name:var(--font-sans)]">
              Common questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-serif)] italic text-heading mb-12">
              Frequently asked
            </h2>
          </ScrollReveal>

          <div className="divide-y divide-border border-t border-border">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="py-7">
                  <h3 className="text-base font-[family-name:var(--font-sans)] font-semibold text-heading mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-sm text-body mt-10">
              Still stuck?{" "}
              <Link
                href="/dragin1/support"
                className="text-accent link-underline"
              >
                Support and troubleshooting
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chrome extension */}
      <section className="py-16 sm:py-24 border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-black border border-border p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono mb-5">
                One product family
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-5">
                There is a Chrome extension too
              </h2>
              <p className="text-body leading-relaxed mb-5 max-w-2xl">
                The DragIn1 extension covers the same problem from inside the
                browser, and it is what turns a web upload into a single
                motion. With the helper running, the extension receives the
                captured file and hands it straight to the page&rsquo;s
                uploader, so you drag an attachment from New Outlook onto an
                upload box and it just uploads.
              </p>
              <p className="text-body leading-relaxed mb-8 max-w-2xl">
                The two work together: the extension handles upload boxes on
                web pages, and the desktop shelf handles everywhere else. The
                extension needs the helper installed, since on its own it has
                nothing to receive.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={dragin1.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Get the Chrome extension
                </a>
                <a
                  href={dragin1.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body hover:text-heading transition-colors link-underline font-[family-name:var(--font-sans)]"
                >
                  Download the Windows app
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
