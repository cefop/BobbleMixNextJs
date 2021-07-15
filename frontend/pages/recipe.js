import PageLayout from '../components/styles/PageLayout';
import UserRecipe from '../components/Recipe/index';

export default function Recipe(props) {
    return (
        <PageLayout title="recette bobble mix">
            <UserRecipe />
        </PageLayout>
    );
}
