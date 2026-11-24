import { InnerHero } from "@/components/layout/inner-page";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/contact-form";
import { BusinessLinks } from "@/components/layout/business-links";

const title = "Request a Free Marketing Audit";
const description = "Get a short review of your website, search visibility and enquiry flow, with practical suggestions on what to improve first.";
export const metadata = pageMetadata(title + " | ORTIX DIGITAL", description, "/audit/");

export default function AuditPage() {
  return <>
    <InnerHero title={title} description={description} current={{ label: "Marketing Audit", href: "/audit/" }} />
    <section className="section"><div className="shell split">
      <div><h2>What should we review?</h2><p className="copy mt-4">Tell us which service you want to grow, where you serve customers, and what would make an enquiry useful. Include your main marketing channel if you already run one.</p><BusinessLinks /></div>
      <ContactForm intent="audit" />
    </div></section>
  </>;
}
