import styled from '@emotion/styled';

export const Menu = styled.div`
    display: grid;
    align-items: center;
    justify-content: right;
`;

export const ItemLink = styled.a`
    padding-top: 1.3em;
    padding-bottom: 0.6em;
    border-bottom: 1.28em solid transparent;
    color: #324650;
    font-weight: 600;
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
        color: #d37230;
        border-bottom: 1.28em solid #d37230;
        box-shadow: '0 0 1px 2px rgba(0, 0, 0, .15) 0 1px 1px rgba(0, 0, 0, .15)';
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;

export const MenuBtn = styled.button`
    padding-top: 1.3em;
    padding-bottom: 0.6em;
    border-bottom: 1.25em solid transparent;
    color: #324650;
    font-weight: 600;
    &:hover {
        border-bottom: 1.25em solid #d37230;
        box-shadow: '0 0 1px 2px rgba(0, 0, 0, .15) 0 1px 1px rgba(0, 0, 0, .15)';
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;
