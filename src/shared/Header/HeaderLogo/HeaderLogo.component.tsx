'use client';

import { paths } from '@/constants/paths';
import Image from 'next/image';
import Link from 'next/link';
import { useHeaderOrg } from './HeaderLogo.utils';

import logoShort from '@/assets/svg/logo_violet-short.svg';

export const HeaderLogo: React.FC = () => {
  const { name, logo, tag, isPlatform } = useHeaderOrg();

  return (
    <div className="flex items-center gap-3">
      {!isPlatform && (
        <>
          <Link href={paths.home}>
            <Image
              src={logoShort}
              alt="echo generacji"
              height={32}
              width={32}
              loading="eager"
              priority
            />
          </Link>
          <div className="h-[16px] w-[1px] bg-darkviolet/10" />
        </>
      )}

      <Link href={isPlatform ? paths.home : paths.orgArticles(tag)}>
        <Image
          src={logo.dark}
          alt={name}
          height={isPlatform ? 32 : 24}
          loading="eager"
          className="mr-2"
          priority
        />
      </Link>
    </div>
  );
};
