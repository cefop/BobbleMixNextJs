import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { DataTable } from './DataTable';
import { Local, Rating, Share } from './Widgets';
import { DateRangeColumnFilter, SelectColumnFilter } from './Filters';

export const TopRecipeList = () => {
    function DateCell({ value }) {
        return <Local date={value} />;
    }

    const columns = useMemo(() => [
        {
            Header: 'Date',
            accessor: 'date',
            Filter: DateRangeColumnFilter,
            filter: 'dateBetween',
            Cell: DateCell,
            getProps: () => ({}),
        },
        {
            Header: 'Nom du Mix',
            accessor: 'mixName',
            Filter: false,
            filter: false,
        },
        {
            Header: 'Arome',
            accessor: 'flavour',
            Filter: SelectColumnFilter,
            filter: 'includes',
        },
        {
            Header: 'Liens',
            accessor: 'link',
            Filter: false,
            filter: false,
        },
        {
            Header: 'Notations',
            accessor: 'reviews',
            Filter: false,
            filter: false,
        },
    ]);

    const data = useMemo(() => [
        {
            date: '2021-07-12T21:15:35.753865+00:00',
            mixName: 'Mangue_Fraise',
            flavour: 'fraise',
            link: <Share />,
            reviews: <Rating reviewCount={1345} rating={5} />,
        },
        {
            date: '2021-07-12T21:15:35.753865+00:00',
            mixName: 'Mangue_Fraise',
            flavour: 'fraise',
            link: <Share />,
            reviews: <Rating reviewCount={1345} rating={5} />,
        },
        {
            date: '2021-07-10T22:15:35.753865+00:00',
            mixName: 'Bonbon',
            flavour: 'bonbon',
            link: <Share />,
            reviews: <Rating reviewCount={345} rating={3} />,
        },
        {
            date: '2021-06-10T22:15:35.753865+00:00',
            mixName: 'Bonbon_Fraise',
            flavour: 'fraise',
            link: <Share />,
            reviews: <Rating reviewCount={123} rating={2} />,
        },
        {
            date: '2021-07-17T22:15:35.753865+00:00',
            mixName: 'Fraise_Classic',
            flavour: 'fraise',
            link: <Share />,
            reviews: <Rating reviewCount={678} rating={4} />,
            isNumeric: true,
        },
        {
            date: '2021-06-03T22:15:35.753865+00:00',
            mixName: 'Mangue_Bonbon',
            flavour: 'bonbon',
            link: <Share />,
            reviews: <Rating reviewCount={345} rating={3} />,
            isNumeric: true,
        },
    ]);

    return (
        <Box color="grey" m={0} p={0}>
            <DataTable columns={columns} data={data} />
        </Box>
    );
};
