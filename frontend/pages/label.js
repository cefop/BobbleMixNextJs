import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import LabelLayout from '../components/Label/index';
import { QUERY_FINGERPRINT } from '../components/gql/graphql';
import { infosFromFingerprint } from '../components/lib/infosFromFingerprint';

export default function Label() {
    const router = useRouter();
    const { fingerprint } = router.query;
    const { loading, error, data } = useQuery(QUERY_FINGERPRINT, { variables: { fingerprint: fingerprint } });
    // get an arr of all arome and their ratio in the mix
    const aromesRatio = infosFromFingerprint(fingerprint);

    // console.log('RECIPE: ', loading, error, data);
    // console.log('AROMES: ', aromesRatio);
    // console.log('data', data.recipes[0]);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement de l'étiquette" />}
            {data && data.recipes && <LabelLayout recipe={data.recipes[0]} aromesRatio={aromesRatio} />}
        </>
    );
}
