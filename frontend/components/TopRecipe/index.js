import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { mdata } from './data';
import { FrenchDate, NotationCell, MixCategories } from './CellFunctions';
import TopRecipeTb from './TopRecipeTb';
// import { RDate } from './rdate';

export const TopRecipeList = (props) => {
    const { recipes } = props;
    console.log('All recipes: ', recipes);

    function StarsCell({ value }) {
        return NotationCell(data, value);
    }

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
                a.createdAt = x.createdAt;
                a.name = x.name;
                a.aromes = x.aromes;
                a.rating = 1;
                occurenceArray = [...occurenceArray, a];
            }
        });
        return occurenceArray;
    };

    const data = useMemo(() => GroupByOccurence(mdata, 'fingerprint'), []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'createdAt',
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
                accessor: 'rating',
                Cell: StarsCell,
                Filter: false,
                filter: false,
                isNumeric: true,
            },
        ],
        []
    );

    return (
        <Box color="grey" mx={200} my={55} p={0}>
            {/* <RDate /> component RDate got problemes ... TODO fix  */}
            <TopRecipeTb columns={columns} data={data} />
        </Box>
    );
};
