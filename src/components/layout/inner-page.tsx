import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "./json-ld";
import { siteOrigin } from "@/lib/seo";

type Crumb = { label: string; href: string };

export function InnerHero({ title, description, current, parents = [], visual, eyebrow, children }: { title: string; description: string; current: Crumb; parents?: Crumb[]; visual?: ReactNode; eyebrow?: string; children?: ReactNode }) {
  const previous = [{ label: "Home", href: "/" }, ...parents];
  return <section className="section inner-hero dark"><div className="shell">
    <nav aria-label="Breadcrumb"><ol className="breadcrumb">{previous.map(({ label, href }) => <li key={href}><Link href={href}>{label}</Link><span className="ml-2" aria-hidden="true">/</span></li>)}<li aria-current="page">{current.label}</li></ol></nav>
    <div className={visual ? "inner-hero-split" : undefined}>
      <div>{eyebrow && <p className="kicker">{eyebrow}</p>}<h1>{title}</h1><p className="copy">{description}</p>{children}</div>
      {visual}
    </div>
    {siteOrigin && <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [...previous, current].map(({ label, href }, index) => ({ "@type": "ListItem", position: index + 1, name: label, item: new URL(href, siteOrigin).href })) }} />}
  </div></section>;
}
