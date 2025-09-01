"use client";

import { CookieConsentProvider } from "@/context/CookieConsentContext";
import Navigation from "@/components/semantic/Navigation";
import { ToastProvider } from "@/context/ToastContext";
import { ScrollProgress } from "./ScrollProgress";
import Footer from "@/components/semantic/Footer";
import Main from "@/components/semantic/Main";
import { useEffect, useState } from "react";
import CookieConsent from "./CookieConsent";
import BackToTop from "./BackToTop";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <CookieConsentProvider>
      <ToastProvider>
        <div className="flex flex-col min-h-screen">
          <ScrollProgress />
          <Navigation />
          <Main>{children}</Main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </div>
      </ToastProvider>
    </CookieConsentProvider>
  );
}
