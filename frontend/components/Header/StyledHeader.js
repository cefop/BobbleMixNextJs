import styled from '@emotion/styled';

export const MenubarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    border-bottom: 3px solid #000;
    box-shadow: '0 0 1px 2px rgba(0, 0, 0, .15) 0 1px 1px rgba(0, 0, 0, .15)';
    background: white;
    color: #1d1d1b;
    button:focus {
        box-shadow: none;
    }
    a {
        color: #1d1d1b;
        font-weight: 600;
        font-size: 1.1rem;
        &:hover,
        &:focus,
        &:active {
            cursor: pointer;
            color: #f29100;
        }
    }
`;

export const MenuLogo = styled.div`
    /* border: 1px solid paleturquoise; */
    padding-left: 6%;
    display: grid;
    align-items: center;
    justify-content: left;
    img {
        height: 64px;
        width: auto;
        padding: 8px;
    }
`;

export const MenuLogo2 = styled.div`
    /* border: 1px solid paleturquoise; */
    padding-right: 6%;
    display: grid;
    align-items: center;
    justify-content: right;
    img {
        height: 64px;
        width: auto;
        padding: 8px;
    }
`;

export const MenuLinks = styled.div`
    /* border: 1px solid blueviolet; */
    padding-left: 3%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    align-items: center;
    justify-content: left;
    .itemLink {
        /* border: 1px solid rebeccapurple; */
        text-align: left;
        text-transform: capitalize;
        font-size: 1.5rem;
    }
`;

export const MenuProfile = styled.div`
    /* border: 1px solid pink; */
    display: grid;
    align-items: center;
    justify-content: right;
`;
