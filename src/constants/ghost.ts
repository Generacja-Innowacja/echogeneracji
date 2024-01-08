export const DOMAIN = 'https://echogeneracji.pl';

export const EDITOR_DOMAIN = 'https://editor.gi.org.pl';
export const BASE_URL = `${EDITOR_DOMAIN}/ghost/api/content`;
export const PUBLIC_KEY = process.env.GHOST_KEY || '';
export const VERSION = 'v5.0';

export const DEFAULT_FILTER = 'visibility:public+tag:hash-echo-generacji';

export const BASE_HEADERS = {
  'Accept-Version': VERSION,
};
