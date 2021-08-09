import { gql, useQuery } from '@apollo/client';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import ProfileContainer from '../components/Profile';
import Loading from '../components/Loading';
import Error from '../components/Error';

const QUERY_USER_RECIPES = gql`
    query fetchUserRecipes {
        recipes(order_by: { updated_at: desc }, limit: 4) {
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

export default function Profile() {
    const { user } = useUser();
    const { loading, error, data } = useQuery(QUERY_USER_RECIPES);
    console.log('USER RECIPE: ', loading, error, data);
    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <>
                    {loading && <Loading />}
                    {error && <Error tips="erreur de changement de vos recettes" />}
                    {data && data.recipes ? <ProfileContainer recipes={data.recipes} /> : null}
                </>
            )}
        </>
    );
}
