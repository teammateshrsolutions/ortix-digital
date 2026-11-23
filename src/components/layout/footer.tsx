import Link from "next/link";
import { MapPin } from "lucide-react";
import { Brand } from "./brand";
import { BusinessLinks } from "./business-links";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { officeAddress } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="shell footer-grid">
        <div><Brand /><p>Creative strategy, performance marketing and digital experiences for businesses across Karnataka.</p><strong>Creative ideas. Powerful digital growth.</strong></div>
        <div><h2>Quick Links</h2><ul>{navigation.map(({ href, label }) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
        <div><h2>Services</h2><ul>{services.map(({ slug, title }) => <li key={slug}><Link href={`/services/${slug}/`}>{title}</Link></li>)}</ul></div>
        <div className="footer-contact">
          <h2>Get in Touch</h2>
          <address className="location not-italic">
            <MapPin className="shrink-0" size={19} aria-hidden="true" />
            <span>{officeAddress.join(", ")}</span>
          </address>
          <BusinessLinks />
          <Link className="button outline" href="/contact/">Start Your Project</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} ORTIX DIGITAL</p>
        <Link href="/privacy-policy/">Privacy Policy</Link><Link href="/terms-and-conditions/">Terms &amp; Conditions</Link><a href="#top">Back to Top</a>
      </div>
    </footer>
  );
}
