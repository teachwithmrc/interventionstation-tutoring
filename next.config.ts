import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "intervention-station-tutoring";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : undefined,
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
  // The GitHub Pages build excludes the Cloudflare worker runtime.
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
