import Head from 'next/head';

const BobbleMixHead = (props) => {
    const defaultTitle = process.env.TITLE
        ? process.env.TITLE
        : `Bobble MIX: ${props.title || 'Fabricant de eliquide - bar à saveurs'}`;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"></link>
            <link rel="manifest" href="/manifest.json"></link>
            {/* // ? 60 characters */}
            <title>{defaultTitle}</title>
            {/* // ? 155 - 160 characters */}
            <meta name="description" content={props.description || process.env.DESCRIPTION} />
            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:domain" content={props.url || process.env.DOMAIN_NAME} />
            <meta name="twitter:url" content={`https://${props.url || process.env.DOMAIN_NAME}`} />
            <meta name="twitter:site" content={props.url || process.env.DOMAIN_NAME} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.title || process.env.TITLE} />
            <meta name="twitter:description" content={props.description || process.env.DESCRIPTION} />
            <meta name="twitter:image" content={props.ogImage || process.env.IMG} />
            {/* <!-- Facebook Meta Tags --> */}
            <meta name="og:url" content={`https://${props.url || process.env.DOMAIN_NAME}`} />
            <meta name="og:title" content={props.title || process.env.TITLE} />
            <meta name="og:description" content={props.description || process.env.DESCRIPTION} />
            <meta name="og:image" content={props.ogImage || process.env.IMG} />
            <meta name="og:image:width" content="1200" />
            <meta name="og:image:height" content="613" />
            <meta name="fb:app_id" content={process.env.FAPPID} />
            <meta name="og:type" content={props.ogType || 'website'} />
            {/* <!-- Google Onboarding --> */}
            <meta name="google-site-verification" content="2q8vyCQU6A_jfatOUJpbW0nX00L1OHAYp76SeTMyHDg" />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;0,800;1,300&display=optional"
                rel="stylesheet"
            />
        </Head>
    );
};

export default BobbleMixHead;
