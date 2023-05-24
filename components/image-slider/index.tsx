import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './image-slider.module.css';
import Image from 'next/image';

interface Props {
    imageLeft: StaticImageData;
    imageRight: StaticImageData;
}

export const ImageSlider = ({ imageLeft, imageRight }: Props): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const leftImage = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleResize = useCallback((e: MouseEvent) => {
        const { left, width } = leftImage.current.getBoundingClientRect();
        const handlerWidth = ref.current.offsetWidth;
        const x = e.clientX;

        if (x >= left && x <= left + width - handlerWidth) {
            ref.current.style.left = `${x - left}px`;
            leftImage.current.style.clipPath = `inset(0px ${
                width - (x - left) - handlerWidth
            }px 0px 0px)`;
        }
    }, []);

    const handleStopResize = useCallback(() => {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleStopResize);
    }, [handleResize]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleResize);
            window.addEventListener('mouseup', handleStopResize);
        }

        return () => {
            window.removeEventListener('mousemove', handleResize);
            window.removeEventListener('mouseup', handleStopResize);
        };
    }, [isDragging, handleResize, handleStopResize]);

    useEffect(() => {
        leftImage.current.style.clipPath = `inset(0px 50% 0px 0px)`;
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={styles.handle}
                onMouseDown={() => {
                    setIsDragging(true);
                }}
                ref={ref}>
                <span className={styles.handleCircle} />
            </div>
            <div className={styles.left} ref={leftImage}>
                <Image draggable={false} className={styles.img} src={imageLeft} alt="codeImage" />
            </div>
            <div className={styles.right}>
                <Image
                    draggable={false}
                    src={imageRight}
                    className={styles.img}
                    alt="websiteImage"
                />
            </div>
        </div>
    );
};
