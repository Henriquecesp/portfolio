import { ButtonPrimary } from '@components/button';
import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Imagem from 'assets/hero.png';
import { SocialMedia } from './socialMedia';
import { Header } from '@components/header';
import { fullpageApi } from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import * as gtag from "@lib/gtag";
import { CONTACT_EMAIL } from '@lib/constants'

interface Props {
  fullpageApi: fullpageApi;
}

export const Hero = ({ fullpageApi }: Props): JSX.Element => {

  const handleClick = () => {
    const link = "mailto:" + CONTACT_EMAIL;
    window.open(link, '_blank');
    gtag.event({
      action: 'click',
      category: 'Hero',
      label: 'user clicked on hero cta button',
      value: link
    })
  }

  return (
    <>
      <Header fullpageApi={fullpageApi} />
      <section
        className='min-h-screen bg-gradient-to-r from-black-500 via-black-100 to-black-500 w-full flex justify-between overflow-hidden'
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-10"
        >
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
              <ButtonPrimary onClick={handleClick}>
                <FormattedMessage id='hero.cta' />
              </ButtonPrimary>
              <SocialMedia />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="absolute right-5 -bottom-1 md:w-3/4 z-0">
          <Image
            src={Imagem}
            className='object-cover object-center rounded static'
            alt="Picture of the author"
            priority
            placeholder='blur'
          />
        </motion.div>
      </section>
      <div className='absolute inset-0 left-0 bottom-0 min-h-full min-w-full bg-gradient-to-t from-purple-500/20 to-purple-100/0' />
    </>
  );
}
