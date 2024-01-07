import { PostOrPage } from '@tryghost/content-api';
import { fetchPostsOrPages } from './utils';

export const getNewestPostsPreview = async (): Promise<{
  posts: PostOrPage[];
}> =>
  fetchPostsOrPages({
    limit: 10,
    include: 'tags',
    fields: 'id,slug,title,feature_image,primary_tag,excerpt',
    order: 'published_at DESC',
  });
