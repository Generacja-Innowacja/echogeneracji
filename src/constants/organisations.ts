import egDark from '@/assets/svg/logo_violet-black.svg';
import egLight from '@/assets/svg/logo_white.svg';

import mpDark from '@/assets/svg/organisations/mypolitics_dark.svg';
import mpLight from '@/assets/svg/organisations/mypolitics_light.svg';

import adpDark from '@/assets/svg/organisations/adpersonam_dark.svg';
import adpLight from '@/assets/svg/organisations/adpersonam_light.svg';

import pnDark from '@/assets/svg/organisations/politicsnow_dark.svg';
import pnLight from '@/assets/svg/organisations/politicsnow_light.svg';

import pDark from '@/assets/svg/organisations/precedens_dark.svg';
import pLight from '@/assets/svg/organisations/precedens_light.svg';

import yceDark from '@/assets/svg/organisations/yce_dark.svg';
import yceLight from '@/assets/svg/organisations/yce_light.svg';

import paradygmatDark from '@/assets/svg/organisations/paradygmat_dark.svg';
import paradygmatLight from '@/assets/svg/organisations/paradygmat_light.svg';

interface Organisation {
  name: string;
  tag: string;
  logo: {
    light: string;
    dark: string;
  };
}

export const ORGANISATIONS: Organisation[] = [
  {
    name: 'myPolitics',
    tag: '#mypolitics',
    logo: {
      light: mpLight,
      dark: mpDark,
    },
  },
  {
    name: 'Echo Generacji',
    tag: '#echo-generacji',
    logo: {
      light: egLight,
      dark: egDark,
    },
  },
  {
    name: 'Ad Personam',
    tag: '#ad-personam',
    logo: {
      light: adpLight,
      dark: adpDark,
    },
  },
  {
    name: 'Politics Now',
    tag: '#politics-now',
    logo: {
      light: pnLight,
      dark: pnDark,
    },
  },
  {
    name: 'Precedens',
    tag: '#precedens',
    logo: {
      light: pLight,
      dark: pDark,
    },
  },
  {
    name: 'YCE Poland',
    tag: '#yce-poland',
    logo: {
      light: yceLight,
      dark: yceDark,
    },
  },
  {
    name: 'Paradygmat',
    tag: '#paradygmat',
    logo: {
      light: paradygmatLight,
      dark: paradygmatDark,
    },
  },
];

export const DEFAULT_ORGANISATION = ORGANISATIONS[0];

export const PLATFORM_ORGANISATION = ORGANISATIONS[1];

export const ORGANISATIONS_WITHOUT_PLATFORM = ORGANISATIONS.filter(
  (o) => o.tag !== PLATFORM_ORGANISATION.tag
);
