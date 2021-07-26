import React, { useContext, useState } from 'react';
import { useRadioGroup, HStack, Text } from '@chakra-ui/react';
import NicoBtnCard from './NicoBtnCard';
import { BobbleMixContext } from '../hooks/BobbleMixContext';

const NicoLevel = () => {
    // const options = ['0mg', '3mg', '6mg', '9mg', '12mg'];
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
        defaultValue: '3mg',
        onChange: setNicotine,
    });

    const group = getRootProps();

    return (
        <>
            {nicotine ? (
                <Text p={2} color="brown">
                    vous avez sélectionné {nicotine} de nicotine
                </Text>
            ) : (
                console.log('nope')
            )}
            <HStack {...group}>
                {options.map((value) => {
                    const radio = getRadioProps({ value: value.nicotine });
                    return (
                        <NicoBtnCard key={value.nicotine} {...radio} isDisabled={bobbleMix.length === 0}>
                            {value.nicotine}
                        </NicoBtnCard>
                    );
                })}
            </HStack>
        </>
    );
};

export default NicoLevel;
