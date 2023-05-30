import React from 'react';
import { CardProps, GithubCard } from './Card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Logos } from '@components/logos';
import { VectorGithubTop } from '@components/svgs/VectorGithubTop';
import { VectorGithubBottom } from '@components/svgs/VectorGithubBottom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useBreakpoint } from '@lib/hooks';

interface Props {
    pinnedItems: CardProps[];
}

const variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            bounce: true,
            type: 'just'
        }
    },
    closed: {
        opacity: 0,
        x: -1000
    }
};

const options = { delay: 2000, stopOnMouseEnter: true }; // Options
const autoplay = Autoplay(options);

function Github({ pinnedItems = [] }: Props): JSX.Element {
    const breakPoint = useBreakpoint();
    const blockAnimation = ['sm', 'xs', 'md'].includes(breakPoint);
    const [sectionRef, sectionInView] = useInView({
        initialInView: true
    });
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            skipSnaps: false,
            align: 'center',
            startIndex: 2
        },
        [autoplay]
    );

    const props = blockAnimation
        ? {}
        : {
              initial: false,
              animate: sectionInView ? 'open' : 'closed',
              variants: variants,
              ref: sectionRef
          };

    return (
        <>
            <motion.section
                id="github"
                className="text-gray-600 body-font px-5 py-44 relative max-w-screen-xl m-auto overflow-hidden"
                {...props}>
                <VectorGithubTop className="absolute top-20" />
                <div className="w-full overflow-hidden" ref={emblaRef}>
                    <div className="flex -m-2 py-4">
                        {pinnedItems.map((item: CardProps) => (
                            <GithubCard
                                length={pinnedItems.length}
                                key={item.name}
                                name={item.name}
                                description={item.description}
                                url={item.url}
                            />
                        ))}
                    </div>
                </div>
                <VectorGithubBottom className="absolute right-0 bottom-[10%]" />
            </motion.section>
            <Logos />
        </>
    );
}

export default Github;
