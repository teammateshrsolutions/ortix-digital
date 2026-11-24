import { servicePath } from "@/data/route-slugs";
import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck } from "lucide-react";
import { seoAuditPost } from "@/data/blog";
import { seoAuditIntro, seoAuditSections } from "@/data/posts/seo-audit";
import { InnerHero } from "@/components/layout/inner-page";
import { JsonLd } from "@/components/layout/json-ld";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import "./article.css";

const { path, title, description, cover } = seoAuditPost;
const page = pageMetadata(`${title} | ORTIX DIGITAL`, description, path);
const coverUrl = siteUrl(cover);
export const metadata = {
  ...page,
  openGraph: { ...page.openGraph, type: "article" as const, ...(coverUrl && { images: [{ url: coverUrl, width: 1200, height: 800 }] }) },
  twitter: { ...page.twitter, ...(coverUrl && { images: [coverUrl] }) },
};

const checklist = [
  { id: "priority-services", label: "Priority services" },
  { id: "indexing", label: "Indexing checks" },
  { id: "on-page-seo", label: "Titles, headings and links" },
  { id: "local-business", label: "Local business details" },
  { id: "mobile-enquiries", label: "Mobile enquiry flow" },
  { id: "seo-baseline", label: "SEO baseline and priorities" },
];

export default function SeoAuditArticle() {
  return <div className="blog-article">
    <InnerHero
      title={title}
      description={description}
      eyebrow="SEO Guide"
      parents={[{ label: "Blog", href: "/blog/" }]}
      current={{ label: title, href: path }}
      visual={<Image className="blog-article-cover" src={cover} alt="" width={1200} height={800} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 45vw, 560px" preload />}
    >
      <p className="blog-article-byline">By ORTIX DIGITAL</p>
    </InnerHero>
    <article className="section">
      <div className="shell blog-article-layout">
        <nav className="blog-article-checklist" aria-label="Audit checklist">
          <p><ClipboardCheck size={20} aria-hidden="true" /> Audit checklist</p>
          <ol>{checklist.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </nav>
        <div className="prose-site copy blog-article-body">
          <div className="blog-article-content">
            <p>{seoAuditIntro}</p>
            {seoAuditSections.map(({ id, heading, copy }) => <section key={id} className="mt-9">
              <h2 id={id}>{heading}</h2><p>{copy}</p>
            </section>)}
          </div>
          <div className="actions">
            <a className="text-link" href="https://support.google.com/webmasters/answer/9012289">Google URL Inspection guide</a>
            <a className="text-link" href="https://support.google.com/webmasters/answer/7576553">Search Performance report guide</a>
          </div>
          <Link className="text-link mt-5" href="/blog/">Back to the Blog</Link>
        </div>
      </div>
    </article>
    <section className="section dark blog-article-cta">
      <div className="shell cta-row">
        <div><h2>Need help deciding what to fix?</h2><p className="copy">Bring your website, priority services and the areas you cover to a consultation. We can discuss what to review first and which fixes need a content owner or developer.</p></div>
        <div className="actions">
          <Link className="button" href="/contact/">Request a Consultation</Link>
          <Link className="button outline" href={servicePath("seo")}>Explore SEO Services</Link>
        </div>
      </div>
    </section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, url: siteUrl(path), image: coverUrl, inLanguage: "en-IN", author: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
  </div>;
}
