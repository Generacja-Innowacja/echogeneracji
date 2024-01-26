import {
  BASE_HEADERS,
  BASE_HEADERS_ADMIN,
  BASE_URL,
  BASE_URL_ADMIN,
  DEFAULT_FILTER,
  PUBLIC_KEY,
} from '@/constants/ghost';
import { FIVE_MINUTES } from '@/constants/number';
import { PostOrPage } from '@tryghost/content-api';
import { postGhostErrorMessage } from '../discord/postErrorMessage';

interface GhostParams {
  include?: string;
  fields?: string;
  limit?: number;
  order?: string;
  filter?: string;
  formats?: string;
  asAdmin?: boolean;
}

const replaceHttpProtocol = <T>(obj: T): T => {
  const objectString = JSON.stringify(obj);
  const objectStringReplaced = objectString.replace(/http:/g, 'https:');
  return JSON.parse(objectStringReplaced);
};

const replaceUrls = <T>(obj: T): T => {
  const objectString = JSON.stringify(obj);
  const objectStringReplaced = objectString.replace(
    /editor.mypolitics.pl/g,
    'editor.gi.org.pl'
  );
  return JSON.parse(objectStringReplaced);
};

const normalizeObject = <T>(obj: T): T => {
  return replaceUrls(replaceHttpProtocol(obj));
};

export const getGhostUrl = (
  baseUrl: string,
  { asAdmin, ...params }: GhostParams
): string => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value?.toString() || '');
  });

  if (!asAdmin) {
    url.searchParams.append('key', PUBLIC_KEY);
  }

  return url.toString();
};

export const fetchPosts = async ({
  asAdmin,
  ...params
}: GhostParams): Promise<{
  posts: PostOrPage[];
}> => {
  try {
    const url = getGhostUrl(`${asAdmin ? BASE_URL_ADMIN : BASE_URL}/posts/`, {
      ...params,
      filter: `${DEFAULT_FILTER}${params.filter ? `+${params.filter}` : ''}`,
      asAdmin,
    });
    const res = await fetch(url, {
      headers: new Headers(asAdmin ? BASE_HEADERS_ADMIN : BASE_HEADERS),
      next: { revalidate: 1 },
    });
    const postsData = await res.json();
    const posts = postsData?.posts || [];

    return normalizeObject({ posts });
  } catch (e) {
    console.error(e);
    await postGhostErrorMessage(e);
    return { posts: [] };
  }
};

export const fetchPages = async ({
  asAdmin,
  ...params
}: Omit<GhostParams, 'limit' | 'filter' | 'order'> & {
  slug: string;
}): Promise<{
  pages?: PostOrPage[];
}> => {
  try {
    const url = getGhostUrl(`${BASE_URL}/pages/slug/${params.slug}`, {
      ...params,
      asAdmin,
    });
    const res = await fetch(url, {
      headers: new Headers(asAdmin ? BASE_HEADERS_ADMIN : BASE_HEADERS),
      next: { revalidate: FIVE_MINUTES },
    });
    const pagesData = await res.json();
    const pages = pagesData?.pages || [];

    return normalizeObject({ pages });
  } catch (e) {
    console.error(e);
    await postGhostErrorMessage(e);
    return { pages: [] };
  }
};
