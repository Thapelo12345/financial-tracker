import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPagesBuild ? "/finacial-tracker-0.2" : "",
  assetPrefix: isGitHubPagesBuild ? "/finacial-tracker-0.2/" : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
