import styled from '@emotion/styled';

export const StepHeader = styled.h2`
    font-size: 2rem;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
`;

export const StepTitle = styled.div`
    font-size: 1.25rem;
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-top: 1px solid #ed9500;
    border-bottom: 1px solid #ed9500;
`;

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

export const CateTitle = styled.div`
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: grey;
    border-bottom: 1px solid orange;
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
    span {
        text-transform: lowercase;
    }
`;

export const RecipeContainer = styled.div`
    width: 100%;
    justify-items: center;
    align-items: center;
`;

export const MyRecipe = styled.div`
    padding: 1rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 105px 105px 105px 105px 105px;
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
