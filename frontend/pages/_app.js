import { useMemo, useState } from 'react';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { customTheme } from '../components/styles/theme';
import Head from '../components/Header/Head';
import Menubar from '../components/Header/Menubar';
import { BobbleMixContext } from '../components/hooks/BobbleMixContext';
import { useApollo } from '../components/lib/apollo';

export default function App({ Component, pageProps }) {
    const client = useApollo(pageProps.initialApolloProps);
    const [bobbleMix, setBobbleMix] = useState([]);
    const providerBobbleMix = useMemo(() => ({ bobbleMix, setBobbleMix }), [bobbleMix, setBobbleMix]);

    return (
        <Provider session={pageProps.session}>
            <ApolloProvider client={client}>
                <ChakraProvider theme={customTheme} width="100vw">
                    <BobbleMixContext.Provider value={providerBobbleMix}>
                        <Flex
                            flexDirection="column"
                            width="100vw"
                            padding="0"
                            overflow="auto"
                            bgGradient={['linear(to-b, bbmNavy.300, bbmNavy.200, bbmNavy.100)']}
                        >
                            <Flex width="100%" style={{ height: '75px' }}>
                                <Head />
                                <Menubar />
                            </Flex>
                            <div style={{ height: 'calc(100vh - 75px)' }} width="100%" margin="0">
                                <Component {...pageProps} />
                            </div>
                        </Flex>
                    </BobbleMixContext.Provider>
                </ChakraProvider>
            </ApolloProvider>
        </Provider>
    );
}
