/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, // fonts load straight from Google; keeps builds simple

  // Old Bandzoogle addresses still floating around on flyers and social posts.
  // Each one sends visitors to the right place on the new site.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/music", destination: "/#music", permanent: true },
      { source: "/shows", destination: "/#dates", permanent: true },
      { source: "/photos", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/store", destination: "https://signal99.bandcamp.com/merch", permanent: true },
      { source: "/store/:path*", destination: "https://signal99.bandcamp.com/merch", permanent: true },
      { source: "/track/:path*", destination: "https://signal99.bandcamp.com", permanent: true },
      { source: "/album/:path*", destination: "https://signal99.bandcamp.com", permanent: true },
      { source: "/staplegun", destination: "https://staplegun.sig99.com", permanent: true },
      { source: "/stageplot", destination: "https://rigplot.sig99.com", permanent: true },
      // { source: "/sigfest", destination: "PASTE_SIGFEST_ADDRESS", permanent: true },
    ];
  },
};
module.exports = nextConfig;
