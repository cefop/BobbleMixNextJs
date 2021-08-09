import { useQuery } from '@apollo/client';
import { TopRecipeList } from '../components/TopRecipe';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_ALL_RECIPES } from '../components/gql/graphql';

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
