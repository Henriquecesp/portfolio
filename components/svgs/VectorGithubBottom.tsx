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

const initial = { clipPath: 'inset(100% 100%)' }

const animate = { clipPath: 'inset(0%)' }

export const VectorGithubBottom = ({ className }: Props): JSX.Element => {
  return (
    <motion.svg
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      width="288"
      height="49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_93_1175)">
        <g opacity="0.22">
          <path opacity="0.22" d="M284.05 1.76001L253.28 46.48H3.34L34.11 1.76001H284.05Z" fill="#4D039C" />
        </g>
        <path
          fill="#4D039C"
          d="M78.89 46.49H3.32999L34.1 1.76001H154.38L78.89 46.49Z"
        />
        <path d="M196.97 1.76001L121.48 46.48H100.04L175.53 1.76001H196.97Z" fill="#4D039C" />
        <path d="M239.55 1.76001L164.06 46.48H142.63L218.12 1.76001H239.55Z" fill="#4D039C" />
        <path d="M282.14 1.76001L206.65 46.48H185.21L260.7 1.76001H282.14Z" fill="#4D039C" />
        <path d="M270.81 21L256.06 42.44L249.24 46.48H227.8L270.81 21Z" fill="#4D039C" />
        <path d="M254.2 48.24H6.10352e-05L33.18 0H287.39L254.2 48.24ZM6.70001 44.72H252.37L280.7 3.51001H35.03L6.70001 44.72Z" fill="#4D039C" />
      </g>
      <defs>
        <clipPath id="clip0_93_1175">
          <rect width="287.39" height="48.24" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>

  );
}
