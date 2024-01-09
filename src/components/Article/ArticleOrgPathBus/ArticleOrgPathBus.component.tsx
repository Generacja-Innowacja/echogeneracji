'use client';

import { OrgPathsContext } from '@/utils/context/orgPaths';
import { getOrgTagFromTags } from '@/utils/getOrgTagFromTags';
import { PostOrPage } from '@tryghost/content-api';
import { usePathname } from 'next/navigation';
import { useContext, useEffect } from 'react';

interface Props {
  post?: PostOrPage;
  priorityTag?: string;
}

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
