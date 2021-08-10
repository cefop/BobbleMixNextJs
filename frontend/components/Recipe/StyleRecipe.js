import styled from '@emotion/styled';

export const RecipeContainer = styled.div`
    display: grid;
    justify-content: center;
    align-content: top;
    color: black;
`;

export const MixContainer = styled.div`
    width: 600px;
    display: grid;
    grid-template-rows: auto 1fr;
    /* border: 1px solid cyan; */
`;

export const MixInfos = styled.div`
    text-align: center;
    h3 {
        font-size: 1.75rem;
        font-weight: 600;
        padding-top: 1rem;
        padding-bottom: 2.2rem;
        /* border: 1px solid pink; */
    }
    ul {
        color: gray;
        padding-top: 1rem;
        padding-bottom: 2.2rem;
        list-style: none;
        border-bottom: 1px solid black;
        margin-bottom: 2rem;
        /* border: 1px solid plum; */
    }
`;
export const MixLists = styled.div`
    color: gray;
    padding-bottom: 2rem;
    /* border: 1px solid royalblue; */
`;

export const OptionContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const Fieldset = styled.fieldset`
    border-top: 1px solid gray;
    width: 100%;
    padding: 1rem;
    legend {
        padding: 0 1rem;
        font-size: 1.22rem;
        color: darkorange;
        font-style: italic;
    }
`;

export const OptionsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
`;
