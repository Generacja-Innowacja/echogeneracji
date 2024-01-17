import { BASE_HEADERS, BASE_URL, DEFAULT_FILTER } from '@/constants/ghost';
import { FIVE_MINUTES } from '@/constants/number';
import { PostOrPage } from '@tryghost/content-api';

interface GhostParams {
  include?: string;
  fields?: string;
  limit?: number;
  order?: string;
  filter?: string;
  formats?: string;
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

export const getGhostUrl = (baseUrl: string, params: GhostParams): string => {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value?.toString() || '');
  });

  return url.toString();
};

export const fetchPosts = async (
  params: GhostParams
): Promise<{
  posts: PostOrPage[];
}> => {
  try {
    const url = getGhostUrl(`${BASE_URL}/posts/`, {
      ...params,
      filter: `${DEFAULT_FILTER}${params.filter ? `+${params.filter}` : ''}`,
    });
    const res = await fetch(url, {
      headers: new Headers(BASE_HEADERS),
      next: { revalidate: FIVE_MINUTES },
    });
    const postsData = await res.json();
    const posts = postsData?.posts || [];

    return normalizeObject({ posts });
  } catch (e) {
    console.error(e);
    return { posts: [] };
  }
};

export const fetchPages = async (
  params: Omit<GhostParams, 'limit' | 'filter' | 'order'> & { slug: string }
): Promise<{
  pages?: PostOrPage[];
}> => {
  try {
    const url = getGhostUrl(`${BASE_URL}/pages/slug/${params.slug}`, {
      ...params,
    });
    const res = await fetch(url, {
      headers: BASE_HEADERS,
      next: { revalidate: FIVE_MINUTES },
    });
    const pagesData = await res.json();
    const pages = pagesData?.pages || [];

    return normalizeObject({ pages });
  } catch (e) {
    console.error(e);
    return { pages: [] };
  }
};
