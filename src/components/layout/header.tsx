"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { navigation, servicesSection } from "@/data/navigation";
import { services } from "@/data/services";

const normalize = (path: string) => path.replace(/\/$/, "") || "/";

export default function Header({ brand }: { brand: ReactNode }) {
  const pathname = normalize(usePathname());
  const [menu, setMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);

  function close() {
    setMenu(false);
    setServicesOpen(false);
  }

  return (
    <header className="site-header" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) close();
    }} onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesButton.current?.focus();
      } else if (menu) {
        setMenu(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="shell header-row">
        <div onClick={close}>{brand}</div>
        <button ref={menuButton} className="menu-toggle" type="button" aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="site-navigation" onClick={() => {
          setMenu(!menu);
          setServicesOpen(false);
        }}>{menu ? <X /> : <Menu />}</button>
        <nav id="site-navigation" className="site-nav" aria-label="Main navigation" data-open={menu}>
          {navigation.map(({ label, href }) => {
            const current = pathname === normalize(href);
            const link = <Link href={href} aria-current={current ? "page" : undefined} onClick={close}>{label}</Link>;
            return href === servicesSection ? (
              <div key={href} className="nav-service" data-active={pathname.startsWith("/services/")}>
                <div className="nav-service-row">{link}<button ref={servicesButton} type="button" aria-label="Toggle service links" aria-expanded={servicesOpen} aria-controls="service-navigation" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown size={16} /></button></div>
                <ul className="service-menu" id="service-navigation" hidden={!servicesOpen}>
                  {services.map(({ slug, title }) => <li key={slug}><Link href={`/services/${slug}/`} aria-current={pathname === `/services/${slug}` ? "page" : undefined} onClick={close}>{title}</Link></li>)}
                </ul>
              </div>
            ) : <div key={href}>{link}</div>;
          })}
          <Link className="button mobile-cta" href="/contact/" onClick={close}>Get Free Consultation</Link>
        </nav>
        <Link className="button desktop-cta" href="/contact/" onClick={close}>Get Free Consultation</Link>
      </div>
    </header>
  );
}
