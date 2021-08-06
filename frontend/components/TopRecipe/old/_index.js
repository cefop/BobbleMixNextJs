import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { DateRangeColumnFilter, SelectColumnFilter } from './_Filters';
import { GroupByOccurence } from './_GroupByOccurence';
import { Local, Rating, Share } from './_Widgets';
import { DataTable } from './_DataTable';
import { data } from '../data';

export const TopRecipeList = () => {
    function DateCell(value) {
        return <Local date={value} />;
    }

    function NotationCell({ value }) {
        const ratings = GroupByOccurence(data, 'fingerprint').map((x) => x.rating);
        const maxRate = Math.max(...ratings);
        if (maxRate === value) {
            value = 5;
        } else {
            const perValOfMax = Math.round((value * 100) / maxRate);
            value = Math.round((perValOfMax * maxRate) / 100);
        }
        return <Rating rating={value} />;
    }

    function SplitName({ value }) {
        // const rgxValue = value.replace(/([^A-Z a-z-])/g, '');
        // return rgxValue.trim().split(' ').join(' ');
        return value;
    }

    function ShareCell() {
        return <Share />;
    }

    const recipeList = useMemo(() => GroupByOccurence(data, 'fingerprint'), []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'createdAt',
                Cell: DateCell,
                Filter: DateRangeColumnFilter,
                filter: 'dateBetween',
                disableSortBy: true,
            },
            {
                Header: 'Nom du Mix',
                accessor: 'name',
                Cell: SplitName,
                Filter: false,
                filter: false,
                disableSortBy: true,
            },
            {
                Header: 'Arome',
                accessor: 'flavour',
                Filter: SelectColumnFilter,
                filter: 'includes',
                disableSortBy: true,
            },
            {
                Header: 'Liens',
                accessor: 'link',
                Cell: ShareCell,
                Filter: false,
                filter: false,
                isNumeric: true,
                disableSortBy: true,
            },
            {
                Header: 'Popularité',
                accessor: 'rating',
                Cell: NotationCell,
                Filter: false,
                filter: false,
                isNumeric: true,
            },
        ],
        []
    );

    return (
        <Box color="grey" mx={200} my={55} p={0}>
            <DataTable columns={columns} data={recipeList} />
        </Box>
    );
};
