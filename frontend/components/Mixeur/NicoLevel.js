import React, { useContext, useState } from 'react';
import { useRadioGroup, HStack, Text } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import NicoLevelCard from './NicoLevelCard';

const NicoLevel = () => {
    const [nicotine, setNicotine] = useState(null);
    const { bobbleMix } = useContext(BobbleMixContext);

    const options = [
        { id: 1, nicotine: '0mg' },
        { id: 2, nicotine: '3mg' },
        { id: 3, nicotine: '6mg' },
        { id: 4, nicotine: '9mg' },
        { id: 5, nicotine: '12mg' },
    ];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'nicoLevel',
        defaultValue: '0mg',
        onChange: setNicotine,
    });

    const group = getRootProps();

    return (
        <>
            <HStack {...group}>
                {options.map((value) => {
                    const radio = getRadioProps({ value: value.nicotine });
                    return (
                        <NicoLevelCard key={value.nicotine} {...radio} isDisabled={bobbleMix.length < 2}>
                            {value.nicotine}
                        </NicoLevelCard>
                    );
                })}
            </HStack>
            {nicotine && (
                <Text p={2} color="brown">
                    vous avez sélectionné {nicotine} de nicotine
                </Text>
            )}
        </>
    );
};

export default NicoLevel;
