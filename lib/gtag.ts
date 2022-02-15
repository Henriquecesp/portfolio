import { GA_TRACKING_ID, IS_PRODUCTION } from './constants';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
    if (!IS_PRODUCTION) return;
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: string | number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
    if (!IS_PRODUCTION) return;
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value
    });
};
