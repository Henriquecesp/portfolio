import React from 'react';
import { motion, Transition } from 'framer-motion';

const transition = {
  duration: 1.5,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse',
  repeatDelay: 1
} as Transition

const initial = { pathLength: 0, fill: 'rgba(115, 5, 232, 0)' }

const animate = { pathLength: 1, fill: "rgba(115, 5, 232, 1)" }

interface Props {
  className?: string;
}

export const VectorProjectsTriple = ({ className }: Props): JSX.Element => {
  return (
    <svg className={className} width="98" height="34" viewBox="0 0 98 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_82_408)">
        <motion.path
          d="M25.5648 25.2691H7.94016V7.6521H25.5648V25.2691ZM8.84189 24.3675H24.6631V8.55393H8.84189V24.3675Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M11.0847 22.7688L10.4483 22.1323C13.6686 18.9271 22.0869 10.5315 22.39 10.1906L23.1477 10.7209C23.0795 10.774 22.9734 10.9332 11.0847 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M22.4202 22.7688C19.215 19.5485 10.8195 11.1226 10.4785 10.8195L11.0165 10.0997C11.062 10.0997 11.2211 10.236 23.0568 22.1323L22.4202 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <path d="M24.5103 4.15016L23.8728 4.78772L28.4645 9.37948L29.1021 8.74192L24.5103 4.15016Z" fill="#6004C2" />
        <path d="M4.63829 23.7686L4.00073 24.4061L8.59236 28.9978L9.22992 28.3602L4.63829 23.7686Z" fill="#6004C2" />
        <motion.path
          d="M57.9498 25.2691H40.3252V7.6521H57.9498V25.2691ZM41.2269 24.3675H57.0406V8.55393H41.2269V24.3675Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M43.4698 22.7688L42.8333 22.1323C46.0461 18.9271 54.4719 10.5315 54.775 10.1906L55.4948 10.7209C55.4645 10.774 55.3584 10.9332 43.4698 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M54.8053 22.7688C51.6001 19.5485 43.2045 11.1226 42.8636 10.8195L43.4016 10.0997C43.4471 10.0997 43.6062 10.236 55.4418 22.1323L54.8053 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <path d="M56.8967 4.14882L56.2591 4.78638L60.8509 9.37814L61.4885 8.74058L56.8967 4.14882Z" fill="#6004C2" />
        <g filter="url(#filter0_f_82_408)">
          <path d="M54.8053 22.7688C51.6001 19.5485 43.2045 11.1226 42.8636 10.8195L43.4016 10.0997C43.4471 10.0997 43.6062 10.236 55.4418 22.1323L54.8053 22.7688Z" fill="#6004C2" />
        </g>
        <g filter="url(#filter1_f_82_408)">
          <path d="M56.8967 4.14894L56.2591 4.7865L60.8509 9.37826L61.4884 8.7407L56.8967 4.14894Z" fill="#6004C2" />
        </g>
        <motion.path
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
          d="M36.9944 23.934L36.3568 24.5715L40.9484 29.1632L41.586 28.5256L36.9944 23.934Z"
        />
        <motion.path
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
          d="M90.3273 25.2691H72.7103V7.6521H90.3273V25.2691ZM73.612 24.3675H89.4257V8.55393H73.5893L73.612 24.3675Z"
        />
        <motion.path
          d="M75.8624 22.7688L75.2335 22.1323C78.4463 18.9271 86.8721 10.5315 87.1752 10.1906L87.895 10.7209C87.8496 10.774 87.7435 10.9332 75.8624 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          d="M87.2282 22.7688C84.0231 19.5485 75.6275 11.1226 75.2865 10.8195L75.8245 10.0997C75.8699 10.0997 76.0291 10.236 87.8647 22.1323L87.2282 22.7688Z"
          initial={initial}
          animate={animate}
          transition={transition}
          stroke="#7305E8"
          strokeWidth={1}
        />
        <path d="M89.2831 4.15516L88.6455 4.79272L93.2373 9.38449L93.8748 8.74693L89.2831 4.15516Z" fill="#6004C2" />
        <path d="M69.4058 23.7713L68.7681 24.4089L73.3598 29.0006L73.9974 28.3629L69.4058 23.7713Z" fill="#6004C2" />
      </g>
      <g clipPath="url(#clip1_82_408)" filter="url(#filter2_f_82_408)">
        <path d="M25.5648 25.2691H7.94016V7.6521H25.5648V25.2691ZM8.84189 24.3675H24.6631V8.55393H8.84189V24.3675Z" fill="#4D039C" />
        <path d="M11.0847 22.7688L10.4483 22.1323C13.6686 18.9271 22.0869 10.5315 22.39 10.1906L23.1477 10.7209C23.0795 10.774 22.9734 10.9332 11.0847 22.7688Z" fill="#4D039C" />
        <path d="M22.4202 22.7688C19.215 19.5485 10.8195 11.1226 10.4785 10.8195L11.0165 10.0997C11.062 10.0997 11.2211 10.236 23.0568 22.1323L22.4202 22.7688Z" fill="#4D039C" />
        <path d="M24.5103 4.15016L23.8728 4.78772L28.4645 9.37948L29.1021 8.74192L24.5103 4.15016Z" fill="#4D039C" />
        <path d="M4.63829 23.7686L4.00073 24.4061L8.59236 28.9978L9.22992 28.3602L4.63829 23.7686Z" fill="#4D039C" />
        <path d="M57.9498 25.2691H40.3252V7.6521H57.9498V25.2691ZM41.2269 24.3675H57.0406V8.55393H41.2269V24.3675Z" fill="#4D039C" />
        <path d="M43.4698 22.7688L42.8333 22.1323C46.0461 18.9271 54.4719 10.5315 54.775 10.1906L55.4948 10.7209C55.4645 10.774 55.3584 10.9332 43.4698 22.7688Z" fill="#4D039C" />
        <path d="M54.8053 22.7688C51.6001 19.5485 43.2045 11.1226 42.8636 10.8195L43.4016 10.0997C43.4471 10.0997 43.6062 10.236 55.4418 22.1323L54.8053 22.7688Z" fill="#4D039C" />
        <path d="M56.8967 4.14882L56.2591 4.78638L60.8509 9.37814L61.4885 8.74058L56.8967 4.14882Z" fill="#4D039C" />
        <g filter="url(#filter3_f_82_408)">
          <path d="M54.8053 22.7688C51.6001 19.5485 43.2045 11.1226 42.8636 10.8195L43.4016 10.0997C43.4471 10.0997 43.6062 10.236 55.4418 22.1323L54.8053 22.7688Z" fill="#4D039C" />
        </g>
        <g filter="url(#filter4_f_82_408)">
          <path d="M56.8967 4.14894L56.2591 4.7865L60.8509 9.37826L61.4884 8.7407L56.8967 4.14894Z" fill="#4D039C" />
        </g>
        <path d="M36.9944 23.934L36.3568 24.5715L40.9484 29.1632L41.586 28.5256L36.9944 23.934Z" fill="#4D039C" />
        <path d="M90.3273 25.2691H72.7103V7.6521H90.3273V25.2691ZM73.612 24.3675H89.4257V8.55393H73.5893L73.612 24.3675Z" fill="#4D039C" />
        <path d="M75.8624 22.7688L75.2335 22.1323C78.4463 18.9271 86.8721 10.5315 87.1752 10.1906L87.895 10.7209C87.8496 10.774 87.7435 10.9332 75.8624 22.7688Z" fill="#4D039C" />
        <path d="M87.2282 22.7688C84.0231 19.5485 75.6275 11.1226 75.2865 10.8195L75.8245 10.0997C75.8699 10.0997 76.0291 10.236 87.8647 22.1323L87.2282 22.7688Z" fill="#4D039C" />
        <path d="M89.2831 4.15516L88.6455 4.79272L93.2373 9.38449L93.8748 8.74693L89.2831 4.15516Z" fill="#4D039C" />
        <path d="M69.4058 23.7713L68.7681 24.4089L73.3598 29.0006L73.9974 28.3629L69.4058 23.7713Z" fill="#4D039C" />
      </g>
      <defs>
        <filter id="filter0_f_82_408" x="27.8636" y="-4.90027" width="42.5783" height="42.6691" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_82_408" />
        </filter>
        <filter id="filter1_f_82_408" x="41.2591" y="-10.8511" width="35.2293" height="35.2294" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_82_408" />
        </filter>
        <filter id="filter2_f_82_408" x="0" y="0" width="97.9038" height="33.02" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_82_408" />
        </filter>
        <filter id="filter3_f_82_408" x="27.8636" y="-4.90027" width="42.5783" height="42.6691" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_82_408" />
        </filter>
        <filter id="filter4_f_82_408" x="41.2591" y="-10.8511" width="35.2293" height="35.2294" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_82_408" />
        </filter>
        <clipPath id="clip0_82_408">
          <rect width="89.9038" height="25.02" fill="white" transform="translate(4 4)" />
        </clipPath>
        <clipPath id="clip1_82_408">
          <rect width="89.9038" height="25.02" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>

  );
}
