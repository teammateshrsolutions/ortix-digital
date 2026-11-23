import type { Metadata } from "next";

export const homeTitle = "Digital Marketing Agency in Bangalore | ORTIX DIGITAL";
export const homeDescription = "Ortix Digital helps Bengaluru businesses get found through SEO, Google Ads and Meta Ads, and turn website visits into enquiries. Book a free consultation.";

function confirmedOrigin() {
  try {
    const url = new URL(process.env.SITE_URL ?? "");
    if (url.protocol === "https:" && url.pathname === "/" && !url.username && !url.password && !url.search && !url.hash) return url.origin;
  } catch {
    return undefined;
  }
}

export const siteOrigin = confirmedOrigin();
export const indexingEnabled = Boolean(siteOrigin) && process.env.SITE_INDEXABLE !== "false";

export function siteUrl(path: string) {
  return siteOrigin ? new URL(path, siteOrigin).href : undefined;
}

export const organizationId = siteUrl("/#organization");

export function pageMetadata(title: string, description: string, path: string, draft = false): Metadata {
  const canonical = siteUrl(path);
  const image = siteUrl("/brand/social-card.jpg");
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: !indexingEnabled || draft ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", siteName: "ORTIX DIGITAL", locale: "en_IN", title, description, url: canonical, images: image ? [{ url: image, width: 1200, height: 630, alt: "ORTIX DIGITAL" }] : undefined },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, images: image ? [image] : undefined },
  };
}
