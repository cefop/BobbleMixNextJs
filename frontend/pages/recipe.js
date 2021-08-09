import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import UserRecipe from '../components/Recipe/index';
import Loading from '../components/Loading';
import Error from '../components/Error';

const QUERY_FINGERPRINT = gql`
    query fetchRecipeFingerprint($fingerprint: String) {
        recipes(where: { fingerprint: { _eq: $fingerprint } }) {
            id
            fingerprint
            name
            nicotine
            volume
            molsum
            aromes
            molecules
            risks
            created_at
        }
    }
`;

export default function Recipe() {
    const router = useRouter();
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, { variables: { fingerprint: fingerprint } });
    console.log('RECIPE: ', loading, error, data);
    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement de la recette" />}
            {data && data.recipes ? <UserRecipe recipe={data.recipes} /> : null}
        </>
    );
}
