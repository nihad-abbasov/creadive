// API Configuration
const BASE_URL: string = "http://207.180.254.207/api";

const CURRENT_YEAR: number = new Date().getFullYear();

// Contact Information
const PHONE_NUMBER: string = "+994 10 531 99 87";
const EMAIL: string = "info@creadive.az";
const ADDRESS: string = "Bakı, Azərbaycan";
const MAP_URL: string = "https://maps.app.goo.gl/XokJ59Kvhj4xGRZc6";

// Social Media URLs
const INSTAGRAM_URL: string = "https://www.instagram.com/creadive.az";
const FACEBOOK_URL: string = "https://www.facebook.com/creadive.az";
const LINKEDIN_URL: string = "https://www.linkedin.com/company/creadive-az";
const TWITTER_URL: string = "https://x.com/creadive_az";

const LOCALES: string[] = ["az", "en", "ru"] as const;

export {
  BASE_URL,
  CURRENT_YEAR,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  EMAIL,
  ADDRESS,
  PHONE_NUMBER,
  MAP_URL,
  LOCALES,
};
