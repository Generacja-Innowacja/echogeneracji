import ArticleLink from '@/components/ArticleLink';
import { PostOrPage } from '@tryghost/content-api';
import * as React from 'react';

interface Props {
  posts: PostOrPage[];
  featureFirst?: boolean;
  title?: React.ReactNode;
}

export const ArticleSection: React.FC<Props> = ({ posts, featureFirst }) => {
  return (
    <div
      className="max-w-screen-xl w-full gap-4 grid ml-auto mr-auto"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gridTemplateRows: 'repeat(auto-fill, 140px)',
      }}
    >
      {posts.map((post, index) => (
        <ArticleLink
          key={post.id}
          post={post}
          featured={index === 0 && featureFirst}
        />
      ))}
    </div>
  );
};

export default ArticleSection;
