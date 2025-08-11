import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/FIAP-1' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }
};

export default nextConfig;
