import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['az', 'en', 'ru'],
  defaultLocale: 'az',
  localePrefix: 'as-needed',
  // Force default locale to always be used
  localeDetection: false
});
