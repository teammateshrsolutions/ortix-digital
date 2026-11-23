import { MapPin } from "lucide-react";
import { serviceArea } from "@/data/navigation";
import { BusinessLinks } from "@/components/layout/business-links";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return <section className="section dark" id="contact">
    <div className="shell split">
      <div className="contact-intro">
        <p className="kicker">Contact Us</p><h2>Let&apos;s Build Something Remarkable.</h2>
        <p className="copy">Tell us what you want to achieve, what you are working on now, and where you need support.</p>
        <p className="location"><MapPin size={20} aria-hidden="true" />{serviceArea}</p>
        <BusinessLinks />
      </div>
      <ContactForm />
    </div>
  </section>;
}
