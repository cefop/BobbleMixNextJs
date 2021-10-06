import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchFromDate, Format2Name } from '../TopRecipe/CellFunctions';
import UserRecipeTb from './UserRecipeTb';
import CenterGridLayout from '../styles/CenterGridLayout';
import UserHeader from './UserHeader';
import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';

const ProfileContainer = (props) => {
    const { user } = props;
    const recipes = user[0].users_recipes && user[0].users_recipes.map((i, k) => i.recipe);

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
        ],
        []
    );

    const now = new Date();
    console.log(now);
    const today = format(new Date(), "'🗓️' eeee dd MMMM", {
        locale: frenchLocale,
    });

    return (
        <>
            {user.length > 0 && (
                <CenterGridLayout
                    title="Votre profil"
                    subtitle={today}
                    data={[]} // don't really need it!
                    // background="https://res.cloudinary.com/dagmffgu0/image/upload/v1632472246/bobble_mix_assets/Fioles%20%2B%20fond/fiole_top_recette_rralb3.png"
                >
                    <Box mx={20} my={55} p={0}>
                        <UserHeader user={user && user[0]} />
                        {recipes.length > 1 ? (
                            <UserRecipeTb columns={columns} data={data} />
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
