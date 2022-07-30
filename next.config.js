/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tjori.gumlet.com"],
  },
};

module.exports = nextConfig;
