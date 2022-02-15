import { Tooltip } from '@components/tooltip';
import { Typography } from '@components/typography';
import { motion } from 'framer-motion';
import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { useInView } from 'react-intersection-observer';

export const Logos = (): JSX.Element => {
  const [sectionRef, sectionInView] = useInView();

  const logos = [
    {
      icon: FaReact,
      message: 'React',
    },
    {
      icon: GrGraphQl,
      message: 'GraphQL',
    },

    {
      icon: FaNodeJs,
      message: 'NodeJS',
    },
    {
      icon: SiTypescript,
      message: 'Typescript',
    },
    {
      icon: SiExpress,
      message: 'Express',
    },
    {
      icon: SiMongodb,
      message: 'MongoDB',
    },
    {
      icon: SiPostgresql,
      message: 'PostgreSQL',
    }
  ];

  const oddEven = (index: number): number => {
    return index % 2 === 0 ? 50 : -50;
  };

  return (
    <section className="bg-purple-500 mb-44">
      <div className="flex justify-between items-center px-4 py-12 mx-auto sm:px-12 lg:px-52" ref={sectionRef}>
        {logos.map((Logo, index) => (
          <motion.div
            key={Logo.message}
            className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"
            initial={{ y: oddEven(index), opacity: 0 }}
            animate={{
              y: sectionInView ? 0 : oddEven(index),
              opacity: sectionInView ? 1 : 0,
              transition: { delay: 0.8 }
            }}
          >
            <Tooltip message={Logo.message} >
              <Typography variant='h2'>
                <Logo.icon className="text-lightPurple-100 fill-current" />
              </Typography>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
