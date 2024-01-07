import sectionIcon from '@/assets/svg/section-icon.svg';
import ArticleLink from '@/components/Article/ArticleLink';
import { PostOrPage } from '@tryghost/content-api';
import Image from 'next/image';
import * as React from 'react';

interface Props {
  posts: PostOrPage[];
  featureFirst?: boolean;
  title?: React.ReactNode;
}

export const ArticleSection: React.FC<Props> = ({
  posts,
  title,
  featureFirst,
}) => {
  return (
    <section className="max-w-screen-xl flex flex-col">
      {title && (
        <h2 className="text-darkviolet font-bold mb-4 flex items-center gap-2">
          <Image src={sectionIcon} alt="section icon h-[32px] w-[32px]" />
          <span>{title}</span>
        </h2>
      )}
      <div className="w-full gap-4 grid ml-auto mr-auto grid-cols-fill-1fr sm:grid-cols-fill-320px grid-rows-fill-140px">
        {posts.map((post, index) => (
          <ArticleLink
            key={post.id}
            post={post}
            featured={index === 0 && featureFirst}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
