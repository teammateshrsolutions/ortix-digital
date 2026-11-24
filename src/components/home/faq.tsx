import { ChevronDown } from "lucide-react";
import Link from "next/link";

const questions = [
  ["Should I start with SEO or Google Ads?", "SEO is useful when you want to improve organic visibility over time. Google Ads can reach people searching now if you have a clear offer, a suitable landing page, and a budget to test. The starting point depends on your timeline and what your website is ready to support."],
  ["How do you decide on an ad budget?", "Start with your service area, goals, and how much a qualified enquiry is worth to your business. Use the initial campaign data and your feedback on lead quality to decide whether to adjust the budget."],
  ["What digital marketing services does ORTIX DIGITAL offer?", "We offer SEO, Google Ads, Meta Ads, social media marketing, website development, and branding and design."],
  ["Does ORTIX DIGITAL serve businesses in Bengaluru?", "Yes. We work with businesses in Bengaluru and across Karnataka."],
  ["How long does SEO take to show results?", "Meaningful changes often take several months. Timing depends on the condition of your site, competition, and how quickly improvements can be implemented."],
  ["Can you develop an SEO-friendly website?", "Yes. We design responsive websites with clear navigation, crawlable pages, descriptive metadata, and performance in mind."],
  ["Do you manage Google and Meta advertising campaigns?", "Yes. We plan, launch, measure, and optimize campaigns on Google, Facebook, and Instagram based on business goals and budget."],
] as const;

export function FAQ() {
  return <section className="section"><div className="shell split">
    <div><p className="kicker">FAQ</p><h2>Frequently Asked Questions</h2></div>
    <div className="faq-list">
      {questions.map(([question, answer]) => <details key={question} name="ortix-faq"><summary>{question}<ChevronDown size={19} aria-hidden="true" /></summary><p className="copy">{answer}</p></details>)}
      <details name="ortix-faq">
        <summary>What happens in the free consultation?<ChevronDown size={19} aria-hidden="true" /></summary>
        <p className="copy">We discuss your goals, current marketing, and where you need help. Share your website or active channels if you have them so we can talk through what to prioritize.</p>
        <Link className="text-link mb-4" href="#contact">Request a consultation</Link>
      </details>
    </div>
  </div></section>;
}
