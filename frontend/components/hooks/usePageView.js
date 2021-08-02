import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GA_TRACKING_ID } from '../lib/analytics';

export const usePageView = () => {
    const router = useRouter();
    const { asPath } = router; // { pathname, asPath }

    useEffect(() => {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: window.location.pathname,
        });
        // console.log(window.location.pathname);

        // ON FIRST PAGE LOAD
        // IF YOU ARE USING DYNAMIC ROUTES LIKE /posts/[slug]
        // THEN YOU SHOULD USE asPath INSTEAD OF pathname
    }, [asPath]);
};
