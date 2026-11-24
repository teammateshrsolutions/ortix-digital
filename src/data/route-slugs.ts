export const serviceUrlSlugs = {
  seo: "seo-services-bangalore",
  "google-ads": "google-ads-management-bangalore",
  "meta-ads": "meta-ads-management-bangalore",
  "social-media-marketing": "social-media-marketing-bangalore",
  "website-development": "website-development-bangalore",
  "branding-design": "branding-design-services-bangalore",
} as const;

export function servicePath(slug: keyof typeof serviceUrlSlugs) {
  return `/services/${serviceUrlSlugs[slug]}/`;
}

export const guideUrlSlugs: Readonly<Record<string, string>> = {
  "google-ads-budget-first-test": "google-ads-budget-for-your-first-campaign",
  "meta-instant-forms-vs-landing-pages": "meta-ads-instant-forms-vs-landing-pages",
  "social-media-content-calendar": "social-media-content-calendar-for-businesses",
  "website-brief-for-service-business": "website-design-brief-for-service-businesses",
};
