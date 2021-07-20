import { Image, Text, Icon, Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { MdOpacity } from 'react-icons/md';
import GetSortOrder from '../../lib/SortOder';
import CustomReduceFilter from '../../lib/CustomReduceFilter';
import { VolMax, MaxMix } from '../../lib/config';
import { BobbleMixContext } from '../../hooks/BobbleMixContext';
import getObjectByValue from '../../lib/ObjectByValue';
import { BobbleItemInfo, BobbleItem } from '../StyleMixeur';

const BobbleMap = (props) => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const { list } = props;
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(GetSortOrder('id'));

    return (
        <>
            <BobbleItem>
                <Box borderWidth="1px" color="" backgroundColor="#fefefe">
                    <Image
                        src={getObjectByValue(bobbleMix, 'id', list.id)[0].image}
                        alt={getObjectByValue(bobbleMix, 'id', list.id)[0].name}
                    />
                    <Text>
                        <Icon as={MdOpacity} color="orange.100" />
                        {gso.length !== 2 && bobbleMix.length === 2
                            ? `${new Intl.NumberFormat('fr-FR', {
                                  maximumFractionDigits: 2,
                              }).format(list.volume)} ml`
                            : `${new Intl.NumberFormat('fr-FR', {
                                  maximumFractionDigits: 2,
                              }).format(((VolMax / bobbleMix.length) * list.volume) / 10)}  ml`}
                    </Text>

                    <Heading
                        as="h4"
                        fontSize="0.8em"
                        variant="outline"
                        color={gso.length >= 2 ? 'orange.400' : 'gray.600'}
                        colorScheme={gso.length >= 2 ? 'orange' : 'gray'}
                    >
                        {getObjectByValue(bobbleMix, 'id', list.id)[0].name}
                    </Heading>
                </Box>
            </BobbleItem>
            {gso.length === 1 && <BobbleItemInfo>Ajouter au minimum un arome</BobbleItemInfo>}
            {bobbleMix.length >= 3 && bobbleMix.length <= 4 && (
                <BobbleItemInfo>
                    Possibilité d'ajouter {MaxMix - bobbleMix.length} quantité
                    {bobbleMix.length <= 3 ? 's' : ''} ou arome
                    {bobbleMix.length <= 3 ? 's' : ''}
                </BobbleItemInfo>
            )}
        </>
    );
};

export default BobbleMap;
