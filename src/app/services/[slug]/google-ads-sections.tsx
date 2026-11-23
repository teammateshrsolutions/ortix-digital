import Link from "next/link";
import { ChartNoAxesCombined, ChevronDown, ClipboardCheck, MousePointer2, Search, Target } from "lucide-react";
import { serviceGuides } from "@/data/service-guides";
import { preparation } from "@/data/guides/preparation";

const guide = serviceGuides["google-ads"];
const [fit, included, budget, example] = guide.sections;
const topicIcons = [Search, Target, ChartNoAxesCombined];

const steps = [
  { title: "Plan the test", copy: "Choose a priority service, confirm where you operate, and decide what counts as a useful enquiry." },
  { title: "Set up tracking", copy: "Check that the landing page describes the offer and that a completed enquiry can be recorded correctly." },
  { title: "Launch and review", copy: "Review the searches that trigger your ads and check that visitors reach the right page." },
  { title: "Refine the campaign", copy: "Use budget, conversion data and feedback from your sales team to decide what to test next." },
];

export function GoogleAdsSections() {
  return <>
    <section className="section paper" id="google-ads-deliverables">
      <div className="shell">
        <div className="service-heading"><h2>What Google Ads Management Includes</h2><p className="copy">{included.copy}</p></div>
        <div className="service-card-grid">{included.topics?.map(([title, copy], index) => {
          const Icon = topicIcons[index];
          return <article className="service-detail-card" key={title}>
            <Icon size={30} aria-hidden="true" /><h3>{title}</h3><p className="copy">{copy}</p>
          </article>;
        })}</div>
      </div>
    </section>
    <section className="section"><div className="shell service-split">
      <div><h2>When Google Search Ads Make Sense</h2><p className="copy mt-5">{fit.copy}</p></div>
      <div className="service-fit-panel">
        <h3>Before you spend on traffic</h3>
        <ul>
          <li><Search size={18} aria-hidden="true" /><span>Confirm that people search for the service you want to promote.</span></li>
          <li><MousePointer2 size={18} aria-hidden="true" /><span>Give them a relevant page where they can compare the offer and get in touch.</span></li>
          <li><ClipboardCheck size={18} aria-hidden="true" /><span>Agree who will respond and how your team will assess each enquiry.</span></li>
        </ul>
        <p className="copy">If your priority is to improve organic visibility over time, explore <Link className="underline" href="/services/seo/">SEO services</Link>.</p>
      </div>
    </div></section>
    <section className="section dark service-process"><div className="shell">
      <div className="service-heading"><h2>How We Run a Search Campaign</h2></div>
      <ol className="service-process-grid">{steps.map(({ title, copy }, index) => <li key={title}>
        <span className="service-step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p className="copy">{copy}</p>
      </li>)}</ol>
    </div></section>
    <section className="section paper"><div className="shell">
      <div className="service-heading"><h2>Budget and Lead Quality</h2><p className="copy">{budget.copy}</p></div>
      <div className="service-split">
        {budget.topics?.map(([title, copy]) => <article className="service-detail-card" key={title}><h3>{title}</h3><p className="copy">{copy}</p></article>)}
        <article className="service-detail-card"><h3>Check the landing page first</h3><p className="copy">{preparation["google-ads"].topics?.[1][1]}</p></article>
      </div>
      <div className="service-example"><Target size={26} aria-hidden="true" /><div><h3>{example.title}</h3><p className="copy">{example.copy}</p></div></div>
    </div></section>
    <section className="section" id="google-ads-faq"><div className="shell service-split">
      <div><h2>Google Ads FAQs</h2><p className="copy mt-5">Questions to consider before committing to a campaign.</p></div>
      <div className="faq-list">{guide.faq.map(([question, answer]) => <details key={question} name="google-ads-faq">
        <summary><h3>{question}<ChevronDown size={18} aria-hidden="true" /></h3></summary>
        <p className="copy">{answer}</p>
      </details>)}</div>
    </div></section>
    <section className="section cta dark service-consultation"><div className="shell cta-row">
      <div><h2>Discuss Your Google Ads Goals</h2><p className="copy">{preparation["google-ads"].copy}</p></div>
      <Link className="button" href="/contact/">Get Free Consultation</Link>
    </div></section>
  </>;
}
