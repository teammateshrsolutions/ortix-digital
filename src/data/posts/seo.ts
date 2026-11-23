import type { PostContent } from "./types";

export const posts = [
  {
    "slug": "seo-or-google-ads",
    "title": "SEO or Google Ads: Which Should You Start With?",
    "description": "Choose a starting channel based on how soon you need enquiries, what customers search for, and how well your website supports them.",
    "sections": [
      {
        "heading": "Start with the buying timeline",
        "copy": "If you can wait while organic visibility develops, SEO gives you time to improve pages that answer important searches. If you need to test existing demand sooner, a focused Search campaign can help you learn which queries and offers produce useful responses. Both need a service you can explain simply and a page that makes it easy to get in touch."
      },
      {
        "heading": "Check the destination first",
        "copy": "Open the destination on a phone and ask if someone can confirm the service, location and next step. If it is hard to complete an enquiry, fix that path before buying traffic. For example, a commercial maintenance business might create a clear office-maintenance page before advertising it or investing in more SEO content."
      },
      {
        "heading": "Use the first review to choose the next step",
        "copy": "For SEO, review relevant search impressions and clicks on the pages you improved. For ads, check search terms and compare enquiries with sales feedback. Avoid judging the two channels on identical timelines. Write down the question you want answered and the evidence that would justify continuing."
      }
    ]
  },
  {
    "slug": "local-seo-service-area-pages",
    "title": "How to Build a Useful Local SEO Service Area Page",
    "description": "Use real service boundaries, visit details and location-specific answers to make a service-area page useful to customers.",
    "sections": [
      {
        "heading": "Give the location a reason to exist",
        "copy": "Start with an area where you genuinely provide the service. Think about what changes for customers there: how far you travel, whether they need to arrange an appointment or what information they need for a quote. A page earns its place when these details matter to someone comparing providers."
      },
      {
        "heading": "Choose an honest page structure",
        "copy": "A single strong service page that explains where you work may be enough. Create a separate location page when you can offer meaningful information specific to that place. Link it from relevant pages, and describe the location clearly in the title and main heading. Keep contact details consistent with your actual business setup."
      },
      {
        "heading": "Review enquiries as well as visibility",
        "copy": "Check whether visitors are finding the page for queries that match the offered service. Ask the person who handles enquiries whether the location requests are a fit. If the page attracts people who cannot be served, make the boundary clearer rather than adding more location names."
      }
    ]
  },
  {
    "slug": "search-console-priority-pages",
    "title": "How to Use Search Console to Prioritise SEO Fixes",
    "description": "Use impressions, clicks and URL Inspection to decide which service page needs your attention first.",
    "sections": [
      {
        "heading": "Start with the page you care about",
        "copy": "Open Search Console and compare similar date ranges in the Performance report. Filter to a priority service page, then look at the queries associated with it. Check whether they describe the offer and area you serve before interpreting an increase or decrease in clicks."
      },
      {
        "heading": "Distinguish visibility from selection",
        "copy": "A page that appears for useful searches but rarely gets clicks may warrant a clearer title or a better answer to the search intent. A page that receives relevant clicks but few enquiries may need a clearer offer or an easier form. If the page is missing from search altogether, use URL Inspection to investigate before making editorial changes."
      },
      {
        "heading": "Keep a record of the fix",
        "copy": "Write down the page, what changed, when it went live and what you expect to observe. Compare a suitable later period and consider seasonality or changes in customer demand. A simple log makes it easier to separate a real improvement from ordinary variation."
      }
    ]
  },
  {
    "slug": "seo-checklist-before-website-redesign",
    "title": "SEO Checklist Before a Website Redesign",
    "description": "Protect useful service URLs, map genuine redirects and verify indexing settings before you replace a website.",
    "sections": [
      {
        "heading": "Inventory the URLs with a purpose",
        "copy": "List pages with search visits, important links, active campaigns or a clear role for customers. For each, decide what should stay, move or be removed. Preserve the existing address where it still fits the page. If a page genuinely moves, identify the closest useful replacement before development starts."
      },
      {
        "heading": "Make launch checks part of the handover",
        "copy": "Create a redirect map and test old addresses against the new site. Check that canonical URLs and the sitemap use the public domain. Confirm that development indexing restrictions do not carry onto pages intended for search. Use a phone to test a priority enquiry path from the address customers already know."
      },
      {
        "heading": "Monitor the first weeks after launch",
        "copy": "Open migrated addresses from old campaign and directory links, and inspect priority pages in Search Console. Compare visibility and enquiries with your pre-launch baseline. Investigate missing pages or unexpected redirect behaviour promptly, and record changes so later comparisons account for what happened."
      }
    ]
  }
] satisfies PostContent[];
