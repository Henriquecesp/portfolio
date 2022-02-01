import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css'

interface Props {
  image: string | StaticImageData;
}

export const ProjectImage = ({ image }: Props): JSX.Element => {
  return (
    <div className={styles.image}>
      <div className="lg:max-w-4xl lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 p-5">
        <Image className="object-cover object-center rounded" alt="project" src={image} />
      </div>
    </div>
  );
}
