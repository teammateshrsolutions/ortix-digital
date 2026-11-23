import type { ReactNode } from "react";
import type { services } from "@/data/services";

type ServiceSlug = (typeof services)[number]["slug"];

const artwork: Record<ServiceSlug, ReactNode> = {
  seo: <>
    <rect x="3" y="5" width="26" height="7" rx="3.5" />
    <circle cx="7.5" cy="8.3" r="1.25" /><path d="m8.4 9.2 1 1M13 8.5h11" />
    <rect x="4" y="16" width="4" height="4" rx="1" /><path d="M12 16h14M12 20h9M4 25h15" />
  </>,
  "google-ads": <>
    <rect x="3" y="5" width="26" height="19" rx="3" />
    <path d="M3 10h26M7 20l2.5-5 2.5 5m-4-2h3m4-3h1.4a2.5 2.5 0 0 1 0 5H15zm7 1h3m-3 4h3" />
    <path d="m21 22 2 7 2-3 3-1z" fill="#280009" />
  </>,
  "meta-ads": <>
    <rect x="8" y="3" width="16" height="26" rx="3" />
    <path d="M14 7h4M15 25h2M16 16c-2-3.5-3.6-4.8-5.2-3.1-1.5 1.7-.5 6.1 1.4 6.1 1.5 0 2.5-1.2 3.8-3 2-3.5 3.6-4.8 5.2-3.1 1.5 1.7.5 6.1-1.4 6.1-1.5 0-2.5-1.2-3.8-3z" />
  </>,
  "social-media-marketing": <>
    <rect x="3" y="4" width="21" height="18" rx="3" />
    <path d="m11 9 6 4-6 4z" />
    <path d="M19 18h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3l-4 3v-3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z" fill="#280009" />
    <path d="M20 22.5h5" />
  </>,
  "website-development": <>
    <rect x="3" y="5" width="26" height="22" rx="3" />
    <path d="M3 11h26M7 8h.1m3.9 0h.1M12 16l-4 3 4 3m8-6 4 3-4 3m-3-7-2 8" />
  </>,
  "branding-design": <>
    <path d="m7 22 9-17a2 2 0 0 1 2.7-.8l4.3 2.2a2 2 0 0 1 .8 2.7L16 24" />
    <path d="m19 16 6-3a2 2 0 0 1 2.7.9l1.4 2.7a2 2 0 0 1-.9 2.7L19 24M14 9l7 4" />
    <rect x="4" y="22" width="24" height="6" rx="3" /><path d="M8 25h.1M13 22v6m6-6v6" />
  </>,
};

export function SignalServiceIcon({ service }: { service: ServiceSlug }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {artwork[service]}
    </svg>
  );
}
