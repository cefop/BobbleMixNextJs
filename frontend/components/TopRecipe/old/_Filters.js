import { useMemo } from 'react';
import { Select, Input } from '@chakra-ui/react';

export const SelectColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }) => {
    const options = useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <Select
            variant="unstyled"
            size="xs"
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">Tous</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </Select>
    );
};

export const DateRangeColumnFilter = ({ column: { filterValue = [], preFilteredRows, setFilter, id } }) => {
    const [min, max] = useMemo(() => {
        let min = new Date(preFilteredRows[0].values[id]);
        let max = new Date(preFilteredRows[0].values[id]);
        preFilteredRows.forEach((row) => {
            min = new Date(row.values[id]) <= min ? new Date(row.values[id]) : min;
            max = new Date(row.values[id]) >= max ? new Date(row.values[id]) : max;
        });
        return [min, max];
    }, [id, preFilteredRows]);
    // console.log(min, max);
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <Input
                value={filterValue[0] || ''}
                variant="unstyled"
                size="xs"
                type="date"
                min={min.toISOString().slice(0, 10)}
                onChange={(e) => {
                    const val = e.target.value;
                    console.log(e.target.value);
                    setFilter((old = []) => [val || undefined, old[1]]);
                }}
                style={{
                    width: '120px',
                    marginRight: '0.5rem',
                }}
            />
            Au
            <Input
                value={filterValue[1] || ''}
                variant="unstyled"
                size="xs"
                type="date"
                max={max.toISOString().slice(0, 10)}
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [old[0], val || undefined]);
                }}
                style={{
                    width: '120px',
                    marginLeft: '0.5rem',
                }}
            />
        </div>
    );
};
