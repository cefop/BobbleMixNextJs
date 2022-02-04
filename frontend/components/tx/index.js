import { useQuery } from '@apollo/client';
import { SHOP_FIND_USER_TX } from '../gql/graphql';
import Loading from '../Loading';
import Error from '../Error';
import TxTabDisplay from './TxTabDisplay';

const Tx = (props) => {
    const { shop_id } = props;

    const { loading, error, data } = useQuery(SHOP_FIND_USER_TX, {
        variables: { shop_id: shop_id },
    });

    // console.log('shop id', shop_id);
    // console.log('query', data, error, loading);
    // console.log('tx data tx', data);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="vous n'avez aucune transactions, sauf erreurs." />}
            {data && <TxTabDisplay txData={data.transactions} />}
        </>
    );
};
export default Tx;
