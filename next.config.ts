import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: isGithubActions ? '/FIAP-1' : '',
  assetPrefix: isGithubActions ? '/FIAP-1/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
