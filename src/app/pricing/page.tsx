import { InnerHero } from "@/components/layout/inner-page";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/contact-form";
import { growthPackages } from "@/data/packages";
import "./pricing.css";

const description = "Compare indicative monthly digital marketing packages and request a custom quote from Ortix Digital.";
export const metadata = pageMetadata("Digital Marketing Packages | ORTIX DIGITAL", description, "/pricing/");

export default function PricingPage() {
  return <>
    <InnerHero title="Digital Marketing Packages" description={description} current={{ label: "Packages", href: "/pricing/" }} />
    <section className="section paper"><div className="shell">
      <h2 className="section-title">Compare monthly packages</h2>
      <div className="cards">{growthPackages.map(({ name, description, includes, monthlyPrice, recommended }) => <article className="growth-package" data-recommended={recommended || undefined} key={name}>
        <div>
          {recommended && <p className="package-recommendation">Recommended</p>}
          <h3>{name}</h3>
        </div>
        <p className="package-price">{monthlyPrice} <span>/ month</span></p>
        <p className="copy">{description}</p>
        <ul>{includes.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}</div>
      <p className="copy mt-6">These ranges are indicative monthly agency fees. Your quote lists the agreed scope, platform ad spend and applicable GST separately. Production, subscriptions and development outside the agreed scope are quoted separately.</p>
    </div></section>
    <section className="section" id="quote"><div className="shell split"><div><h2>Request a custom quote</h2><p className="copy mt-4">Share your existing setup, channels and priorities so we can scope the work.</p></div><ContactForm intent="quote" /></div></section>
  </>;
}
