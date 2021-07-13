import styled from '@emotion/styled';

export const ProductList = styled.div`
    background: #f9f9f9;
    border: 1px solid #7070701f;
    border-radius: 4px;
    display: flex;
    transition: all 2s;
    padding: 15px;
    overflow-x: auto;
    color: black;
    text-align: center;
    white-space: normal;
`;

export const StepSlider = styled.input`
    -webkit-appearance: none;
    width: 98%;
    height: 2px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    border-left: 5px solid #d3d3d3;
    border-right: 5px solid #d3d3d3;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
        opacity: 1;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border-top: solid 15px rgb(22, 22, 22);
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        transform: translateY(-10px);
        cursor: pointer;
    }

    &::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 0px;
        height: 0px;
        border-radius: 0%;
        border-top: solid 15px rgb(22, 22, 22);
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        border-bottom: solid 3px transparent;
        transform: translateY(-10px);
        cursor: pointer;
    }
`;

export const Bottle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
    border: 2px solid #0e161b29;
    border-radius: 10px;
    height: 7.5em;
    width: 4.5em;
    padding-bottom: 0.5em;
    img {
        opacity: 0.4;
    }
    &:hover,
    &.active {
        background: #0e161b1a 0% 0% no-repeat padding-box;
        border: 2px solid #0e161b29;
        img {
            opacity: 1;
        }
        span {
            color: black;
        }
    }
`;
