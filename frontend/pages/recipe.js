import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import UserRecipe from '../components/Recipe';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_FINGERPRINT, QUERY_USER_PROFILE } from '../components/gql/graphql';
import PageLayout from '../components/styles/PageLayout';
import { useUser } from '../components/hooks/useUser';

export default function Recipe() {
    const router = useRouter();
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, {
        variables: { fingerprint: decodeURIComponent(fingerprint) },
    });
    const isUser = useQuery(QUERY_USER_PROFILE, { variables: { uid: uid } });

    useEffect(() => {
        if (!loading && data && data.recipes.length === 0) {
            router.reload();
        }
    }, []);

    return (
        <>
            {(loading || isUser.loading) && <Loading />}
            {!loading && !error && data && data.recipes.length === 0 && <PageLayout title="Veuillez patienter..." />}
            {error && <Error tips="erreur de changement de la recette" />}
            {(data && data.recipes.length !== 0) || (isUser.data && isUser.data.users.length !== 0) ? (
                <UserRecipe recipe={data?.recipes?.[0]} user={isUser?.data?.users?.[0]} />
            ) : null}
        </>
    );
}
