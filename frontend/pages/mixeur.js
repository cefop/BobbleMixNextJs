import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import Steps from '../components/Steps/index';

const FETCH_ITEMS = gql`
    query fetchItems {
        item {
            id
            name
            image
            item_categories {
                category {
                    name
                }
            }
        }
    }
`;

const DisplayInfo = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    border: 1px solid yellow;
`;

export default function Mixeur() {
    const { loading, error, data } = useQuery(FETCH_ITEMS);
    // console.log('Mixer: ', loading, error, data);
    return (
        <>
            {loading ? <DisplayInfo>loading</DisplayInfo> : null}
            {error ? <DisplayInfo>ouppsss! error</DisplayInfo> : null}
            {data && data.item ? <Steps items={data.item} /> : null}
        </>
    );
}
