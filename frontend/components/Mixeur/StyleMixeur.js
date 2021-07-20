import styled from '@emotion/styled';

export const FlavorGrid = styled.div`
    padding: 1rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    a {
        &:hover {
            text-decoration: none;
            color: darkgrey;
        }
    }
    @media (max-width: 945px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Bobble1L = styled.div`
    max-width: 395px;
    border: 1px solid orange;
    background: white;
    color: black;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.2, 0.3, 0, 1);
    &:hover {
        box-shadow: 0 6px 16px rgba(255, 127, 0, 0.15);
        cursor: pointer;
    }
    img {
        transition: all 4s;
    }
`;

export const ImageBox = styled.div`
    overflow: hidden;
    height: 110px;
    display: grid;
    align-self: center;
    justify-self: center;
`;

export const ImageBottle = styled.img`
    height: 110px;
    align-self: center;
    justify-self: center;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
        overflow: hidden;
    }
`;

export const LabelBottle = styled.h3`
    padding: 0.75rem;
    font-size: 0.92rem;
    text-align: center;
    text-transform: capitalize;
`;

export const RecipeContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const MyRecipe = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1px;
    row-gap: 1rem;
    justify-items: center;
    align-items: top;
    padding: 1rem;
    font-size: 1rem;
    min-height: 164px;
    button:hover {
        background: rgba(255, 127, 0, 0.15);
    }
    button:focus {
        box-shadow: 0 6px 16px rgba(255, 127, 0, 0.15);
        color: orange;
    }
    span {
        font-weight: 600;
    }
    @media (max-width: 945px) {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
`;
