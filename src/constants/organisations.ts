import egDark from '@/assets/svg/logo_violet-black.svg';
import egLight from '@/assets/svg/logo_white.svg';

import mpDark from '@/assets/svg/organisations/mypolitics_dark.svg';
import mpLight from '@/assets/svg/organisations/mypolitics_light.svg';

import adpDark from '@/assets/svg/organisations/adpersonam_dark.svg';
import adpLight from '@/assets/svg/organisations/adpersonam_light.svg';

interface Organisation {
  id: string;
  name: string;
  tag: string;
  logo: {
    light: string;
    dark: string;
  };
}

export const ORGANISATIONS: Organisation[] = [
  {
    id: 'mypolitics',
    name: 'myPolitics',
    tag: '#mypolitics',
    logo: {
      light: mpLight,
      dark: mpDark,
    },
  },
  {
    id: 'echo-generacji',
    name: 'Echo Generacji',
    tag: '#echo-generacji',
    logo: {
      light: egLight,
      dark: egDark,
    },
  },
  {
    id: 'ad-personam',
    name: 'Ad Personam',
    tag: '#ad-personam',
    logo: {
      light: adpLight,
      dark: adpDark,
    },
  },
];

export const DEFAULT_ORGANISATION = ORGANISATIONS[0];

export const PLATFORM_ORGANISATION = ORGANISATIONS[1];

export const ORGANISATIONS_WITHOUT_PLATFORM = ORGANISATIONS.filter(
  (o) => o.id !== PLATFORM_ORGANISATION.id
);
