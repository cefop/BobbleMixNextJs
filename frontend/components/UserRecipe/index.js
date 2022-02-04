import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchFromDate, Format2Name } from '../TopRecipe/CellFunctions';
import CenterGridLayout from '../styles/CenterGridLayout';
import UserMRecipeTb from './UserMRecipeTb';

const ProfileContainer = (props) => {
    const { user } = props;
    const recipes = user[0].users_recipes && user[0].users_recipes.map((i, k) => i.recipe);
    // console.log(recipes);
    const data = useMemo(() => recipes, []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'created_at',
                Cell: FrenchFromDate,
            },
            {
                Header: 'Mix',
                accessor: 'name',
                Cell: Format2Name,
            },
            // {
            //     Header: 'Catégories',
            //     accessor: 'aromes',
            //     Cell: MixCategories,
            // },
        ],
        []
    );

    return (
        <>
            {user.length > 0 && (
                <CenterGridLayout
                    title="Vos recettes"
                    subtitle={'Par vous, pour vous'}
                    data={[]} // don't really need it!
                >
                    <Box mx={20} my={55} p={0}>
                        {recipes.length >= 1 ? (
                            <UserMRecipeTb columns={columns} data={data} />
                        ) : (
                            <center>vous n'avez encore aucune recettes</center>
                        )}
                    </Box>
                </CenterGridLayout>
            )}
        </>
    );
};
export default ProfileContainer;
