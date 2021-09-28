import { useContext } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import Loading from '../Loading';
import Error from '../Error';
import { QUERY_ITEM_CATEGORIES } from '../gql/graphql';

const CategoryContainer = styled.div`
    /* border: 1px solid blueviolet; */
`;

const CategoryTitle = styled.div`
    /* border: 1px solid darkkhaki; */
    margin-inline: 1.15rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.625rem;
    font-weight: 700;
    color: black;
    border-bottom: 3px solid black;
`;

const AromasContainer = styled.div`
    /* border: 1px solid sienna; */
    padding-top: 2.75rem;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    grid-column-gap: 0rem;
    grid-row-gap: 2.33rem;
`;

const AromaContainer = styled.div`
    /* border: 1px solid orangered; */
    display: grid;
    width: 100px;
    color: black;
    text-transform: uppercase;
    text-align: center;
    align-self: top;
    justify-self: center;
    justify-items: center;
    img {
        display: grid;
        /* border: 1px solid blueviolet; */
        opacity: 1;
        filter: grayscale(0%);
        transition: all 618ms ease;
    }
    &:hover {
        img {
            filter: grayscale(100%);
            opacity: 0.5;
        }
        cursor: pointer;
    }
    img.yep_aroma {
        filter: grayscale(100%);
        opacity: 0.2;
        &:hover {
            cursor: not-allowed;
        }
    }
    .title_aroma {
        /* border: 1px solid mediumspringgreen; */
        padding-top: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
    }
`;

const ChooseFlavor = (props) => {
    const { items } = props;
    const { loading, error, data } = useQuery(QUERY_ITEM_CATEGORIES);
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const MaxMix = 5;
    const bbmAdd = (bottle) => {
        setBobbleMix((currentState) => [...currentState, bottle]);
    };

    // ? sort the categories by their items numbers
    const SortByCategory = (c, i) => {
        const items = i.map((item) => {
            return item.item_categories[0].category.name;
        });
        return c.filter((category) => items.includes(category.name));
    };

    // ? Check is aroma is inside the bobbleMix
    const isSelected = (i) => _.find(bobbleMix, { id: i });

    // TODO make a search filter

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement des categories" />}
            {data &&
                data.category &&
                SortByCategory(data.category, items).map((c) => (
                    <CategoryContainer key={`${c.id}-category-heading`}>
                        <CategoryTitle>{c.name}</CategoryTitle>
                        <AromasContainer>
                            {items.map(
                                (i) =>
                                    _.some(i.item_categories, { category: { name: c.name } }) && (
                                        <AromaContainer
                                            key={i.id}
                                            onClick={() => {
                                                !isSelected(i.id) && bobbleMix.length < MaxMix
                                                    ? bbmAdd(i)
                                                    : console.log('nope! maximun aroma selected!');
                                            }}
                                        >
                                            <Image
                                                src={i.image}
                                                alt={i.name}
                                                layout="fixed"
                                                quality={100}
                                                width={75}
                                                height={75}
                                                className={isSelected(i.id) && 'yep_aroma'}
                                            />
                                            <div
                                                className="title_aroma"
                                                style={{ color: isSelected(i.id) ? 'orange' : 'black' }}
                                            >
                                                {i.name}
                                            </div>
                                        </AromaContainer>
                                    )
                            )}
                        </AromasContainer>
                    </CategoryContainer>
                ))}
        </>
    );
};
export default ChooseFlavor;
