import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import SortByCategory from '../lib/SortByCategory';
import getKeyByValue from '../lib/GetKeyByValue';
import { FlavorGrid, CateTitle, Bobble1L, ImageBox, ImageBottle, LabelBottle } from './StyleMixeur';
import Loading from '../Loading';
import Error from '../Error';
import { QUERY_ITEM_CATEGORIES } from '../gql/graphql';

const ChooseFlavor = (props) => {
    const { items } = props;
    const { loading, error, data } = useQuery(QUERY_ITEM_CATEGORIES);
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const MaxMix = 5;
    const bbmAdd = (bottle) => {
        setBobbleMix((currentState) => [...currentState, bottle]);
    };

    return (
        <>
            {loading && <Loading />}
            {error && <Error tips="erreur de changement des categories" />}
            {data &&
                data.category &&
                SortByCategory(data.category, items).map((c) => (
                    <div key={`${c.id}-category-heading`}>
                        <CateTitle>category {c.name}</CateTitle>
                        <FlavorGrid>
                            {items.map(
                                (i) =>
                                    getKeyByValue(i, c.name) && (
                                        <Bobble1L
                                            key={i.id}
                                            onClick={() => {
                                                bobbleMix.length < MaxMix ? bbmAdd(i) : console.log('nope');
                                            }}
                                        >
                                            <ImageBox>
                                                <ImageBottle src={i.image} alt={i.name} />
                                            </ImageBox>
                                            <LabelBottle>{i.name}</LabelBottle>
                                        </Bobble1L>
                                    )
                            )}
                        </FlavorGrid>
                    </div>
                ))}
        </>
    );
};
export default ChooseFlavor;
