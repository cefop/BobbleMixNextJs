import { useContext } from 'react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { FlavorGrid, Bobble1L, ImageBox, ImageBottle, LabelBottle } from './StyleMixeur';

const ChooseFlavor = (props) => {
    const { category, items } = props;
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const bbmAdd = (bottle) => {
        setBobbleMix((currentState) => [...currentState, bottle]);
    };
    const MaxMix = 5;

    return (
        <>
            <h3>category {category}</h3>
            <FlavorGrid>
                {items.map((i) => {
                    // console.log('USER MIXEUR PROPS: ', i);
                    return (
                        i.item_categories[0].category.name === category && (
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
        </>
    );
};
export default ChooseFlavor;
