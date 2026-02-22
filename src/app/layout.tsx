import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Pinotheca',
  description: 'Online Gallery',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${inter.variable} antialiased w-full min-h-screen`}>
        <NextIntlClientProvider>
          <Header />
          <main className="bg-brand-25 min-h-[calc(100dvh-75px)] flex items-center justify-center">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
