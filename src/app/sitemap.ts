import type { MetadataRoute } from "next";
import { navigation, servicesSection } from "@/data/navigation";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { indexingEnabled, siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled || !siteOrigin) return [];
  const paths = [
    ...navigation.map(({ href }) => href).filter((href) => href !== servicesSection),
    ...services.map(({ slug }) => `/services/${slug}/`),
    ...blogPosts.map(({ path }) => path),
    "/privacy-policy/",
    "/terms-and-conditions/",
  ];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
