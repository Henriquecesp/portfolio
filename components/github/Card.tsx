import { Typography } from '@components/typography';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export interface CardProps {
  name: string;
  description: string;
  url: string;
  length: number;
}

export const GithubCard = ({
  name,
  description,
  url,
  length
}: CardProps): JSX.Element => {
  const renderDescription = () => {
    const length = 100;
    const textLength = description.length;
    const descriptionText = textLength > length ? description.slice(0, length) + '...' : description;
    return descriptionText.replace(/\p{Emoji}/gu, '');
  }

  return (
    <div className={`p-2 relative min-w-[33%]`}>
      <div className="bg-purple-600 p-6 relative overflow-hidden">
        <div className="flex-col flex w-full">
          <div className='h-28'>
            <Typography variant='h5' className="text-gray-100 mb-3">{name}</Typography>
            <Typography variant='caption' className="leading-relaxed text-base text-gray-100">
              {renderDescription()}
            </Typography>
          </div>
          <div className='flex justify-between mt-4 items-center'>
            <Link href={url}>
              <a className="text-lightPurple-100 inline-flex items-center" target="_blank" >
                See code
              </a>
            </Link>
            <div className="w-6 h-6 sm:mr-8 sm:mb-0 inline-flex items-center justify-end rounded-full text-purple-300 flex-shrink-0">
              <FaGithub className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
