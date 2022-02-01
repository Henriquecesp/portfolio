import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Brasil from 'assets/brasil.svg';
import USA from 'assets/usa.svg';
import { useRouter } from 'next/dist/client/router';
import { Tooltip } from '@components/tooltip';
import Link from 'next/link';

export const Header = (): JSX.Element => {
  const router = useRouter();
  const { locale } = router;

  const Countrys = {
    en: <Link href='/pt' locale={false} passHref><a><Brasil className="cursor-pointer" /></a></Link>,
    pt: <Link href='/' locale={false} passHref><a><USA className="cursor-pointer" /></a></Link>,
  }

  return (
    <>
      <div className="w-0.5 h-14 bg-gray-100 absolute top-0 left-28"></div>
      <div className="flex-1 flex flex-col absolute top-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="flex items-center">
            <li className="h-6 w-6 z-50">
              <Link href='#projects' passHref>
                <a>
                  <Typography variant='body1'>
                    <FormattedMessage id='header.projects' />
                  </Typography>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            <li translate="no" className='z-50'>
              <Typography variant='body1'><strong>henrique</strong>cesp</Typography>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-6 z-50">
              <Link href='#youtube' passHref>
                <a>
                  <Typography variant='body1'>
                    <FormattedMessage id='header.youtube' />
                  </Typography>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-0.5 h-[280px] bg-gray-100 absolute right-[8.5rem] bottom-40"></div>
      <div className="flex-1 flex flex-col absolute bottom-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="flex items-center z-50">
            <li className="h-6 w-6 z-50">
              <Link href='#github' passHref>
                <a>
                  <Typography variant='body1'>
                    <FormattedMessage id='header.github' />
                  </Typography>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className='z-50'>
              <Tooltip message={
                <FormattedMessage id="header.translate" />
              }>
                {Countrys[locale]}
              </Tooltip>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-6 z-50">
              <Link href='#contact' passHref>
                <a>
                  <Typography variant='body1'>
                    <FormattedMessage id='header.contact' />
                  </Typography>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
