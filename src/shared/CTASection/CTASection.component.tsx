import { paths } from '@/constants/paths';
import Link from 'next/link';
import * as React from 'react';
import Button from '../Button';

export const CTASection: React.FC = () => {
  return (
    <section
      className="max-w-screen-xl flex flex-col p-6 rounded-3xl"
      style={{
        background: `url(/images/cta-background.png),url(/_next/image?url=/images/cta-background.png&q=1&w=16),linear-gradient(180deg, #0B1835 100%, #0B1835 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white">
        <h2 className="font-bold text-xl sm:text-2xl">
          To też przestrzeń dla Ciebie!
        </h2>
        <p className="text-lg mb-4">Zbuduj z nami media przyszłości!</p>
        <Link href={paths.join}>
          <Button type="secondary">Prześlij artykuł</Button>
        </Link>
      </div>
    </section>
  );
};
