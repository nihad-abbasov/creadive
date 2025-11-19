import { Locale, routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default function RootRedirect() {
  redirect(`/${routing.defaultLocale as Locale}`);
  return null;
}

// import { redirect } from "@/i18n/navigation";
// import { defaultLocale } from "@/i18n/config";

// export default function RootRedirect() {
//   redirect({ href: { pathname: `/${defaultLocale}` }, locale: defaultLocale });
//   return null;
// }
