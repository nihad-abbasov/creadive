import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "az" | "en" | "ru")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      <RootLayoutWrapper>{children}</RootLayoutWrapper>
    </NextIntlClientProvider>
  );
}
