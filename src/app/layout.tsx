import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Creadive - İdeallarınızı gerçəkləşdirək ✨",
  description:
    "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
  openGraph: {
    title: "Creadive - İdeallarınızı gerçəkləşdirək ✨",
    description:
      "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
    type: "website",
    url: "https://creadive.az",
    images: [
      {
        url: "https://creadive.az/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creadive - İdeallarınızı gerçəkləşdirək ✨",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creadive - İdeallarınızı gerçəkləşdirək ✨",
    description:
      "Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
    images: ["https://creadive.az/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Creadive Agency - İdeallarınızı gerçəkləşdirək ✨"
        />
        <meta
          name="keywords"
          content="Creadive, Website, Targeting, Marketing, Agency, Design, Development, SEO, Digital, Marketing, Agency, Design, Development, SEO, Digital"
        />
        <meta name="author" content="Creadive Agency" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Creadive Agency" />
        <meta
          property="og:description"
          content="Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creadive.az" />
        <meta property="og:image" content="https://creadive.az/og-img.png" />
        <meta property="og:locale" content="az_AZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creadive Agency" />
        <meta
          name="twitter:description"
          content="Əl işləri ilə hazırlanmış dəbdəbəli geyimlər və yeni kolleksiyalar. 21 Couture House ilə tanış olun."
        />
        <meta name="twitter:image" content="https://creadive.az/og-img.png" />

        <link rel="canonical" href="https://creadive.az" />
        <link rel="alternate" hrefLang="az" href="https://creadive.az" />

        {/* Favicon */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Preload critical assets */}
        {/* <link
          rel="preload"
          href="/hero/hero-1.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/hero/hero-2.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/hero/hero-3.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/hero/hero-4.webp"
          as="image"
          type="image/webp"
        /> */}
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
