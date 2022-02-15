import React from 'react';
import { motion, Transition } from 'framer-motion';
interface Props {
  className?: string;
}

const transition = {
  duration: 1.5,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
  repeatDelay: 1
} as Transition

const initial = { pathLength: 0, fill: 'rgba(115, 5, 232, 0)' }

const animate = { pathLength: 1, fill: "rgba(115, 5, 232, 1)" }

export const VectorProjectsTop = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} width="420" height="216" viewBox="0 0 420 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M82.4794 207.547H-303.751L-333.03 178.281H-687V176.895H-332.448L-303.182 206.174H81.9111L272.045 17.3151H372.207V18.7014H272.614L82.4794 207.547Z"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="#7305E8"
        strokeWidth={1}
      />
      <motion.path
        d="M87.8861 215.31H33.861V213.937H87.3039L105.479 195.763L106.449 196.733L87.8861 215.31Z"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="#7305E8"
        strokeWidth={1}

      />
      <motion.path
        d="M250.571 30.6376L249.587 29.6533L269.398 9.85657H324.629V11.2429H269.966L250.571 30.6376Z"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="#7305E8"
        strokeWidth={1}
      />
      <motion.path
        d="M408.82 10.2448H393.293V25.7716H408.82V10.2448Z"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={transition}
        fill="#7305E8"
      />
      <motion.path
        d="M419.079 36.0444H383.035V0H419.079V36.0444ZM384.421 34.6581H417.693V1.38632H384.421V34.6581Z"
        initial={initial}
        animate={animate}
        transition={transition}
        stroke="#7305E8"
        strokeWidth={1}
      />
    </svg>

  );
}
