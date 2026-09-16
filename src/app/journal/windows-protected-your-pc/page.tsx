import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Lead,
  P,
  H2,
  H3,
  UL,
  C,
  CodeBlock,
  Aside,
  A,
} from "@/components/JournalProse";
import { getPost, formatPostDate } from "@/content/journal";

const SLUG = "windows-protected-your-pc";
const post = getPost(SLUG)!;

const REPO = "https://github.com/wildtechdev/DragIn1";
const SIGNING_POLICY = `${REPO}/blob/main/CODE_SIGNING_POLICY.md`;
const WORKFLOW = `${REPO}/blob/main/.github/workflows/release.yml`;
const RELEASES = `${REPO}/releases/latest`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "Windows protected your PC",
    "SmartScreen unsigned application",
    "Windows SmartScreen warning open source",
    "code signing certificate cost",
    "verify SHA256 download Windows",
  ],
  alternates: {
    canonical: `/journal/${SLUG}`,
  },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.excerpt,
    url: `/journal/${SLUG}`,
    publishedTime: post.date,
    authors: ["William McCants"],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.excerpt,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    "@type": "Person",
    name: "William McCants",
    url: "https://wildtechdev.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "WildTech Ventures, LLC",
    url: "https://wildtechdev.com",
  },
  mainEntityOfPage: `https://wildtechdev.com/journal/${SLUG}`,
  keywords: post.tags.join(", "),
};

