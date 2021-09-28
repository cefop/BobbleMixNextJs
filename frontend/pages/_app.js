import { useMemo, useState } from 'react';
import { Provider } from 'next-auth/client';
import NextNprogress from 'nextjs-progressbar';
import styled from '@emotion/styled';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../components/styles/theme';
import AppHeader from '../components/Header';
import { usePageView } from '../components/hooks/usePageView';
import { BobbleMixContext } from '../components/hooks/BobbleMixContext';
import { NicoContext } from '../components/hooks/NicoContext';
import { useApollo } from '../components/lib/apollo';

export const AppGrid = styled.div`
    display: grid;
    grid-template-rows: 75px 1fr;
    height: 100vh;
`;

const Background = styled.div`
    position: absolute;
    top: 75px;
    right: 0;
    left: 0;
    height: calc(100% - 75px);
    background-color: #1d1d1b;
    background-image: url('https://res.cloudinary.com/dagmffgu0/image/upload/v1632387481/bobble_mix_assets/Fioles%20%2B%20fond/background_pbozuo.jpg');
    background-size: cover;
    background-position: center;
`;

export default function App({ Component, pageProps }) {
    const isProduction = process.env.NODE_ENV === 'pproduction';
    const client = useApollo(pageProps.initialApolloProps);
    const [bobbleMix, setBobbleMix] = useState([]);
    const providerBobbleMix = useMemo(() => ({ bobbleMix, setBobbleMix }), [bobbleMix, setBobbleMix]);
    const [nicoMix, setNicoMix] = useState([]);
    const providerNicoMix = useMemo(() => ({ nicoMix, setNicoMix }), [nicoMix, setNicoMix]);

    if (isProduction) usePageView();

    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={client}>
                <ChakraProvider theme={customTheme}>
                    <BobbleMixContext.Provider value={providerBobbleMix}>
                        <NicoContext.Provider value={providerNicoMix}>
                            <AppGrid>
                                <AppHeader />
                                <NextNprogress
                                    color="#F29100"
                                    startPosition={0.33}
                                    stopDelayMs={200}
                                    height={2}
                                    showOnShallow={true}
                                    options={{ easing: 'ease', speed: 500, showSpinner: false }}
                                />
                                <Background>
                                    <Component {...pageProps} />
                                </Background>
                            </AppGrid>
                        </NicoContext.Provider>
                    </BobbleMixContext.Provider>
                </ChakraProvider>
            </ApolloProvider>
        </Provider>
    );
}
