import Header from '@/shared/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer } from '@/shared/Footer';
import '@/styles/globals.css';
import OrgPathsProvider from '@/utils/context/orgPaths';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';
import { twMerge } from 'tailwind-merge';
config.autoAddCss = false;

const poppins = Poppins({ subsets: ['latin-ext'], weight: ['700', '400'] });

export const metadata: Metadata = {
  title: 'Echo Generacji',
  description: 'Platforma publicystyczna nowego pokolenia',
  openGraph: {
    url: 'https://echogeneracji.pl',
    siteName: 'Echo Generacji',
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: 'https://echogeneracji.pl/og.png',
        width: 1200,
        height: 630,
        alt: 'Echo Generacji',
      },
    ],
  },
  twitter: {
    site: '@echogeneracji',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={twMerge(poppins.className, 'w-100')}>
        <OrgPathsProvider>
          <Header />
          {children}
          <Footer />
        </OrgPathsProvider>
      </body>
    </html>
  );
}
