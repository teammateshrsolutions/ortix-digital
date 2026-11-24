"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { navigation, servicesSection } from "@/data/navigation";
import { servicePath } from "@/data/route-slugs";
import { services } from "@/data/services";
import "./header.css";

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
              <div
                key={href}
                className="nav-service"
                data-active={pathname.startsWith("/services/")}
                onPointerEnter={event => {
                  if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) {
                    setServicesOpen(true);
                  }
                }}
                onPointerLeave={event => {
                  if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1024px) and (hover: hover)").matches &&
                    !event.currentTarget.contains(document.activeElement)) {
                    setServicesOpen(false);
                  }
                }}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
                }}
              >
                <div className="nav-service-row">
                  {link}
                  <button className="nav-service-toggle" ref={servicesButton} type="button" aria-label="Toggle service links" aria-expanded={servicesOpen} aria-controls="service-navigation" onClick={() => setServicesOpen(!servicesOpen)}>
                    <span className="nav-service-chevron"><ChevronDown size={16} strokeWidth={2.5} aria-hidden="true" /></span>
                  </button>
                </div>
                <ul className="service-menu" id="service-navigation" hidden={!servicesOpen}>
                  {services.map(({ slug, title }) => <li key={slug}><Link href={servicePath(slug)} aria-current={pathname === servicePath(slug).slice(0, -1) ? "page" : undefined} onClick={close}>{title}</Link></li>)}
                </ul>
              </div>
            ) : <div key={href}>{link}</div>;
          })}
          <Link className="button mobile-cta" href="/audit/" onClick={close}>Get a Free Marketing Audit</Link>
        </nav>
        <Link className="button desktop-cta" href="/audit/" onClick={close}>Get a Free Marketing Audit</Link>
      </div>
    </header>
  );
}
