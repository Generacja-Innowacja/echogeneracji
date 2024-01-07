import { Nullable } from '@tryghost/content-api';

export const getResizedGhostImageUrl = (
  imageUrl: Nullable<string> | undefined,
  size: number
): string | undefined => {
  if (!imageUrl) {
    return undefined;
  }

  try {
    const imageUrlSplit = imageUrl.split('/');
    const imageIndex = imageUrlSplit.findIndex((v) => v === 'images') + 1;
    imageUrlSplit.splice(imageIndex, 0, `size/w${size}`);

    return imageUrl.includes('unsplash.com')
      ? `${imageUrl}&w=${size}`
      : imageUrlSplit.join('/');
  } catch {
    return undefined;
  }
};
