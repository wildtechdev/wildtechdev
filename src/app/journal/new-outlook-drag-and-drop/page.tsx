import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import DragIn1Logo from "@/components/DragIn1Logo";
import {
  Lead,
  P,
  H2,
  H3,
  UL,
  OL,
  C,
  CodeBlock,
  Aside,
  A,
} from "@/components/JournalProse";
import { getPost, formatPostDate } from "@/content/journal";

const SLUG = "new-outlook-drag-and-drop";
const post = getPost(SLUG)!;

const REPO = "https://github.com/wildtechdev/DragIn1";
const WRITEUP = `${REPO}/blob/main/docs/how-it-works.md`;
const RELEASES = `${REPO}/releases/latest`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "IDataObjectAsyncCapability",
    "DV_E_FORMATETC",
    "Chromium drag and drop CF_HDROP",
    "New Outlook drag and drop not working",
    "CF_HDROP delayed rendering",
    "Windows drag and drop",
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
        {/* Header */}
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

        {/* Body */}
        <div className="border-t border-border pt-12">
          <Lead>
            Drag an attachment out of New Outlook onto a folder and nothing
            happens. No error, no file, nothing to search for. Here is what is
            actually going on, how we proved it, and the roughly thirty lines
            that fix it.
          </Lead>

          <H2>The annoyance</H2>

          <P>
            You drag a PDF out of New Outlook onto your desktop. The cursor
            shows the &ldquo;no drop&rdquo; symbol, or the drop is accepted and
            no file ever arrives. No error dialog. No entry in any log. Nothing
            you can paste into a search box.
          </P>

          <P>
            That last part is what makes it maddening. A normal bug hands you a
            message to search for. This one hands you silence, so everybody
            assumes it is their machine, their profile, or their IT department.
          </P>

          <P>
            It is none of those. It fails the same way from Microsoft Teams,
            Gmail in a browser tab, SharePoint, and OneDrive. And Classic
            Outlook works fine.
          </P>

          <P>
            That pattern is the whole clue, and it is worth sitting with for a
            second before reaching for a fix.
          </P>

          <H2>What the working case has in common</H2>

          <P>
            Classic Outlook is a native Windows application. When you drag an
            attachment out of it, it puts a real file on the drag, in the
            format Windows has used since the nineties: <C>CF_HDROP</C>, a list
            of paths on disk. The receiving application reads the paths. Done.
          </P>

          <P>
            New Outlook is Chromium in a window. So are Teams, Gmail,
            SharePoint, and OneDrive. Every source that fails is Chromium.
            Every source that works is native.
          </P>

          <P>
            Chromium cannot put a file on the drag, because at the moment you
            press the mouse button there is no file. The attachment is still on
            a server. Writing it to disk takes time, and a drag-and-drop
            operation is not allowed to block while that happens.
          </P>

          <P>
            So Chromium uses <strong className="text-heading">delayed rendering</strong>.
            It advertises the formats it <em>could</em> produce, then waits to
            be asked properly before producing anything. &ldquo;Properly&rdquo;
            turns out to be extremely specific.
          </P>

          <H2>The investigation</H2>

          <P>
            Rather than guess, we wrote a probe: a small program that registers
            a real Windows drop target with <C>RegisterDragDrop</C>, logs every
            clipboard format a drag carries, and then tries to pull the file
            two different ways against that same drag.
          </P>

          <P>Then we dragged one attachment out of New Outlook onto it.</P>

          <CodeBlock label="What the drag advertised">
            {`--- RAW FORMATETC ENUMERATION ---
    1. id=49327  tymed=TYMED_ISTREAM   DragContext
    2. id=49917  tymed=TYMED_HGLOBAL   DragImageBits
    3. id=50088  tymed=TYMED_HGLOBAL   chromium/x-renderer-taint
    4. id=15     tymed=TYMED_HGLOBAL   CF_HDROP
    5. id=49856  tymed=TYMED_HGLOBAL   Chromium Web Custom MIME Data Format

IDataObjectAsyncCapability: PRESENT  GetAsyncMode hr=0x00000000 asyncMode=True`}
          </CodeBlock>

          <P>Two lines in that output matter.</P>

          <P>
            <C>CF_HDROP</C> is right there on the list, format id 15. The
            source is openly saying it can produce an ordinary Windows file.
            And <C>IDataObjectAsyncCapability</C> is present, reporting{" "}
            <C>asyncMode=True</C>. The source is openly saying it works
            asynchronously.
          </P>

          <P>
            So we asked the ordinary way, which is how essentially every
            Windows application asks:
          </P>

          <CodeBlock label="Strategy A — ask the ordinary way">
            {`  [A] CF_HDROP GetData threw: DV_E_FORMATETC (0x80040064)
  [A] FileGroupDescriptorW threw: DV_E_FORMATETC (0x80040064)`}
          </CodeBlock>

          <P>
            <C>DV_E_FORMATETC</C> means &ldquo;that format is not
            available.&rdquo; Except it plainly is available. It was on the
            list three lines earlier.
          </P>

          <P>
            This is exactly what every failing application sees. The file is
            advertised, then refused.
          </P>

          <H2>The handshake nobody implements</H2>

          <P>
            The refusal is not a bug, and it is not Chromium being difficult.
            It is documented behavior.{" "}
            <A href="https://learn.microsoft.com/en-us/windows/win32/api/shobjidl_core/nn-shobjidl_core-idataobjectasynccapability">
              <C>IDataObjectAsyncCapability</C>
            </A>{" "}
            is a Windows interface for precisely this situation: a source that
            can produce data but needs time to do it.
          </P>

          <P>The sequence a drop target is supposed to follow:</P>

          <CodeBlock label="The documented sequence">
            {`target: GetAsyncMode()        -> source says "yes, I work asynchronously"
target: StartOperation()      -> "I am going to fetch on a background thread"
target: GetData(CF_HDROP)     -> now the source produces the file
target: EndOperation()        -> "done"`}
          </CodeBlock>

          <P>
            A drop target that skips this and simply calls{" "}
            <C>GetData(CF_HDROP)</C> on the UI thread gets{" "}
            <C>DV_E_FORMATETC</C> and nothing else.
          </P>

          <P>
            <strong className="text-heading">
              Almost nothing implements that sequence.
            </strong>{" "}
            Not File Explorer, for these sources. Not the upload box on most
            websites. Not the average desktop application.
          </P>

          <Aside>
            <p>
              This is why the failure looks so total. It is not in Outlook and
              it is not in the destination. Two pieces of software are using
              different halves of the same documented protocol, and neither one
              raises an error when they fail to line up.
            </p>
          </Aside>

          <H2>The finding</H2>

          <P>
            So we completed the handshake: call <C>GetAsyncMode</C>, call{" "}
            <C>StartOperation</C>, marshal the data object to a background MTA
            thread, extract there, then call <C>EndOperation</C>.
          </P>

          <CodeBlock label="Strategy B — complete the handshake">
            {`  StartOperation hr=0x00000000
  [B/try1] CF_HDROP SUCCESS, 1 path(s):
        C:\\Users\\...\\AppData\\Local\\Temp\\chrome_drag19360_810947597\\DOC081826.pdf
        (413387 bytes on disk)`}
          </CodeBlock>

          <P>
            A real 413 KB PDF. First attempt, no retries, no polling loop that
            eventually got lucky.
          </P>

          <P>Then look at the path.</P>

          <P>
            <C>chrome_drag19360_...</C> is <strong className="text-heading">Chromium&apos;s own</strong>{" "}
            temp directory, and <C>19360</C> is the process ID of the WebView2
            host running Outlook. Chromium wrote that file itself, the instant
            it was asked correctly.
          </P>

          <P>
            Nothing was fetched from Microsoft. No API was called. No
            credentials were involved. The bytes were always there and always
            local. The file just needed the right question.
          </P>

          <P>
            That is the part worth writing down. This is not a scrape or a
            workaround bolted onto someone else&apos;s product. The file was
            sitting on disk the whole time, behind a handshake that is
            published, stable, and almost universally ignored.
          </P>

          <H2>The fix</H2>

          <P>
            The insight above is maybe thirty lines of code. In full, the
            capture path does this:
          </P>

          <OL>
            <li>
              Register a real <C>IDropTarget</C> with <C>RegisterDragDrop</C>,
              rather than relying on a UI framework&apos;s simplified drop
              handling.
            </li>
            <li>
              On drop, query the data object for{" "}
              <C>IDataObjectAsyncCapability</C>.
            </li>
            <li>
              If async mode is on, call <C>StartOperation</C>, marshal the data
              object to a background MTA thread with{" "}
              <C>CoMarshalInterThreadInterfaceInStream</C>, and poll there while
              Chromium writes the file.
            </li>
            <li>
              Copy the result out of Chromium&apos;s temp directory
              immediately, because that directory is deleted the moment the
              drag operation ends.
            </li>
            <li>
              Call <C>EndOperation</C>.
            </li>
            <li>
              Serve the saved file back out as a plain <C>CF_HDROP</C> drag.
            </li>
          </OL>

          <P>
            Step six is the one that makes it useful rather than merely
            interesting. Once the file is on disk and an ordinary Windows
            application is offering it, every destination in Windows accepts
            it, because there is nothing unusual left to accept. File Explorer,
            browser upload boxes, CRMs, ERPs, chat apps. Nothing on the
            receiving end has to cooperate, or even know the tool exists.
          </P>

          <P>
            There are fallbacks for other source types too: plain synchronous{" "}
            <C>CF_HDROP</C> for ordinary Explorer drags, and{" "}
            <C>FileGroupDescriptorW</C> with <C>FileContents</C> over{" "}
            <C>TYMED_ISTREAM</C> for classic virtual-file sources such as
            attachments in Classic Outlook.
          </P>

          <P>
            The rest of the work was not the clever part. It was making it
            pleasant: a small always-on-top shelf window to drop things onto, a
            <C>Ctrl+C</C> shortcut for upload dialogs that take a paste, an
            installer that needs no admin rights, and an icon.
          </P>

          <H2>Why it is two gestures, not one</H2>

          <P>
            Worth stating plainly rather than hiding in a FAQ: using DragIn1 is
            two gestures. Drop the attachment on the shelf, then drag it out
            where you actually wanted it.
          </P>

          <P>
            One gesture is possible. It means fixing the problem at the source:
            getting inside the Chromium process, intercepting{" "}
            <C>DoDragDrop</C>, and performing the handshake on the
            application&apos;s behalf before the drag ever reaches a
            destination.
          </P>

          <P>
            That approach works. It also means injecting unsigned code into
            Outlook, Teams, and Chrome. That trips antivirus, requires a
            conversation with IT on a managed machine, and breaks whenever any
            of those applications update — which, for Outlook, is roughly
            constantly.
          </P>

          <P>
            DragIn1 never enters another process. The cost is one extra
            gesture. The benefit is that it cannot break your email client, and
            it will still work after the next Outlook update. For something
            people install once and then forget about, that trade felt like the
            right one.
          </P>

          <H2>Why it is free</H2>

          <P>
            The hard part here was understanding the problem, not writing the
            code. Once you know the handshake exists and know that Chromium is
            waiting to be asked, the implementation is short, unexciting, and
            sitting in front of you.
          </P>

          <P>
            Charging a subscription for thirty lines of protocol compliance,
            aimed at people who are already frustrated and just want their
            attachment, did not sit right. So DragIn1 is MIT licensed and the
            source is on GitHub. It makes no network connections of any kind:
            no accounts, no licence checks, no update pings, no telemetry. You
            can read the whole thing, or build it yourself in about two seconds
            with a compiler that already ships inside Windows.
          </P>

          <H3>If you are implementing this yourself</H3>

          <P>Three things that are easy to get wrong:</P>

          <UL>
            <li>
              <strong className="text-heading">Do the extraction off the UI thread.</strong>{" "}
              The entire point of async mode is that the source may need time.
              Marshal the data object across apartments with{" "}
              <C>CoMarshalInterThreadInterfaceInStream</C> and{" "}
              <C>CoGetInterfaceAndReleaseStream</C>. Do not call from the drop
              thread and hope.
            </li>
            <li>
              <strong className="text-heading">Copy the file immediately.</strong>{" "}
              The path you get back points inside Chromium&apos;s temp
              directory, which is deleted when the drag ends. A path you stored
              and read later will be gone.
            </li>
            <li>
              <strong className="text-heading">Call <C>EndOperation</C>, even on failure.</strong>{" "}
              Skipping it leaves the source believing an operation is still in
              flight.
            </li>
          </UL>

          <P>
            The full technical write-up, including the complete probe output
            and the reference links, is in{" "}
            <A href={WRITEUP}>
              <C>docs/how-it-works.md</C>
            </A>{" "}
            in the repo. The implementation is in <C>DragIn1.cs</C> — see the{" "}
            <C>Grab</C> and <C>ShelfTarget</C> classes. It is plain C# against
            the Win32 interfaces, with no dependencies.
          </P>
        </div>

        {/* Footer CTA */}
        <ScrollReveal>
          <div className="mt-20 border-t border-border pt-12">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-center bg-[#0a0a0a] border border-border p-6 sm:p-8">
              <div className="shrink-0">
                <DragIn1Logo size={72} id="journal-cta" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-[family-name:var(--font-sans)] font-bold text-heading mb-2">
                  DragIn1
                </h2>
                <p className="text-body text-sm leading-relaxed mb-5">
                  The tool this write-up describes. Free, MIT licensed, runs
                  entirely on your PC. No account, no network calls, no
                  telemetry.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link href="/dragin1" className="btn-ghost">
                    Product page &rarr;
                  </Link>
                  <a
                    href={RELEASES}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
                  >
                    Download
                  </a>
                  <a
                    href={REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-sm link-underline font-[family-name:var(--font-sans)]"
                  >
                    Source on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
