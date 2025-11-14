/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "docs",
  images: { unoptimized: true },
  trailingSlash: true,

  // 👉 ESTO ES LO QUE TE ESTÁ FALTANDO
  basePath: isProd ? "/BeauDev" : "",
  assetPrefix: isProd ? "/BeauDev/" : "",
};

export default nextConfig;
