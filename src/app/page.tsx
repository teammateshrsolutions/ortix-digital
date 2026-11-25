import { servicePath } from "@/data/route-slugs";
import Image from "next/image";
import Link from "next/link";
import { Compass, Lightbulb, MailCheck, MessageSquare, PanelsTopLeft, Search, Target } from "lucide-react";
import { ConceptGrid } from "@/components/home/visuals";
import { ServiceCards } from "@/components/home/service-cards";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/forms/contact-section";
import { blogPosts } from "@/data/blog";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";
import "./signal.css";

export const metadata = {
  ...pageMetadata(homeTitle, homeDescription, "/"),
  verification: {
    other: { "facebook-domain-verification": "0p0upwtk349jy3kafo2yec8zs4y3ku" },
  },
};

const process = [
  ["Discover", "Review where customers find you today and what happens when they reach your site."],
  ["Strategize", "Choose the channels that fit your goals and agree on what counts as a useful enquiry."],
  ["Execute", "Launch campaigns and improve the pages people land on. Set up tracking for key actions such as form submissions."],
  ["Optimize", "Review which channels drive enquiries, then use your feedback on lead quality to decide what to improve."],
];

const strengths = [
  { title: "Ad Creative Built Around Your Offer", description: "We develop messages and visuals around what customers need to know before they enquire.", Icon: Lightbulb },
  { title: "A Clear Starting Channel", description: "We explain where SEO, paid ads, or website improvements fit your goals and budget.", Icon: Compass },
  { title: "Campaigns Informed by Lead Quality", description: "We review which enquiries match your services and use your feedback to guide the next changes.", Icon: Target },
  { title: "Clear Reporting and Next Steps", description: "We explain what changed, what the data shows, and what we plan to test next.", Icon: MessageSquare },
];

