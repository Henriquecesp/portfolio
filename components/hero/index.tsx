import { ButtonPrimary } from '@components/button';
import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Imagem from 'assets/hero.png';
import { SocialMedia } from './socialMedia';

export const Hero = (): JSX.Element => {
  return (
    <>
      <section className='min-h-screen bg-gradient-to-r from-black-500 via-black-100 to-black-500 w-full flex justify-between overflow-hidden'>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Typography variant='h1' className='h-36'>
              <FormattedMessage id='hero.title' />
            </Typography>
            <Typography variant="subtitle1" className='w-96 pb-14'>
              <FormattedMessage id='hero.subtitle'
                values={{
                  br: <br />
                }}
              />
            </Typography>
            <div className="flex justify-center flex-col">
              <ButtonPrimary>
                <FormattedMessage id='hero.cta' />
              </ButtonPrimary>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="absolute right-5 -bottom-2 md:w-3/4 z-0">
          <Image
            src={Imagem}
            className='object-cover object-center rounded static'
            alt="Picture of the author"
          />
        </div>
      </section>
      <div className='absolute inset-0 left-0 -bottom-0.5 min-h-full min-w-full bg-gradient-to-t from-purple-500/20 to-purple-100/0' />
    </>
  );
}
