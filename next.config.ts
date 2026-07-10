import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first (smaller), WebP fallback, original as last resort.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // External links to /home (which doesn't exist) land at the homepage
      { source: "/home", destination: "/", permanent: true },
      // Every plausible variant of the founder's name redirects to the
      // canonical /will-mccants so we never split link equity. Any one of
      // these getting linked anywhere on the web still feeds the same page.
      { source: "/founder", destination: "/will-mccants", permanent: true },
      { source: "/will", destination: "/will-mccants", permanent: true },
      { source: "/willmccants", destination: "/will-mccants", permanent: true },
      { source: "/will-m", destination: "/will-mccants", permanent: true },
      { source: "/william", destination: "/will-mccants", permanent: true },
      { source: "/william-mccants", destination: "/will-mccants", permanent: true },
      { source: "/williammccants", destination: "/will-mccants", permanent: true },
      { source: "/mccants", destination: "/will-mccants", permanent: true },
      // Press kit aliases
      { source: "/media", destination: "/press", permanent: true },
      { source: "/media-kit", destination: "/press", permanent: true },
      { source: "/about-will", destination: "/will-mccants", permanent: true },
      // People guess these URLs for blogs and feeds; catch them all
      { source: "/blog", destination: "/journal", permanent: true },
      { source: "/blog/:slug", destination: "/journal/:slug", permanent: true },
      { source: "/posts", destination: "/journal", permanent: true },
      { source: "/rss", destination: "/feed.xml", permanent: true },
      { source: "/rss.xml", destination: "/feed.xml", permanent: true },
      { source: "/feed", destination: "/feed.xml", permanent: true },
      // Journal post slug change to remove name from URL
      {
        source: "/journal/what-i-build-and-why",
        destination: "/journal/what-we-build-and-why",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
