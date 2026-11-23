import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { serviceGuides, type ServiceSlug } from "@/data/service-guides";
import { serviceRegions, servicesSection } from "@/data/navigation";
import { InnerHero } from "@/components/layout/inner-page";
import { JsonLd } from "@/components/layout/json-ld";
import { SignalServiceIcon } from "@/components/home/signal-service-icon";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import { SeoSections } from "./seo-sections";
import { GoogleAdsSections } from "./google-ads-sections";
import { GuidedServiceSections } from "./guided-service-sections";
import "./service-design.css";

type Props = { params: Promise<{ slug: string }> };
const path = (slug: string) => `/services/${slug}/`;

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
  return services.find((service) => service.slug === slug) ?? notFound();
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = findService((await params).slug);
  return pageMetadata(`${service.headline} | ORTIX DIGITAL`, serviceGuides[service.slug].description, path(service.slug));
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  const guide = serviceGuides[service.slug];
  const design = designs[service.slug];
  const articles = blogPosts.filter(({ service: category }) => category === service.slug);
  const hasWebsiteCaseStudy = service.slug === "seo" || service.slug === "google-ads" || service.slug === "website-development";

  return <div className="service-landing">
    <InnerHero
      title={service.headline}
      description={design.description}
      parents={[{ label: "Services", href: servicesSection }]}
      current={{ label: service.title, href: path(service.slug) }}
      eyebrow={design.eyebrow}
      visual={<Image className="service-hero-art" src={`/brand/signal/${service.slug}.webp`} alt="" width={588} height={441} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 42vw, 550px" preload />}
    >
      <div className="actions">
        <Link className="button" href="/contact/">{design.cta}</Link>
        <a className="button outline" href={`#${service.slug}-deliverables`}>See What’s Included</a>
      </div>
      <p className="service-consultation-note">During the free consultation, we’ll discuss your goals, what you’ve tried, and the next step that fits your budget.</p>
    </InnerHero>
    {service.slug === "seo" ? <SeoSections /> : service.slug === "google-ads" ? <GoogleAdsSections /> : (
      <GuidedServiceSections slug={service.slug} title={service.title} />
    )}
    {articles.length > 0 && <section className="section" aria-labelledby="service-guides-heading"><div className="shell">
      <h2 className="section-title" id="service-guides-heading">{service.title} Guides</h2>
      <ul className="related-services-grid">
        {articles.map(({ path, title, description }) => <li key={path}>
          <Link className="related-service-card" href={path}><h3>{title}</h3><p>{description}</p></Link>
        </li>)}
      </ul>
    </div></section>}
    <div className="shell pb-8">
      {hasWebsiteCaseStudy
        ? <Link className="text-link" href="/portfolio/#case-studies">See how we built the Ortix website and enquiry form</Link>
        : <Link className="text-link" href="/portfolio/#concept-showcase">Explore our illustrative design and campaign concepts</Link>}
    </div>
    <section className="section paper" aria-labelledby="related-services-heading"><div className="shell">
      <h2 className="section-title" id="related-services-heading">Explore Related Services</h2>
      <ul className="related-services-grid">
        {services.filter(({ slug }) => guide.related.includes(slug)).map(({ slug, title, description }) => <li key={slug}>
          <Link className="related-service-card" href={path(slug)}>
            <div className="related-service-icon"><SignalServiceIcon service={slug} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="related-service-action" aria-hidden="true">Explore service</span>
          </Link>
        </li>)}
      </ul>
    </div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: service.title, description: guide.description, url: siteUrl(path(service.slug)), areaServed: serviceRegions, provider: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
  </div>;
}
