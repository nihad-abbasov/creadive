import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
import Schema from "@/components/Schema";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  // title: "Creadive - İdealarınızı gerçəkləşdirək ✨",
  description:
    "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
  // keywords:
  //   "Creadive, Website, Targeting, Marketing, Agency, Design, Development, SEO, Digital",
  authors: [{ name: "Creadive Agency" }],
  robots: "index, follow",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Creadive",
  },
  formatDetection: {
    telephone: false,
  },
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
      <head>
        {/* Critical CSS for Hero Section */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical hero styles */
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
            .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
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
          `
        }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950`}
      >
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="cB9OBIZQMTaHp6z1iahw8faF0E9WJnWVq1KDcogBl70"
        />

        {/* Viewport Meta Tag */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* PWA Meta Tags */}
        <meta name="application-name" content="Creadive" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Creadive" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/logos/white_h.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logos/white_h.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logos/white_h.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/logos/white_h.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logos/white_h.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logos/white_h.png" />
        <link rel="mask-icon" href="/logos/white_h.svg" color="#1e40af" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/hero2.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href="/logos/white_h.png" as="image" type="image/png" />

        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preconnect to External Domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://creadive.az" />

        {/* Page Title and Description */}
        <title>Creadive - İdealarınızı gerçəkləşdirək ✨</title>
        <meta name="description" content="Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik." />
        <meta name="keywords" content="Creadive, vebsayt yaradılması, targeting, rəqəmsal marketinq, agentlik, dizayn, web development, SEO, digital marketing, social media marketing, e-commerce, branding, UI/UX design, mobile development, content marketing, analytics, Baku, Azerbaijan" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Creadive - İdealarınızı gerçəkləşdirək ✨" />
        <meta property="og:description" content="Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik." />
        <meta property="og:url" content="https://creadive.az" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Creadive Agency" />
        <meta property="og:locale" content="az_AZ" />
        <meta property="og:image" content="https://creadive.az/og-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Creadive - İdealarınızı gerçəkləşdirək ✨" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creadive - İdealarınızı gerçəkləşdirək ✨" />
        <meta name="twitter:description" content="Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik." />
        <meta name="twitter:image" content="https://creadive.az/og-img.png" />

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
          strategy="lazyOnload"
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
          strategy="lazyOnload"
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
        {/* End Meta Pixel Code */}

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
               if ('serviceWorker' in navigator) {
                 window.addEventListener('load', function() {
                   navigator.serviceWorker.register('/sw.js')
                     .then(function(registration) {
                       // console.log('SW registered: ', registration);
                     })
                     .catch(function(registrationError) {
                       console.log('SW registration failed: ', registrationError);
                     });
                 });
               }
             `,
          }}
        />

        {/* Schema Markup */}
        <Schema type="organization" />
        <Schema type="website" />

        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html >
  );
}
