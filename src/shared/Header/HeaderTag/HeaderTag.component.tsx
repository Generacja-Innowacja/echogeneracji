'use client';

import { paths } from '@/constants/paths';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface Props {
  tag: string;
}

export const HeaderTag: React.FC<Props> = ({ tag }) => {
  const params = useParams();
  const tagParam = params?.tag ? decodeURIComponent(params.tag.toString()) : '';
  const isSelected = tagParam && tagParam === tag;

  return (
    <Link
      key={tag}
      href={paths.tagArticles(tag)}
      className={twMerge(
        'text-darkgray font-bold uppercase',
        isSelected && 'text-darkviolet/66'
      )}
    >
      #{tag}
    </Link>
  );
};
