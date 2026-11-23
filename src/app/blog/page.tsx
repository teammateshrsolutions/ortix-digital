import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/layout/inner-page";
import { SignalServiceIcon } from "@/components/home/signal-service-icon";
import { guidePosts, seoAuditPost } from "@/data/blog";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import "./blog-index.css";

const description = "Read practical digital marketing guides for Bengaluru businesses. Plan an SEO audit, set a Google Ads budget, compare Meta lead forms and brief a website.";
export const metadata = pageMetadata("Digital Marketing Blog: SEO, Ads & Web | ORTIX DIGITAL", description, "/blog/");

export default function BlogPage() {
  return <div className="blog-index">
    <InnerHero
      title="Digital Marketing Guides"
      description={description}
      current={{ label: "Blog", href: "/blog/" }}
    />
    <section className="section paper" aria-label="Blog articles">
      <div className="shell blog-library">
        <article className="blog-feature">
          <div className="blog-feature-art">
            <Image src={seoAuditPost.cover} alt="" width={1200} height={800} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 48vw, 640px" />
          </div>
          <div className="blog-feature-copy">
            <p className="kicker">Featured SEO Guide</p>
            <h2><Link href={seoAuditPost.path}>{seoAuditPost.title}</Link></h2>
            <p className="copy">Work through six checks on search visibility, service pages, local business information, and enquiry tracking before deciding what to fix first.</p>
            <span className="button" aria-hidden="true">Read the checklist</span>
          </div>
        </article>
        <section aria-labelledby="more-guides">
          <h2 className="section-title" id="more-guides">More Guides</h2>
          <div className="blog-note-grid">
            {guidePosts.map(({ service, title, description, path }) => <article className="blog-note" key={path}>
              <div className="blog-note-category">
                <span className="blog-note-icon"><SignalServiceIcon service={service} /></span>
                <span>{services.find(({ slug }) => slug === service)?.title}</span>
              </div>
              <h3><Link href={path}>{title}</Link></h3>
              <p className="copy">{description}</p>
              <span className="blog-card-action" aria-hidden="true">Read the guide</span>
            </article>)}
          </div>
        </section>
      </div>
    </section>
  </div>;
}
