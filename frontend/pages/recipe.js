import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import UserRecipe from '../components/Recipe';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_FINGERPRINT } from '../components/gql/graphql';
import PageLayout from '../components/styles/PageLayout';

export default function Recipe() {
    const router = useRouter();
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, {
        variables: { fingerprint: decodeURIComponent(fingerprint) },
    });

    useEffect(() => {
        if (!loading && data && data.recipes.length === 0) {
            router.reload();
        }
    }, []);

    return (
        <>
            {loading && <Loading />}
            {!loading && !error && data && data.recipes.length === 0 && <PageLayout title="Veuillez patienter..." />}
            {error && <Error tips="erreur de changement de la recette" />}
            {data && data.recipes.length !== 0 ? <UserRecipe recipe={data.recipes} /> : null}
        </>
    );
}
