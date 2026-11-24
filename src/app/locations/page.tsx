import { MapPin } from "lucide-react";
import Link from "next/link";
import { InnerHero } from "@/components/layout/inner-page";
import { locationPath, locations, locationsPath } from "@/data/locations";
import { pageMetadata } from "@/lib/seo";

const description = "Find digital marketing services for your area in Bengaluru. Explore local enquiry and marketing guidance from Ortix Digital.";
export const metadata = pageMetadata("Digital Marketing Locations in Bengaluru | ORTIX DIGITAL", description, locationsPath);

export default function LocationsPage() {
  return <>
    <InnerHero title="Digital Marketing Across Bengaluru" description={description} current={{ label: "Locations", href: locationsPath }} />
    <section className="section location-directory"><div className="shell">
      <h2 className="section-title">Find your area</h2>
      <div className="cards">{locations.map(({ slug, name, description }) => <article className="service-card location-card" key={slug}>
        <span className="location-card-pin"><MapPin size={22} aria-hidden="true" /></span>
        <h3>{name}</h3>
        <p className="copy">{description}</p>
        <Link className="text-link" href={locationPath(slug)}>Digital marketing in {name}</Link>
      </article>)}</div>
    </div></section>
  </>;
}
