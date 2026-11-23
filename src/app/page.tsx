import Link from "next/link";
import { Compass, Lightbulb, MailCheck, MessageSquare, PanelsTopLeft, Search, Target } from "lucide-react";
import { ConceptGrid } from "@/components/home/visuals";
import { ServiceCards } from "@/components/home/service-cards";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/forms/contact-section";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";
import "./signal.css";

export const metadata = pageMetadata(homeTitle, homeDescription, "/");

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

const testimonials = [
  {
    name: "Ananya Rao",
    service: "SEO",
    quote: "Ortix explained what was keeping our service pages from showing up in search and gave us a clear order for fixing things. We knew what was changing and why.",
  },
  {
    name: "Rohan Mehta",
    service: "Google Ads",
    quote: "We wanted enquiries from people looking for our specific services. Ortix helped us refine the search terms and showed us which campaigns were bringing in relevant calls.",
  },
  {
    name: "Priya Menon",
    service: "Meta Ads",
    quote: "Ortix helped us test different ways to present the same offer. Their reporting made it easy to see which ads were worth keeping and what we should try next.",
  },
  {
    name: "Kavya Shetty",
    service: "Social Media Marketing",
    quote: "We used to decide what to post at the last minute. Ortix gave us a content plan we could keep up with and helped us find a style that felt right for our business.",
  },
  {
    name: "Arjun Reddy",
    service: "Website Development",
    quote: "The new site makes it easier for customers to understand what we offer and contact us from their phones. We also appreciated being able to update the main pages ourselves.",
  },
];

export default function Home() {
  return <div className="signal-home">
    <section className="hero signal-hero dark">
      <div className="shell hero-grid">
        <div className="hero-content">
          <p className="kicker">Turn Attention Into Growth</p>
          <h1>Digital Marketing Agency in Bangalore</h1>
          <p className="copy">Get found through SEO, reach customers with Google and Meta ads, and turn website visits into enquiries.</p>
          <div className="actions"><Link className="button" href="#contact">Get Free Consultation</Link><Link className="button outline" href="#services">Explore Our Services</Link></div>
          <p className="signal-consultation-note">We’ll review where your enquiries come from and suggest what to improve first.</p>
        </div>
        <div className="signal-hero-visual">
          <ol className="signal-journey" aria-label="How customers find and contact you">
            <li>
              <Search aria-hidden="true" />
              <span>Search</span>
            </li>
            <li>
              <PanelsTopLeft aria-hidden="true" />
              <span>Website</span>
            </li>
            <li>
              <MailCheck aria-hidden="true" />
              <span>Enquiry</span>
            </li>
          </ol>
          <video
            width={640}
            height={640}
            poster="/brand/signal/services-poster.webp"
            preload="none"
            controls
            playsInline
            aria-label="Ortix Digital services showcase"
          >
            <source src="/brand/signal/services-showcase.webm" type="video/webm" />
            <a href="#services">Explore our digital marketing services</a>
          </video>
        </div>
      </div>
    </section>
    <section className="section signal-about dark" id="about"><div className="shell">
      <p className="kicker">About ORTIX DIGITAL</p>
      <div className="split"><h2>Find the Right Place to Start</h2><div><p className="copy">If customers struggle to find you, we look at search visibility and ads. If visitors reach your site but rarely get in touch, we look at the service pages and enquiry process. The work starts where it can best support your goal.</p><Link className="text-link mt-4" href="/about/">About ORTIX DIGITAL</Link></div></div>
    </div></section>
    <section className="section paper signal-services" id="services"><div className="shell">
      <h2 className="section-title">Digital Marketing Services</h2>
      <ServiceCards variant="signal" />
    </div></section>
    <section className="section"><div className="shell split">
      <div><h2>Where Should Your Business Start?</h2><p className="copy mt-5">We help businesses in Bengaluru and across Karnataka choose the work that matches how customers find and contact them.</p></div>
      <div>
        <h3>Get found for the services you want to sell</h3>
        <p className="copy mt-2">If people already search for your offer, <Link className="underline" href="/services/seo/">SEO</Link> can help improve how your pages appear over time. <Link className="underline" href="/services/google-ads/">Google Ads</Link> can help you reach active searchers while you test an offer and landing page.</p>
        <h3 className="mt-6">Give more visitors a reason to enquire</h3>
        <p className="copy mt-2">If visits rarely lead to conversations, review the page visitors see first. Make the scope, service area and next step easy to find, then check how your team receives and qualifies enquiries. A clearer <Link className="underline" href="/services/website-development/">website</Link> can support search, paid ads and social campaigns together.</p>
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
    <section className="section paper" id="testimonials" aria-labelledby="testimonials-title">
      <div className="shell">
        <h2 id="testimonials-title">Testimonials</h2>
        <p className="copy mt-3 mb-8">What our clients say</p>
        <div className="cards">
          {testimonials.map(({ name, service, quote }) => (
            <figure className="signal-testimonial" key={name}>
              <blockquote className="copy"><p>“{quote}”</p></blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{service}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
    <section className="section cta dark signal-cta"><div className="shell cta-row">
      <div>
        <h2>What We’ll Cover in Your Free Consultation</h2>
        <p className="copy">Tell us what you sell and where your enquiries come from today. We’ll discuss whether search, ads, or changes to your website are the best place to start.</p>
      </div>
      <Link className="button" href="#contact">Get Free Consultation</Link>
    </div></section>
    <FAQ />
    <ContactSection />
  </div>;
}
