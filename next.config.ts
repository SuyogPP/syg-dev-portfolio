import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["motion"],
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
