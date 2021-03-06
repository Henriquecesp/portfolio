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
} as Transition

const initial = { pathLength: 0 }

const animate = { pathLength: 1 }

export const VectorLineup = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} width="10" height="338" viewBox="0 0 10 338" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_93_1187)">
        <motion.path
          d="M3.03717 245.47L3.03717 310.708L5.89431 310.708L5.89431 245.47L3.03717 245.47Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M3.03717 70.8386L3.03717 136.076L5.89431 136.076L5.89431 70.8386L3.03717 70.8386Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M4.10565 146.724L4.10565 225.407L4.81994 225.407L4.81993 146.724L4.10565 146.724Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M4.45978 223.683C4.89335 223.682 5.3175 223.802 5.67858 224.028C6.03966 224.254 6.32134 224.576 6.48808 224.952C6.65483 225.329 6.69914 225.744 6.61528 226.145C6.53143 226.545 6.32325 226.913 6.01709 227.202C5.71093 227.491 5.32061 227.688 4.89545 227.769C4.4703 227.849 4.02942 227.808 3.62874 227.652C3.22806 227.496 2.88556 227.232 2.64455 226.892C2.40355 226.553 2.27497 226.154 2.27497 225.746C2.27418 225.475 2.33009 225.207 2.43954 224.957C2.54899 224.706 2.70976 224.479 2.91273 224.287C3.11569 224.096 3.35681 223.944 3.62229 223.84C3.88776 223.736 4.17235 223.683 4.45978 223.683Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M4.45977 144.661C4.89334 144.66 5.31749 144.78 5.67857 145.006C6.03965 145.232 6.32133 145.554 6.48808 145.93C6.65482 146.307 6.69913 146.722 6.61527 147.123C6.53142 147.523 6.32325 147.891 6.01709 148.18C5.71093 148.469 5.3206 148.667 4.89545 148.747C4.47029 148.827 4.02941 148.786 3.62873 148.63C3.22805 148.474 2.88555 148.21 2.64454 147.87C2.40354 147.531 2.27496 147.132 2.27496 146.724C2.27496 146.178 2.50491 145.654 2.91448 145.267C3.32405 144.88 3.87976 144.662 4.45977 144.661Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M3.03116 136.076L6.09102e-05 133.216L5.94721e-05 100.318L3.66144 96.8703C3.66144 96.8703 5.23411 129.571 5.06004 130.023C4.88597 130.475 3.03116 136.076 3.03116 136.076Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M3.03119 70.8384L3.17539 70.7084L6.61475 67.47L6.61475 50.8992C6.61475 50.8992 8.70958 48.7628 8.70958 48.9324L8.70958 72.1044L5.39024 75.2241L3.03119 70.8384Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M5.89436 299.947L10 303.813L10 322.56L5.55823 318.377L5.55823 300.914L5.89436 299.947Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M-1.20065e-07 32.503L0 35.2498L8.70948 35.2498L8.70948 32.503L-1.20065e-07 32.503Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M-1.20063e-07 335.253L0 338L8.70948 338L8.70948 335.253L-1.20063e-07 335.253Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M-1.20065e-07 16.2542L0 19.001L8.70948 19.001L8.70948 16.2542L-1.20065e-07 16.2542Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
        <motion.path
          d="M-1.20062e-07 -0.000121832L0 2.74658L8.70948 2.74658L8.70948 -0.000122213L-1.20062e-07 -0.000121832Z"
          stroke="#6004C2"
          initial={initial}
          animate={animate}
          transition={transition}
          strokeWidth={1}
        />
      </g>
      <defs>
        <clipPath id="clip0_93_1187">
          <rect width="338" height="10" fill="white" transform="translate(0 338) rotate(-90)" />
        </clipPath>
      </defs>
    </svg>

  );
}
