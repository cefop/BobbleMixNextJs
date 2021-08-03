import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { DataTable } from './DataTable';
import { Local, Rating, Reviews, Share } from './Widgets';
import { DateRangeColumnFilter, SelectColumnFilter } from './Filters';

export const TopRecipeList = () => {
    function DateCell({ value }) {
        return <Local date={value} />;
    }
    function NotationCell({ value }) {
        return <Rating rating={value} />;
    }

    function Review({ value }) {
        return <Reviews review={value} />;
    }
    function ShareCell() {
        return <Share />;
    }

    const columns = useMemo(() => [
        {
            Header: 'Date',
            accessor: 'date',
            Filter: DateRangeColumnFilter,
            filter: 'dateBetween',
            Cell: DateCell,
            disableSortBy: true,
        },
        {
            Header: 'Nom du Mix',
            accessor: 'mixName',
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
            Header: '',
            accessor: 'rating',
            Cell: NotationCell,
            Filter: false,
            filter: false,
            isNumeric: true,
            disableSortBy: true,
        },
        {
            Header: 'Notations',
            accessor: 'reviews',
            Cell: Review,
            Filter: false,
            filter: false,
        },
    ]);

    const data = useMemo(() => [
        {
            date: '2021-07-12T21:15:35.753865+00:00',
            mixName: 'Mangue_Fraise',
            flavour: 'fraise',
            link: {},
            reviews: 1240,
            rating: 3,
        },
        {
            date: '2021-07-12T21:15:35.753865+00:00',
            mixName: 'Mangue_Fraise',
            flavour: 'fraise',
            link: {},
            reviews: 436,
            rating: 3,
        },
        {
            date: '2021-07-10T22:15:35.753865+00:00',
            mixName: 'Bonbon',
            flavour: 'bonbon',
            link: {},
            reviews: 845,
            rating: 3,
        },
        {
            date: '2021-06-10T22:15:35.753865+00:00',
            mixName: 'Bonbon_Fraise',
            flavour: 'fraise',
            link: {},
            reviews: 1345,
            rating: 4,
        },
        {
            date: '2021-07-17T22:15:35.753865+00:00',
            mixName: 'Fraise_Classic',
            flavour: 'fraise',
            link: {},
            reviews: 645,
            rating: 2,
        },
        {
            date: '2021-06-03T22:15:35.753865+00:00',
            mixName: 'Mangue_Bonbon',
            flavour: 'bonbon',
            link: {},
            reviews: 345,
            rating: 3,
        },
    ]);

    return (
        <Box color="grey" m={0} p={0}>
            <DataTable columns={columns} data={data} />
        </Box>
    );
};
