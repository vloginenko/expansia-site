/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
};

export default nextConfig;
