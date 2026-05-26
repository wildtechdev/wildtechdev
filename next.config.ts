import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
