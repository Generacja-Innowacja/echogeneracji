import { PostOrPage } from '@tryghost/content-api';
import { fetchPostsOrPages } from './utils';

interface GetNewestPostsPreviewArgs {
  limit: number;
}

export const getNewestPostsPreview = async ({
  limit,
}: GetNewestPostsPreviewArgs): Promise<{
  posts: PostOrPage[];
}> =>
  fetchPostsOrPages({
    limit,
    include: 'tags',
    fields: 'id,slug,title,feature_image,primary_tag,excerpt',
    order: 'published_at DESC',
  });
