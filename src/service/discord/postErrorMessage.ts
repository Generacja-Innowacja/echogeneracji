import { GHOST_WEBHOOK_URL } from '@/constants/ghost';

export const postGhostErrorMessage = async (err: any): Promise<void> => {
  if (!GHOST_WEBHOOK_URL || typeof window !== 'undefined') {
    return;
  }

  await fetch(GHOST_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `An error occurred while trying to fetch posts from Ghost: ${err}`,
    }),
  });
};
