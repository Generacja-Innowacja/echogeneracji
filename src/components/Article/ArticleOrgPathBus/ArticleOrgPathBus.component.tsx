'use client';

import { ORGANISATIONS } from '@/constants/organisations';
import { OrgPathsContext } from '@/utils/context/orgPaths';
import { PostOrPage, Tag } from '@tryghost/content-api';
import { usePathname } from 'next/navigation';
import { useContext, useEffect } from 'react';

interface Props {
  post?: PostOrPage;
  priorityTag?: string;
}

export const getOrgTagFromTags = (tags: Tag[]): string | undefined => {
  const orgTags = ORGANISATIONS.map((org) => org.tag);
  const tagsNamesNormalized = tags.map((tag) => tag.name || '');
  const tagsFound = tagsNamesNormalized.filter((tag) => orgTags.includes(tag));
  const orgTagFound = tagsFound?.[0];

  return orgTagFound || undefined;
};

export const ArticleOrgPathBus: React.FC<Props> = ({ post, priorityTag }) => {
  const pathname = usePathname();
  const tags = post?.tags || [];
  const orgTag = priorityTag || getOrgTagFromTags(tags);
  const { setPathOrgTag } = useContext(OrgPathsContext);

  useEffect(() => {
    if (!orgTag) {
      return;
    }

    setPathOrgTag({ path: pathname, tag: orgTag });
  }, [setPathOrgTag, orgTag, pathname]);

  return null;
};
