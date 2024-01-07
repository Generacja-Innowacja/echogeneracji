'use client';

import { createContext, useCallback, useState } from 'react';

type Path = string;
type OrgTag = string;
type OrgPathEntries = Record<Path, OrgTag>;

interface OrgPathsContext {
  paths: OrgPathEntries;
  setPathOrgTag: ({ path, tag }: { path: Path; tag: OrgTag }) => void;
}

export const OrgPathsContext = createContext<OrgPathsContext>({
  paths: {},
  setPathOrgTag: () => {},
});

export default function OrgPathsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paths, setPaths] = useState<OrgPathEntries>({});

  const setPathOrgTag: OrgPathsContext['setPathOrgTag'] = useCallback(
    ({ path, tag }) => {
      setPaths((prevPaths) => ({
        ...prevPaths,
        [path]: tag,
      }));
    },
    [setPaths]
  );

  return (
    <OrgPathsContext.Provider value={{ paths, setPathOrgTag }}>
      {children}
    </OrgPathsContext.Provider>
  );
}
