import { ClipboardList, Compass, MapPin, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { BusinessLinks } from "@/components/layout/business-links";
import { InnerHero } from "@/components/layout/inner-page";
import { serviceArea, servicesSection } from "@/data/navigation";
import { officeAddress } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
import "./contact.css";

const description = "Request a free digital marketing consultation in Bengaluru. Share your goals and discuss where to start with SEO, paid ads, social media or your website.";
export const metadata = pageMetadata("Contact ORTIX DIGITAL | Free Marketing Consultation", description, "/contact/");

const mapDestination = encodeURIComponent("Teammates HR Solutions, " + officeAddress.join(", ") + ", India");

const nextSteps = [
  { title: "We review your enquiry", copy: "We look at what you sell, your priority service, and where you want to reach more customers.", Icon: ClipboardList },
  { title: "We talk through your goals", copy: "We discuss how enquiries come in today, what you want to improve, and what your team can support.", Icon: MessagesSquare },
  { title: "We discuss where to start", copy: "We explain which work makes sense first and what we would need to put together a scope.", Icon: Compass },
];

export default function ContactPage() {
  return <div className="contact-page">
    <InnerHero
      title="Request a Free Digital Marketing Consultation"
      description="Tell us what you want to improve. We can discuss whether search, ads, social media, or your website is the best place to start."
      eyebrow="Contact Us"
      current={{ label: "Contact", href: "/contact/" }}
      visual={<section className="contact-enquiry" aria-labelledby="enquiry-title">
        <div className="contact-enquiry-heading">
          <h2 id="enquiry-title">Tell us about your project</h2>
          <p>Share a little about your business and what you would like to achieve.</p>
        </div>
        <ContactForm />
      </section>}
    >
      <div className="contact-page-location">
        <p className="location"><MapPin size={20} aria-hidden="true" />{serviceArea}</p>
        <div className="actions">
          <Link className="text-link" href="#office-location">View office location</Link>
          <Link className="text-link" href="/locations/yelahanka/">Digital marketing in Yelahanka</Link>
        </div>
        <BusinessLinks />
      </div>
    </InnerHero>
    <section className="section paper"><div className="shell">
      <h2 className="section-title">What happens after you enquire?</h2>
      <ol className="contact-steps">
        {nextSteps.map(({ title, copy, Icon }) => <li key={title}>
          <Icon aria-hidden="true" size={26} />
          <h3>{title}</h3>
          <p className="copy">{copy}</p>
        </li>)}
      </ol>
      <Link className="text-link mt-5" href={servicesSection}>Compare our digital marketing services</Link>
    </div></section>
    <section className="section" id="office-location" aria-labelledby="office-heading">
      <div className="shell contact-office">
        <div className="contact-office-heading">
          <p className="kicker">Yelahanka New Town</p>
          <h2 id="office-heading">Office Location</h2>
          <address className="contact-office-address">
            {officeAddress.map(line => <div key={line}>{line}</div>)}
          </address>
          <a className="button" href={`https://www.google.com/maps/dir/?api=1&destination=${mapDestination}`}>Get Directions</a>
        </div>
        <iframe
          title="Map of the ORTIX DIGITAL office at the Teammates HR Solutions address"
          src={`https://maps.google.com/maps?q=${mapDestination}&z=16&output=embed`}
          style={{ display: "block", width: "100%", height: "clamp(340px, 32vw, 420px)", border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  </div>;
}
