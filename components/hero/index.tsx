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
          className="bg-black-500 bg-opacity-80 sm:bg-opacity-0 container mx-auto flex px-5 py-24 flex-row items-center z-10"
        >
          <div className="lg:flex-grow w-1/2 lg:pr-24 pr-16 flex flex-col items-start text-left mb-0">
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
          className="absolute scale-[2] right-36 -bottom-3 sm:scale-100 sm:-bottom-1 sm:w-full sm:-right-36 lg:right-5 lg:w-[90%] xl:w-3/4 z-0"
          style={{
            transformOrigin: 'bottom left',
          }}
        >
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
