import { Typography } from '@components/typography';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import * as gtag from "@lib/gtag";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, YOUTUBE_PROFILE_URL } from '@lib/constants';

const socialMedia = [
  {
    icon: <AiFillGithub />,
    name: 'Github',
    url: GITHUB_PROFILE_URL
  },
  {
    icon: <AiFillLinkedin />,
    name: 'Linkedin',
    url: LINKEDIN_PROFILE_URL
  },
  {
    icon: <AiFillYoutube />,
    name: 'Youtube',
    url: YOUTUBE_PROFILE_URL
  }
]

export const SocialMedia = (): JSX.Element => {

  const handleClick = (url: string, name: string) => {
    gtag.event({
      action: 'click',
      category: 'SocialMedia',
      label: `user clicked on social media button, ${name}`,
      value: url
    })
  }

  return (
    <div className='flex w-[15rem] justify-between items-center pt-[50px]'>
      {socialMedia.map(({ url, name, icon }) => (
        <a href={url} onClick={() => handleClick(url, name)} target='_blank' rel="noreferrer" key={name}>
          <Typography variant='h4'>
            {icon}
          </Typography>
        </a>
      ))}
    </div>
  );
}
