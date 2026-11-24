import type { NextConfig } from "next";

import { guideUrlSlugs, serviceUrlSlugs } from "./src/data/route-slugs";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      ...Object.entries(serviceUrlSlugs).map(([oldSlug, newSlug]) => ({
        source: "/services/" + oldSlug + "/",
        destination: "/services/" + newSlug + "/",
        permanent: true,
      })),
      ...Object.entries(guideUrlSlugs).map(([oldSlug, newSlug]) => ({
        source: "/blog/" + oldSlug + "/",
        destination: "/blog/" + newSlug + "/",
        permanent: true,
      })),
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
