import React from 'react';
import { ProjectImage } from './ProjectImage';
import { ProjectText } from './ProjectText';
import Imagem from 'assets/code.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VectorProjectsTop } from '@components/svgs/VectorProjectsTop';
import { VectorProjectsCircle } from '@components/svgs/VectorProjectsCircle';

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      bounce: true,
      type: 'just'
    }
  },
  closed: {
    opacity: 0,
    x: -1000
  }
}

export const Projects = (): JSX.Element => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <motion.section
      initial={false}
      animate={sectionInView ? 'open' : 'closed'}
      variants={variants}
      id="projects"
      className="text-gray-100 body-font relative"
    >
      <VectorProjectsTop className='absolute top-10 left-24 scale-150' />
      <VectorProjectsCircle className='absolute top-10 right-0' />
      <div
        ref={sectionRef}
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <ProjectImage
          image={Imagem}
        />
        <ProjectText
          title='projects.title'
          subtitle='projects.subtitle'
          cta='projects.cta'
        />
      </div>
    </motion.section>
  );
}
