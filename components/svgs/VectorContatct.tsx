import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  className?: string;
}

export const VectorContatct = ({ className }: Props): JSX.Element => {
  return (
    <svg width="178" height="107" viewBox="0 0 178 107" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_93_1143)">
        <path d="M74.1804 62.071C78.914 50.6404 73.4871 37.5358 62.059 32.801C50.631 28.0663 37.5293 33.4944 32.7956 44.9251C28.062 56.3557 33.4889 69.4603 44.9169 74.1951C56.345 78.9298 69.4467 73.5017 74.1804 62.071Z" fill="#7305E8" />
        <path d="M53.4907 30.666C57.9987 30.6714 62.404 32.0134 66.1497 34.5224C69.8954 37.0314 72.8133 40.5948 74.5348 44.7622C76.2562 48.9295 76.7038 53.5138 75.8211 57.9356C74.9383 62.3573 72.7648 66.4181 69.5752 69.6046C66.3857 72.7911 62.3232 74.9603 57.9014 75.838C53.4796 76.7157 48.8969 76.2625 44.7325 74.5357C40.5681 72.8089 37.009 69.8861 34.505 66.1365C32.001 62.387 30.6646 57.9792 30.6646 53.4701C30.6789 47.4218 33.0893 41.6257 37.3677 37.3515C41.6461 33.0772 47.4437 30.6732 53.4907 30.666ZM53.4907 75.4761C57.8367 75.4761 62.0851 74.187 65.6987 71.7719C69.3123 69.3569 72.1287 65.9243 73.7918 61.9082C75.455 57.8921 75.8901 53.4728 75.0423 49.2094C74.1944 44.9459 72.1016 41.0297 69.0285 37.9559C65.9554 34.8821 62.0401 32.7888 57.7775 31.9408C53.515 31.0927 49.0968 31.528 45.0816 33.1915C41.0664 34.855 37.6346 37.6721 35.2201 41.2865C32.8056 44.9009 31.5168 49.1503 31.5168 53.4973C31.5269 59.3218 33.8457 64.9047 37.9649 69.0217C42.0841 73.1388 47.6674 75.454 53.4907 75.4598V75.4761Z" fill="#7305E8" />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          d="M178 47.4214H165.846V59.5781H178V47.4214Z" fill="#7305E8" />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          stroke="#7305E8"
          strokeWidth={1}
          d="M171.92 53.0737H106.547V53.9262H171.92V53.0737Z" />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          d="M53.4907 -0.0107422C64.0703 -0.0107421 74.4124 3.12727 83.209 9.00646C92.0057 14.8857 98.8617 23.2419 102.91 33.0186C106.959 42.7953 108.017 53.5531 105.953 63.9318C103.889 74.3105 98.7937 83.8437 91.3123 91.326C83.831 98.8083 74.2994 103.903 63.9228 105.967C53.5463 108.031 42.7909 106.971 33.0169 102.92C23.2429 98.8701 14.8891 92.0117 9.01216 83.2125C3.13519 74.4133 -0.00107337 64.0686 2.75565e-07 53.4866C0.0158075 39.3021 5.65666 25.7032 15.6848 15.6738C25.713 5.64441 39.3094 0.00362903 53.4907 -0.0107422ZM53.4907 106.131C63.9048 106.131 74.085 103.043 82.744 97.2555C91.4031 91.4684 98.1519 83.243 102.137 73.6195C106.123 63.9959 107.165 53.4064 105.134 43.1901C103.102 32.9738 98.087 23.5895 90.7231 16.2239C83.3593 8.85838 73.9771 3.84241 63.7631 1.81026C53.5491 -0.221889 42.962 0.82104 33.3406 4.80725C23.7192 8.79346 15.4957 15.5439 9.70988 24.2049C3.92411 32.8658 0.835958 43.0484 0.835958 53.4648C0.843147 67.4317 6.39264 80.8245 16.2654 90.7016C26.1382 100.579 39.527 106.132 53.4907 106.142V106.131Z"
          stroke="#7305E8"
          strokeWidth={1}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          d="M102.221 19.3887C110.803 30.0577 112.795 46.0912 113.077 48.8005H127.473V49.6529H112.274L112.241 49.2566C112.241 49.0828 110.721 31.3391 101.531 19.9371L102.221 19.3887Z"
          stroke="#7305E8"
          strokeWidth={1}
        />
      </g>
      <defs>
        <clipPath id="clip0_93_1143">
          <rect width="178" height="107" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}
