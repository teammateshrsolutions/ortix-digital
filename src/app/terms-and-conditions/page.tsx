import { InnerHero } from "@/components/layout/inner-page";
import { legalContactEmail } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const description = "Read Ortix Digital's terms for website use, project enquiries and written agreements, including how project scope and marketing outcomes are handled.";
export const metadata = pageMetadata("Terms & Conditions | ORTIX DIGITAL", description, "/terms-and-conditions/");

export default function TermsPage() {
  return <>
    <InnerHero title="Terms & Conditions" description={description} current={{ label: "Terms & Conditions", href: "/terms-and-conditions/" }} />
    <section className="section">
      <div className="shell prose-site copy">
        <h2>Using this website</h2>
        <p>You may browse our service descriptions, articles, and portfolio and contact us about your project. Use the enquiry form for genuine requests and provide accurate contact details.</p>

        <h2>Enquiries and project agreements</h2>
        <p>Submitting an enquiry starts a discussion. Paid work begins after you and ORTIX DIGITAL agree to the project in writing. The project agreement sets the scope, deliverables, fees, payment schedule, timelines, approvals, cancellation terms, and ownership or licensing of deliverables.</p>

        <h2>Marketing performance</h2>
        <p>Search rankings, advertising costs, and enquiry volumes can vary with competition, budgets, market conditions, platform policies, and the quality of the offer and landing page. Specific outcomes require an explicit written commitment in the project agreement.</p>

        <h2>Contact</h2>
        <p>For questions about these terms or a project proposal, email <a className="underline" href={`mailto:${legalContactEmail}`}>{legalContactEmail}</a>.</p>
      </div>
    </section>
  </>;
}
