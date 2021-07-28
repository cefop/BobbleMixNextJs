import React, { useContext } from 'react';
import { useRadioGroup, HStack, Center } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';
import NicoLevelCard from './NicoLevelCard';

const NicoLevel = () => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const { setNicoMix } = useContext(NicoContext);

    const options = [
        { id: 1, nicotine: '0mg' },
        { id: 2, nicotine: '3mg' },
        { id: 3, nicotine: '6mg' },
        { id: 4, nicotine: '9mg' },
        { id: 5, nicotine: '12mg' },
    ];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'nicoLevel',
        onChange: setNicoMix,
    });

    const group = getRootProps();

    return (
        <Center>
            <HStack {...group} my={7}>
                {options.map((value) => {
                    const radio = getRadioProps({ value: value.nicotine });
                    return (
                        <NicoLevelCard key={value.nicotine} {...radio} isDisabled={bobbleMix.length < 2}>
                            {value.nicotine}
                        </NicoLevelCard>
                    );
                })}
            </HStack>
        </Center>
    );
};

export default NicoLevel;
