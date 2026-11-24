import { servicePath } from "@/data/route-slugs";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPost, guidePosts } from "@/data/blog";
import { services } from "@/data/services";
import { InnerHero } from "@/components/layout/inner-page";
import { JsonLd } from "@/components/layout/json-ld";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import "../seo-audit-checklist-bangalore/article.css";

type Props = { params: Promise<{ slug: string }> };
const sectionId = (index: number) => `section-${index + 1}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return guidePosts.map(({ urlSlug }) => ({ slug: urlSlug }));
}

async function resolvePost(params: Props["params"]) {
  return getBlogPost((await params).slug) ?? notFound();
}

export async function generateMetadata({ params }: Props) {
  const post = await resolvePost(params);
  const metadata = pageMetadata(`${post.title} | ORTIX DIGITAL`, post.description, post.path);
  const image = siteUrl(post.cover);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article" as const, ...(image && { images: [image] }) },
    twitter: { ...metadata.twitter, ...(image && { images: [image] }) },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await resolvePost(params);
  const service = services.find(({ slug }) => slug === post.service);

  return <div className="blog-article">
    <InnerHero
      title={post.title}
      description={post.description}
      eyebrow={service?.title}
      parents={[{ label: "Blog", href: "/blog/" }]}
      current={{ label: post.title, href: post.path }}
      visual={<Image className="blog-article-cover" src={post.cover} alt="" width={588} height={441} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 45vw, 560px" preload />}
    >
      <p className="blog-article-byline">By ORTIX DIGITAL</p>
    </InnerHero>
    <article className="section">
      <div className="shell blog-article-layout">
        <nav className="blog-article-checklist" aria-label="In this guide">
          <p><ClipboardList size={20} aria-hidden="true" /> In this guide</p>
          <ol>{post.sections.map(({ heading }, index) => <li key={heading}><a href={`#${sectionId(index)}`}>{heading}</a></li>)}</ol>
        </nav>
        <div className="prose-site copy blog-article-body">
          <div className="blog-article-content">
            {post.sections.map(({ heading, copy }, index) => <section key={heading} className={index ? "mt-9" : undefined}>
              <h2 id={sectionId(index)}>{heading}</h2><p>{copy}</p>
            </section>)}
          </div>
          {post.reference && <p className="mt-6"><a className="text-link" href={post.reference.href}>{post.reference.label}</a></p>}
          <Link className="text-link mt-5" href="/blog/">Back to the Blog</Link>
        </div>
      </div>
    </article>
    <section className="section dark blog-article-cta">
      <div className="shell cta-row">
        <div><h2>Talk Through Your Next Step</h2><p className="copy">Share what you want to improve and the work you have already done.</p></div>
        <div className="actions">
          <Link className="button" href="/contact/">Request a Consultation</Link>
          <Link className="button outline" href={servicePath(post.service)}>Explore {service?.title}</Link>
        </div>
      </div>
    </section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, url: siteUrl(post.path), image: siteUrl(post.cover), inLanguage: "en-IN", author: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
  </div>;
}
