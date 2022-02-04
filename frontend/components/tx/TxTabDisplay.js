import { useMemo } from 'react';
// import TransactionTb from './TransactionTb';
import { UserPhone, FrenchDate, Format2Name } from './CellFunctions';
import CenterGridLayout from '../styles/CenterGridLayout';
import { Box, Input } from '@chakra-ui/react';
import { useTable, useFilters } from 'react-table';
import _ from 'lodash';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { name2Fingerprint } from '../lib/infosFromFingerprint';
import { useRouter } from 'next/router';

const TableContainer = styled.div`
    tr {
        cursor: pointer;
        &:hover {
        }
        :nth-of-type(even) {
            background-color: #f2f2f2;
        }
    }
    td {
        border: none;
    }
    thead tr th {
        font-size: 1.1rem;
        font-weight: 800;
        &:hover {
            background: none;
        }
    }
`;

const TxTabDisplay = (props) => {
    const { txData } = props;
    // console.log('data tx tab', txData);

    function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
        const count = preFilteredRows.length;

        return (
            <Input
                mt={2}
                size={'sm'}
                value={filterValue || ''}
                onChange={(e) => {
                    setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`Rechercher un tel (${count})`}
            />
        );
    }

    function fuzzyTextFilterFn(rows, id, filterValue) {
        const filtered_array = _.filter(rows, function (o) {
            return o.values.user_phone.includes(filterValue);
        });
        return filtered_array;
    }

    // Let the table remove the filter if the string is empty
    fuzzyTextFilterFn.autoRemove = (val) => !val;

    function MyTable({ columns, data }) {
        const filterTypes = useMemo(
            () => ({
                fuzzyText: fuzzyTextFilterFn,
                text: (rows, id, filterValue) => {
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        return rowValue !== undefined
                            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
                            : true;
                    });
                },
            }),
            []
        );

        const defaultColumn = useMemo(
            () => ({
                Filter: DefaultColumnFilter,
            }),
            []
        );

        const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
            {
                columns,
                data,
                defaultColumn, // Be sure to pass the defaultColumn option
                filterTypes,
            },
            useFilters
        );

        const router = useRouter();
        const firstPageRows = rows.slice(0, 50);
        return (
            <>
                <Table {...getTableProps()}>
                    <Thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                        {column.filter === 'fuzzyText' && (
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {firstPageRows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <Tr
                                    onClick={() => {
                                        router.push({
                                            pathname: '/recipe',
                                            query: { fingerprint: name2Fingerprint(row.original.recipe.name) },
                                        });
                                    }}
                                    {...row.getRowProps()}
                                >
                                    {row.cells.map((cell) => {
                                        return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
                <br />
                <div>Showing the first 50 results of {rows.length} rows</div>
            </>
        );
    }

    // Define a custom filter filter function!
    function filterGreaterThan(rows, id, filterValue) {
        return rows.filter((row) => {
            const rowValue = row.values[id];
            return rowValue >= filterValue;
        });
    }

    // This is an autoRemove method on the filter function that
    // when given the new filter value and returns true, the filter
    // will be automatically removed. Normally this is just an undefined
    // check, but here, we want to remove the filter if it's not a number
    filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

    const data = useMemo(() => txData, []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'created_at',
                Cell: FrenchDate,
                filter: false,
            },
            {
                Header: 'Recette',
                accessor: 'recipe.name',
                Cell: Format2Name,
            },
            {
                Header: 'Téléphone',
                accessor: 'user_phone',
                Cell: UserPhone,
                filter: 'fuzzyText',
            },
        ],
        []
    );

    return (
        <>
            {txData.length > 0 && (
                <CenterGridLayout title="Recherche" subtitle="transactions client" data={txData}>
                    <Box mx={20} my={55} p={0}>
                        <TableContainer>
                            <MyTable columns={columns} data={data} />
                        </TableContainer>
                    </Box>
                </CenterGridLayout>
            )}
        </>
    );
};
export default TxTabDisplay;
