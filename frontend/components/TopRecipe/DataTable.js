import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { useTable, useFilters, useSortBy } from 'react-table';
import { useMemo } from 'react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

function dateBetweenFilterFn(rows, id, filterValues) {
    const sd = new Date(filterValues[0]);
    const ed = new Date(filterValues[1]);
    console.log(rows, id, filterValues);
    return rows.filter((r) => {
        const time = new Date(r.values[id]);
        console.log(time, ed, sd);
        if (filterValues.length === 0) return rows;
        return time >= sd && time <= ed;
    });
}

dateBetweenFilterFn.autoRemove = (val) => !val;

export const DataTable = ({ columns, data }) => {
    const filterTypes = useMemo(
        () => ({
            dateBetween: dateBetweenFilterFn,
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
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
            filterTypes,
        },
        useFilters,
        useSortBy
    );

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = rows.slice(0, 10);

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps(column.getSortByToggleProps())} isNumeric={column.isNumeric}>
                                {column.render('Header')}
                                {
                                    <chakra.span pl="4">
                                        {column.isSorted && column.id === 'reviews' ? (
                                            column.isSortedDesc ? (
                                                <TriangleDownIcon aria-label="sorted descending" />
                                            ) : (
                                                <TriangleUpIcon aria-label="sorted ascending" />
                                            )
                                        ) : null}
                                    </chakra.span>
                                }
                                <chakra.div>{column.canFilter ? column.render('Filter') : null}</chakra.div>
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {firstPageRows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};
