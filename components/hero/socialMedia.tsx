import { Typography } from '@components/typography';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const socialMedia = [
  {
    icon: <AiFillGithub />,
    name: 'Github',
    url: 'https://github.com/henriquecesp'
  },
  {
    icon: <AiFillLinkedin />,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/henriquecesp/'
  },
  {
    icon: <AiFillYoutube />,
    name: 'Youtube',
    url: 'https://www.youtube.com/henriquecesp'
  }
]

export const SocialMedia = (): JSX.Element => {
  return (
    <div className='flex w-[15rem] justify-between items-center pt-[50px]'>
      {socialMedia.map((item) => (
        <a href={item.url} target='_blank' rel="noreferrer" key={item.name}>
          <Typography variant='h4'>
            {item.icon}
          </Typography>
        </a>
      ))}
    </div>
  );
}
