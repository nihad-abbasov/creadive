import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["az", "en", "ru"],
  localePrefix: "as-needed",
  localeDetection: false,
  defaultLocale: "az",
  // localeCookie: true,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
export type Locale = (typeof routing.locales)[number];
