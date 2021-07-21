import { useContext } from 'react';
import { Heading } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import SortByCategory from '../lib/SortByCategory';
import getKeyByValue from '../lib/GetKeyByValue';
import { FlavorGrid, Bobble1L, ImageBox, ImageBottle, LabelBottle } from './StyleMixeur';

const ChooseFlavor = (props) => {
    const { categories, items } = props;
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const bbmAdd = (bottle) => {
        setBobbleMix((currentState) => [...currentState, bottle]);
    };
    const MaxMix = 5;
    const filterCat = SortByCategory(categories, items);

    return filterCat.map((category) => {
        return (
            <div key={category.id + '-category-heading'}>
                <Heading as="h4" size="md" ml={4} key={category.id + '-category-heading'}>
                    category {category.name}
                </Heading>
                <FlavorGrid key={category.id + '-category-block'}>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            getKeyByValue(i, category.name) && (
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
                        );
                    })}
                </FlavorGrid>
            </div>
        );
    });
};
export default ChooseFlavor;
