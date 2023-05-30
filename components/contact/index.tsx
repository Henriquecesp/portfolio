import { ButtonPrimary } from '@components/button';
import { Footer } from '@components/footer';
import { VectorCircle } from '@components/svgs/VectorCircle';
import { VectorContatct } from '@components/svgs/VectorContatct';
import { VectorLineup } from '@components/svgs/VectorLineup';
import { Typography } from '@components/typography';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import * as gtag from '@lib/gtag';
import { CONTACT_EMAIL } from '@lib/constants';
import { FormattedMessage } from 'react-intl';

const variants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5
        }
    },
    closed: {
        opacity: 0
    }
};

export const Contact = (): JSX.Element => {
    const [sectionRef, sectionInView] = useInView();

    const handleClick = () => {
        const link = 'mailto:' + CONTACT_EMAIL;
        window.open(link, '_blank');
        gtag.event({
            action: 'click',
            category: 'Contact',
            label: 'user clicked on contact cta button',
            value: link
        });
    };

    return (
        <section
            id="contact"
            className="text-gray-400 body-font relative min-h-screen flex flex-col items-center justify-center"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #230048 0%, #180033 70%)',
                overflow: 'hidden'
            }}>
            <VectorLineup className="absolute left-48 -top-36" />
            <VectorCircle className="absolute -right-16 -top-24" />
            <motion.div
                className="container px-5 py-24 mx-auto"
                ref={sectionRef}
                initial={false}
                animate={sectionInView ? 'open' : 'closed'}
                variants={variants}>
                <div className="flex flex-col text-center w-full mb-12 text-gray-100">
                    <Typography variant="h4" className="mb-4">
                        <FormattedMessage id="contact.title" />
                    </Typography>
                    <Typography variant="body2" className="mx-auto w-3/4 md:w-1/4">
                        <FormattedMessage id="contact.subtitle" />
                    </Typography>
                </div>
                <div className="m-auto flex justify-center">
                    <VectorContatct className="absolute left-1/4" />
                    <ButtonPrimary className="w-[240px]" onClick={handleClick}>
                        <FormattedMessage id="contact.cta" />
                    </ButtonPrimary>
                </div>
            </motion.div>
            <Footer />
        </section>
    );
};
