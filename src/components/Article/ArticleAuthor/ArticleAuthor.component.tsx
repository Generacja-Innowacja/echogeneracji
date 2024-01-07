import { GRAY_PLACEHOLDER } from '@/constants/image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Author } from '@tryghost/content-api';
import Image from 'next/image';
import Link from 'next/link';

library.add(faFacebookF, faXTwitter);

interface Props {
  author: Author;
}

export const ArticleAuthor: React.FC<Props> = ({ author }) => {
  return (
    <div className="max-w-screen-sm mx-auto mt-4 sm:mt-6 flex flex-col text-darkviolet bg-lightgray p-4 rounded-2xl">
      <div className="uppercase font-bold opacity-25 mb-2">autor</div>
      <div className="w-full h-[1px] bg-gray opacity-25 mb-4" />
      <div className="flex">
        <div>
          <div className="font-bold text-lg">{author.name}</div>
          {author.bio && <div>{author.bio}</div>}
        </div>
        <div className="ml-4">
          {author.profile_image && (
            <div className="shrink-0 w-[70px] h-[70px]">
              <Image
                src={author.profile_image}
                alt={author.name || 'author'}
                width={70}
                height={70}
                className="object-cover rounded-lg w-[70px] h-[70px]"
                placeholder="blur"
                blurDataURL={GRAY_PLACEHOLDER}
              />
            </div>
          )}
          <div className="flex justify-between w-[70px] mt-[6px]">
            {author.facebook && (
              <Link href={author.facebook}>
                <div className="bg-gray/50 w-[32px] h-[32px] flex justify-center items-center rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </Link>
            )}
            {author.twitter && (
              <Link href={author.twitter}>
                <div className="bg-gray/50 w-[32px] h-[32px] flex justify-center items-center rounded-lg">
                  <FontAwesomeIcon icon={faXTwitter} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
