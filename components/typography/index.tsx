import React from 'react';

interface Props {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  className?: string;
}

export const Typography = ({
  children,
  variant,
  className,
}: Props): JSX.Element => {
  const variants: Record<Props['variant'], React.ReactElement> = {
    h1: <h1 className={`${className} text-8xl `}>{children}</h1>,
    h2: <h2 className={`${className} text-6xl`}>{children}</h2>,
    h3: <h3 className={`${className} text-5xl`}>{children}</h3>,
    h4: <h4 className={`${className} text-4xl font-medium`}>{children}</h4>,
    h5: <h5 className={`${className} text-3xl font-medium`}>{children}</h5>,
    h6: <h6 className={`${className} text-2xl font-medium`}>{children}</h6>,
    subtitle1: <span className={`${className} text-base`}>{children}</span>,
    subtitle2: <span className={`${className} text-sm`}>{children}</span>,
    body1: <p className={`${className} text-base tracking-wide`}>{children}</p>,
    body2: <p className={`${className} text-sm tracking-wide`}>{children}</p>,
    button: <span className={`${className} text-base tracking-wide uppercase`}>{children}</span>,
    caption: <span className={`${className} text-sx`}>{children}</span>,
    overline: <span className={`${className} text-xs tracking-wide uppercase`}>{children}</span>,
  };

  return variants[variant]
}
