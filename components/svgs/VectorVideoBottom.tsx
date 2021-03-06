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
  delay: 1,
} as Transition

const initial = { pathLength: 0 }

const animate = { pathLength: 1 }

export const VectorVideoBottom = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} width="119" height="59" viewBox="0 0 119 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_74_71)">
        <motion.path
          d="M81.8073 28.2344H33.1887V30.7605H81.8073V28.2344Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path d="M89.2193 20C87.2834 19.999 85.3906 20.5557 83.7805 21.5998C82.1704 22.6438 80.9153 24.1284 80.174 25.8654C79.4327 27.6024 79.2384 29.514 79.6158 31.3582C79.9932 33.2025 80.9253 34.8967 82.2942 36.2263C83.6631 37.556 85.4074 38.4613 87.3062 38.8279C89.205 39.1945 91.173 39.0058 92.9613 38.2857C94.7497 37.5657 96.2781 36.3466 97.353 34.7827C98.4279 33.2188 99.0011 31.3804 99 29.5C98.9986 26.9809 97.9676 24.5653 96.1337 22.784C94.2997 21.0027 91.8129 20.0014 89.2193 20ZM89.2193 36.602C87.7734 36.601 86.3602 36.1836 85.1585 35.4026C83.9568 34.6216 83.0205 33.5121 82.4679 32.2143C81.9152 30.9165 81.7712 29.4887 82.0539 28.1114C82.3366 26.7341 83.0334 25.4691 84.0562 24.4764C85.0789 23.4837 86.3818 22.8077 87.8 22.5341C89.2182 22.2605 90.6881 22.4015 92.0238 22.9392C93.3596 23.4769 94.5013 24.3871 95.3045 25.5549C96.1077 26.7227 96.5363 28.0956 96.5363 29.5C96.5363 30.4331 96.347 31.3571 95.9793 32.219C95.6115 33.081 95.0724 33.8641 94.3929 34.5236C93.7134 35.1832 92.9066 35.7062 92.0189 36.0628C91.1312 36.4194 90.1799 36.6027 89.2193 36.602Z" fill="#7305E8" />
        <motion.path d="M33.1887 28.2344L36.7338 24.791H50.3814L52.1856 26.5434H64.1714L66.7881 29.085L33.1887 28.2344Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M33.1887 30.7605L36.7338 34.2039H50.3814L52.1856 32.4514H64.1714L66.7881 29.915L33.1887 30.7605Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M89.2193 31.8263C90.51 31.8263 91.5563 30.81 91.5563 29.5563C91.5563 28.3027 90.51 27.2864 89.2193 27.2864C87.9286 27.2864 86.8823 28.3027 86.8823 29.5563C86.8823 30.81 87.9286 31.8263 89.2193 31.8263Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M31.7801 28.2754H29.2637V30.7196H31.7801V28.2754Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M27.1483 28.2754H24.6319V30.7196H27.1483V28.2754Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M22.5164 28.2754H20V30.7196H22.5164V28.2754Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
      </g>
      <g clipPath="url(#clip1_74_71)" filter="url(#filter0_f_74_71)">
        <motion.path d="M81.8073 28.2344H33.1887V30.7605H81.8073V28.2344Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M89.2193 20C87.2834 19.999 85.3906 20.5557 83.7805 21.5998C82.1704 22.6438 80.9153 24.1284 80.174 25.8654C79.4327 27.6024 79.2384 29.514 79.6158 31.3582C79.9932 33.2025 80.9253 34.8967 82.2942 36.2263C83.6631 37.556 85.4074 38.4613 87.3062 38.8279C89.205 39.1945 91.173 39.0058 92.9613 38.2857C94.7497 37.5657 96.2781 36.3466 97.353 34.7827C98.4279 33.2188 99.0011 31.3804 99 29.5C98.9986 26.9809 97.9676 24.5653 96.1337 22.784C94.2997 21.0027 91.8129 20.0014 89.2193 20ZM89.2193 36.602C87.7734 36.601 86.3602 36.1836 85.1585 35.4026C83.9568 34.6216 83.0205 33.5121 82.4679 32.2143C81.9152 30.9165 81.7712 29.4887 82.0539 28.1114C82.3366 26.7341 83.0334 25.4691 84.0562 24.4764C85.0789 23.4837 86.3818 22.8077 87.8 22.5341C89.2182 22.2605 90.6881 22.4015 92.0238 22.9392C93.3596 23.4769 94.5013 24.3871 95.3045 25.5549C96.1077 26.7227 96.5363 28.0956 96.5363 29.5C96.5363 30.4331 96.347 31.3571 95.9793 32.219C95.6115 33.081 95.0724 33.8641 94.3929 34.5236C93.7134 35.1832 92.9066 35.7062 92.0189 36.0628C91.1312 36.4194 90.1799 36.6027 89.2193 36.602V36.602Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M33.1887 28.2344L36.7338 24.791H50.3814L52.1856 26.5434H64.1714L66.7881 29.085L33.1887 28.2344Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M33.1887 30.7605L36.7338 34.2039H50.3814L52.1856 32.4514H64.1714L66.7881 29.915L33.1887 30.7605Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M89.2193 31.8263C90.51 31.8263 91.5563 30.81 91.5563 29.5563C91.5563 28.3027 90.51 27.2864 89.2193 27.2864C87.9286 27.2864 86.8823 28.3027 86.8823 29.5563C86.8823 30.81 87.9286 31.8263 89.2193 31.8263Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M31.7801 28.2754H29.2637V30.7196H31.7801V28.2754Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1} />
        <motion.path d="M27.1483 28.2754H24.6319V30.7196H27.1483V28.2754Z" fill="#7305E8" />
        <motion.path d="M22.5164 28.2754H20V30.7196H22.5164V28.2754Z" fill="#7305E8" />
      </g>
      <defs>
        <filter id="filter0_f_74_71" x="0" y="0" width="119" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_74_71" />
        </filter>
      </defs>
    </svg>

  );
}
