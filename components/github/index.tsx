import React from 'react';
import { CardProps, GithubCard } from './Card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import VectorBottom from 'assets/vector-gh-bottom.svg'
import VectorTop from 'assets/vector-gh-top.svg'
import { Logos } from '@components/logos';

interface Props {
  pinnedItems: CardProps[];
}

const options = { delay: 1000, stopOnMouseEnter: true }; // Options
const autoplay = Autoplay(options);

function Github({ pinnedItems = [] }: Props): JSX.Element {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    align: 'center',
    startIndex: 2
  }, [autoplay]);

  return (
    <>
      <section id="github" className="text-gray-600 body-font px-5 py-44 relative max-w-screen-xl m-auto">
        <VectorTop className="absolute top-20" />
        <div className="w-full overflow-hidden" ref={emblaRef} >
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
        <VectorBottom className="absolute right-0 bottom-[10%]" />
      </section >
      <Logos />
    </>
  );
}

export default Github;
