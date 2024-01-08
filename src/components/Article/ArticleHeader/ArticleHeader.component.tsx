import { paths } from '@/constants/paths';
import { getResizedGhostImageUrl } from '@/utils/getResizedGhostImageUrl';
import { PostOrPage } from '@tryghost/content-api';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  post: PostOrPage;
  hideImage?: boolean;
  hideAuthor?: boolean;
}

const TAGS_VISIBLE_LIMIT = 3;
const IMAGE_SIZE = 1200;

export const ArticleHeader: React.FC<Props> = ({ post, hideImage }) => {
  const { feature_image, title } = post;
  const tags = (post.tags || []).filter((tag) => tag.visibility === 'public');
  const updatedAt = new Date(post?.updated_at || '').toLocaleDateString(
    'pl-PL'
  );
  const mainAuthorName = post?.primary_author?.name || '';
  const featuredImageSrc = getResizedGhostImageUrl(feature_image, IMAGE_SIZE);

  const tagsLinks = tags.map(({ name, slug }, index) => (
    <Link
      key={slug}
      href={paths.tagArticles(slug)}
      className={twMerge(
        'text-white/25 font-bold uppercase',
        index >= TAGS_VISIBLE_LIMIT && 'hidden'
      )}
    >
      #{name}
    </Link>
  ));

  return (
    <header className="w-full">
      <div className="bg-darkviolet w-[100vw] ml-[-1rem] sm:mx-auto sm:w-full sm:rounded-2xl overflow-hidden max-w-screen-md">
        <div
          className={twMerge(
            'p-4 h-[320px] flex items-end sm:h-[420px] sm:p-6',
            hideImage && 'h-auto sm:h-auto'
          )}
          style={
            featuredImageSrc || hideImage
              ? {
                  background: `linear-gradient(180deg, rgba(17, 16, 45, 0.25) 0%, #11102D 100%),url(${featuredImageSrc}),url(/_next/image?url=${encodeURIComponent(
                    featuredImageSrc || ''
                  )}&q=1&w=16),linear-gradient(180deg, #11102D 100%, #11102D 100%)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center flex-wrap gap-[4px]">
              {tagsLinks}
            </div>
            <h1 className="font-bold text-white text-xl sm:text-2xl">
              {title}
            </h1>
          </div>
        </div>
        <div className="p-4 border-t border-white/10 flex items-center gap-3 sm:p-6">
          <div className="font-bold text-white/25">{updatedAt}</div>
          {mainAuthorName && (
            <>
              <div className="h-[16px] w-[1px] bg-white/10" />
              <div className="font-bold text-white">{mainAuthorName}</div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
