const MD_URL = process.env.NEXT_PUBLIC_MD_URL || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/md-admin",
  transpilePackages: ["@ContextLogic/lego", "recharts"],
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return MD_URL
      ? [
          {
            source: "/api/:path*",
            destination: `${MD_URL}/api/:path*`,
            basePath: false,
          },
          {
            source: "/go/:mid",
            destination: `${MD_URL}/go/:mid`,
            basePath: false,
          },
          {
            source: "/logout",
            destination: `${MD_URL}/logout`,
            basePath: false,
          },
          {
            // used for xsrf check
            source: "/",
            destination: `${MD_URL}/`,
            basePath: false,
          },
        ]
      : [];
  },
  async redirects() {
    return [
      {
        source: "/v2-login",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
