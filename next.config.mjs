/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats (avif, webp) automatically
    formats: ["image/avif", "image/webp"],
    // Optimize local images aggressively
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
