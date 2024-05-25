import {
  ORGANISATIONS_WITHOUT_PLATFORM,
  PLATFORM_ORGANISATION,
} from '@/constants/organisations';
import { paths } from '@/constants/paths';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const { logo: defaultLogo, name: defaultName } = PLATFORM_ORGANISATION;

  return (
    <footer className="w-100 bg-lightgray mt-4">
      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col gap-4">
        <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between items-center">
          <Image src={defaultLogo.dark} alt={defaultName} height={32} />
          <div className="flex justify-center sm:justify-end items-center gap-4 text-darkgray flex-wrap mt-4 sm:mt-0">
            <Link href={paths.privacy}>Prywatność</Link>
            <Link href={paths.about}>O projekcie</Link>
            <Link href={paths.join}>Prześlij artykuł</Link>
          </div>
        </div>
        <div className="bg-gray/25 w-100 h-[1px]" />
        <div className="flex justify-center sm:justify-start gap-2 items-center mix-blend-luminosity opacity-25 flex-wrap">
          {ORGANISATIONS_WITHOUT_PLATFORM.map(({ logo, name, tag }) => (
            <Link key={tag} href={paths.orgArticles(tag)}>
              <Image src={logo.dark} alt={name} title={name} height={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
