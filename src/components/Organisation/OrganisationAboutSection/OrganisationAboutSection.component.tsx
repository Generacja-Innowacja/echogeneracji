import {
  Organisation,
  OrganisationSocialUrls,
} from '@/constants/organisations';
import {
  IconDefinition,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface Props {
  organisation: Organisation;
}

export const OrganisationAboutSection: React.FC<Props> = ({ organisation }) => {
  const { logo, name, meta } = organisation;

  const socialIcons: Record<keyof OrganisationSocialUrls, IconDefinition> = {
    facebook: faFacebookF,
    twitter: faXTwitter,
    instagram: faInstagram,
    linkedin: faLinkedinIn,
  };

  const buttonLinks = (meta?.joinUrl || meta?.aboutUrl) && (
    <>
      {meta?.aboutUrl && (
        <a
          className="flex py-2 px-3 bg-white/10 text-white font-bold rounded-full flex-shrink-0"
          href={meta.aboutUrl}
        >
          O inicjatywie
        </a>
      )}
      {meta?.joinUrl && (
        <a
          className="flex py-2 px-3 bg-white/10 text-white font-bold rounded-full flex-shrink-0"
          href={meta.joinUrl}
        >
          Dołącz
        </a>
      )}
    </>
  );

  return (
    <section
      className="w-[100vw] ml-[-1rem] sm:mx-auto sm:w-full overflow-hidden max-w-screen-xl flex flex-col sm:rounded-[32px]"
      style={{
        background: 'linear-gradient(293deg, #201E4A 0%, #020414 76.56%)',
      }}
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:justify-between sm:p-8">
        <div className="flex flex-col gap-4">
          <Image
            src={logo.light}
            alt={name}
            height={32}
            loading="eager"
            className="mr-2"
            priority
          />
          {meta?.description && (
            <div className="text-white max-w-[30rem]">{meta.description}</div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {(meta?.socialUrls || meta?.wwwUrl) && (
            <div className="p-4 flex gap-4 rounded-[32px] border border-white/10 w-auto self-start sm:self-end">
              {Object.entries(meta?.socialUrls || {}).map(
                ([socialKey, socialUrl]) => (
                  <a
                    key={socialKey}
                    className="h-[48px] w-[48px] flex items-center justify-center bg-white/10 text-white rounded-full text-2xl"
                    href={socialUrl}
                  >
                    <FontAwesomeIcon
                      icon={
                        socialIcons[socialKey as keyof OrganisationSocialUrls]
                      }
                    />
                  </a>
                )
              )}
              {meta?.wwwUrl && (
                <a
                  className="h-[48px] w-[48px] flex items-center justify-center bg-white/10 text-white rounded-full text-2xl"
                  href={meta.wwwUrl}
                >
                  <FontAwesomeIcon icon={faEarthEurope} />
                </a>
              )}
            </div>
          )}
          {buttonLinks && (
            <div className="hidden gap-4 sm:flex justify-end">
              {buttonLinks}
            </div>
          )}
        </div>
      </div>
      {buttonLinks && (
        <div className="flex gap-4 px-6 py-4 border-t border-t-white/10 sm:hidden">
          {buttonLinks}
        </div>
      )}
    </section>
  );
};
