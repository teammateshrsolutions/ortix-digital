import { servicePath } from "@/data/route-slugs";
import type { MetadataRoute } from "next";
import { locationPath, locations, locationsPath } from "@/data/locations";
import { navigation, servicesSection } from "@/data/navigation";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { indexingEnabled, siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled || !siteOrigin) return [];
  const paths = [
    ...navigation.map(({ href }) => href).filter((href) => href !== servicesSection),
    ...services.map(({ slug }) => servicePath(slug)),
    ...blogPosts.map(({ path }) => path),
    "/audit/",
    locationsPath,
    ...locations.map(({ slug }) => locationPath(slug)),
    "/privacy-policy/",
    "/terms-and-conditions/",
  ];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