export default function Home() {
  return <div className="signal-home">
    <section className="hero signal-hero dark">
      <div className="shell hero-grid">
        <div className="hero-content">
          <p className="kicker">Turn Attention Into Growth</p>
          <h1>Digital Marketing Agency in <em>Bangalore</em></h1>
          <p className="copy">Get found through SEO, reach customers with Google and Meta ads, and turn website visits into enquiries.</p>
          <div className="actions"><Link className="button" href="/audit/">Get a Free Marketing Audit</Link><Link className="button outline" href="#services">Explore Our Services</Link></div>
          <p className="signal-consultation-note">Get a short review of your website, search visibility and enquiry flow.</p>
        </div>
        <div className="signal-hero-visual">
          <Image
            className="signal-hero-image"
            src="/brand/about-campaign-team.webp"
            alt="Illustrative scene of a team reviewing a digital marketing campaign"
            width={1200}
            height={900}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1320px) 46vw, 620px"
            preload
          />
          <ol className="signal-journey" aria-label="How customers find and contact you">
            <li><Search aria-hidden="true" /><span>Search</span></li>
            <li><PanelsTopLeft aria-hidden="true" /><span>Website</span></li>
            <li><MailCheck aria-hidden="true" /><span>Enquiry</span></li>
          </ol>
        </div>
      </div>
    </section>
    <section className="section signal-about" id="about"><div className="shell split">
      <div>
        <p className="kicker">About ORTIX DIGITAL</p>
        <h2>Find the Right Place to Start</h2>
        <p className="copy mt-4">If customers struggle to find you, we look at search visibility and ads. If visitors reach your site but rarely get in touch, we look at the service pages and enquiry process. The work starts where it can best support your goal.</p>
        <Link className="text-link mt-4" href="/about/">About ORTIX DIGITAL</Link>
      </div>
      <Image
        className="signal-about-image"
        src="/brand/about-campaign-planning.webp"
        alt="A campaign planning workbook showing search, advertising and landing-page ideas"
        width={1200}
        height={900}
        sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1320px) 46vw, 620px"
      />
    </div></section>
    <section className="section paper signal-services" id="services"><div className="shell">
      <h2 className="section-title">Digital Marketing Services</h2>
      <ServiceCards variant="signal" />
    </div></section>
    <section className="section" id="featured-work" aria-labelledby="featured-work-title">
      <div className="shell split signal-featured-work">
        <div>
          <p className="kicker">In-house case study</p>
          <h2 id="featured-work-title">How We Built the Ortix Digital Website</h2>
          <p className="copy mt-4">The brief was to help Bengaluru businesses compare our services and enquire from any device. We built dedicated service pages, linked them to practical guides, and added a WhatsApp enquiry flow.</p>
          <p className="copy">We checked the internal links and verified that the forms prepare messages for the correct WhatsApp number.</p>
          <Link className="text-link mt-4" href="/portfolio/#case-studies">Read the Ortix website case study</Link>
        </div>
        <Image
          className="signal-featured-image"
          src="/brand/portfolio/ortix-website-case-study.webp"
          alt="The Ortix Digital homepage shown on desktop and mobile"
          width={1280}
          height={720}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1320px) 46vw, 640px"
        />
      </div>
    </section>
    <section className="section"><div className="shell split">
      <div><h2>Where Should Your Business Start?</h2><p className="copy mt-5">We help businesses in Bengaluru and across Karnataka choose the work that matches how customers find and contact them.</p></div>
      <div>
        <h3>Get found for the services you want to sell</h3>
        <p className="copy mt-2">If people already search for your offer, <Link className="underline" href={servicePath("seo")}>SEO</Link> can help improve how your pages appear over time. <Link className="underline" href={servicePath("google-ads")}>Google Ads</Link> can help you reach active searchers while you test an offer and landing page.</p>
        <h3 className="mt-6">Give more visitors a reason to enquire</h3>
        <p className="copy mt-2">If visits rarely lead to conversations, review the page visitors see first. Make the scope, service area and next step easy to find, then check how your team receives and qualifies enquiries. A clearer <Link className="underline" href={servicePath("website-development")}>website</Link> can support search, paid ads and social campaigns together.</p>
      </div>
    </div></section>
    <section className="section dark signal-why" id="why-ortix"><div className="shell split">
      <div><p className="kicker">Why Choose ORTIX</p><h2>Creative by Nature. Strategic by Design.</h2></div>
      <ul className="signal-strengths">{strengths.map(({ title, description, Icon }) =>
        <li key={title}>
          <Icon size={24} aria-hidden="true" />
          <div><h3>{title}</h3><p className="copy">{description}</p></div>
        </li>
      )}</ul>
    </div></section>
    <section className="section paper signal-process" id="process"><div className="shell">
      <p className="kicker">Our Process</p><h2 className="section-title">How Search, Ads, and Your Website Work Together</h2>
      <ol className="timeline">{process.map(([title, description], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p className="copy">{description}</p></li>)}</ol>
    </div></section>
    <section className="section dark signal-portfolio"><div className="shell">
      <p className="kicker">Portfolio Preview</p><h2>Creative Work. Meaningful Impact.</h2>
      <p className="copy mb-8 mt-4">Illustrative concepts across four creative disciplines.</p><ConceptGrid /><Link className="text-link" href="/portfolio/">View Our Portfolio</Link>
    </div></section>
    <section className="section cta dark signal-cta"><div className="shell cta-row">
      <div>
        <h2>What We’ll Cover in Your Free Consultation</h2>
        <p className="copy">Tell us what you sell and where your enquiries come from today. We’ll discuss whether search, ads, or changes to your website are the best place to start.</p>
      </div>
      <Link className="button" href="#contact">Get Free Consultation</Link>
    </div></section>
    <section className="section paper home-location-section" aria-labelledby="home-location-title">
      <div className="shell cta-row">
        <div>
          <h2 id="home-location-title">Serving Bengaluru Businesses</h2>
          <p className="copy mt-3">Find local marketing guidance for your area, from Yelahanka and Hebbal to Whitefield and Electronic City.</p>
        </div>
        <Link className="button" href="/locations/">Explore Bengaluru Locations</Link>
      </div>
    </section>
    <section className="section paper signal-blog" aria-labelledby="home-blog-title">
      <div className="shell">
        <h2 id="home-blog-title" className="section-title">From the Blog</h2>
        <div className="cards">
          {blogPosts.slice(0, 3).map(({ path, title, cover, description }) => (
            <article className="service-card signal-blog-card" key={path}>
              <Image className="signal-blog-image" src={cover} alt="" width={588} height={441}
                sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1023px) 46vw, 31vw" />
              <h3><Link className="signal-blog-link" href={path}>{title}</Link></h3>
              <p className="copy">{description}</p>
            </article>
          ))}
        </div>
        <Link className="text-link mt-5" href="/blog/">View all posts</Link>
      </div>
    </section>
    <FAQ />
    <ContactSection />
  </div>;
}
