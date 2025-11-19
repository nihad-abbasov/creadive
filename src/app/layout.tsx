import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Schema from "@/components/Schema";
import { ReactNode } from "react";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
};

export const metadata: Metadata = {
  title: {
    default: "Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri",
    template: "%s | Creadive",
  },
  description:
    "Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun.",
  authors: [{ name: "Creadive Agency" }],
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Creadive",
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "cB9OBIZQMTaHp6z1iahw8faF0E9WJnWVq1KDcogBl70",
  },
  openGraph: {
    title: "Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri",
    description:
      "Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun.",
    type: "website",
    url: "https://creadive.az",
    siteName: "Creadive Agency",
    locale: "az_AZ",
    images: [
      {
        url: "https://creadive.az/og-img.png",
        width: 1200,
        height: 630,
        alt: "Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri",
    description:
      "Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun.",
    images: ["https://creadive.az/og-img.png"],
  },
  alternates: {
    canonical: "https://creadive.az",
    languages: {
      az: "https://creadive.az",
    },
  },
  icons: {
    icon: [
      { url: "/logos/white_h.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/white_h.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logos/white_h.png" },
      { url: "/logos/white_h.png", sizes: "152x152" },
      { url: "/logos/white_h.png", sizes: "167x167" },
      { url: "/logos/white_h.png", sizes: "180x180" },
    ],
    other: [{ rel: "mask-icon", url: "/logos/white_h.svg", color: "#1e40af" }],
  },
  // Extra meta that Metadata doesn’t model directly:
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#1e40af",
    "msapplication-tap-highlight": "no",
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html className={plusJakartaSans.variable} lang="az">
      <head>
        {/* <link rel="preload" href="/logos/white_h.png" as="image" type="image/png" /> */}

        {/* Connection hints (only if you really need them) */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        {/* You’re using next/font (self-hosted), so fonts preconnects are usually unnecessary */}
        {/* <link rel="dns-prefetch" href="//fonts.googleapis.com" /> */}

        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://connect.facebook.net"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-sans antialiased bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950">
        {/* GTM noscript must be right after opening body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLJ7VTBH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PLJ7VTBH');

              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'gtm_test',
                test_message: 'GTM is working!',
                timestamp: new Date().toISOString()
              });
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel-code"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '628846330279373');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=628846330279373&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .catch(function(err) { console.log('SW registration failed:', err); });
                });
              }
            `,
          }}
        />

        {/* Schema Markup (JSON-LD) */}
        <Schema type="organization" />
        <Schema type="website" />

        {children}
      </body>
    </html>
  );
}
