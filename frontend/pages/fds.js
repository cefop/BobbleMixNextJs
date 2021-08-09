import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import FdsLayout from '../components/Fds/index';
import { QUERY_FINGERPRINT } from '../components/gql/graphql';

export default function Fds() {
    const router = useRouter();
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, { variables: { fingerprint: fingerprint } });
    console.log('RECIPE: ', loading, error, data);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement de la FDS" />}
            {data && data.recipes ? <FdsLayout recipe={data.recipes} /> : null}
        </>
    );
}
