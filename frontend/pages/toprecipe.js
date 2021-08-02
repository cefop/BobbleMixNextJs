import PageLayout from '../components/styles/PageLayout';
import { TopRecipeList } from '../components/TopRecipe';

export default function TopRecipe() {
    return (
        <PageLayout title="top recette">
            <TopRecipeList />
        </PageLayout>
    );
}
