import { servicePath, serviceUrlSlugs } from "@/data/route-slugs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceGuides, type ServiceSlug } from "@/data/service-guides";
import { serviceRegions, servicesSection } from "@/data/navigation";
import { InnerHero } from "@/components/layout/inner-page";
import { JsonLd } from "@/components/layout/json-ld";
import { SignalServiceIcon } from "@/components/home/signal-service-icon";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import { SeoSections } from "./seo-sections";
import { GoogleAdsSections } from "./google-ads-sections";
import { GuidedServiceSections } from "./guided-service-sections";
import { ServiceReport } from "./service-report";
import "./service-design.css";

type Props = { params: Promise<{ slug: string }> };

const designs: Record<ServiceSlug, {
  description: string;
  eyebrow: string;
  cta: string;
}> = {
  seo: {
    description: "Help the right customers find your business through technical SEO, clearer service pages, and better local search visibility.",
    eyebrow: "Organic Search & Local Visibility",
    cta: "Discuss Your SEO Goals",
  },
  "google-ads": {
    description: "Reach people already searching for your services. Plan focused Search campaigns, track completed enquiries, and use lead feedback to improve the next test.",
    eyebrow: "Paid Search & Enquiry Tracking",
    cta: "Discuss Your Google Ads Goals",
  },
  "meta-ads": {
    description: "Reach the right people on Facebook and Instagram. Test creative, choose a clear enquiry path, and use lead feedback to improve campaigns.",
    eyebrow: "Facebook & Instagram Advertising",
    cta: "Discuss Your Meta Ads Goals",
  },
  "social-media-marketing": {
    description: "Give people a reason to follow your business. Plan useful posts, create a manageable publishing calendar, and learn from how people respond.",
    eyebrow: "Social Strategy & Content Planning",
    cta: "Plan Your Social Media Content",
  },
  "website-development": {
    description: "Build a responsive, search-friendly website that explains your services and makes it easy for customers to enquire.",
    eyebrow: "Responsive Websites & Enquiry Flows",
    cta: "Discuss Your Website Project",
  },
  "branding-design": {
    description: "Make your business recognisable across websites, social posts and ads with a visual identity and assets your team can use.",
    eyebrow: "Visual Identity & Digital Creative",
    cta: "Discuss Your Branding Project",
  },
};

function findService(slug: string) {
  return services.find((service) => serviceUrlSlugs[service.slug] === slug) ?? notFound();
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug: serviceUrlSlugs[slug] }));
}

export async function generateMetadata({ params }: Props) {
  const service = findService((await params).slug);
  return pageMetadata(`${service.headline} | ORTIX DIGITAL`, serviceGuides[service.slug].description, servicePath(service.slug));
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  const guide = serviceGuides[service.slug];
  const design = designs[service.slug];

  return <div className="service-landing">
    <InnerHero
      title={service.headline}
      description={design.description}
      parents={[{ label: "Services", href: servicesSection }]}
      current={{ label: service.title, href: servicePath(service.slug) }}
      eyebrow={design.eyebrow}
      visual={<Image className="service-hero-art" src={`/brand/signal/${service.slug}.webp`} alt="" width={588} height={441} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 42vw, 550px" preload />}
    >
      <div className="actions">
        <Link className="button" href="/contact/">{design.cta}</Link>
        <a className="button outline" href={`#${service.slug}-deliverables`}>See What’s Included</a>
      </div>
      <p className="service-consultation-note">During the free consultation, we’ll discuss your goals, what you’ve tried, and the next step that fits your budget.</p>
    </InnerHero>
    <ServiceReport slug={service.slug} serviceName={service.slug === "seo" ? "SEO" : service.title} />
    {service.slug === "seo" ? <SeoSections /> : service.slug === "google-ads" ? <GoogleAdsSections /> : (
      <GuidedServiceSections slug={service.slug} title={service.title} />
    )}
    <section className="section paper" aria-labelledby="related-services-heading"><div className="shell">
      <h2 className="section-title" id="related-services-heading">Explore Related Services</h2>
      <ul className="related-services-grid">
        {services.filter(({ slug }) => guide.related.includes(slug)).map(({ slug, title, description }) => <li key={slug}>
          <Link className="related-service-card" href={servicePath(slug)}>
            <div className="related-service-icon"><SignalServiceIcon service={slug} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="button related-service-action" aria-hidden="true">Explore service</span>
          </Link>
        </li>)}
      </ul>
    </div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: service.title, description: guide.description, url: siteUrl(servicePath(service.slug)), areaServed: serviceRegions, provider: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
  </div>;
}
