import * as jwt from 'jsonwebtoken';

export const DOMAIN = 'https://echogeneracji.pl';

export const EDITOR_DOMAIN = 'https://editor.gi.org.pl';
export const BASE_URL_ADMIN = `${EDITOR_DOMAIN}/ghost/api/admin`;
export const BASE_URL = `${EDITOR_DOMAIN}/ghost/api/content`;
export const PRIVATE_KEY = process.env.GHOST_KEY || '';
export const PUBLIC_KEY = process.env.GHOST_PUBLIC_KEY || '';
export const GHOST_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';
export const VERSION = 'v5.0';
const [PRIVATE_KEY_ID, PRIVATE_KEY_SECRET] = PRIVATE_KEY.split(':');

export const DEFAULT_FILTER = 'visibility:public+tag:hash-echo-generacji';

export const GHOST_ADMIN_TOKEN = jwt.sign(
  {},
  Buffer.from(PRIVATE_KEY_SECRET, 'hex'),
  {
    keyid: PRIVATE_KEY_ID,
    algorithm: 'HS256',
    expiresIn: '1 year',
    audience: `/admin/`,
  }
);

export const BASE_HEADERS = {
  'Accept-Version': VERSION,
  Origin: EDITOR_DOMAIN,
};

export const BASE_HEADERS_ADMIN = {
  ...BASE_HEADERS,
  Authorization: `Ghost ${GHOST_ADMIN_TOKEN}`,
};
