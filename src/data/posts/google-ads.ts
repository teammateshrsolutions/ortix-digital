import type { PostContent } from "./types";

export const posts = [
  {
    "slug": "google-ads-budget-first-test",
    "title": "How to Set a Budget for Your First Google Ads Test",
    "description": "Plan a budget for your first Google Ads Search campaign. Choose one offer, decide which enquiries to track and set a date to review your results.",
    "sections": [
      {
        "heading": "Pick one decision the campaign can answer",
        "copy": "Start with a service your team wants to sell and an area it can support. A test might ask whether people searching for commercial maintenance are willing to request a site visit. Spreading the same budget over several unrelated offers makes it harder to tell which one produced a useful response."
      },
      {
        "heading": "Separate media spend from delivery costs",
        "copy": "List the proposed ad spend, campaign management, tracking and any landing page work separately. Discuss what a relevant enquiry is worth, how many you can handle and what you will record during the test. If the landing page or follow-up process is unfinished, include that work in the plan before increasing spend."
      },
      {
        "heading": "Set review rules before launch",
        "copy": "Define what would lead you to continue, refine or pause. Check whether ads appear for the intended searches and whether enquiries can be followed up. When data is limited, treat early observations as input for the next test. Use actual lead quality when deciding whether a higher budget is warranted."
      },
      {
        "heading": "Decide how long the budget should last",
        "copy": "Work backwards from the first useful review. Keep enough flexibility to respond if a search theme attracts the wrong enquiries, and avoid committing the entire budget before tracking has been checked. If your team cannot respond during a holiday or busy period, account for that in the schedule. Record what you spent, what customers asked for, and which enquiries reached a conversation. Keep the full ad schedule in your test notes."
      }
    ]
  },
  {
    "slug": "negative-keywords-search-campaigns",
    "title": "How to Find Negative Keywords for Search Campaigns",
    "description": "Use the search terms report to identify irrelevant queries while keeping valuable searches eligible.",
    "sections": [
      {
        "heading": "Start with the search terms report",
        "copy": "Review the searches that triggered ads where Google makes terms available. Look for patterns such as jobs, training, or a different service. An office renovation provider might repeatedly see residential repair queries. Compare the term with the actual offer before assuming that one word is always irrelevant."
      },
      {
        "heading": "Decide how broadly to exclude",
        "copy": "A specific term can sometimes be excluded narrowly, while a recurring unrelated phrase may need broader treatment. Check the campaign or ad group to which the exclusion applies. A term that wastes spend in one service can be useful in another. Read several genuine target queries before applying a shared exclusion list."
      },
      {
        "heading": "Check what happens after the change",
        "copy": "Record the exclusion and review search terms again. Watch whether irrelevant themes decline and whether useful search patterns remain present. Avoid broad exclusions based on one unusual click. Use the report to identify new relevant themes as well as work you need to exclude."
      }
    ]
  },
  {
    "slug": "google-ads-conversion-tracking-enquiries",
    "title": "Google Ads Conversion Tracking for Enquiry Forms",
    "description": "Define a conversion that represents an enquiry your business actually receives and test it before launch.",
    "sections": [
      {
        "heading": "Measure completion instead of intention",
        "copy": "A click on the submit button does not prove that a form passed validation or reached your team. Measure the completed submission when your setup supports it. For calls or messages, document whether the recorded action indicates an attempted contact or a conversation your team can review."
      },
      {
        "heading": "Run a test from the landing page",
        "copy": "Use a phone and a desktop to submit a test enquiry. Try an invalid value first to check that the error appears and no completion is recorded. Then submit a valid test and confirm it arrives in its intended destination. Compare what you observed with the tracking setup before you rely on it for budget decisions."
      },
      {
        "heading": "Review lead quality separately",
        "copy": "A valid form can still be irrelevant. Agree how staff will mark leads that meet the service, location and timing requirements. When reviewing campaign activity, compare form totals with that feedback. Changes to conversion definitions should be dated so comparisons between periods remain meaningful."
      }
    ]
  },
  {
    "slug": "google-ads-landing-page-checklist",
    "title": "A Landing Page Checklist for Google Search Ads",
    "description": "Make the page answer the search, explain the service and let prospects enquire comfortably from a phone.",
    "sections": [
      {
        "heading": "Carry the promise from ad to page",
        "copy": "Use a heading that clearly names the service advertised. Explain the location, what is included and which requests are a good fit. If the ad offers a consultation for office renovation, the visitor should see that offer quickly without navigating through several unrelated services."
      },
      {
        "heading": "Make the next step easy to complete",
        "copy": "Put one clear enquiry option near the start and repeat it where it is useful. Keep the form focused on what the business needs to respond. On mobile, verify that fields and errors are easy to read. A relevant qualifying question can be worth including when it helps route enquiries correctly."
      },
      {
        "heading": "Review the page with campaign data",
        "copy": "Compare the actual searches with the landing page content. If people are searching for a related service the page barely mentions, decide whether to adjust targeting or improve the destination. When appropriate searches lead to clicks but few useful enquiries, test one specific page change and record what it was meant to improve."
      }
    ]
  },
  {
    "slug": "google-ads-lead-quality-review",
    "title": "How to Review Lead Quality in Google Ads",
    "description": "Compare what Google Ads records with what happens after the enquiry reaches your team.",
    "sections": [
      {
        "heading": "Agree on what a useful enquiry looks like",
        "copy": "Before a review, write down the criteria the business actually uses: service fit, location, timing or ability to discuss the project. Keep the criteria short enough that staff can apply them consistently. Use simple outcomes such as relevant, outside scope, duplicate or awaiting follow-up."
      },
      {
        "heading": "Compare campaign activity with response outcomes",
        "copy": "Review the campaign, landing page and search terms alongside how enquiries were classified. A campaign can produce many forms while attracting the wrong project type. If relevant requests are difficult to reach, also examine how and when the business responds. The campaign dashboard alone cannot explain every difference."
      },
      {
        "heading": "Choose a change that fits the evidence",
        "copy": "If the wrong service dominates, tighten the keywords or clarify the offer. If the form lacks a useful detail, add the smallest qualifying question that resolves it. If leads fit the business but follow-up is delayed, improve that process before changing bids based on incomplete evidence."
      }
    ]
  }
] satisfies PostContent[];
