import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchDate, MixCategories } from '../TopRecipe/CellFunctions';
import UserRecipeTb from './UserRecipeTb';
import CenterGridLayout from '../styles/CenterGridLayout';

const ProfileContainer = (props) => {
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
        ],
        []
    );

    return (
        <>
            {recipes.length > 0 && (
                <CenterGridLayout
                    title="Votre profile"
                    subtitle="retrouvez vos recettes"
                    data={recipes}
                    // background="https://res.cloudinary.com/dagmffgu0/image/upload/v1632472246/bobble_mix_assets/Fioles%20%2B%20fond/fiole_top_recette_rralb3.png"
                >
                    <Box mx={20} my={55} p={0}>
                        <UserRecipeTb columns={columns} data={data} />
                    </Box>
                </CenterGridLayout>
            )}
        </>
    );
};
export default ProfileContainer;
