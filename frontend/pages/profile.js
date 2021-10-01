import { useQuery } from '@apollo/client';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import ProfileContainer from '../components/Profile';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_USER_PROFILE } from '../components/gql/graphql';

export default function Profile() {
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
                    {data && <ProfileContainer user={data.users} />}
                    {/* // TODO */}
                    {/* {!loading && data && data.users[0].users_recipes.length === 0 ? (
                        <PageLayout title="vous n'avez aucune recette de sauvegardé" />
                    ) : null} */}
                </>
            )}
        </>
    );
}
