import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
import Schema from "@/components/Schema";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Creadive - İdealarınızı gerçəkləşdirək ✨",
  description:
    "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
  keywords:
    "Creadive, Website, Targeting, Marketing, Agency, Design, Development, SEO, Digital",
  authors: [{ name: "Creadive Agency" }],
  robots: "index, follow",
  openGraph: {
    title: "Creadive - İdealarınızı gerçəkləşdirək ✨",
    description:
      "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
    type: "website",
    url: "https://creadive.az",
    siteName: "Creadive Agency",
    locale: "az_AZ",
    images: [
      {
        url: "https://creadive.az/og-img.png",
        width: 1200,
        height: 630,
        alt: "Creadive - İdealarınızı gerçəkləşdirək ✨",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creadive - İdealarınızı gerçəkləşdirək ✨",
    description:
      "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
    images: ["https://creadive.az/og-img.png"],
  },
  alternates: {
    canonical: "https://creadive.az",
    languages: {
      az: "https://creadive.az",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950`}
      >
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="cB9OBIZQMTaHp6z1iahw8faF0E9WJnWVq1KDcogBl70"
        />
        {/* Google Tag Manager (noscript) */}
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
              
              // Test event to verify GTM is working
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'event': 'gtm_test',
                'test_message': 'GTM is working!',
                'timestamp': new Date().toISOString()
              });
            `,
          }}
        />

        {/* Meta Pixel Code */}
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
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=628846330279373&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Schema Markup */}
        <Schema type="organization" />
        <Schema type="website" />

        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html >
  );
}
