import { Typography } from '@components/typography';
import React from 'react';

export const Header = (): JSX.Element => {
  return (
    <>
      <div className="w-0.5 h-14 bg-gray-100 absolute top-0 left-28"></div>
      <div className="flex-1 flex flex-col absolute top-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="flex items-center">
            <li className="h-6 w-6">
              <Typography variant='body1'>
                Projects
              </Typography>
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <Typography variant='body1'><strong>henrique</strong>cesp</Typography>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-6">
              <Typography variant='body1'>
                Youtube
              </Typography>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-0.5 h-[280px] bg-gray-100 absolute right-[8.5rem] bottom-40"></div>
      <div className="flex-1 flex flex-col absolute bottom-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="flex items-center">
            <li className="h-6 w-6">
              <Typography variant='body1'>
                Github
              </Typography>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-6">
              <Typography variant='body1'>
                Contacts
              </Typography>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
