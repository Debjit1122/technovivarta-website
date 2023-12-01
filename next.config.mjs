// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'], // Add your domain(s) here
  },
};

export default nextConfig;
