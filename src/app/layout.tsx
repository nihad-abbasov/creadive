import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Schema from "@/components/Schema";
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
    other: [
      { rel: "mask-icon", url: "/logos/white_h.svg", color: "#1e40af" },
    ],
  },
  // Extra meta that Metadata doesn’t model directly:
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#1e40af",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="az" className={plusJakartaSans.variable}>
      <head>
        {/* Critical CSS for Hero Section (keep minimal) */}
        {/* <style
          dangerouslySetInnerHTML={{
            __html: `
              .text-5xl { font-size: 3rem; line-height: 1; }
              .sm\\:text-5xl { font-size: 3rem; line-height: 1; }
              .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
              .font-bold { font-weight: 700; }
              .text-white { color: rgb(255 255 255); }
              .mb-6 { margin-bottom: 1.5rem; }
              .bg-gradient-to-l { background-image: linear-gradient(to left, var(--tw-gradient-stops)); }
              .from-\\[\\#15B6B0\\] { --tw-gradient-from: #15B6B0; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(21, 182, 176, 0)); }
              .to-\\[\\#20C943\\] { --tw-gradient-to: #20C943; }
              .bg-clip-text { background-clip: text; }
              .text-transparent { color: transparent; }
              .drop-shadow-\\[0_0_30px_rgba\\(255\\,255\\,255\\,0\\.6\\)\\] { filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)); }
              .drop-shadow-\\[0_0_30px_rgba\\(22\\,182\\,176\\,0\\.8\\)\\] { filter: drop-shadow(0 0 30px rgba(22, 182, 176, 0.8)); }
              .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
              .text-gray-200 { color: rgb(229 231 235); }
              .mb-8 { margin-bottom: 2rem; }
              .max-w-3xl { max-width: 48rem; }
              .mx-auto { margin-left: auto; margin-right: auto; }
              .grid { display: grid; }
              .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
              .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .gap-4 { gap: 1rem; }
              .w-full { width: 100%; }
              .md\\:w-max { width: max-content; }
              .bg-blue-600 { background-color: rgb(37 99 235); }
              .text-white { color: rgb(255 255 255); }
              .px-8 { padding-left: 2rem; padding-right: 2rem; }
              .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
              .rounded-lg { border-radius: 0.5rem; }
              .font-medium { font-weight: 500; }
              .hover\\:bg-blue-700:hover { background-color: rgb(29 78 216); }
              .transition-colors { transition: color, background-color, border-color, text-decoration-color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1); }
              .flex { display: flex; }
              .items-center { align-items: center; }
              .justify-center { justify-content: center; }
              .gap-2 { gap: 0.5rem; }
              .bg-white\\/10 { background-color: rgb(255 255 255 / 0.1); }
              .backdrop-blur-sm { backdrop-filter: blur(4px); }
              .border { border-width: 1px; }
              .border-white\\/20 { border-color: rgb(255 255 255 / 0.2); }
              .hover\\:bg-white\\/20:hover { background-color: rgb(255 255 255 / 0.2); }
              .w-5 { width: 1.25rem; }
              .h-5 { height: 1.25rem; }
              .fill-none { fill: none; }
              .stroke-current { stroke: currentColor; }
              .stroke-2 { stroke-width: 2; }
              .stroke-linecap-round { stroke-linecap: round; }
              .stroke-linejoin-round { stroke-linejoin: round; }
            `,
          }}
        /> */}

        {/* Preload critical images (only if they're immediately visible) */}
        {/* Removed hero2.jpg preload as it's not immediately critical */}
        {/* Removed white_h.png preload as Logo component uses white_h.svg */}
        {/* <link
          rel="preload"
          href="/hero2.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link rel="preload" href="/logos/white_h.png" as="image" type="image/png" /> */}




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

        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
