import Link from "next/link";
import { ChartNoAxesCombined, ChevronDown, ClipboardList, FileCheck, FileCode, LayoutTemplate, MapPin, MousePointer2, Palette, PencilLine, ScanSearch, Target } from "lucide-react";
import { serviceGuides } from "@/data/service-guides";
import { preparation } from "@/data/guides/preparation";

const content = {
  "meta-ads": {
    icons: [Target, LayoutTemplate, MousePointer2],
    processTitle: "How We Run a Meta Ads Campaign",
    steps: [
      ["Define the offer", "Choose a priority service, the audience it suits and the action you want to measure."],
      ["Prepare the creative", "Build a small set of ad variations and choose a form, message or landing page that supports follow-up."],
      ["Launch and check delivery", "Review placements, the mobile enquiry flow and whether the platform records the intended action."],
      ["Refine with lead feedback", "Review who responded and which enquiries fit your service before changing creative or spend."],
    ],
    cta: "Discuss Your Meta Ads Goals",
  },
  "social-media-marketing": {
    icons: [ScanSearch, ClipboardList, PencilLine],
    processTitle: "How We Plan and Publish Social Content",
    steps: [
      ["Review your channels", "Check where customers already interact with you and what they still need to know about your services."],
      ["Build the calendar", "Choose topics, formats and a publishing schedule your team can sustain."],
      ["Create and approve", "Develop the agreed content and review accuracy, permissions and links before publishing."],
      ["Review the response", "Look at useful comments, saves and visits to decide what the next calendar should cover."],
    ],
    cta: "Plan Your Social Media Content",
  },
  "website-development": {
    icons: [FileCode, ScanSearch, FileCheck],
    processTitle: "How We Build and Launch a Website",
    steps: [
      ["Map the site", "Agree on the services, pages and visitor actions the new site needs to support."],
      ["Design the pages", "Review the structure and visual direction on desktop and mobile before development."],
      ["Build and test", "Develop the agreed pages and check navigation, enquiry handling and search settings."],
      ["Launch and hand over", "Verify the live URLs and form delivery, and agree who will own updates after launch."],
    ],
    cta: "Discuss Your Website Project",
  },
  "branding-design": {
    icons: [Palette, LayoutTemplate, PencilLine],
    processTitle: "How We Develop a Visual Identity",
    steps: [
      ["Understand the brief", "Review current assets, who needs to recognise your business, and where the design will be used."],
      ["Explore a direction", "Develop visual options and show how each works with your real content and formats."],
      ["Refine in context", "Test the agreed direction on relevant pages, ads or social posts before finalising."],
      ["Prepare the handoff", "Provide the agreed files, templates and guidance so your team can use the design consistently."],
    ],
    cta: "Discuss Your Branding Project",
  },
} as const;

export type GuidedService = keyof typeof content;

export function GuidedServiceSections({ slug, title }: { slug: GuidedService; title: string }) {
  const guide = serviceGuides[slug];
  const [fit, included, review, example] = guide.sections;
  const prep = preparation[slug];
  const { icons, processTitle, steps, cta } = content[slug];

  return <>
    <section className="section paper" id={`${slug}-deliverables`}>
      <div className="shell">
        <div className="service-heading"><h2>{included.title}</h2><p className="copy">{included.copy}</p></div>
        <div className="service-card-grid">
          {included.topics?.map(([heading, copy], index) => {
            const Icon = icons[index];
            return <article className="service-detail-card" key={heading}>
              <Icon size={30} aria-hidden="true" /><h3>{heading}</h3><p className="copy">{copy}</p>
            </article>;
          })}
        </div>
      </div>
    </section>
    <section className="section"><div className="shell service-split">
      <div><h2>{fit.title}</h2><p className="copy mt-5">{fit.copy}</p></div>
      <div className="service-fit-panel">
        <ClipboardList size={26} aria-hidden="true" />
        <h3 className="mt-4">{prep.title}</h3>
        <p className="copy mt-3">{prep.copy}</p>
      </div>
    </div></section>
    <section className="section dark service-process"><div className="shell">
      <div className="service-heading"><h2>{processTitle}</h2></div>
      <ol className="service-process-grid">{steps.map(([heading, copy], index) => <li key={heading}>
        <span className="service-step-number" aria-hidden="true">0{index + 1}</span><h3>{heading}</h3><p className="copy">{copy}</p>
      </li>)}</ol>
    </div></section>
    <section className="section paper"><div className="shell">
      <div className="service-heading"><h2>{review.title}</h2><p className="copy">{review.copy}</p></div>
      <div className="service-split">
        {review.topics?.map(([heading, copy]) => <article className="service-detail-card" key={heading}>
          <ChartNoAxesCombined size={27} aria-hidden="true" /><h3>{heading}</h3><p className="copy">{copy}</p>
        </article>)}
        <article className="service-detail-card"><MapPin size={27} aria-hidden="true" /><h3>{example.title}</h3><p className="copy">{example.copy}</p></article>
      </div>
    </div></section>
    <section className="section"><div className="shell">
      <div className="service-heading"><h2>What to Review Before Work Begins</h2></div>
      <div className="related-services-grid">{prep.topics?.map(([heading, copy]) => <article className="service-detail-card" key={heading}>
        <h3>{heading}</h3><p className="copy">{copy}</p>
      </article>)}</div>
    </div></section>
    <section className="section paper" id={`${slug}-faq`}><div className="shell service-split">
      <div><h2>{title} FAQs</h2><p className="copy mt-5">Questions to ask as you plan the work.</p></div>
      <div className="faq-list">{guide.faq.map(([question, answer]) => <details key={question} name={`${slug}-faq`}>
        <summary><h3>{question}<ChevronDown size={18} aria-hidden="true" /></h3></summary>
        <p className="copy">{answer}</p>
      </details>)}</div>
    </div></section>
    <section className="section cta dark service-consultation"><div className="shell cta-row">
      <div><h2>{cta}</h2><p className="copy">Share your goals, current materials and where you need help. We can talk through a practical starting point.</p></div>
      <Link className="button" href="/contact/">Get Free Consultation</Link>
    </div></section>
  </>;
}
