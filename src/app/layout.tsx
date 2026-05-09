import type { Metadata } from 'next';
import { Inter, Lora, Roboto } from 'next/font/google';
import '../styles/globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Header from '@/components/layout/header';
import { ToastContainer } from 'react-toastify';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const lora = Lora({
  variable: '--font-lora',
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Pinotheca',
  description: 'Online Gallery',
  icons: { icon: '/favicon/favicon.ico' },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} antialiased w-full min-h-screen`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="h-layout flex items-center justify-center">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
