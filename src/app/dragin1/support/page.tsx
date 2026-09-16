import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import DragIn1Logo from "@/components/DragIn1Logo";
import { dragin1 } from "@/content/dragin1";

export const metadata: Metadata = {
  title: "DragIn1 Support",
  description:
    "Install help, troubleshooting, keyboard shortcuts, uninstall steps and how to report a problem with DragIn1.",
  keywords: [
    "DragIn1 support",
    "DragIn1 not capturing drag",
    "New Outlook drag and drop still not working",
    "DragIn1 uninstall",
    "verify DragIn1 download SHA256",
  ],
  alternates: {
    canonical: "/dragin1/support",
  },
  openGraph: {
    title: "DragIn1 Support | WildTech Development",
    description:
      "Install help, troubleshooting, shortcuts and how to report a problem with DragIn1.",
    url: "/dragin1/support",
  },
};

const shortcuts = [
  { key: "Drop a file on it", what: "Captured and saved, ready to drag out" },
  { key: "Drag an item out", what: "A normal Windows file drag" },
  { key: "Double-click", what: "Opens the file" },
  { key: "Ctrl + C", what: "Puts files on the clipboard for upload dialogs that take a paste" },
  { key: "Ctrl + A", what: "Select all" },
  { key: "Delete", what: "Removes from the list, leaves the file on disk" },
  { key: "Right-click", what: "Open, Show in folder, Always on top, Start with Windows" },
];

const troubleshooting = [
  {
    q: "Windows says “Windows protected your PC”",
    a: [
      "Click More info, then Run anyway. This is SmartScreen reacting to software that has not built up reputation, not a detection of anything in the file.",
      "It reappears on every new release, because SmartScreen ties reputation to a specific file hash and each release is a new file.",
    ],
    link: { href: "/journal/windows-protected-your-pc", label: "What SmartScreen actually checks" },
  },
  {
    q: "I dropped an attachment on DragIn1 and nothing appeared",
    a: [
      "Give it a second. On a slow connection the source may still be downloading the attachment, and DragIn1 waits for it rather than failing early.",
      "If it still does not appear, the source app may be one we have not seen yet. Report it with the app name and build number and we will take a look.",
    ],
  },
  {
    q: "The DragIn1 window keeps disappearing behind other windows",
    a: [
      "Right-click the DragIn1 window and turn on Always on top. It is on by default, but it can be switched off by accident.",
    ],
  },
  {
    q: "A destination still rejects the file after I drag it out of DragIn1",
    a: [
      "This one is worth reporting. Once a file leaves DragIn1 it is an ordinary Windows file drag, so a destination that refuses it is unusual and probably a bug on our side.",
      "Include the destination app or website and what happened when you dropped.",
    ],
  },
  {
    q: "Where did my captured files go?",
    a: [
      "Everything DragIn1 captures is written to %LOCALAPPDATA%\\DragIn1\\ on your own machine, and cleaned up automatically after seven days.",
      "Right-click an item and choose Show in folder to open its location.",
    ],
  },
  {
    q: "Can I use it on a managed work computer?",
    a: [
      "Usually yes. The installer is per-user and needs no administrator rights, and it installs no services, drivers, shell extensions or scheduled tasks.",
      "If your organisation blocks unsigned executables, the code signing policy and the public build workflow are the documents your IT team will want.",
    ],
    link: { href: dragin1.signingPolicy, label: "Code signing policy", external: true },
  },
  {
    q: "My antivirus flagged it",
    a: [
      "Verify the SHA256 against the release first — if it does not match, do not run it and please open an issue immediately.",
      "If it matches, it is a false positive on an unsigned binary. You can also build from source yourself in about two seconds and skip our binary entirely.",
    ],
  },
  {
    q: "Multi-file drags, huge attachments, or unusual filenames",
    a: [
      "These are the cases most likely to have rough edges, and they are the most useful bug reports we get. If something misbehaves, tell us what the drag contained.",
    ],
  },
];

