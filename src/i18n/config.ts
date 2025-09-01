export const locales = ["az", "en", "ru"] as const;
export type AppLocale = typeof locales[number];

export const defaultLocale: AppLocale = "az";

export const localePrefix = "always" as const; // always prefix locales in paths


