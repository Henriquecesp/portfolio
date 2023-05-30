import { CardProps } from '@components/github/Card';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { VideoProps } from '@components/videos';

export interface ComponentsRenderConfig {
    name: string;
    order: number;
    Component: React.ElementType;
}

interface Props {
    Components: ComponentsRenderConfig[];
    pinnedItems: CardProps[];
    videos: VideoProps[];
}

export const Render = ({ Components, ...rest }: Props): JSX.Element => {
    return (
        <>
            <ReactFullpage
                navigation
                render={({ fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                        {Components.sort((a, b) => a.order - b.order).map(
                            ({ Component }, index) => {
                                return (
                                    <div className="section" key={index}>
                                        <Component fullpageApi={fullpageApi} {...rest} />
                                    </div>
                                );
                            }
                        )}
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};
