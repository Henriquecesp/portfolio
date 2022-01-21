import { ButtonPrimary } from '@components/button';
import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Imagem from 'assets/hero.png';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export const Hero = (): JSX.Element => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-black-500 via-black-100 to-black-500 w-full flex justify-between p-20'>
      <div className='flex flex-col justify-center w-2/4'>
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
        <ButtonPrimary>
          <FormattedMessage id='hero.cta' />
        </ButtonPrimary>
        <div className='flex w-[15rem] justify-between items-center pt-[50px]'>
          <a href="https://github.com/henriquecesp" target='_blank' rel="noreferrer">
            <Typography variant='h4'>
              <AiFillGithub />
            </Typography>
          </a>
          <a href="https://www.linkedin.com/in/henriquecesp/" target='_blank' rel="noreferrer">
            <Typography variant='h4'>
              <AiFillLinkedin />
            </Typography>
          </a>
          <a href="https://www.youtube.com/henriquecesp" target='_blank' rel="noreferrer">
            <Typography variant='h4'>
              <AiFillYoutube />
            </Typography>
          </a>
        </div>
      </div>
      <div className='flex w-full items-center'>
        <Image
          src={Imagem}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
