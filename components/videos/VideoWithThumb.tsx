import Modal from '@components/modal';
import React, { useState } from 'react';
import { BiFullscreen } from 'react-icons/bi';
import * as gtag from '@lib/gtag';

interface Props {
    image: JSX.Element;
    video: JSX.Element;
    key: number | string;
    className?: string;
}

export const VideoWithThumb = ({ image, video, className }: Props): JSX.Element => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClose = (): void => {
        setIsClicked(false);
    };

    const handleOpen = (): void => {
        gtag.event({
            action: 'click',
            category: 'Video',
            label: 'user clicked on video thumbnail',
            value: video.props.src
        });
        setIsClicked(true);
    };

    return (
        <>
            <div className="relative w-full h-full">
                {React.cloneElement(image, {
                    className: className
                })}
                <div
                    className="absolute bottom-0 right-0 rounded-full bg-purple-500 p-4 cursor-pointer"
                    onClick={handleOpen}>
                    <BiFullscreen />
                </div>
            </div>
            <Modal
                body={React.cloneElement(video, {
                    className: className
                })}
                onClose={handleClose}
                isOpen={isClicked}
                title={<>Loading</>}
            />
        </>
    );
};
