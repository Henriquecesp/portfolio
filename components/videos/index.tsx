/* eslint-disable @next/next/no-img-element */
import { ButtonPrimary } from '@components/button';
import { Typography } from '@components/typography';
import { motion } from 'framer-motion';
import React from 'react';
import { Carousel } from '@components/carousel';
import Vector from 'assets/vector.svg';
import { VideoWithThumb } from './VideoWithThumb';
import { FormattedMessage } from 'react-intl';
import { VectorCircle } from '@components/svgs/VectorCircle';
import { useInView } from 'react-intersection-observer';
import { VectorVideoBottom } from '@components/svgs/VectorVideoBottom';
import * as gtag from "@lib/gtag";
import { YOUTUBE_PROFILE_URL } from '@lib/constants'

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Videos = (): JSX.Element => {
  const [sectionRef, sectionInView] = useInView();

  const handleClick = () => {
    window.open(YOUTUBE_PROFILE_URL, '_blank');
    gtag.event({
      action: 'click',
      category: 'Youtube',
      label: 'user clicked on youtube cta button',
      value: YOUTUBE_PROFILE_URL
    })
  }
  const slides = [
    <VideoWithThumb
      key="1"
      image={
        <img
          alt="Video f1JzE_h62nE thumb"
          src='https://img.youtube.com/vi/f1JzE_h62nE/hqdefault.jpg'
        />
      }
      video={
        <iframe id="player"
          key="1"
          src="https://www.youtube.com/embed/f1JzE_h62nE?controls=0"
          frameBorder="0" ></iframe>
      }
    />,
    <VideoWithThumb
      key="2"
      image={
        <img
          alt="Video H6bCSzxxiNc thumb"
          src='https://img.youtube.com/vi/H6bCSzxxiNc/hqdefault.jpg'
        />
      }
      video={
        <iframe id="player"
          key="2"
          src="https://www.youtube.com/embed/H6bCSzxxiNc?controls=0"
          frameBorder="0" ></iframe>
      }
    />,
    <VideoWithThumb
      key="3"
      image={
        <img
          alt="Video H6bCSzxxiNc thumb"
          src='https://img.youtube.com/vi/X9_YZ5jOlR0/hqdefault.jpg'
        />
      }
      video={
        <iframe id="player"
          key="3"
          src="https://www.youtube.com/embed/X9_YZ5jOlR0?controls=0"
          frameBorder="0" ></iframe>
      }
    />,
    <VideoWithThumb
      key="4"
      image={
        <img
          alt="Video H6bCSzxxiNc thumb"
          src='https://img.youtube.com/vi/jNXIQW6mmFA/hqdefault.jpg'
        />
      }
      video={
        <iframe id="player"
          key="4"
          src="https://www.youtube.com/embed/jNXIQW6mmFA?controls=0"
          frameBorder="0" ></iframe>
      }
    />,
    <VideoWithThumb
      key="5"
      image={
        <img
          alt="Video H6bCSzxxiNc thumb"
          src='https://img.youtube.com/vi/3KUVksNAAxo/hqdefault.jpg'
        />
      }
      video={
        <iframe id="player"
          key="5"
          src="https://www.youtube.com/embed/3KUVksNAAxo?controls=0"
          frameBorder="0" ></iframe>
      }
    />,
  ];

  return (
    <section
      id="youtube"
      className="text-gray-100 relative z-0 min-h-screen"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #230048 0%, #180033 100%)'
      }}
    >
      <VectorCircle className='absolute top-[18%] left-1/4' />
      <motion.div
        initial={false}
        animate={sectionInView ? 'open' : 'closed'}
        variants={variants}
        ref={sectionRef}
        className="container px-5 py-24 mx-auto z-20 relative">
        <VectorVideoBottom className="absolute bottom-0 right-36 -translate-y-1/2 -translate-x-1/2" />
        <div className="text-center mb-20">
          <Typography variant='h4' className="sm:text-3xl text-2xl text-center text-white mb-4">
            <FormattedMessage id="videos.title" />
          </Typography>
          <Typography variant='body2' className="leading-relaxed xl:w-1/5 lg:w-3/4 mx-auto">
            <FormattedMessage id="videos.subtitle" />
          </Typography>
        </div>
        <Carousel slides={slides} />
        <div
          className='flex justify-center mt-12'
        >
          <div className='flex flex-col justify-center w-3/4 lg:w-1/6'>
            <ButtonPrimary onClick={handleClick} className="flex w-full justify-center">
              <FormattedMessage id="videos.cta" />
            </ButtonPrimary>
          </div>
        </div>
      </motion.div>
      <Vector className='absolute w-full left-1/4 bottom-10 z-10 scale-[108%]' />
    </section>
  );
}

export default Videos;
