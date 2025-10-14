import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { LOCALES } from "@/constants";

export const routing = defineRouting({
  locales: LOCALES,
  localePrefix: "as-needed",
  localeDetection: false,
  defaultLocale: LOCALES[0],
  // localeCookie: true,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
export type Locale = (typeof routing.locales)[number];
