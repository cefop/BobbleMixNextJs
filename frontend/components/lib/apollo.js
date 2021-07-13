import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

const createApolloClient = () => {
    return new ApolloClient({
        // ssrMode: true,
        link: createHttpLink({
            // uri: 'https://on-falcon-72.hasura.app/v1/graphql',
            // uri: 'http://localhost:8080/v1/graphql',
            uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
                'x-hasura-admin-secret': process.env.NEXT_PUBLIC_GRAPHQL_ADMIN_SECRET,
                // cookie: req.header('bobble-mix'),
            },
        }),
        cache: new InMemoryCache(),
    });
};

let apolloClient;

export default function initiallizeApollo(initialState = null) {
    const _apolloClient = apolloClient || createApolloClient();

    // if initialState
    if (initialState) {
        const existingCache = _apolloClient.extract();
        // restore cache
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }
    // if the mod ssr
    if (typeof window === 'undefined') return _apolloClient;

    // create client once on the frontend
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initiallizeApollo(initialState), [initialState]);
    return store;
}
