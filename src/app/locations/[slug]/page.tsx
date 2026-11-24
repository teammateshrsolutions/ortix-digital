import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "@/components/layout/inner-page";
import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { locationPath, locationsPath, serviceAreas } from "@/data/locations";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map(({ slug }) => ({ slug }));
}

async function findArea(params: Props["params"]) {
  const { slug } = await params;
  return serviceAreas.find(area => area.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const area = await findArea(params);
  return pageMetadata("Digital Marketing in " + area.name + " | ORTIX DIGITAL", area.description, locationPath(area.slug));
}

export default async function LocationPage({ params }: Props) {
  const { slug, name, description, heading, advice, service } = await findArea(params);
  return <>
    <InnerHero title={"Digital Marketing in " + name} description={description} eyebrow="Bengaluru"
      parents={[{ label: "Locations", href: locationsPath }]} current={{ label: name, href: locationPath(slug) }}>
      <div className="actions">
        <Link className="button" href="/audit/">Get a Free Marketing Audit</Link>
        <Link className="button outline" href="#local-enquiry">Discuss Your Business</Link>
      </div>
    </InnerHero>
    <section className="section location-content"><div className="shell split">
      <div><h2>{heading}</h2><p className="copy mt-4">{advice}</p></div>
      <div className="location-service-panel">
        <h2>Where Ortix can help</h2>
        <p className="copy mt-4">We can review how people find your business, what they see on your website, and how your team handles enquiries. We’ll discuss which changes fit your goals and what to test first.</p>
        <Link className="text-link mt-3" href={service.href}>{service.label}</Link>
      </div>
    </div></section>
    <section className="section location-contact" id="local-enquiry"><div className="shell split">
      <div><h2>Tell us what you want to grow</h2><p className="copy mt-4">Share the service you want to promote, the areas you cover and what counts as a useful enquiry.</p></div>
      <div>
        <WhatsAppLink className="button gap-2" />
        <div><Link className="text-link mt-3" href={locationsPath}>Explore all Bengaluru locations</Link></div>
        <Link className="text-link" href="/contact/#office-location">View the Ortix office in Yelahanka</Link>
      </div>
    </div></section>
  </>;
}
