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

import gadkaDark from '@/assets/svg/organisations/gadka_dark.svg';
import gadkaLight from '@/assets/svg/organisations/gadka_light.svg';

import holisticDark from '@/assets/svg/organisations/holistic_dark.svg';
import holisticLight from '@/assets/svg/organisations/holistic_light.svg';

export interface OrganisationSocialUrls {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Organisation {
  name: string;
  tag: string;
  logo: {
    light: string;
    dark: string;
  };
  meta?: {
    description?: string;
    aboutUrl?: string;
    wwwUrl?: string;
    joinUrl?: string;
    socialUrls?: OrganisationSocialUrls;
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
    meta: {
      description: 'Budujemy społeczeństwo świadome politycznie',
      aboutUrl: 'https://mypolitics.pl/about',
      wwwUrl: 'https://mypolitics.pl/',
      socialUrls: {
        facebook: 'https://www.facebook.com/myPoliticsTest',
        twitter: 'https://twitter.com/mypolitics__',
        instagram: 'https://www.instagram.com/mypolitics_/',
        linkedin: 'https://www.linkedin.com/company/mypolitics/',
      },
    },
  },
  {
    name: 'Echo Generacji',
    tag: '#echo-generacji-redakcja',
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
    meta: {
      description: 'Platforma wolnej wymiany myśli',
      aboutUrl: 'https://ad.personam.pl/#onas',
      wwwUrl: 'https://ad.personam.pl/',
      socialUrls: {
        facebook: 'https://facebook.com/AdPersonam1',
        twitter: 'https://twitter.com/personam_ad',
        instagram: 'https://instagram.com/ad_personam_/',
        linkedin: 'https://www.linkedin.com/company/adpersonam1/',
      },
    },
  },
  {
    name: 'Politics Now',
    tag: '#politics-now',
    logo: {
      light: pnLight,
      dark: pnDark,
    },
    meta: {
      description:
        'Polityka minuta po minucie — od młodych dla młodych o tym, co ważne!',
      wwwUrl: 'https://politicsnow.org.pl/',
      joinUrl: 'https://politicsnow.org.pl/dolacz-do-nas/',
      aboutUrl: 'https://politicsnow.org.pl/o-nas/',
      socialUrls: {
        facebook: 'https://www.facebook.com/politicsnowmedia',
        twitter: 'https://twitter.com/politicsnow__',
        instagram: 'https://www.instagram.com/politicsnow__/',
        linkedin: 'https://www.linkedin.com/company/90521517/admin/feed/posts/',
      },
    },
  },
  {
    name: 'Precedens',
    tag: '#precedens',
    logo: {
      light: pLight,
      dark: pDark,
    },
    meta: {
      description:
        'Aktywizujemy społecznie młodzież. Niech nasz Precedens stanie się przyczyną Waszego zaangażowania!',
      aboutUrl: 'https://www.instagram.com/stowarzyszenieprecedens/',
      joinUrl:
        'https://docs.google.com/forms/d/1kcVGmRTVNgbP46VOoZZgLECdV085Yihs8myWoCszWRI/viewform?fbclid=PAAabt4gZAYC4gwlw99MRoyDeT86mHHo_xqHn9jFkoR4zppUWioLW5z09DrYw_aem_AW2w4k4kKLnRKS6P0fcR8iwdQhyAb9c7pMyb8Msv8lMM_Rp8GWkb6kyzieoutKnMNp8&edit_requested=true',
      socialUrls: {
        facebook: 'https://www.facebook.com/profile.php?id=100092277597287',
        instagram: 'https://www.instagram.com/stowarzyszenieprecedens/',
      },
    },
  },
  {
    name: 'YCE Poland',
    tag: '#yce-poland',
    logo: {
      light: yceLight,
      dark: yceDark,
    },
    meta: {
      description: 'Rozpoczynamy otwartą dyskuję o sprawach europejskich',
      aboutUrl: 'https://www.ycepoland.pl/kim-jeste%C5%9Bmy',
      joinUrl: 'https://www.ycepoland.pl/kontakt',
      wwwUrl: 'https://www.ycepoland.pl/',
      socialUrls: {
        instagram: 'https://www.instagram.com/yce.poland/',
        facebook: 'https://www.facebook.com/profile.php?id=100091536763744',
        linkedin: 'https://www.linkedin.com/company/yce-poland/',
      },
    },
  },
  {
    name: 'Paradygmat',
    tag: '#paradygmat',
    logo: {
      light: paradygmatLight,
      dark: paradygmatDark,
    },
    meta: {
      description:
        'Łódzkie koło naukowe zajmujące się swobodną wymianą poglądów na tematy społeczno-ekonomiczne',
      aboutUrl: 'https://www.facebook.com/sknparadygmat',
      socialUrls: {
        facebook: 'https://www.facebook.com/sknparadygmat',
        instagram:
          'https://www.instagram.com/sknparadygmat?igsh=MWhiMzN4dDd1ZWQzYQ==',
        linkedin: 'https://www.linkedin.com/company/sknparadygmat/',
      },
    },
  },
  {
    name: 'Holistic News',
    tag: '#holistic-news',
    logo: {
      light: holisticLight,
      dark: holisticDark,
    },
    meta: {
      description:
        'W Holistic News szukamy Prawdy i Dobra. Zadajemy pytania i próbujemy na nie odpowiadać. Piszemy o tym, co uważamy za ważne.',
      aboutUrl: 'https://holistic.news/redakcja/',
      wwwUrl: 'https://holistic.news/',
      socialUrls: {
        facebook: 'https://www.facebook.com/portalHolisticNews/',
        twitter: 'https://x.com/news_holistic',
        instagram: 'https://www.instagram.com/holisticnews/',
        linkedin: 'https://www.linkedin.com/company/holisticnews/',
      },
    },
  },
  {
    name: 'Gadka Senacka',
    tag: '#gadka-senacka',
    logo: {
      light: gadkaLight,
      dark: gadkaDark,
    },
    meta: {
      description:
        'Tworzymy przestrzeń do swobodnej rozmowy w Senacie RP. Szerzymy świadomość i edukujemy przez debaty młodych ekspertów i polityków.',
      socialUrls: {
        facebook: 'https://www.facebook.com/profile.php?id=100076762762519',
        twitter: 'https://twitter.com/GadkaSenacka',
        instagram: 'https://www.instagram.com/gadka_senacka/',
        linkedin: 'https://www.linkedin.com/company/gadka-senacka/',
      },
    },
  },
];

export const DEFAULT_ORGANISATION = ORGANISATIONS[0];

export const PLATFORM_ORGANISATION = ORGANISATIONS[1];

export const ORGANISATIONS_WITHOUT_PLATFORM = ORGANISATIONS.filter(
  (o) => o.tag !== PLATFORM_ORGANISATION.tag
);
