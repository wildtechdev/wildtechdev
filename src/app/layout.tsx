import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import ThemeProvider from "@/components/ThemeProvider";
import { posts } from "@/lib/posts";
import "./globals.css";

// Lightweight journal index for the command palette. Mapped here (server
// side) so the client bundle never has to include the full post bodies.
const paletteWtdPosts = posts.map(({ slug, title, tags }) => ({
  slug,
  title,
  tags,
}));

/**
 * Inline script that runs before React hydrates. Reads the saved theme
 * preference from localStorage (or falls back to the system preference) and
 * sets data-theme on <html> immediately, so the page paints in the right
 * theme with no flash. Kept dependency-free and tiny on purpose.
 */
const themeNoFlashScript = `(function(){try{var s=localStorage.getItem('wtd-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#06070a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wildtechdev.com"),
  applicationName: "WildTech Development",
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "WildTech Development Journal" },
      ],
    },
  },
  title: {
    default: "WildTech Development | Software & Hardware Solutions",
    template: "%s | WildTech Development",
  },
  description:
    "WildTech Development builds powerful software and hardware solutions. iOS apps, web platforms, systems integration, and precision hardware from Charleston, SC.",
  keywords: [
    "software development",
    "hardware solutions",
    "iOS development",
    "web development",
    "Charleston SC",
    "WildTech",
  ],
  authors: [{ name: "William McCants" }],
  creator: "WildTech Ventures, LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wildtechdev.com",
    siteName: "WildTech Development",
    title: "WildTech Development | Software & Hardware Solutions",
    description:
      "Turning bold ideas into powerful software and hardware solutions.",
    images: [
      {
        url: "/api/og?title=Custom%20software%2C%20hardware%2C%20and%20integration%20from%20Charleston%2C%20SC&kind=WildTech%20Development",
        width: 1200,
        height: 630,
        alt: "WildTech Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WildTech Development | Software & Hardware Solutions",
    description:
      "Turning bold ideas into powerful software and hardware solutions.",
    images: [
      "/api/og?title=Custom%20software%2C%20hardware%2C%20and%20integration%20from%20Charleston%2C%20SC&kind=WildTech%20Development",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="top"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before paint to avoid a flash of the wrong palette. */}
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {/* WebSite JSON-LD with SearchAction enables Google's sitelinks
            search box on branded queries. Person Knowledge Graph hint
            associates Will McCants with this site at the site root. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.wildtechdev.com#website",
              url: "https://www.wildtechdev.com",
              name: "WildTech Development",
              alternateName: "WildTech",
              description:
                "Charleston, SC software and hardware studio founded by Will McCants.",
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: "WildTech Ventures, LLC",
                url: "https://www.wildtechdev.com",
              },
              about: {
                "@type": "Person",
                name: "Will McCants",
                url: "https://www.wildtechdev.com/will-mccants",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.wildtechdev.com/journal?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <Cursor />
          <CommandPalette posts={paletteWtdPosts} />
          <Navbar />
          <main id="main-content" className="flex-1 pt-16 animate-page-enter">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
