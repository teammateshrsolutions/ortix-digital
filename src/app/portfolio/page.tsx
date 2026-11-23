import Image from "next/image";
import Link from "next/link";
import { ConceptGrid } from "@/components/home/visuals";
import { InnerHero } from "@/components/layout/inner-page";
import { pageMetadata } from "@/lib/seo";

const description = "See how Ortix Digital built its responsive website, then browse illustrative brand identity, web design, social media and Meta Ads concepts.";
export const metadata = pageMetadata("Digital Marketing Portfolio & Case Study | ORTIX DIGITAL", description, "/portfolio/");

export default function PortfolioPage() {
  return <>
    <InnerHero title="Digital Marketing and Design Portfolio" description={description} current={{ label: "Portfolio", href: "/portfolio/" }} />
    <section className="section" id="case-studies">
      <article className="shell prose-site">
        <p className="kicker">In-house case study</p>
        <h2>Building the ORTIX DIGITAL Website</h2>
        <p className="copy">Website development and on-page SEO</p>
        <Image
          className="mt-6 h-auto w-full rounded-xl"
          src="/brand/portfolio/ortix-website-case-study.webp"
          alt="The Ortix Digital homepage at desktop and mobile screen widths"
          width={1280}
          height={720}
          sizes="(max-width: 800px) calc(100vw - 40px), 760px"
        />
        <h3 className="mt-6">The brief</h3>
        <p className="copy mt-2">Build a site that explains six digital marketing services to businesses in Bengaluru and makes it easy to request a consultation from a phone or desktop.</p>
        <h3 className="mt-6">What we built</h3>
        <p className="copy mt-2">We created a responsive homepage, individual service pages with distinct search topics, and a consultation form with server-side validation. The homepage uses custom SVG icons so visitors can scan the services quickly.</p>
        <h3 className="mt-6">What we verified</h3>
        <p className="copy mt-2">Local checks confirmed that the service pages and internal links responded and that a valid test enquiry was saved successfully.</p>
        <Link className="text-link mt-4" href="/services/website-development/">Explore Website Development</Link>
      </article>
    </section>
    <section className="section paper" id="concept-showcase">
      <div className="shell">
        <h2>Concept Showcase</h2>
        <p className="copy mt-4 mb-8">Illustrative work across branding, web design, social media, and Meta Ads.</p>
        <ConceptGrid />
        <Link className="button" href="/contact/">Start Your Project</Link>
      </div>
    </section>
  </>;
}
