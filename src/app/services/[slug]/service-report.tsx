import { ChartNoAxesCombined, Gauge, Search } from "lucide-react";
import type { ServiceSlug } from "@/data/service-guides";
import "./service-report.css";

const analytics = ["Google Analytics 4", "Review traffic sources and configured enquiry events."] as const;
const pageSpeed = ["PageSpeed Insights", "Review mobile and desktop performance diagnostics."] as const;

type Report = {
  title: string;
  period: string;
  tools: readonly (readonly [string, string])[];
  metrics: readonly (readonly [string, string])[];
  chart: { title: string; values: readonly (readonly [string, number])[] };
  action: string;
};

const reports: Record<ServiceSlug, Report> = {
  seo: {
    title: "Organic Search Overview",
    period: "Four-week reporting period",
    tools: [
      ["Google Search Console", "Review search impressions, clicks and queries."],
      ["Google Analytics 4", "Review organic visits and configured enquiry events."],
      pageSpeed,
    ],
    metrics: [["Impressions", "1,200"], ["Organic clicks", "96"], ["Click-through rate", "8%"]],
    chart: { title: "Google Search clicks by week", values: [["Week 1", 16], ["Week 2", 22], ["Week 3", 25], ["Week 4", 33]] },
    action: "Review which searches are bringing clicks to the priority service page.",
  },
  "google-ads": {
    title: "Search Campaign Overview",
    period: "Four-week reporting period",
    tools: [
      ["Google Ads", "Review spend, search terms and recorded conversions."],
      analytics,
      ["Google Tag Manager", "Manage and test conversion tags."],
    ],
    metrics: [["Ad spend", "₹12,000"], ["Tracked enquiries", "24"], ["Cost per enquiry", "₹500"]],
    chart: { title: "Tracked enquiries by week", values: [["Week 1", 4], ["Week 2", 5], ["Week 3", 7], ["Week 4", 8]] },
    action: "Compare actual lead quality by search term before moving budget to the next campaign.",
  },
  "meta-ads": {
    title: "Paid Social Campaign Overview",
    period: "Four-week reporting period",
    tools: [
      ["Meta Ads Manager", "Compare spend, results and performance by creative."],
      ["Meta Events Manager", "Check incoming events for website conversion tracking."],
      analytics,
    ],
    metrics: [["Ad spend", "₹9,000"], ["Leads recorded", "30"], ["Cost per lead", "₹300"]],
    chart: { title: "Leads recorded by creative", values: [["Creative A", 12], ["Creative B", 8], ["Creative C", 6], ["Creative D", 4]] },
    action: "Check which creatives produced leads your team could follow up with before scaling.",
  },
  "social-media-marketing": {
    title: "Social Content Overview",
    period: "Four-week reporting period",
    tools: [
      ["Meta Business Suite", "Review Facebook and Instagram content performance."],
      ["Canva", "Prepare reusable creative layouts for the publishing calendar."],
      ["Google Sheets", "Track the content calendar, owners and approvals."],
    ],
    metrics: [["Posts published", "12"], ["Accounts reached", "8,400"], ["Post interactions", "360"]],
    chart: { title: "Interactions by content format", values: [["Reels", 150], ["Carousels", 110], ["Posts", 64], ["Stories", 36]] },
    action: "Review which topics earned useful comments and saves, then plan the next set of posts.",
  },
  "website-development": {
    title: "Website Launch Readiness",
    period: "Pre-launch quality checks",
    tools: [
      pageSpeed,
      ["Lighthouse", "Review accessibility and page-performance diagnostics."],
      ["Playwright", "Test navigation and enquiry flows in a browser."],
    ],
    metrics: [["Pages reviewed", "8"], ["Checks passed", "18 / 20"], ["Open fixes", "2"]],
    chart: { title: "Checks passed by area", values: [["Navigation", 5], ["Mobile", 5], ["Forms", 4], ["Metadata", 4]] },
    action: "Resolve the open issues and run the enquiry and navigation checks again before launch.",
  },
  "branding-design": {
    title: "Brand Kit Delivery Overview",
    period: "Brand asset handover",
    tools: [
      ["Figma", "Present design directions and collect review feedback."],
      ["Adobe Illustrator", "Prepare scalable logo and vector artwork."],
      ["Canva", "Package editable layouts for recurring social content."],
    ],
    metrics: [["Assets in scope", "12"], ["Approved assets", "10"], ["In review", "2"]],
    chart: { title: "Approved assets by type", values: [["Logo files", 3], ["Brand guide", 1], ["Templates", 4], ["Ad assets", 2]] },
    action: "Confirm the two items in review and list the formats needed for final handover.",
  },
};

export function ServiceReport({ slug, serviceName }: { slug: ServiceSlug; serviceName: string }) {
  const { title, period, tools, metrics, chart, action } = reports[slug];
  const sectionId = slug + "-report";
  const titleId = sectionId + "-title";
  const maxValue = Math.max(...chart.values.map(([, value]) => value));
  const toolIcons = [Search, ChartNoAxesCombined, Gauge];

  return <section className="section service-report-section" id={sectionId} aria-labelledby={titleId}>
    <div className="shell">
      <div className="service-heading">
        <h2 id={titleId}>{serviceName} Tools &amp; Reporting</h2>
        <p className="copy">Explore the tools relevant to this service and see what a report can cover.</p>
      </div>

      <div className="service-report-layout">
        <ul className="service-report-tools" aria-label={serviceName + " tools"}>
          {tools.map(([name, description], index) => {
            const Icon = toolIcons[index];
            return <li key={name}>
              <span className="service-report-tool-icon"><Icon aria-hidden="true" size={21} /></span>
              <div><h3>{name}</h3><p>{description}</p></div>
            </li>;
          })}
        </ul>

        <figure className="service-dashboard">
          <figcaption className="service-dashboard-title">
            <div><h3>{title}</h3><p>{period}</p></div>
            <span>Sample data</span>
          </figcaption>
          <dl className="service-dashboard-metrics">
            {metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <div className="service-dashboard-chart">
            <h4>{chart.title}</h4>
            <ol className="service-dashboard-bars">
              {chart.values.map(([label, value]) => <li key={label}>
                <span>{value}</span>
                <span className="service-dashboard-bar" style={{ height: `${value / maxValue * 5}rem` }} aria-hidden="true" />
                <span>{label}</span>
              </li>)}
            </ol>
          </div>
          <div className="service-dashboard-note"><strong>Next action</strong><p>{action}</p></div>
        </figure>
      </div>
    </div>
  </section>;
}
