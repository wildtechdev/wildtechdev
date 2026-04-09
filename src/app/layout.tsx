import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
