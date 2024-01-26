import { PostOrPage } from '@tryghost/content-api';
import { fetchPages, fetchPosts } from './utils';

interface GetNewestPostsPreviewArgs {
  limit: number;
  filter?: string;
  asAdmin?: boolean;
}

export const getNewestPostsPreview = async ({
  limit,
  filter,
  asAdmin,
}: GetNewestPostsPreviewArgs): Promise<{
  posts: PostOrPage[];
}> =>
  fetchPosts({
    limit,
    include: 'tags',
    fields: 'id,slug,title,feature_image,primary_tag,excerpt',
    order: 'published_at DESC',
    filter,
    asAdmin,
  });

interface GetSingleArticleArgs {
  slug: string;
  asAdmin?: boolean;
}

export const getSingleArticle = async ({
  slug,
  asAdmin,
}: GetSingleArticleArgs): Promise<{
  post: PostOrPage | undefined;
}> => {
  const { posts } = await fetchPosts({
    limit: 1,
    include: 'authors,tags',
    fields:
      'id,slug,title,feature_image,primary_tag,excerpt,updated_at,primary_author',
    order: 'published_at DESC',
    filter: `slug:${slug}`,
    formats: 'html',
    asAdmin,
  });

  return {
    post: posts?.[0],
  };
};

interface GetSinglePageArgs {
  slug: string;
  fields?: string;
  asAdmin?: boolean;
}

export const getSinglePage = async ({
  slug,
  fields,
  asAdmin,
}: GetSinglePageArgs): Promise<{
  page: PostOrPage | undefined;
}> => {
  const { pages } = await fetchPages({
    include: 'authors,tags',
    fields:
      fields ||
      'id,slug,title,feature_image,primary_tag,excerpt,updated_at,primary_author',
    formats: 'html',
    slug,
    asAdmin,
  });

  return {
    page: pages?.[0],
  };
};
