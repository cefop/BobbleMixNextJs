import { useRouter } from 'next/router';
import { useTable, useFilters, useSortBy, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { name2Fingerprint } from '../lib/infosFromFingerprint';

// https://react-table.tanstack.com/docs/examples/filtering

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

const TransactionTb = ({ columns, data }) => {
    const router = useRouter();
    const tableInstance = useTable({ columns, data }, useFilters, useSortBy);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    const firstPageRows = rows.slice(0, 50);

    return (
        <TableContainer>
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row) => {
                        // console.log('row', row);
                        // console.log('row finger :', name2Fingerprint(row.original.recipe.name));
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
        </TableContainer>
    );
};
export default TransactionTb;
