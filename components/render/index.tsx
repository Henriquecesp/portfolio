import React from 'react';

export interface ComponentsRenderConfig {
  name: string;
  order: number;
  Component: React.ElementType;
}

interface Props {
  Components: ComponentsRenderConfig[];
}

export const Render = ({ Components }: Props): JSX.Element => {
  return (
    <>
      {Components.map(({ Component }, index) => {
        return (
          <Component key={index} />
        )
      })}
    </>
  )
}
