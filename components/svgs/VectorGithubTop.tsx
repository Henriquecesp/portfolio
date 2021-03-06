import { motion, Transition } from 'framer-motion';
import React from 'react';

interface Props {
  className?: string;
}

const transition = {
  duration: 3,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
  repeatDelay: 3
} as Transition

const initial = { pathLength: 0 }

const animate = { pathLength: 1 }

export const VectorGithubTop = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} width="365" height="122" viewBox="0 0 365 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_93_1176)">
        <motion.path
          d="M50.95 111.23H-69.81V109.66H50.3L153.94 6.02002H364.39V7.59002H154.59L50.95 111.23Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M134.67 18.62L133.55 17.51L151.07 0H268.17V1.57H151.72L134.67 18.62Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <g opacity="0.5">
          <motion.path
            opacity="0.5"
            d="M337.69 0H280.35V1.57H337.69V0Z"
            initial={initial}
            animate={animate}
            transition={transition}
            strokeWidth={1}
            stroke="#7305E8"
          />
        </g>
        <motion.path
          d="M198.85 21.8499C198.85 22.1885 198.749 22.5195 198.561 22.8009C198.373 23.0824 198.105 23.3016 197.792 23.4307C197.479 23.5598 197.135 23.5931 196.803 23.5263C196.471 23.4595 196.166 23.2956 195.927 23.0554C195.689 22.8153 195.526 22.5098 195.462 22.1774C195.397 21.845 195.432 21.5009 195.563 21.1886C195.694 20.8763 195.915 20.6099 196.197 20.4232C196.48 20.2366 196.811 20.1379 197.15 20.1399C197.374 20.1399 197.596 20.1842 197.803 20.2703C198.01 20.3564 198.198 20.4825 198.356 20.6414C198.514 20.8003 198.639 20.9889 198.723 21.1963C198.808 21.4037 198.851 21.6258 198.85 21.8499Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M306.3 13.5401L300.72 19.1301H264.78L259.96 23.9501H217.52L212.39 18.8101H204.36L198.85 13.3101L306.3 13.5401Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M179 22.35H196.7V21.34H179.42L171.38 13.3L170.66 14.02L179 22.35Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M308.35 19.3999H319.24L325 13.6299H312.65L306.87 19.4199L308.35 19.3999Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M327.05 19.3999H331.06L336.83 13.6299H331.36L325.57 19.4199L327.05 19.3999Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
      </g>
      <defs>
        <clipPath id="clip0_93_1176">
          <rect width="445.4" height="121.64" fill="white" transform="translate(-81)" />
        </clipPath>
      </defs>
    </svg>
  );
}
