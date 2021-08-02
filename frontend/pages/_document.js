/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../components/lib/analytics';

export default class MyDocument extends Document {
    render() {
        const isProduction = process.env.NODE_ENV === 'production';
        return (
            <Html>
                <Head>
                    {isProduction && (
                        <>
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                            ></script>
                            <script
                                async
                                dangerouslySetInnerHTML={{
                                    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', ${GA_TRACKING_ID});`,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
