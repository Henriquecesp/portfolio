import { Tooltip } from '@components/tooltip';
import { Typography } from '@components/typography';
import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

export const Logos = (): JSX.Element => {
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

  return (
    <section className="bg-purple-500 mb-44">
      <div className="flex justify-between items-center px-4 py-12 mx-auto sm:px-12 lg:px-52">
        {logos.map(Logo => (
          <div key={Logo.message} className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Tooltip message={Logo.message} >
              <Typography variant='h2'>
                <Logo.icon className="text-lightPurple-100 fill-current" />
              </Typography>
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
}
