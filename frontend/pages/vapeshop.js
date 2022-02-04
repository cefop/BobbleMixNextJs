import { useQuery } from '@apollo/client';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import Loading from '../components/Loading';
import Error from '../components/Error';
import MyVapeShop from '../components/vapeshop';
import { QUERY_USER_PROFILE } from '../components/gql/graphql';

export default function Vapeshop() {
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { loading, error, data } = useQuery(QUERY_USER_PROFILE, { variables: { uid: uid } });

    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <>
                    {loading && <Loading />}
                    {error && <Error tips="erreur de changement de votre profil" />}
                    {data && <MyVapeShop user={data.users} />}
                </>
            )}
        </>
    );
}
