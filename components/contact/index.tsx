import { ButtonPrimary } from '@components/button';
import { Footer } from '@components/footer';
import { Typography } from '@components/typography';
import VectorContact from 'assets/vector-contact.svg';
import VectorCircle from 'assets/vector-circle.svg';
import VectorLineup from 'assets/vector-line-up.svg';
import React from 'react';

export const Contact = (): JSX.Element => {
  return (
    <section
      id='contact'
      className="text-gray-400 body-font relative"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #230048 0%, #180033 100%)'
      }}
    >
      <VectorLineup className='absolute left-48 -top-36' />
      <VectorCircle className='absolute -right-16 -top-16' />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 text-gray-100">
          <Typography variant='h4' className='mb-4'>
            CONTACT ME
          </Typography>
          <Typography variant='body2' className="mx-auto w-1/4">
            Contact Now that you know me, it&lsquo;s time to start making something amazing together
          </Typography>
        </div>
        <div className="m-auto flex justify-center">
          <VectorContact className='absolute left-1/4' />
          <ButtonPrimary className='w-[240px]'>
            CONTACT
          </ButtonPrimary>
        </div>
      </div>
      <Footer />
    </section >
  );
}
