import { InnerHero } from "@/components/layout/inner-page";
import { legalContactEmail } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const description = "Learn how Ortix Digital collects, uses and stores information from enquiries, and how to request access, correction or deletion.";
export const metadata = pageMetadata("Privacy Policy | ORTIX DIGITAL", description, "/privacy-policy/");

export default function PrivacyPage() {
  return <>
    <InnerHero title="Privacy Policy" description={description} current={{ label: "Privacy Policy", href: "/privacy-policy/" }} />
    <section className="section">
      <div className="shell prose-site copy">
        <h2>Information you provide</h2>
        <p>Our enquiry form asks for your name, email address, chosen service, and project details. You can also provide your phone number and company name. If you email us, we receive your email address and the information you include in your message.</p>

        <h2>How we use your information</h2>
        <p>We use the information to review your enquiry, respond to questions, and discuss your project. If you ask for a proposal, we use the details you provide to prepare it and follow up with you.</p>

        <h2>Where form submissions are stored</h2>
        <p>The website saves submitted enquiries in server-side storage outside the public website files. Please keep passwords, payment details, and other sensitive information out of your enquiry.</p>

        <h2>Privacy requests</h2>
        <p>To ask about information you shared with us or request access, a correction, or deletion, email <a className="underline" href={`mailto:${legalContactEmail}`}>{legalContactEmail}</a>.</p>
      </div>
    </section>
  </>;
}
