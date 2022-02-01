import { ButtonPrimary } from '@components/button';
import { Typography } from '@components/typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  title: string;
  subtitle: string;
  cta: string;
}

export const ProjectText = ({ title, subtitle, cta }: Props): JSX.Element => {
  return (
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
        <ButtonPrimary>
          <FormattedMessage id={cta} />
        </ButtonPrimary>
      </div>
    </div>
  );
}
