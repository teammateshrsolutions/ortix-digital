import { servicePath } from "@/data/route-slugs";
import Link from "next/link";
import { ChartNoAxesCombined, ChevronDown, ClipboardCheck, FileSearch, MapPin, MousePointer2, Search, SlidersHorizontal, Target } from "lucide-react";
import { searchGuides } from "@/data/guides/search";

const [fit, included, , example] = searchGuides.seo.sections;

const topicIcons = [ClipboardCheck, FileSearch, MapPin];

const situations = [
  "Customers find competitors when searching for services you offer.",
  "Your homepage gets visits, but priority service pages rarely appear in search.",
  "You have redesigned the site and want to understand a change in search traffic.",
];

const process = [
  { title: "Audit", copy: "Review your website, priority pages and available search data. Share your services, target areas and recent changes so we can put each finding in context." },
  { title: "Prioritise", copy: "Identify which fixes will make it easier to find or use the pages that matter. Agree on the work, who owns it, and what we will check after implementation." },
  { title: "Improve", copy: "Update the agreed pages, internal links and technical settings. Check the affected URLs after publishing and record when changes went live." },
  { title: "Measure", copy: "Review visibility, relevant visits and enquiry activity as data becomes available. Agree on the next change based on what the evidence shows." },
];

const measures = [
  { title: "Search Visibility", Icon: Search, copy: "Search Console impressions show whether priority pages appear for relevant searches. We look at the queries and pages behind the numbers." },
  { title: "Relevant Visits", Icon: MousePointer2, copy: "Clicks show whether searchers choose your page. We check whether those searches reflect the services you want to sell." },
  { title: "Enquiries", Icon: ChartNoAxesCombined, copy: "When tracking is available, we review enquiries alongside feedback from your team on location, service fit and the next conversation." },
];

export function SeoSections() {
  return <>
    <section className="section paper" id="seo-deliverables">
      <div className="shell">
        <div className="service-heading">
          <h2>What Our SEO Services Include</h2>
          <p className="copy">{included.copy}</p>
        </div>
        <div className="service-card-grid">
          {included.topics.map(([title, copy], index) => {
            const Icon = topicIcons[index];
            return <article className="service-detail-card" key={title}>
              <Icon aria-hidden="true" size={30} />
              <h3>{title}</h3>
              <p className="copy">{copy}</p>
            </article>;
          })}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="shell service-split">
        <div><h2>Is SEO Right for Your Business?</h2><p className="copy mt-5">{fit.copy}</p></div>
        <div className="service-fit-panel">
          <h3>Signs an SEO review could help</h3>
          <ul>{situations.map(situation => <li key={situation}><Target size={18} aria-hidden="true" /><span>{situation}</span></li>)}</ul>
          <p className="copy">If you need to reach active searchers sooner, <Link className="underline" href={servicePath("google-ads")}>Google Ads</Link> can run alongside SEO when your landing page and budget are ready.</p>
        </div>
      </div>
    </section>
    <section className="section dark service-process">
      <div className="shell">
        <div className="service-heading"><h2>How We Work</h2><p className="copy">From checking your site to deciding what to improve next.</p></div>
        <ol className="service-process-grid">
          {process.map(({ title, copy }, index) => <li key={title}>
            <span className="service-step-number" aria-hidden="true">0{index + 1}</span>
            <h3>{title}</h3><p className="copy">{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>
    <section className="section paper">
      <div className="shell">
        <div className="service-heading"><h2>What We Measure</h2><p className="copy">We start with a baseline for priority pages and compare similar periods when enough data is available.</p></div>
        <div className="service-card-grid">{measures.map(({ title, copy, Icon }) => <article className="service-detail-card" key={title}>
          <Icon aria-hidden="true" size={28} /><h3>{title}</h3><p className="copy">{copy}</p>
        </article>)}</div>
        <div className="service-example">
          <SlidersHorizontal size={26} aria-hidden="true" />
          <div><h3>{example.title}</h3><p className="copy">{example.copy}</p>
            <p className="copy">If the page starts getting relevant impressions but few clicks, we would check whether its title matches the search. If relevant visitors still leave without enquiring, we would review the page information and enquiry flow.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="seo-faq">
      <div className="shell service-split">
        <div><h2>SEO FAQs</h2><p className="copy mt-5">Questions to consider before starting an SEO project.</p></div>
        <div className="faq-list">
          {searchGuides.seo.faq.map(([question, answer]) => <details key={question} name="seo-faq">
            <summary><h3>{question}<ChevronDown size={18} aria-hidden="true" /></h3></summary>
            <p className="copy">{answer}</p>
          </details>)}
        </div>
      </div>
    </section>
    <section className="section cta dark service-consultation">
      <div className="shell cta-row">
        <div>
          <h2>Discuss Your SEO Goals</h2>
          <p className="copy">Bring your website, the services you want customers to find, and the areas you serve. If you recently redesigned the site or noticed a change in enquiries, tell us when it happened. We can use those details to discuss what to check first.</p>
        </div>
        <Link className="button" href="/contact/">Get Free Consultation</Link>
      </div>
    </section>
  </>;
}
