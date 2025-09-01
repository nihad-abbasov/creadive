import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || 'az';
  
  try {
    const messages = (await import(`./public/messages/${validLocale}.json`)).default;
    
    return {
      locale: validLocale,
      messages
    };
  } catch (error) {
    console.error('Failed to load messages for locale:', validLocale, error);
    // Fallback to default locale
    const fallbackMessages = (await import(`./public/messages/az.json`)).default;
    return {
      locale: 'az',
      messages: fallbackMessages
    };
  }
});
