import { DEFAULT_ORGANISATION, ORGANISATIONS } from '@/constants/organisations';
import { Tag } from '@tryghost/content-api';

export const getSingleOrganisationByTag = (tag: string) => {
  const organisationFound = ORGANISATIONS.find((organisation) =>
    tag.includes(organisation.tag)
  );
  if (organisationFound) {
    return organisationFound;
  }

  return DEFAULT_ORGANISATION;
};

export const getOrganisationTag = (tags: Tag[]): string => {
  const acceptableTags = ORGANISATIONS.map((organisation) => organisation.tag);
  const tagsNames = tags.map((tag) => tag.name);

  return acceptableTags.find((tag) => tagsNames.includes(tag)) || '';
};
