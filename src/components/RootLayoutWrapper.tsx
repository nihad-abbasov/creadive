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

  // Global smooth scrolling for hash navigation
  useEffect(() => {
    const handleSmoothScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Handle initial hash on page load
    handleSmoothScroll();

    // Listen for hash changes (when user clicks a link with hash)
    window.addEventListener("hashchange", handleSmoothScroll);

    return () => {
      window.removeEventListener("hashchange", handleSmoothScroll);
    };
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
