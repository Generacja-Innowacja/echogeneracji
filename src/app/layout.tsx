import Header from '@/shared/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';
import { twMerge } from 'tailwind-merge';
config.autoAddCss = false;

const poppins = Poppins({ subsets: ['latin-ext'], weight: ['700', '400'] });

export const metadata: Metadata = {
  title: 'Echo Generacji',
  description: 'Platforma publicystyczna nowego pokolenia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={twMerge(poppins.className, 'w-100')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
