/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ["framer-motion"] },
  // Export a static site
  output: "export",
  images: { unoptimized: true },
  // No basePath or assetPrefix needed for custom domain deployment
  trailingSlash: true,
};
export default nextConfig;
