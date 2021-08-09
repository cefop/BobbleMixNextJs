import { useQuery } from '@apollo/client';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import ProfileContainer from '../components/Profile';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_USER_RECIPES } from '../components/gql/graphql';

export default function Profile() {
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { loading, error, data } = useQuery(QUERY_USER_RECIPES, { variables: { uid: uid } });
    console.log('USER RECIPE: ', loading, error, data);

    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <>
                    {loading && <Loading />}
                    {error && <Error tips="erreur de changement de vos recettes" />}
                    {data && data.users_recipes ? (
                        <ProfileContainer recipes={data.users_recipes.map((i) => i.recipe)} />
                    ) : null}
                </>
            )}
        </>
    );
}
