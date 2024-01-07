'use client';

import { PostOrPage } from '@tryghost/content-api';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useMemo, useState } from 'react';

import placeholderImage from '@/assets/images/placeholder.png';
import { GRAY_PLACEHOLDER } from '@/constants/image';
import { paths } from '@/constants/paths';
import { getResizedGhostImageUrl } from '@/utils/getResizedGhostImageUrl';
import {
  getOrganisationTag,
  getSingleOrganisationByTag,
} from '@/utils/getSingleOrganisationByTag';
import { twMerge } from 'tailwind-merge';
import { IMAGE_SIZE } from './ArticleLink.constants';

interface Props {
  post: PostOrPage;
  featured?: boolean;
}

const ArticleLink: React.FC<Props> = ({ post, featured }) => {
  const { title, primary_tag, feature_image, slug } = post;
  const imageSize = featured ? IMAGE_SIZE.FEATURED : IMAGE_SIZE.REGULAR;
  const [featureImageSrc, setFeatureImageSrc] = useState<any>(
    getResizedGhostImageUrl(feature_image, imageSize) || placeholderImage
  );

  const organisation = useMemo(() => {
    const tag = getOrganisationTag(post.tags || []);
    return getSingleOrganisationByTag(tag);
  }, [post.tags]);

  return (
    <Link
      href={paths.singleArticle(slug)}
      className={featured ? `row-start-1 row-end-3` : ''}
    >
      <article
        className={twMerge(
          'p-4 gap-4 flex h-full flex-col rounded-2xl',
          !featured && 'bg-lightgray border border-black/5 justify-between',
          featured && 'justify-end'
        )}
        style={
          featured
            ? {
                background: `linear-gradient(180deg, rgba(11, 24, 53, 0.25) 0%, #0B1835 100%),url(${featureImageSrc}),url(/_next/image?url=${featureImageSrc}&q=1&w=16),linear-gradient(180deg, #0B1835 100%, #0B1835 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        <div className="flex gap-4 justify-between">
          <h2
            className={twMerge(
              'font-bold text-darkviolet overflow-hidden line-clamp-3 m-0 p-0',
              featured && 'text-white'
            )}
          >
            {title}
          </h2>
          {featureImageSrc && !featured && (
            <Image
              className="rounded-lg object-cover w-[64px] h-[64px] shrink-0"
              height={64}
              width={64}
              src={featureImageSrc}
              alt={`${title}`}
              onError={() => setFeatureImageSrc(placeholderImage)}
              quality={90}
              placeholder="blur"
              blurDataURL={GRAY_PLACEHOLDER}
            />
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-darkgray font-bold uppercase">
            #{primary_tag?.name || ''}
          </div>
          {organisation && (
            <Image
              height={16}
              src={organisation.logo[featured ? 'light' : 'dark']}
              alt={organisation.name}
            />
          )}
        </div>
      </article>
    </Link>
  );
};

export default ArticleLink;
