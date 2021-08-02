import { useMemo, useState } from 'react';
import { Provider } from 'next-auth/client';
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

export default function App({ Component, pageProps }) {
    const isProduction = process.env.NODE_ENV === 'production';
    const client = useApollo(pageProps.initialApolloProps);
    const [bobbleMix, setBobbleMix] = useState([]);
    const providerBobbleMix = useMemo(() => ({ bobbleMix, setBobbleMix }), [bobbleMix, setBobbleMix]);
    const [nicoMix, setNicoMix] = useState(null);
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
                                <Component {...pageProps} />
                            </AppGrid>
                        </NicoContext.Provider>
                    </BobbleMixContext.Provider>
                </ChakraProvider>
            </ApolloProvider>
        </Provider>
    );
}
