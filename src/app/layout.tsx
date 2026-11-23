import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Brand, logoAvailable } from "@/components/layout/brand";
import { JsonLd } from "@/components/layout/json-ld";
import { indexingEnabled, organizationId, siteOrigin, siteUrl } from "@/lib/seo";
import { serviceRegions } from "@/data/navigation";
import { businessEmail, businessPhone } from "@/lib/business";
import "./globals.css";

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteOrigin && { metadataBase: new URL(siteOrigin) }),
  ...(!indexingEnabled && { robots: { index: false, follow: true } }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bricolage.variable} ${geist.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header brand={<Brand preload />} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL", url: siteUrl("/"), logo: logoAvailable ? siteUrl("/brand/ortix-logo.png") : undefined, areaServed: serviceRegions, email: businessEmail, telephone: businessPhone }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": siteUrl("/#website"), name: "ORTIX DIGITAL", url: siteUrl("/"), inLanguage: "en-IN", publisher: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
      </body>
    </html>
  );
}
