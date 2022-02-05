import { CardProps } from '@components/github/Card';
import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

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
      <ReactFullpage
        navigation
        render={() => (
          <ReactFullpage.Wrapper>
            {Components
              .sort((a, b) => a.order - b.order)
              .map(({ Component }, index) => {
                return (
                  <div className="section" key={index}>
                    <Component  {...rest} />
                  </div>
                )
              })}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  )
}
