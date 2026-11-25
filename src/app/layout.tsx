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

const metaPixelId = "1926140735024385";
const metaPixelCode = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');
`;

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
      <head>
        {indexingEnabled && <script id="meta-pixel" dangerouslySetInnerHTML={{ __html: metaPixelCode }} />}
      </head>
      <body id="top">
        {indexingEnabled && <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta's 1px pixel must load without JavaScript. */}
          <img height="1" width="1" alt="" style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`} />
        </noscript>}
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
