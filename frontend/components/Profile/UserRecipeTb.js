import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useTable, useFilters, useSortBy } from 'react-table';
import { Table, Tbody, Tr, Td } from '@chakra-ui/react';

const TableContainer = styled.div`
    padding: 0px;
    color: gray;
    tr {
        cursor: pointer;
        &:hover {
            /* background: #fef9ec; */
        }
        :nth-of-type(even) {
            background-color: #f2f2f2;
        }
    }
    td {
        border: none;
    }
`;

const UserRecipeTb = ({ columns, data }) => {
    const router = useRouter();
    const tableInstance = useTable({ columns, data }, useFilters, useSortBy);
    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance;
    const firstPageRows = rows.slice(0, 25);

    return (
        <TableContainer id="user_recipes_page">
            <Table {...getTableProps()}>
                <Tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr
                                onClick={() =>
                                    router.push({
                                        pathname: '/recipe',
                                        query: { fingerprint: row.original.fingerprint },
                                    })
                                }
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
export default UserRecipeTb;
