'use server';

import { paths } from '@/constants/paths';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import * as React from 'react';
import Button from '../Button';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTag } from './HeaderTag';

library.add(faPlus);

const Header: React.FC = () => {
  const promotedTags = (process.env.PROMOTED_TAGS || '').split(',');

  const tagsLinks = promotedTags.map((tag) => (
    <HeaderTag key={tag} tag={tag} />
  ));

  return (
    <div className="p-4 flex justify-center flex-col max-w-screen-xl ml-auto mr-auto w-full">
      <div className="w-full flex justify-between items-center">
        <HeaderLogo />
        <div className="flex gap-4 items-center">
          <div className="hidden lg:flex gap-2 items-center">{tagsLinks}</div>
          <Link href={paths.join}>
            <Button type="tertiary">
              Dołącz
              <span className="ml-2 hidden sm:inline">
                <FontAwesomeIcon icon={faPen} />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="pt-4 w-full overflow-x-auto overflow-y-hidden flex gap-2 lg:hidden">
        {tagsLinks}
      </div>
    </div>
  );
};

export default Header;
