import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ContainerMix from '../components/Mixeur';
import { FETCH_ITEMS } from '../components/gql/graphql';

export default function Mixeur() {
    const { loading, error, data } = useQuery(FETCH_ITEMS);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement des produits" />}
            {data && data.item ? <ContainerMix items={data.item} /> : null}
        </>
    );
}
