import { useQuery } from '@apollo/client';
import { TopRecipeList } from '../components/TopRecipe';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { QUERY_ALL_RECIPES } from '../components/gql/graphql';
import PageLayout from '../components/styles/PageLayout';

export default function TopRecipe() {
    const { loading, error, data } = useQuery(QUERY_ALL_RECIPES);

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement des recettes" />}
            {data && data.recipes.length !== 0 ? <TopRecipeList recipes={data.recipes} /> : null}
            {!loading && data && data.recipes.length === 0 ? (
                <PageLayout title="il n'y a pas encore de recette de sauvegardé" />
            ) : null}
        </>
    );
}