export default function JournalEntryPage() {
  return (
    <article className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <header className="mb-14 animate-fade-in-up">
          <Link
            href="/journal"
            className="text-xs uppercase tracking-widest text-muted hover:text-green transition-colors font-[family-name:var(--font-sans)] inline-block mb-8"
          >
            &larr; Journal
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            <time
              dateTime={post.date}
              className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono"
            >
              {formatPostDate(post.date)}
            </time>
            <span className="text-[10px] text-muted font-mono">
              {post.readingTime}
            </span>
          </div>

          <h1 className="relative text-4xl sm:text-5xl font-[family-name:var(--font-serif)] italic text-heading leading-[1.1] mb-6">
            <span className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-green opacity-[0.05] blur-3xl pointer-events-none" />
            <span className="relative">{post.title}</span>
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.15em] text-muted font-mono border border-border px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="border-t border-border pt-12">
          <Lead>
            Ship a small free Windows tool and you will meet a blue dialog that
            says &ldquo;Windows protected your PC.&rdquo; Most people read that
            as &ldquo;this file is dangerous.&rdquo; It does not mean that, and
            the difference is worth understanding whether you are installing
            software or publishing it.
          </Lead>

          <H2>What the warning actually says</H2>

          <P>
            SmartScreen is a reputation service, not a scanner. When you run a
            downloaded executable, Windows asks a simple question: has this
            exact file been seen enough times, from a publisher we recognise,
            to be considered established?
          </P>

          <P>
            If the answer is no, you get the blue screen. That is the entire
            mechanism. It is not reporting that something was found in the
            file. It is reporting that nothing has vouched for it yet.
          </P>

          <Aside>
            <p>
              Windows Defender, which is a scanner, runs separately and would
              tell you something quite different if it objected. SmartScreen
              going quiet is a statement about popularity and paperwork.
              Defender going quiet is a statement about content.
            </p>
          </Aside>

          <P>
            There are two ways to make the warning go away. Be downloaded by a
            very large number of people, or buy a code signing certificate so
            the reputation attaches to your publisher identity instead of the
            individual file.
          </P>

          <H2>Why it comes back on every single release</H2>

          <P>
            This one surprises people, including developers. SmartScreen ties
            unsigned reputation to a <strong className="text-heading">specific file hash</strong>.
          </P>

          <P>
            Change one byte and it is a new file with no history. So a project
            that ships a bugfix a week never accumulates anything. Version
            1.0.1 starts from zero reputation even if 1.0.0 was downloaded ten
            thousand times without incident. The warning is not sticky in your
            favour, only against you.
          </P>

          <P>
            The practical result is that active maintenance is penalised. A
            tool that is updated regularly looks permanently suspicious, while
            an abandoned binary that happened to go viral looks trustworthy.
          </P>

          <H2>What the certificate actually costs</H2>

          <P>
            A few hundred dollars a year, renewed forever, and since the
            industry moved to hardware-backed keys it also means a physical
            token or an HSM-backed cloud signing service, which adds cost and
            setup on top of the certificate itself.
          </P>

          <P>
            For commercial software that is a rounding error. For a free tool
            that solves one annoying problem, it is a recurring bill with no
            revenue behind it. That is the whole reason so much small,
            genuinely useful Windows software throws this warning.
          </P>

          <P>
            It is worth being precise about what you would be buying. A
            signature attests to <em>provenance</em> — this binary came from
            this publisher and was not altered in transit. It is not a security
            audit and it is not a warranty. Signed malware exists. Unsigned
            software that is completely fine is the overwhelming majority case.
            The signature answers &ldquo;who made this,&rdquo; not &ldquo;is
            this safe.&rdquo;
          </P>

          <H2>What we do instead</H2>

          <P>
            We could not justify the certificate for a free tool, so the goal
            became making the trust question answerable without one. Four
            things, all of which you can check yourself:
          </P>

          <H3>1. The source is public and small</H3>

          <P>
            DragIn1 is MIT licensed and it is two C# files. Not a framework, not
            a dependency tree, not a minified bundle. You can read the entire
            data flow in an afternoon, and the part that matters — it opens no
            sockets — is verifiable by searching the source for the networking
            namespaces and finding nothing.
          </P>

          <H3>2. Releases are built in public, not on a laptop</H3>

          <P>
            Every released binary is produced by{" "}
            <A href={WORKFLOW}>a GitHub Actions workflow</A> from the public
            source, on a GitHub-hosted runner, triggered by a version tag. The
            run is publicly visible. It compiles with the C# compiler already
            included in Windows, with no third-party dependencies, no package
            restore, and no network access during compilation.
          </P>

          <P>
            No binary is ever built on a developer workstation and uploaded by
            hand. That removes the most common way a clean repository still
            produces a dirty download.
          </P>

          <H3>3. Every release publishes a SHA256</H3>

          <P>
            Computed by that same workflow, so you can confirm the file you
            downloaded is the file the public build produced:
          </P>

          <CodeBlock label="PowerShell">
            {`Get-FileHash DragIn1-Setup.exe -Algorithm SHA256`}
          </CodeBlock>

          <P>
            Compare it with <C>SHA256.txt</C> on the release. If it does not
            match, do not run it, and please open an issue so we can look into
            it.
          </P>

          <H3>4. You can build it yourself in about two seconds</H3>

          <P>
            No Visual Studio, no .NET SDK, no internet connection. The C#
            compiler has shipped inside Windows since .NET Framework 4, which is
            already on every Windows 10 and 11 machine.
          </P>

          <CodeBlock label="Build from source">
            {`git clone https://github.com/wildtechdev/DragIn1.git
cd DragIn1
Build-Installer.cmd`}
          </CodeBlock>

          <P>
            That produces <C>DragIn1.exe</C> and <C>DragIn1-Setup.exe</C>. If
            you would rather trust your own machine than our release page, that
            option is a clone away, and it is the strongest answer to the trust
            question that exists.
          </P>

          <H2>The disclosure that should come with it</H2>

          <P>
            A signature is worth less without knowing what the software
            actually does, so that is written down too. DragIn1 makes no
            network connections of any kind: no accounts, no licence checks, no
            update pings, no analytics. Files you drop on it are copied to{" "}
            <C>%LOCALAPPDATA%\DragIn1\</C> on your own machine and cleaned up
            after seven days.
          </P>

          <P>Everything the installer changes is per-user and needs no admin rights:</P>

          <UL>
            <li>Files in the install folder you choose.</li>
            <li>
              An uninstall entry under <C>HKCU</C>, removed when you uninstall.
            </li>
            <li>
              Start Menu, desktop, and start-with-Windows entries — each a
              checkbox during setup, each reversible afterwards.
            </li>
          </UL>

          <P>
            No services, no drivers, no shell extensions, no scheduled tasks, no
            browser components, and no code loaded into any other process. The
            full breakdown is in the{" "}
            <A href={SIGNING_POLICY}>code signing policy</A>.
          </P>

          <H2>So what should you actually do?</H2>

          <P>
            When you hit the warning on DragIn1, click{" "}
            <strong className="text-heading">More info</strong>, then{" "}
            <strong className="text-heading">Run anyway</strong>. That is the
            intended path for software that has not bought reputation.
          </P>

          <P>
            But the more useful habit is the general one: treat the dialog as a
            prompt to ask where the file came from, not as a verdict. Did you
            get it from the project&apos;s own release page? Can you read the
            source? Does the hash match? Those questions are answerable, and
            they tell you far more than the presence or absence of a blue
            screen.
          </P>

          <P>
            If DragIn1 releases are ever signed through the{" "}
            <A href="https://signpath.org">SignPath Foundation</A>, which
            provides free certificates to open source projects, that will be
            noted on the releases page and in the policy. Until then the warning
            is the honest cost of shipping something free, and we would rather
            explain it than have you wonder.
          </P>
        </div>

        <ScrollReveal>
          <div className="mt-20 border-t border-border pt-12">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:items-center">
              <Link href="/dragin1" className="btn-ghost">
                About DragIn1 &rarr;
              </Link>
              <Link
                href="/dragin1/support"
                className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                Support &amp; troubleshooting
              </Link>
              <a
                href={RELEASES}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                Releases
              </a>
              <Link
                href="/journal/new-outlook-drag-and-drop"
                className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
              >
                The technical write-up
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
