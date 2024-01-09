import { ORGANISATIONS } from '@/constants/organisations';
import { Tag } from '@tryghost/content-api';

export const getOrgTagFromTags = (tags: Tag[]): string | undefined => {
  const orgTags = ORGANISATIONS.map((org) => org.tag);
  const tagsNamesNormalized = tags.map((tag) => tag.name || '');
  const tagsFound = tagsNamesNormalized.filter((tag) => orgTags.includes(tag));
  const orgTagFound = tagsFound?.[0];

  return orgTagFound || undefined;
};
