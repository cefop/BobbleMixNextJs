import React, { useContext } from 'react';
import { Center, Button, ButtonGroup } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';

const NicoLevel = () => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const { nicoMix, setNicoMix } = useContext(NicoContext);

    const options = [
        { id: 1, nicotine: '0mg' },
        { id: 2, nicotine: '3mg' },
        { id: 3, nicotine: '6mg' },
        { id: 4, nicotine: '9mg' },
        { id: 5, nicotine: '12mg' },
    ];

    return (
        <Center>
            <ButtonGroup my={7} spacing="6">
                {options.map((value) => (
                    <Button
                        key={value.nicotine}
                        isDisabled={bobbleMix.length < 2}
                        variant={nicoMix === value.nicotine ? 'solid' : 'outline'}
                        colorScheme={nicoMix === value.nicotine ? 'orange' : 'red'}
                        style={{ boxShadow: 'none' }}
                        py={'1.5em'}
                        px={'1.88em'}
                        w={'2.5em'}
                        h={'1.5em'}
                        fontSize={'1em'}
                        onClick={() => {
                            setNicoMix(value.nicotine);
                        }}
                    >
                        {value.nicotine.replace('mg', ' mg')}
                    </Button>
                ))}
            </ButtonGroup>
        </Center>
    );
};
export default NicoLevel;
