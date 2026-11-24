import { servicePath } from "@/data/route-slugs";
﻿export const locationsPath = "/locations/";

export const yelahanka = {
  slug: "yelahanka",
  name: "Yelahanka",
  description: "Improve local visibility and make it easier to enquire around Yelahanka New Town.",
};

export const serviceAreas = [
  {
    slug: "hebbal", name: "Hebbal",
    description: "Help customers understand where you offer appointments and site visits before they request a quote.",
    heading: "Turn service-area searches into bookable visits",
    advice: "For businesses that travel to customers, explain your coverage and visit windows on the service page. Ask for a pin code and preferred appointment window before confirming a quote. Compare in-area and out-of-area enquiries before widening your ad coverage.",
    service: { href: servicePath("google-ads"), label: "Explore Google Ads management" },
  },
  {
    slug: "whitefield", name: "Whitefield",
    description: "Give workplace buyers and residential customers a clear path to request the right service.",
    heading: "Separate commercial and residential enquiries",
    advice: "If you serve both types of customer, explain which projects you handle, who can approve a visit and what information is needed for a quote. Give campaigns dedicated destinations when the offer or buying process differs, and review enquiry quality for each audience.",
    service: { href: servicePath("website-development"), label: "Explore website development" },
  },
  {
    slug: "indiranagar", name: "Indiranagar",
    description: "Improve local discovery and make opening hours, directions and reservations easy to find.",
    heading: "Make visits and bookings straightforward",
    advice: "For businesses that welcome walk-ins, compare the public hours and directions on your website and eligible listings. Show whether an appointment or reservation is required. Test the journey from a phone search to a call, booking or directions.",
    service: { href: servicePath("seo"), label: "Explore SEO services" },
  },
  {
    slug: "hsr-layout", name: "HSR Layout",
    description: "Help nearby customers check service coverage and give your team better information about incoming leads.",
    heading: "Capture the location information your team needs",
    advice: "If availability differs by sector or pin code, ask for it early in the enquiry. Record which requests are within your coverage area before changing campaign targeting. Explain local availability on the page so customers can check it before contacting you.",
    service: { href: servicePath("meta-ads"), label: "Explore Meta Ads management" },
  },
  {
    slug: "electronic-city", name: "Electronic City",
    description: "Match your search campaigns and enquiry pages to the parts of Electronic City you actually serve.",
    heading: "Explain availability by phase when it matters",
    advice: "If your availability differs between Phase 1 and Phase 2, show the difference beside the relevant service and ask customers which phase they are in. Compare accepted jobs with the areas targeted by ads before expanding a campaign.",
    service: { href: servicePath("google-ads"), label: "Explore Google Ads management" },
  },
  {
    slug: "koramangala", name: "Koramangala",
    description: "Make it easy to find the right branch, booking option or pickup point.",
    heading: "Route enquiries to the right place",
    advice: "If different locations handle visits, appointments or pickup, explain what each one offers and give it the right contact action. Test direction links on a phone, and use campaign destinations that match the branch featured in the ad.",
    service: { href: servicePath("seo"), label: "Explore SEO services" },
  },
  {
    slug: "manyata-tech-park", name: "Manyata Tech Park",
    description: "Help workplace customers understand your services and request a useful quote for on-site work.",
    heading: "Ask for the information needed for a campus visit",
    advice: "For on-site work with tenants, ask for the requesting company, building and access requirements before scheduling. Make it clear who should submit a request and what to include, and give company buyers a direct route to a project enquiry.",
    service: { href: servicePath("website-development"), label: "Explore website development" },
  },
];

export const locations = [yelahanka, ...serviceAreas];

export function locationPath(slug: string) {
  return locationsPath + slug + "/";
}
