import React from 'react';
import styles from './Projects.module.css';
import { motion, Transition } from 'framer-motion';

interface Props {
    children?: React.ReactNode;
}

const transition = {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse'
} as Transition;

const initial = { pathLength: 0 };

const animate = { pathLength: 1 };

export const ProjectImage = ({ children }: Props): JSX.Element => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={styles.image}>
            <div className="w-1/2 hidden md:flex lg:max-w-4xl md:w-full md:mb-0 sm:mb-10 p-5">
                {children}
            </div>
        </motion.div>
    );
};
