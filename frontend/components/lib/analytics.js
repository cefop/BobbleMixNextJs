export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// FOR FUTURE USE
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// FOR FUTURE USE
export const trackPageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_location: url,
    });
};

// FOR FUTURE USE
export const trackEvent = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
