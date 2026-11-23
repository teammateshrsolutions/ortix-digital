import type { PostContent } from "./types";

export const posts = [
  {
    "slug": "website-brief-for-service-business",
    "title": "How to Write a Website Brief for a Service Business",
    "description": "Write a website brief for a service business. Define your priority pages, enquiry goals, content needs and responsibilities before requesting a proposal.",
    "sections": [
      {
        "heading": "Describe what visitors need to do",
        "copy": "List the people the site should serve and what each needs to accomplish. A prospect may need to compare services and ask for a quote, while an existing customer may need to confirm how to contact you. Write those tasks before listing preferred design features."
      },
      {
        "heading": "List the pages and content you can supply",
        "copy": "Separate essential pages from ones that could follow after launch. Note who owns copy, photos and brand assets, and who approves them. Gather an editable logo, approved colours, typography guidance and examples of how the brand should appear on light and dark backgrounds. If the site replaces an older site, identify important URLs, forms and integrations that need to continue working."
      },
      {
        "heading": "Define what a successful launch includes",
        "copy": "Agree how you will check navigation, service pages and enquiry delivery. Identify who controls the domain and hosting, and who will make updates later. A clear written brief makes proposals easier to compare because every developer can respond to the same business requirements."
      },
      {
        "heading": "Hand over the brand assets",
        "copy": "Gather editable logos, approved brand colours, typography guidance and examples for light and dark backgrounds. Note which photos your business can use and who approves any replacements. Send those files with the brief so designers can assess real material, and keep the final versions in one place for future website updates. Include a list of required file formats if another team will reuse the approved artwork after launch."
      }
    ]
  },
  {
    "slug": "service-website-mobile-checklist",
    "title": "Mobile Website Checklist for Service Businesses",
    "description": "Check the actions prospects need to complete on a phone, from opening navigation to sending an enquiry.",
    "sections": [
      {
        "heading": "Try a normal visit with a narrow screen",
        "copy": "Open the homepage in a phone browser and find a priority service through the menu. Check whether text fits without sideways scrolling and whether links are easy to tap. A long service name or sticky navigation can cause problems that are hard to notice on a wide desktop."
      },
      {
        "heading": "Test a form without shortcuts",
        "copy": "Fill in the form with one missing required field to see if the error explains what to correct. Then send a real test and confirm it arrives. Look at labels, keyboard behaviour and the response shown on screen. If optional fields slow visitors down, consider removing ones your team rarely uses."
      },
      {
        "heading": "Review the page where people first land",
        "copy": "A visitor may enter directly from a search, an ad or a shared service link. Check those pages individually on a phone and make sure the next step works from each. Give developers the exact URL, device and steps needed to reproduce problems."
      }
    ]
  },
  {
    "slug": "website-redesign-or-targeted-update",
    "title": "Website Redesign or Targeted Update: Which Makes Sense?",
    "description": "Decide whether one page needs improvement or whether the existing website structure is limiting the business.",
    "sections": [
      {
        "heading": "Identify where visitors get stuck",
        "copy": "Follow the path from a service page to the enquiry option and note the first place where the experience breaks down. If copy is unclear or one form does not work, start with that issue. Collect examples from customers or staff rather than assuming the full site needs to change."
      },
      {
        "heading": "Check what the current site can support",
        "copy": "A redesign can make sense when layout issues recur throughout the site, when page templates cannot represent your services, or when maintenance is consistently difficult. Check whether those problems can be fixed in the existing system and compare the effort with the parts a new build would need to recreate."
      },
      {
        "heading": "Budget for preservation and testing",
        "copy": "If you rebuild, inventory important URLs and agree where each should land. Preserve useful content and test existing campaign links. If you update in place, document the change and define how you will judge it. Either scope should improve a specific visitor task."
      }
    ]
  },
  {
    "slug": "seo-friendly-website-launch",
    "title": "SEO-Friendly Website Launch Checklist",
    "description": "Check crawlable links, page metadata, redirects and form delivery before sharing a new website.",
    "sections": [
      {
        "heading": "Prepare pages and links before launch",
        "copy": "Give each priority service a dedicated page when the content warrants it. Check that pages are reachable from navigation or relevant internal links. Use descriptive titles and headings. Plan redirects for moved pages and keep the addresses of existing pages that can serve the same purpose."
      },
      {
        "heading": "Verify the settings on the public address",
        "copy": "Open the production domain and check canonicals, redirects and the sitemap. Confirm that pages intended for search are accessible and do not retain preview restrictions. Check that images and links load on the public hostname instead of referring to development URLs."
      },
      {
        "heading": "Test the enquiry and handoff",
        "copy": "Submit a test enquiry on a phone and confirm that staff can retrieve it. Document who owns the domain, hosting, site changes and enquiry handling. Review key pages after launch and give the business a way to report problems with a URL and clear steps."
      }
    ]
  },
  {
    "slug": "website-enquiry-form-design",
    "title": "How to Design a Website Enquiry Form That Works",
    "description": "Collect what your team needs to respond while keeping the form straightforward for customers.",
    "sections": [
      {
        "heading": "Start with the information required for a reply",
        "copy": "Ask the people who handle enquiries what helps them understand a request. A name, response method and short project description can be a practical start. Add a service dropdown if it routes enquiries or gives useful context. Make genuinely optional details clear."
      },
      {
        "heading": "Help visitors recover from errors",
        "copy": "Use visible labels and describe specific issues in plain language. If an email is invalid, explain what to fix. Preserve other information where possible so the visitor does not need to re-enter it. Show a success message only once the request has been accepted for delivery or storage."
      },
      {
        "heading": "Check what happens after submission",
        "copy": "Send a test and confirm who receives it and when they will respond. Check that privacy information is easy to find and that records are kept securely. If the form contributes to conversion reporting, verify that the completed submission is measured rather than just a click."
      }
    ]
  }
] satisfies PostContent[];
