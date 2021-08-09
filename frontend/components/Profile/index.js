import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchDate, MixCategories } from '../TopRecipe/CellFunctions';
import UserRecipeTb from './UserRecipeTb';

const ProfileContainer = (props) => {
    const { recipes } = props;
    console.log('USER RECIPE: ', recipes);

    const GroupByOccurence = (array, key) => {
        let occurenceArray = [];
        array.forEach((x) => {
            if (
                occurenceArray.some((val) => {
                    return val[key] === x[key];
                })
            ) {
                occurenceArray.forEach((y) => {
                    if (y[key] === x[key]) {
                        y.rating++;
                    }
                });
            } else {
                const a = {};
                a[key] = x[key];
                a.created_at = x.created_at;
                a.name = x.name;
                a.aromes = x.aromes;
                a.rating = 1;
                occurenceArray = [...occurenceArray, a];
            }
        });
        return occurenceArray;
    };

    const data = useMemo(() => GroupByOccurence(recipes, 'fingerprint'), []);
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
            // {
            // Header: 'Fiche de Sécurité',
            // accessor: 'rating',
            // Cell: StarsCell,
            // Filter: false,
            // filter: false,
            // isNumeric: true,
            // },
        ],
        []
    );
    return (
        <Box color="grey" mx={200} my={55} p={0}>
            <UserRecipeTb columns={columns} data={data} />
        </Box>
    );
};
export default ProfileContainer;
