import { guideUrlSlugs } from "./route-slugs";
import type { ServiceSlug } from "./service-guides";
import { posts as seoPosts } from "./posts/seo";
import { posts as googleAdsPosts } from "./posts/google-ads";
import { posts as metaAdsPosts } from "./posts/meta-ads";
import { posts as socialMediaPosts } from "./posts/social-media";
import { posts as websitePosts } from "./posts/website";
import { posts as brandingPosts } from "./posts/branding";

export const seoAuditPost = {
  path: "/blog/seo-audit-checklist-bangalore/",
  title: "SEO Audit Checklist for Bangalore Businesses",
  cover: "/brand/blog-seo-audit.webp",
  description: "Run a practical SEO audit for your Bangalore business. Check search visibility, service pages, local listings and enquiry tracking before deciding what to fix.",
  service: "seo",
} as const;

const byService = {
  seo: seoPosts,
  "google-ads": googleAdsPosts,
  "meta-ads": metaAdsPosts,
  "social-media-marketing": socialMediaPosts,
  "website-development": websitePosts,
  "branding-design": brandingPosts,
};

type Reference = { href: string; label: string };
const references: Partial<Record<string, Reference>> = {
  "search-console-priority-pages": { href: "https://support.google.com/webmasters/answer/7576553", label: "Google Search Console Performance report" },
  "local-seo-service-area-pages": { href: "https://support.google.com/business/answer/3038177", label: "Google Business Profile guidelines" },
  "negative-keywords-search-campaigns": { href: "https://support.google.com/google-ads/answer/2453972", label: "Google Ads guide to negative keywords" },
  "seo-friendly-website-launch": { href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", label: "Google SEO Starter Guide" },
};

export const guidePosts = (Object.keys(byService) as ServiceSlug[]).flatMap(service => (
  byService[service].filter(({ slug }) => Object.hasOwn(guideUrlSlugs, slug)).map(post => ({
    ...post,
    service,
    urlSlug: guideUrlSlugs[post.slug],
    path: `/blog/${guideUrlSlugs[post.slug]}/`,
    cover: `/brand/signal/${service}.webp`,
    reference: references[post.slug],
  }))
));

export const blogPosts = [seoAuditPost, ...guidePosts];

export function getBlogPost(slug: string) {
  return guidePosts.find(post => post.urlSlug === slug);
}
