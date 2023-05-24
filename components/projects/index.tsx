import React from 'react';
import { ProjectImage } from './ProjectImage';
import { ProjectText } from './ProjectText';
import Imagem from 'assets/code.png';
import ImagemRight from 'assets/site.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VectorProjectsTop } from '@components/svgs/VectorProjectsTop';
import { VectorProjectsCircle } from '@components/svgs/VectorProjectsCircle';
import { useBreakpoint } from '@lib/hooks';
import { ImageSlider } from '@components/image-slider';

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
};

export const Projects = (): JSX.Element => {
    const breakPoint = useBreakpoint();
    const isSm = ['sm', 'xs'].includes(breakPoint);
    const [sectionRef, sectionInView] = useInView({
        initialInView: true
    });

    const props = isSm
        ? {}
        : {
              initial: false,
              animate: sectionInView ? 'open' : 'closed',
              variants: variants,
              ref: sectionRef
          };

    return (
        <motion.section id="projects" className="text-gray-100 body-font relative" {...props}>
            <VectorProjectsTop className="absolute top-10 left-24 scale-150" />
            <VectorProjectsCircle className="absolute top-10 right-0" />
            <div className="container mx-auto flex px-24 sm:px-5 py-10 sm:py-24 flex-col lg:flex-row items-center">
                <ProjectImage>
                    <ImageSlider imageLeft={Imagem} imageRight={ImagemRight} />
                </ProjectImage>
                <ProjectText
                    title="projects.title"
                    subtitle="projects.subtitle"
                    cta="projects.cta"
                />
            </div>
        </motion.section>
    );
};
