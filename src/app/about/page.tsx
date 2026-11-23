import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined, ChevronDown, Compass, Eye, MessageSquareText, Target } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-page";
import { servicesSection } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import "./about.css";

const description = "Meet Ortix Digital, a Bengaluru digital marketing agency. See how we plan SEO, paid ads, social media and website projects around your business goals.";
export const metadata = pageMetadata("About ORTIX DIGITAL | Bengaluru Marketing Agency", description, "/about/");

const principles = [
  { title: "Agree on priorities", Icon: Compass, copy: "We discuss the services, customers and locations the work needs to support. The scope explains what we will create or change, where we need your input, and what we will review together." },
  { title: "Explain our decisions", Icon: MessageSquareText, copy: "We explain what a change is meant to solve. That might mean testing an offer in a smaller area before widening it, or giving a priority service its own page so visitors can understand what it includes." },
  { title: "Review what changed", Icon: ChartNoAxesCombined, copy: "We look at the signals that matter for the project, such as relevant searches, completed enquiry forms or your feedback on lead quality. Then we discuss what the evidence supports and what to try next." },
];

const questions = [
  ["Who does ORTIX DIGITAL work with?", "We work with businesses in Bengaluru and across Karnataka that want to improve how customers discover and contact them. The first conversation helps us understand your goals, service area and which part of your marketing needs attention."],
  ["Can we hire ORTIX for one service?", "Yes. You can discuss a focused project, such as an SEO audit, a Google Ads campaign, or a website update. If another part of your marketing affects the work, we will explain the dependency so you can decide how to proceed."],
  ["What do you need from us before work begins?", "Share your priority services, the audiences you want to reach, and what a useful enquiry looks like. Your existing website, active channels and approved brand materials are helpful if available. We agree who will approve the work and which access is needed after the scope is clear."],
  ["How will we know what has been done and what comes next?", "We agree how to review the work and which measures matter for the project. A progress review covers the changes made, relevant findings and the next decision. If data is limited, we explain what can be assessed and what needs more evidence."],
  ["Can you work with our existing website or marketing team?", "Yes. We review what can be improved on your current site and discuss how to coordinate with the people who already maintain it or manage your campaigns. The scope should make it clear who owns each change and approval."],
] as const;

export default function AboutPage() {
  return <div className="about-page">
    <InnerHero
      title="About ORTIX DIGITAL"
      eyebrow="Who We Are"
      description="We help businesses in Bengaluru get found online and turn interest into enquiries."
      current={{ label: "About Us", href: "/about/" }}
      visual={<Image className="about-hero-art" src="/brand/about-campaign-team.webp" alt="Illustrative scene of three people discussing a digital marketing campaign" width={1200} height={900} sizes="(max-width: 767px) 90vw, (max-width: 1320px) 50vw, 680px" preload />}
    />
    <section className="section"><div className="shell split">
      <h2>Who We Are</h2>
      <div>
        <p className="copy">ORTIX DIGITAL is a digital marketing agency serving Bengaluru and Karnataka. We bring together SEO, paid advertising, social media, website development and design to help customers find your business and take the next step.</p>
        <p className="copy">If prospects struggle to find you, we look at how they search. If they land on your website and leave with questions, we look at the pages they saw and the actions they could take. Those findings shape the work we recommend.</p>
        <Link className="text-link mt-3" href={servicesSection}>Explore Our Services</Link>
      </div>
    </div></section>
    <section className="section paper"><div className="shell">
      <h2 className="section-title">Vision &amp; Mission</h2>
      <div className="about-purpose">
        <article className="about-purpose-card dark">
          <Eye aria-hidden="true" />
          <h3>Our Vision</h3>
          <p className="copy">To help businesses across Bengaluru and Karnataka become easier to find, understand, and trust online.</p>
        </article>
        <article className="about-purpose-card">
          <Target aria-hidden="true" />
          <h3>Our Mission</h3>
          <p className="copy">To help businesses earn relevant enquiries through SEO, paid advertising, social media, and websites. We agree on clear priorities, explain our work, and use the available data to decide what to improve next.</p>
        </article>
      </div>
    </div></section>
    <section className="section dark about-work"><div className="shell">
      <h2 className="section-title">How We Work</h2>
      <div className="about-principles">
        {principles.map(({ title, Icon, copy }) => <article key={title}>
          <Icon aria-hidden="true" /><h3>{title}</h3><p className="copy">{copy}</p>
        </article>)}
      </div>
    </div></section>
    <section className="section"><div className="shell split">
      <div><h2>Frequently Asked Questions</h2><p className="copy mt-4">What to know before working with ORTIX DIGITAL.</p></div>
      <div className="faq-list about-faq">
        {questions.map(([question, answer]) => <details key={question} name="ortix-about-faq">
          <summary>{question}<ChevronDown size={19} aria-hidden="true" /></summary>
          <p className="copy">{answer}</p>
        </details>)}
      </div>
    </div></section>
    <section className="section cta dark about-cta"><div className="shell cta-row">
      <div><h2>Let&apos;s Talk About Your Business</h2><p className="copy">Tell us what you sell and how customers find you today. We can discuss where to start.</p></div>
      <Link className="button" href="/contact/">Get Free Consultation</Link>
    </div></section>
  </div>;
}
