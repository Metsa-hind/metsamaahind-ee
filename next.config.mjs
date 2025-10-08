/** @type {import("next").NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// If running in GitHub Actions, infer repo name for basePath/assetPrefix
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const nextConfig = {
  experimental: { optimizePackageImports: ["framer-motion"] },
  // Export a static site for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // Only set basePath and assetPrefix during CI (keeps local dev at "/")
  basePath: isGitHubActions && repo ? `/${repo}` : undefined,
  assetPrefix: isGitHubActions && repo ? `/${repo}/` : undefined,
};
export default nextConfig;
