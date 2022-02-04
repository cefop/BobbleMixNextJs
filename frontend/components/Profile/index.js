import { useContext, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchFromDate, Format2Name } from '../TopRecipe/CellFunctions';
import UserRecipeTb from './UserRecipeTb';
import CenterGridLayout from '../styles/CenterGridLayout';
import UserHeader from './UserHeader';
import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import { BobbleUserContext } from '../hooks/BobbleUserContext';

const ProfileContainer = (props) => {
    const { bobbleUser } = useContext(BobbleUserContext);
    // console.log('BOBBLE USER: ', bobbleUser?.users?.[0]);
    const { user } = props;
    const isShop = user[0].shops;
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

    // const now = new Date();
    // console.log(now);
    const today = format(new Date(), "'🗓️' eeee dd MMMM", {
        locale: frenchLocale,
    });

    return (
        <>
            {user.length > 0 && (
                <CenterGridLayout
                    title={isShop.length > 0 ? isShop[0].name : 'Votre profil'}
                    subtitle={today}
                    data={[]} // don't really need it!
                >
                    <Box mx={20} my={55} p={0}>
                        <UserHeader user={user && user[0]} shop={!!isShop.length > 0} />
                        {recipes.length >= 1 ? (
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
