import { useContext, useState } from 'react';
import { useToast, Heading } from '@chakra-ui/react';
import { Mixer, FlavorGrid, Bobble1L, ImageBox, ImageBottle, LabelBottle } from '../StyleMixeur';
import { BobbleMixContext } from '../../hooks/BobbleMixContext';
import { MaxMix } from '../../lib/config';

const UserMixeur = (props) => {
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    const toast = useToast();
    const { items } = props;

    const bbmAdd = (bottle) => {
        setBobbleMix((currentState) => [...currentState, bottle]);
        toast({});
        toggleClass();
    };

    return (
        <div>
            <Mixer>
                <Heading as="h4" size="md" background="#533825" color="#fefefe" padding="15px">
                    Classic
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'classic' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
                <Heading as="h4" size="md" background="#F8D200" color="#0e0e0e" padding="15px">
                    Fruité
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'fruité' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
                <Heading as="h4" size="md" background="#008AAD" color="#fefefe" padding="15px">
                    Menthe
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'menthe' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
                <Heading as="h4" size="md" background="#CC964B" color="#fefefe" padding="15px">
                    Gourmand
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'gourmand' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
                <Heading as="h4" size="md" background="#d37230" color="#fefefe" padding="15px">
                    Boisson
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'boisson' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
                <Heading as="h4" size="md" background="#D6151A" color="#fefefe" padding="15px">
                    Bonbon
                </Heading>
                <FlavorGrid>
                    {items.map((i) => {
                        // console.log('USER MIXEUR PROPS: ', i);
                        return (
                            i.item_categories[0].category.name === 'bonbon' && (
                                <Bobble1L
                                    key={i.id}
                                    onClick={() => {
                                        bobbleMix.length < MaxMix ? bbmAdd(i) : toast({});
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
            </Mixer>
        </div>
    );
};

export default UserMixeur;
