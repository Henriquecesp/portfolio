import { CardProps } from '@components/github/Card';
import React from 'react';

export interface ComponentsRenderConfig {
  name: string;
  order: number;
  Component: React.ElementType;
}

interface Props {
  Components: ComponentsRenderConfig[];
  pinnedItems: CardProps[];
}

export const Render = ({ Components, ...rest }: Props): JSX.Element => {
  return (
    <>
      {Components
        .sort((a, b) => a.order - b.order)
        .map(({ Component }, index) => {
          return (
            <Component key={index} {...rest} />
          )
        })}
    </>
  )
}
