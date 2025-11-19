import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function NotFound() {
  const currentLocale = useLocale();

  redirect({ locale: currentLocale, href: "/404" });
}
