import { servicePath } from "@/data/route-slugs";
import Link from "next/link";
import { Search, Target, PanelsTopLeft, Megaphone, CodeXml, Palette } from "lucide-react";
import { services } from "@/data/services";
import { SignalServiceIcon } from "./signal-service-icon";

const icons = {
  seo: Search,
  "google-ads": Target,
  "meta-ads": PanelsTopLeft,
  "social-media-marketing": Megaphone,
  "website-development": CodeXml,
  "branding-design": Palette,
};

export function ServiceCards({ variant = "default" }: { variant?: "default" | "signal" }) {
  return <div className="cards">{services.map((service) => {
    if (variant === "signal") {
      return <article className="signal-service-card" key={service.slug}>
        <div className="signal-service-icon"><SignalServiceIcon service={service.slug} /></div>
        <div className="signal-service-copy">
          <h3>{service.title}</h3>
          <p className="copy">{service.description}</p>
          <Link className="text-link signal-service-link" href={servicePath(service.slug)} aria-label={`Learn more about ${service.title}`}>Learn more</Link>
        </div>
      </article>;
    }
    const Icon = icons[service.slug];
    return <article className="service-card" key={service.slug}>
      <div className="service-icon"><Icon aria-hidden="true" /></div>
      <h3>{service.title}</h3><p className="copy">{service.description}</p>
      <Link className="text-link" href={servicePath(service.slug)} aria-label={`Learn more about ${service.title}`}>Learn more</Link>
    </article>;
  })}</div>;
}
