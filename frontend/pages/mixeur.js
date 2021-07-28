import { gql, useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ContainerMix from '../components/Mixeur';

const FETCH_ITEMS = gql`
    query fetchItems {
        item {
            id
            name
            image
            item_categories {
                category {
                    name
                }
            }
        }
    }
`;

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
