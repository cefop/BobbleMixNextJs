import styled from '@emotion/styled';

export const DisplayInfo = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    /* border: 1px solid white; */
`;

export const TableContainer = styled.div`
    padding: 10px;
    color: gray;
    border: 1px solid grey;
    border-radius: 5px;
    tr {
        cursor: pointer;
        &:hover {
            background: #fef9ec;
        }
    }
    thead tr,
    tfoot tr {
        cursor: default;
        &:hover {
            background: none;
        }
    }
`;
