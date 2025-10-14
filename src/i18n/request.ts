import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "az" | "en" | "ru"))
    locale = routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

const dictionaries = {
  az: () => import("@/messages/az.json").then((module) => module.default),
  en: () => import("@/messages/en.json").then((module) => module.default),
  ru: () => import("@/messages/ru.json").then((module) => module.default),
};
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
