import { gql, useQuery } from '@apollo/client';
import { TopRecipeList } from '../components/TopRecipe';
import Loading from '../components/Loading';
import Error from '../components/Error';

const QUERY_ALL_RECIPES = gql`
    query fetchAllRecipe {
        recipes {
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

export default function TopRecipe() {
    const { loading, error, data } = useQuery(QUERY_ALL_RECIPES);
    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement des recettes" />}
            {data && data.recipes ? <TopRecipeList recipes={data.recipes} /> : null}
        </>
    );
}
