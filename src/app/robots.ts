import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return indexingEnabled
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: siteUrl("/sitemap.xml") }
    : { rules: { userAgent: "*", disallow: "/" } };
}
