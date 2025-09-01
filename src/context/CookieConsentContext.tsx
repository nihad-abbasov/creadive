"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentData {
  hasConsented: boolean;
  preferences: CookiePreferences;
  timestamp: string;
}

interface CookieConsentContextType {
  hasConsented: boolean;
  preferences: CookiePreferences;
  updatePreferences: (preferences: CookiePreferences) => void;
  resetConsent: () => void;
  isLoading: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load consent data from localStorage
    const loadConsentData = () => {
      try {
        const consentData = localStorage.getItem("cookie-consent");
        if (consentData) {
          const parsedData: CookieConsentData = JSON.parse(consentData);
          setHasConsented(parsedData.hasConsented);
          setPreferences(parsedData.preferences || defaultPreferences);
          
          // Apply consent to tracking scripts
          applyConsentToTracking(parsedData.preferences);
        }
      } catch (error) {
        console.error("Error loading cookie consent data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsentData();
  }, []);

  const applyConsentToTracking = (prefs: CookiePreferences) => {
    if (typeof window === "undefined") return;

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Update Google Analytics consent
    if (prefs.analytics) {
      window.dataLayer.push({
        event: "consent_update",
        analytics_consent: "granted",
        timestamp: new Date().toISOString(),
      });
    } else {
      window.dataLayer.push({
        event: "consent_update", 
        analytics_consent: "denied",
        timestamp: new Date().toISOString(),
      });
    }

    // Update Marketing consent (Facebook Pixel)
    if (prefs.marketing) {
      window.dataLayer.push({
        event: "consent_update",
        marketing_consent: "granted",
        timestamp: new Date().toISOString(),
      });
      
      // Initialize Facebook Pixel if marketing consent is granted
      if (typeof window.fbq === "function") {
        window.fbq("consent", "grant");
      }
    } else {
      window.dataLayer.push({
        event: "consent_update",
        marketing_consent: "denied", 
        timestamp: new Date().toISOString(),
      });
      
      // Revoke Facebook Pixel consent
      if (typeof window.fbq === "function") {
        window.fbq("consent", "revoke");
      }
    }
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    const consentData: CookieConsentData = {
      hasConsented: true,
      preferences: newPreferences,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem("cookie-consent", JSON.stringify(consentData));
      setHasConsented(true);
      setPreferences(newPreferences);
      
      // Apply the new consent settings
      applyConsentToTracking(newPreferences);
      
      // Trigger custom event for other parts of the app
      window.dispatchEvent(new CustomEvent("cookieConsentUpdated", {
        detail: { preferences: newPreferences }
      }));
    } catch (error) {
      console.error("Error saving cookie consent:", error);
    }
  };

  const resetConsent = () => {
    try {
      localStorage.removeItem("cookie-consent");
      setHasConsented(false);
      setPreferences(defaultPreferences);
      
      // Trigger custom event
      window.dispatchEvent(new CustomEvent("cookieConsentReset"));
    } catch (error) {
      console.error("Error resetting cookie consent:", error);
    }
  };

  const value: CookieConsentContextType = {
    hasConsented,
    preferences,
    updatePreferences,
    resetConsent,
    isLoading,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
}

// Utility function to check if specific cookie type is allowed
export function isCookieAllowed(type: keyof CookiePreferences): boolean {
  try {
    const consentData = localStorage.getItem("cookie-consent");
    if (!consentData) return false;
    
    const parsedData: CookieConsentData = JSON.parse(consentData);
    return parsedData.preferences[type] || false;
  } catch {
    return false;
  }
}

// Declare global types for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    fbq: (action: string, event?: string, options?: unknown) => void;
  }
}
