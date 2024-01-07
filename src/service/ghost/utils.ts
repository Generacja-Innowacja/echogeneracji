import {
  BASE_HEADERS,
  BASE_URL,
  DEFAULT_FILTER,
  PUBLIC_KEY,
} from '@/constants/ghost';
import { PostOrPage } from '@tryghost/content-api';

interface GhostParams {
  include?: string;
  fields?: string;
  limit?: number;
  order?: string;
  filter?: string;
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

  url.searchParams.append('key', PUBLIC_KEY);

  return url.toString();
};

export const fetchPostsOrPages = async (
  params: GhostParams
): Promise<{
  posts: PostOrPage[];
}> => {
  try {
    const url = getGhostUrl(`${BASE_URL}/posts/`, {
      ...params,
      filter: `${DEFAULT_FILTER}${params.filter ? `+${params.filter}` : ''}`,
    });
    const res = await fetch(url, { headers: BASE_HEADERS });
    const posts = await res.json();

    return normalizeObject(posts);
  } catch (e) {
    console.error(e);
    return { posts: [] };
  }
};
