import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { Brand, logoAvailable } from "@/components/layout/brand";
import { JsonLd } from "@/components/layout/json-ld";
import { indexingEnabled, organizationId, siteOrigin, siteUrl } from "@/lib/seo";
import { serviceRegions } from "@/data/navigation";
import { businessEmail, businessPhone } from "@/lib/business";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteOrigin && { metadataBase: new URL(siteOrigin) }),
  ...(!indexingEnabled && { robots: { index: false, follow: true } }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header brand={<Brand preload />} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppLink className="floating-whatsapp" floating />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL", url: siteUrl("/"), logo: logoAvailable ? siteUrl("/brand/ortix-digital-logo.png") : undefined, areaServed: serviceRegions, email: businessEmail, telephone: businessPhone }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": siteUrl("/#website"), name: "ORTIX DIGITAL", url: siteUrl("/"), inLanguage: "en-IN", publisher: { "@type": "Organization", "@id": organizationId, name: "ORTIX DIGITAL" } }} />
      </body>
    </html>
  );
}
