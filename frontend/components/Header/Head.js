import Head from 'next/head';

const BobbleMixHead = (props) => {
    return (
        <Head>
            <title>{props.title || 'Bobble Mix V2'}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={props.description || process.env.DESCRIPTION} />
            <meta name="twitter:site" content={props.url || process.env.DOMAIN_NAME} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={props.ogImage || ''} />
            <meta property="og:url" content={props.url || process.env.DOMAIN_NAME} />
            <meta property="og:title" content={props.title || ''} />
            <meta property="og:description" content={props.description || process.env.DESCRIPTION} />
            <meta property="og:image" content={props.ogImage || ''} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_o5hd5vvqpoqiwwmi.css" />
        </Head>
    );
};

export default BobbleMixHead;
