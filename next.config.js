/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopdunk.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
