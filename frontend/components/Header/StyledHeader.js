import styled from '@emotion/styled';

export const MenubarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    border-bottom: 3px solid #ed9500;
    box-shadow: '0 0 1px 2px rgba(0, 0, 0, .15) 0 1px 1px rgba(0, 0, 0, .15)';
    button:focus {
        box-shadow: none;
    }
    a {
        color: black;
        font-weight: 600;
        font-size: 1.1rem;
        &:hover,
        &:focus,
        &:active {
            cursor: pointer;
            color: #ed9500;
        }
    }
`;

export const MenuLogo = styled.div`
    padding-left: 6%;
    display: grid;
    align-items: center;
    justify-content: left;
    /* border: 1px solid paleturquoise; */
    img {
        height: 64px;
        width: auto;
    }
`;

export const MenuLinks = styled.div`
    padding-left: 3%;
    display: grid;
    align-items: center;
    justify-content: left;
    /* border: 1px solid yellowgreen; */
`;

export const MenuProfile = styled.div`
    padding-right: 6%;
    display: grid;
    align-items: center;
    justify-content: right;
    /* border: 1px solid pink; */
`;
