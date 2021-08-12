import { useRouter } from 'next/router';
import { useTable, useFilters, useSortBy } from 'react-table';
import { Table, Thead, Tbody, Tr, Th, Td, Tfoot } from '@chakra-ui/react';
import { TableContainer } from '../styles/globalStyled';

const TopRecipeTb = ({ columns, data }) => {
    const router = useRouter();
    const tableInstance = useTable({ columns, data }, useFilters, useSortBy);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    const firstPageRows = rows.slice(0, 25);

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
                        prepareRow(row);
                        return (
                            <Tr
                                onClick={() => {
                                    router.push({
                                        pathname: '/recipe',
                                        query: { fingerprint: row.original.fingerprint },
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
                <Tfoot>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Tfoot>
            </Table>
        </TableContainer>
    );
};
export default TopRecipeTb;