export default function DragIn1SupportPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 animate-fade-in-up">
          <Link
            href="/dragin1"
            className="text-xs uppercase tracking-widest text-muted hover:text-green transition-colors font-[family-name:var(--font-sans)] inline-block mb-8"
          >
            &larr; DragIn1
          </Link>

          <div className="flex items-start gap-6">
            <div className="shrink-0 hidden sm:block">
              <DragIn1Logo size={64} id="support" />
            </div>
            <div className="min-w-0">
              <p className="section-label text-xs uppercase tracking-widest text-muted mb-2 font-[family-name:var(--font-sans)]">
                Help
              </p>
              <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading mb-5">
                DragIn1 Support
              </h1>
              <p className="text-body text-lg leading-relaxed">
                Installing, troubleshooting, shortcuts, and how to reach a human
                when none of it helps.
              </p>
            </div>
          </div>
        </header>

        {/* Install */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Installing
            </h2>

            <ol className="space-y-4 mb-8 pl-5 list-decimal marker:text-green marker:font-mono text-body leading-relaxed">
              <li>
                Download{" "}
                <code className="font-mono text-[0.85em] text-green">
                  DragIn1-Setup.exe
                </code>{" "}
                from{" "}
                <a
                  href={dragin1.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green link-underline"
                >
                  GitHub Releases
                </a>
                . One file, no admin rights, installs just for you.
              </li>
              <li>
                Run it. When SmartScreen appears, click{" "}
                <strong className="text-heading">More info</strong> then{" "}
                <strong className="text-heading">Run anyway</strong>.
              </li>
              <li>
                DragIn1 opens as a small always-on-top window in the bottom
                right of your screen. That window is the shelf.
              </li>
            </ol>

            <p className="text-sm text-muted leading-relaxed">
              Windows 10 and 11. Needs .NET Framework 4.x, which is already
              present on every Windows 10 and 11 machine, so there is nothing
              else to install.
            </p>
          </section>
        </ScrollReveal>

        {/* Using it */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Using it
            </h2>

            <div className="border border-border divide-y divide-border">
              {shortcuts.map((s) => (
                <div
                  key={s.key}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-4"
                >
                  <span className="text-sm text-heading font-[family-name:var(--font-sans)] sm:w-[190px] shrink-0">
                    {s.key}
                  </span>
                  <span className="text-sm text-body leading-relaxed">
                    {s.what}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Troubleshooting */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-8">
              Troubleshooting
            </h2>

            <div className="divide-y divide-border border-t border-border">
              {troubleshooting.map((item) => (
                <div key={item.q} className="py-7">
                  <h3 className="text-base font-[family-name:var(--font-sans)] font-bold text-heading mb-3">
                    {item.q}
                  </h3>
                  {item.a.map((para) => (
                    <p
                      key={para}
                      className="text-body text-sm leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                  {item.link &&
                    ("external" in item.link && item.link.external ? (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green text-sm link-underline font-[family-name:var(--font-sans)] inline-block mt-2"
                      >
                        {item.link.label} &rarr;
                      </a>
                    ) : (
                      <Link
                        href={item.link.href}
                        className="text-green text-sm link-underline font-[family-name:var(--font-sans)] inline-block mt-2"
                      >
                        {item.link.label} &rarr;
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Verify */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Verifying your download
            </h2>

            <p className="text-body leading-relaxed mb-6">
              Every release publishes a SHA256 computed by the same public
              workflow that built the binary. To check what you downloaded:
            </p>

            <figure className="mb-6">
              <figcaption className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono border border-border border-b-0 bg-[#0a0a0a] px-4 py-2.5">
                PowerShell
              </figcaption>
              <pre className="bg-[#0a0a0a] border border-border p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono text-body">
                <code>
                  Get-FileHash DragIn1-Setup.exe -Algorithm SHA256
                </code>
              </pre>
            </figure>

            <p className="text-body text-sm leading-relaxed">
              Compare the result with{" "}
              <code className="font-mono text-[0.85em] text-green">
                SHA256.txt
              </code>{" "}
              on the release. If it does not match, do not run the file, and
              please{" "}
              <a
                href={dragin1.newIssue}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green link-underline"
              >
                open an issue
              </a>{" "}
              so we can look into it.
            </p>
          </section>
        </ScrollReveal>

        {/* Uninstall */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Uninstalling
            </h2>

            <p className="text-body leading-relaxed mb-5">
              <strong className="text-heading">
                Settings &rarr; Apps &rarr; Installed apps &rarr; DragIn1 &rarr;
                Uninstall.
              </strong>
            </p>

            <p className="text-body text-sm leading-relaxed">
              It asks whether to keep the files it captured. Nothing is left
              behind either way: no services, no drivers, no shell extensions,
              no scheduled tasks.
            </p>
          </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-serif)] italic text-heading mb-6">
              Still stuck?
            </h2>

            <p className="text-body leading-relaxed mb-8">
              Bug reports are genuinely welcome, especially for a source app
              whose drags are not captured, a destination that rejects a drag
              out of DragIn1, or anything involving multi-file drags, very large
              attachments, or unusual filenames.
            </p>

            <div className="bg-[#0a0a0a] border border-border p-5 sm:p-7 mb-8">
              <p className="text-xs uppercase tracking-widest text-muted mb-4 font-[family-name:var(--font-sans)]">
                Helpful things to include
              </p>
              <ul className="space-y-2.5">
                {[
                  "Which app you dragged from, and its version or build number",
                  "Where you were trying to drop it",
                  "Whether anything appeared in the DragIn1 window at all",
                  "Your Windows version (10 or 11)",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-body flex items-start gap-2.5"
                  >
                    <span className="w-1 h-1 bg-green rounded-full shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-7 sm:flex-row sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Report a bug
                </p>
                <a
                  href={dragin1.issues}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-heading link-underline"
                >
                  GitHub Issues
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
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
                <p className="text-xs uppercase tracking-widest text-muted mb-3 font-[family-name:var(--font-sans)]">
                  Source
                </p>
                <a
                  href={dragin1.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-heading link-underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
