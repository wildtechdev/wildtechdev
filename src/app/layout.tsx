import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://wildtechdev.com"),
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
    url: "https://wildtechdev.com",
    siteName: "WildTech Development",
    title: "WildTech Development | Software & Hardware Solutions",
    description:
      "Turning bold ideas into powerful software and hardware solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WildTech Development | Software & Hardware Solutions",
    description:
      "Turning bold ideas into powerful software and hardware solutions.",
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
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <main className="flex-1 pt-16 animate-page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
