import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import FdsLayout from '../components/Fds/index';

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

export default function Fds() {
    // const juice = [
    //     {
    //         id: 20,
    //         name: 'Mangue',
    //         vol: 20,
    //     },
    //     {
    //         id: 30,
    //         name: 'Fraise',
    //         vol: 20,
    //     },
    // ];
    const router = useRouter();
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, { variables: { fingerprint: fingerprint } });
    console.log('RECIPE: ', loading, error, data);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement de la recette" />}
            {data && data.recipes ? <FdsLayout recipe={data.recipes} /> : null}
        </>
    );
}
