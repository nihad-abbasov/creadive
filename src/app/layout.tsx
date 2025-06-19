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
    "Biz veb inkişaf, dizayn və rəqəmsal marketinq həlləri sahəsində ixtisaslaşmış yaradıcı rəqəmsal agentliyik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
