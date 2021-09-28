import { Box } from '@chakra-ui/layout';
import { useMemo } from 'react';
import CenterGridLayout from '../styles/CenterGridLayout';
import { FrenchDate, MixCategories, PopularOnes } from './CellFunctions';
import TopRecipeTb from './TopRecipeTb';

const TopRecipeList = (props) => {
    const { recipes } = props;

    const data = useMemo(() => recipes, []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'created_at',
                Cell: FrenchDate,
            },
            {
                Header: 'Mix',
                accessor: 'name',
            },
            {
                Header: 'Catégories',
                accessor: 'aromes',
                Cell: MixCategories,
            },
            {
                Header: 'Popularité',
                accessor: 'users_recipes_aggregate',
                Cell: PopularOnes,
                Filter: false,
                filter: false,
                isNumeric: true,
            },
        ],
        []
    );

    return (
        <>
            {recipes.length > 0 && (
                <CenterGridLayout
                    title="Le top du top."
                    subtitle="Crées par vous, reconnues par tous."
                    // background="https://res.cloudinary.com/dagmffgu0/image/upload/v1632472246/bobble_mix_assets/Fioles%20%2B%20fond/fiole_top_recette_rralb3.png"
                    data={recipes}
                >
                    <Box mx={20} my={55} p={0}>
                        <TopRecipeTb columns={columns} data={data} />
                    </Box>
                </CenterGridLayout>
            )}
        </>
    );
};

export default TopRecipeList;
