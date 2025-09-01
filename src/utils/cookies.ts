import { CookiePreferences } from "@/context/CookieConsentContext";

/**
 * Cookie utility functions for managing cookie consent and preferences
 */

export interface CookieConsentData {
  hasConsented: boolean;
  preferences: CookiePreferences;
  timestamp: string;
}

/**
 * Get cookie consent data from localStorage
 */
export function getCookieConsentData(): CookieConsentData | null {
  if (typeof window === "undefined") return null;

  try {
    const data = localStorage.getItem("cookie-consent");
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading cookie consent data:", error);
    return null;
  }
}

/**
 * Check if user has consented to cookies
 */
export function hasUserConsented(): boolean {
  const data = getCookieConsentData();
  return data?.hasConsented || false;
}

/**
 * Check if a specific cookie type is allowed
 */
export function isCookieTypeAllowed(type: keyof CookiePreferences): boolean {
  const data = getCookieConsentData();
  if (!data || !data.hasConsented) return false;

  return data.preferences[type] || false;
}

/**
 * Get current cookie preferences
 */
export function getCookiePreferences(): CookiePreferences {
  const data = getCookieConsentData();
  return data?.preferences || {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  };
}

/**
 * Check if analytics cookies are allowed (for Google Analytics/GTM)
 */
export function isAnalyticsAllowed(): boolean {
  return isCookieTypeAllowed("analytics");
}

/**
 * Check if marketing cookies are allowed (for Facebook Pixel, ads, etc.)
 */
export function isMarketingAllowed(): boolean {
  return isCookieTypeAllowed("marketing");
}

/**
 * Check if functional cookies are allowed
 */
export function isFunctionalAllowed(): boolean {
  return isCookieTypeAllowed("functional");
}

/**
 * Helper function to conditionally execute analytics code
 */
export function withAnalyticsConsent(callback: () => void): void {
  if (isAnalyticsAllowed()) {
    callback();
  }
}

/**
 * Helper function to conditionally execute marketing code
 */
export function withMarketingConsent(callback: () => void): void {
  if (isMarketingAllowed()) {
    callback();
  }
}

/**
 * Helper function to conditionally execute functional code
 */
export function withFunctionalConsent(callback: () => void): void {
  if (isFunctionalAllowed()) {
    callback();
  }
}

/**
 * Clear all cookie consent data (for testing or reset)
 */
export function clearCookieConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem("cookie-consent");

    // Dispatch event to notify components
    window.dispatchEvent(new CustomEvent("cookieConsentReset"));
  } catch (error) {
    console.error("Error clearing cookie consent:", error);
  }
}

/**
 * Get consent timestamp
 */
export function getConsentTimestamp(): string | null {
  const data = getCookieConsentData();
  return data?.timestamp || null;
}

/**
 * Check if consent is expired (older than 1 year)
 */
export function isConsentExpired(): boolean {
  const timestamp = getConsentTimestamp();
  if (!timestamp) return true;

  const consentDate = new Date(timestamp);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return consentDate < oneYearAgo;
}

/**
 * Track consent change event (for analytics)
 */
export function trackConsentChange(preferences: CookiePreferences): void {
  if (typeof window === "undefined") return;

  try {
    // Send to Google Analytics if available and analytics consent is given
    if (preferences.analytics && window.gtag) {
      window.gtag("event", "cookie_consent_updated", {
        analytics_consent: preferences.analytics,
        marketing_consent: preferences.marketing,
        functional_consent: preferences.functional,
      });
    }

    // Send to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cookie_consent_updated",
      consent_preferences: preferences,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error tracking consent change:", error);
  }
}

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
