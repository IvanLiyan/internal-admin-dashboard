const MD_URL = process.env.NEXT_PUBLIC_MD_URL || "";
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    transpilePackages: ["@ContextLogic/lego", "recharts"],
    compiler: {
      emotion: true,
    },
    pageExtensions: ["tsx", "ts", "jsx", "js"]
      .map((ext) =>
        phase === PHASE_DEVELOPMENT_SERVER
          ? [`dev.${ext}`, `prod.${ext}`]
          : [`prod.${ext}`]
      )
      .flat(),
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
              source: "/md/login",
              destination: `${MD_URL}/md/login`,
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

  return withBundleAnalyzer(nextConfig);
};
