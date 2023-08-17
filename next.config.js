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
    experimental: {
      swcPlugins: [
        "@graphql-codegen/client-preset-swc-plugin",
        { artifactDirectory: "./src/schema", gqlTagName: "graphql" },
      ],
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
            {
              source: "/merchant-file/:id",
              destination: `${MD_URL}/merchant-file/:id`,
              basePath: false,
            },
            {
              source: "/product-geoblock/create",
              has: [
                {
                  type: "query",
                  key: "notice_id",
                  value: "(?<notice_id>[a-f\\d]{24})",
                },
                {
                  type: "query",
                  key: "product_ids",
                  value: "(?<product_ids>([a-f\\d]{24},*)+)",
                },
              ],
              destination: `${MD_URL}/product-geoblock/create?notice_id=:notice_id&product_ids=:product_ids`,
              basePath: false,
            },
            {
              source: "/tagging/counterfeit-tag/manual",
              has: [
                {
                  type: "query",
                  key: "notice_id",
                  value: "(?<notice_id>[a-f\\d]{24})",
                },
                {
                  type: "query",
                  key: "product_ids",
                  value: "(?<product_ids>([a-f\\d]{24},*)+)",
                },
              ],
              destination: `${MD_URL}/tagging/counterfeit-tag/manual?notice_id=:notice_id&product_ids=:product_ids`,
              basePath: false,
            },
            {
              source: "/tagging/ip-violation-tag/manual",
              has: [
                {
                  type: "query",
                  key: "notice_id",
                  value: "(?<notice_id>[a-f\\d]{24})",
                },
                {
                  type: "query",
                  key: "product_ids",
                  value: "(?<product_ids>([a-f\\d]{24},*)+)",
                },
              ],
              destination: `${MD_URL}/tagging/ip-violation-tag/manual?notice_id=:notice_id&product_ids=:product_ids`,
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
    images: {
      unoptimized: true,
    },
  };

  return withBundleAnalyzer(nextConfig);
};
