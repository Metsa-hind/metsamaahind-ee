/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ["framer-motion"] },
  // Export a static site
  output: "export",
  images: { unoptimized: true },
  // Configure trailing slash behavior for static hosting
  trailingSlash: false,
  // No basePath or assetPrefix needed for custom domain deployment
};
export default nextConfig;
