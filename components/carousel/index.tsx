import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';
import Autoplay from 'embla-carousel-autoplay';

interface Props {
  slides: JSX.Element[];
}

const options = { delay: 4000, stopOnMouseEnter: true } // Options
const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
const autoplay = Autoplay(options, autoplayRoot)

export const Carousel = ({ slides }: Props): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    loop: true
  }, [autoplay]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <React.Fragment key={index}>
                  {React.cloneElement(slide, {
                    className: styles.embla__slide__img,
                  })}
                </React.Fragment>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}