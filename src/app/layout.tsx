import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Creadive - Yaradıcı Rəqəmsal Agentlik",
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
      <body className={`${poppins.className} antialiased`}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
