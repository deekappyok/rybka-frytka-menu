/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mc-heads.net', 'api.uvisuals.co'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
