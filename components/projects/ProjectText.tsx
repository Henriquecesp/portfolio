import { ButtonPrimary } from '@components/button';
import { VectorProjectsTriple } from '@components/svgs/VectorProjectsTriple';
import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as gtag from "@lib/gtag";
import { CONTACT_EMAIL } from '@lib/constants'

interface Props {
  title: string;
  subtitle: string;
  cta: string;
}

export const ProjectText = ({ title, subtitle, cta }: Props): JSX.Element => {

  const handleClick = () => {
    const link = "mailto:" + CONTACT_EMAIL;
    window.open(link, '_blank');
    gtag.event({
      action: 'click',
      category: 'Projects',
      label: 'user clicked on projects cta button',
      value: link
    })
  }

  return (
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 pl-0 flex flex-col items-start text-left z-50">
      <VectorProjectsTriple className='mb-10' />
      <Typography variant='h6' className='mb-6'>
        <FormattedMessage id={title} />
      </Typography>
      <Typography variant='body2' className='max-w-sm mb-9'>
        <FormattedMessage id={subtitle}
          values={{
            br: <br />
          }}
        />
      </Typography>
      <div className='flex flex-col justify-center w-2/4'>
        <ButtonPrimary onClick={handleClick}>
          <FormattedMessage id={cta} />
        </ButtonPrimary>
      </div>
    </div>
  );
}
