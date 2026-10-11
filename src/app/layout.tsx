import type { Metadata } from 'next';
import { Inter, Lora, Playfair_Display, Roboto } from 'next/font/google';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Header from '@/components/layout/header';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import getHeaderData from '@/server/get-header-data';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  weight: ['700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Pinotheca',
  description: 'Online Gallery',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const headerData = await getHeaderData();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} ${playfair.variable} antialiased w-full min-h-screen`}
      >
        <NextIntlClientProvider>
          <Header info={headerData} />
          <main className="flex flex-col items-center justify-center h-layout w-full">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
