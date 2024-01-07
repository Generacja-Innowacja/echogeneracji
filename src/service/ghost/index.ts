import { PostOrPage } from '@tryghost/content-api';
import { fetchPostsOrPages } from './utils';

interface GetNewestPostsPreviewArgs {
  limit: number;
  filter?: string;
}

export const getNewestPostsPreview = async ({
  limit,
  filter,
}: GetNewestPostsPreviewArgs): Promise<{
  posts: PostOrPage[];
}> =>
  fetchPostsOrPages({
    limit,
    include: 'tags',
    fields: 'id,slug,title,feature_image,primary_tag,excerpt',
    order: 'published_at DESC',
    filter,
  });

interface GetSingleArticleArgs {
  slug: string;
}

export const getSingleArticle = async ({
  slug,
}: GetSingleArticleArgs): Promise<{
  post: PostOrPage | undefined;
}> => {
  const { posts } = await fetchPostsOrPages({
    limit: 1,
    include: 'authors,tags',
    fields:
      'id,slug,title,feature_image,primary_tag,excerpt,updated_at,primary_author',
    order: 'published_at DESC',
    filter: `slug:${slug}`,
    formats: 'html',
  });

  return {
    post: posts?.[0],
  };
};
