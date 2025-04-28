/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,  // This helps with image loading issues in development
  },
  turbopack: {},
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig; 