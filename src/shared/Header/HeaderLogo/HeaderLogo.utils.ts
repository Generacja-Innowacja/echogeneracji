import {
  ORGANISATIONS,
  Organisation,
  PLATFORM_ORGANISATION,
} from '@/constants/organisations';
import { OrgPathsContext } from '@/utils/context/orgPaths';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

export const useHeaderOrg = (): Organisation & { isPlatform: boolean } => {
  const pathname = usePathname();
  const { paths } = useContext(OrgPathsContext);
  const orgTag = paths[pathname];
  const orgFound = ORGANISATIONS.find((org) => org.tag === orgTag);

  if (!orgFound) {
    return {
      ...PLATFORM_ORGANISATION,
      isPlatform: true,
    };
  }

  return {
    ...orgFound,
    isPlatform: false,
  };
};
