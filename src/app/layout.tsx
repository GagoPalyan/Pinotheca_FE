import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Header from '@/components/layout/header';
import { ToastContainer } from 'react-toastify';
import getHeaderData from '@/server/get-header-data';
import layoutMetadata from '@/configs/global/metadata';
import { inter, lora, playfair, roboto } from '@/configs/global/fonts';
import '@/styles/globals.css';

export const metadata = layoutMetadata;

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
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
