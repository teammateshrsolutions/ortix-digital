import { servicePath } from "@/data/route-slugs";
﻿import Link from "next/link";
import { BusinessLinks } from "@/components/layout/business-links";
import { InnerHero } from "@/components/layout/inner-page";
import { locationPath, locationsPath, yelahanka } from "@/data/locations";
import { officeAddress } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

const path = locationPath(yelahanka.slug);
const title = "Digital Marketing Agency in Yelahanka";
const description = "Ortix Digital helps Yelahanka businesses improve local search visibility, reach customers with paid ads, and make it easier to enquire online.";
export const metadata = pageMetadata(title + " | ORTIX DIGITAL", description, path);

export default function YelahankaPage() {
  return <>
    <InnerHero
      title={title}
      description={description}
      eyebrow="Yelahanka New Town, Bengaluru"
      parents={[{ label: "Locations", href: locationsPath }]}
      current={{ label: "Yelahanka", href: path }}
    >
      <div className="actions">
        <Link className="button" href="/audit/">Get a Free Marketing Audit</Link>
        <Link className="button outline" href="#yelahanka-contact">Contact the Yelahanka Office</Link>
      </div>
    </InnerHero>
    <section className="section location-content"><div className="shell split">
      <div>
        <h2>Help nearby customers take the next step</h2>
        <p className="copy mt-4">Start with where and how you serve customers. A shop in Yelahanka New Town needs accurate opening hours and directions. A business that visits customers needs clear service boundaries and a way to confirm the pin code before booking.</p>
      </div>
      <div className="location-service-panel">
        <h3>Make your local details consistent</h3>
        <p className="copy mt-2">Compare your website and eligible listings for address, hours, phone and appointment details. Then check whether your main service page answers which areas you cover and how to enquire.</p>
        <Link className="text-link mt-3" href={servicePath("seo")}>Explore SEO services</Link>
        <h3 className="mt-6">Focus ads on enquiries you can serve</h3>
        <p className="copy mt-2">Choose the services and areas you can support. Review enquiry locations with your team before extending coverage or increasing spend.</p>
        <Link className="text-link mt-3" href={servicePath("google-ads")}>Explore Google Ads management</Link>
      </div>
    </div></section>
    <section className="section location-contact" id="yelahanka-contact"><div className="shell split">
      <div>
        <h2>Ortix Digital in Yelahanka New Town</h2>
        <address className="copy mt-4 not-italic">
          {officeAddress.map(line => <div key={line}>{line}</div>)}
        </address>
        <Link className="text-link mt-3" href="/contact/#office-location">View the office map and directions</Link>
      </div>
      <div>
        <h3>Discuss your business</h3>
        <p className="copy mt-2">Tell us which service you want to grow and where your customers come from. Contact us first if you would like to arrange an in-person consultation.</p>
        <BusinessLinks />
        <Link className="text-link mt-3" href={locationsPath}>Explore all Bengaluru locations</Link>
      </div>
    </div></section>
  </>;
}
