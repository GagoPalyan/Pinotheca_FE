import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const localeCookie = await cookies();
  const locale = localeCookie.get('locale')?.value || 'en';

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/translations/${locale}`);

  if (!response.ok) {
    throw new Error(`Failed to load translations for locale "${locale}"`);
  }

  const messages = await response.json();

  return {
    locale,
    messages,
  };
});
