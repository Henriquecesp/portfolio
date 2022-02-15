import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Brasil from 'assets/brasil.svg';
import USA from 'assets/usa.svg';
import { useRouter } from 'next/dist/client/router';
import { Tooltip } from '@components/tooltip';
import Link from 'next/link';
import { fullpageApi } from '@fullpage/react-fullpage';
import * as gtag from "@lib/gtag";

interface Props {
  fullpageApi: fullpageApi;
}

export const Header = ({ fullpageApi }: Props): JSX.Element => {
  const router = useRouter();
  const { locale } = router;

  const handleClickSection = (num: number, section: string) => {
    fullpageApi.moveTo(num)
    gtag.event({
      action: 'click',
      category: 'Header',
      label: `user clicked on header button, ${section}`,
      value: num
    })
  }

  const handleClickTranslate = (country: "pt" | "en") => {
    gtag.event({
      action: 'click',
      category: 'Header',
      label: `user clicked on translate button, ${country}`,
      value: country
    })
  }

  const Countrys = {
    en: <Link href='/pt' locale={false} passHref><a onClick={() => handleClickTranslate('pt')}><Brasil className="cursor-pointer" /></a></Link>,
    pt: <Link href='/' locale={false} passHref><a onClick={() => handleClickTranslate('en')}><USA className="cursor-pointer" /></a></Link>,
  }

  return (
    <>
      <div className="w-0.5 h-14 bg-gray-100 absolute top-0 left-28"></div>
      <div className="flex-1 flex flex-col absolute top-10 md:top-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="items-center hidden md:flex">
            <li className="h-6 w-6 z-50">
              <span className="cursor-pointer" onClick={() => handleClickSection(2, 'projects')}>
                <Typography variant='body1'>
                  <FormattedMessage id='header.projects' />
                </Typography>
              </span>
            </li>
          </ul>
          <ul className="flex items-center">
            <li translate="no" className='z-50'>
              <Typography variant='body1'><strong>henrique</strong>cesp</Typography>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-6 z-50">
              <span className="cursor-pointer hidden md:block" onClick={() => handleClickSection(3, 'youtube')}>
                <Typography variant='body1'>
                  <FormattedMessage id='header.youtube' />
                </Typography>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-0.5 h-[280px] bg-gray-100 absolute right-[8.5rem] bottom-40 hidden md:block"></div>
      <div className="flex-1 flex flex-col absolute bottom-16 w-full px-16">
        <nav className="px-4 flex justify-between bg-white h-16">
          <ul className="flex items-center z-50">
            <li className="h-6 w-6 z-50">
              <span className="cursor-pointer hidden md:block" onClick={() => handleClickSection(4, 'github')}>
                <Typography variant='body1'>
                  <FormattedMessage id='header.github' />
                </Typography>
              </span>
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
              <span className="cursor-pointer hidden md:block" onClick={() => handleClickSection(5, 'contact')}>
                <Typography variant='body1'>
                  <FormattedMessage id='header.contact' />
                </Typography>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
