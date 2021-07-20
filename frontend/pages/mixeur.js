import { gql, useQuery } from '@apollo/client';
import { useUser } from '../components/hooks/useUser';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ContainerMix from '../components/Mixeur';
import NotAuth from '../components/NotAuth';

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
    const { user } = useUser();
    const { loading, error, data } = useQuery(FETCH_ITEMS);
    // console.log('FETCH_ITEMS: ', loading, error, data);

    return (
        <>
            {user ? (
                <NotAuth />
            ) : (
                <>
                    {loading && <Loading />}
                    {error && <Error tips="erreur de changement des produits" />}
                    {data && data.item ? <ContainerMix items={data.item} /> : null}
                </>
            )}
        </>
    );
}
