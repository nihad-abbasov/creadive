import RootLayoutWrapper from '@/components/RootLayoutWrapper';
import { NextIntlClientProvider } from 'next-intl';
import { AppLocale, locales } from '@/i18n/config';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

type Props = {
  children: ReactNode;
  params: { locale: AppLocale };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      <RootLayoutWrapper>{children}</RootLayoutWrapper>
    </NextIntlClientProvider>
  );
}


