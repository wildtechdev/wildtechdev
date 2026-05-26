import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // External links to /home (which doesn't exist) land at the homepage
      { source: "/home", destination: "/", permanent: true },
      // Convenience redirects for common founder URLs
      { source: "/founder", destination: "/will-mccants", permanent: true },
      { source: "/william-mccants", destination: "/will-mccants", permanent: true },
    ];
  },
};

export default nextConfig;
