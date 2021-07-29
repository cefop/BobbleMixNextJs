import React, { useContext, useState } from 'react';
import { Button, Center, Stack } from '@chakra-ui/react';
import { FaCloudDownloadAlt, FaRegUserCircle } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';
import CustomReduceFilter from '../lib/CustomReduceFilter';
import SortOrder from '../lib/SortOder';
import getObjectByValue from '../lib/ObjectByValue';
import { encodeb64 } from '../lib/base64';

const SaveRecipe = () => {
    const { user } = useUser();
    const { bobbleMix } = useContext(BobbleMixContext);
    const { nicoMix } = useContext(NicoContext);
    const [showRecipe, setShowRecipe] = useState(false);

    // build the MIX NAME: quantity% name per items
    // name: 33.33% Fruit-du-Dragon / 33.33% Litchi / 33.33% Abricot
    // link: fds?id=bbm_20.00-classic02_20.00-classic03_20.00-fruits01_20.00-fruits02_20.00-menthes02&nic=3&nic50=10&nic80=0&base50=10&base80=0
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(SortOrder('id'));
    const MixName = (arr) => {
        const x = arr.map((i, k) => {
            const q = ((i.quantity * 100) / bobbleMix.length).toFixed(2);
            const n = getObjectByValue(bobbleMix, 'id', i.id)[0].name;
            const nFormated = n.replace(/ /g, '-');
            return `${q}% ${nFormated}`;
        });
        return x.join(' / ');
    };

    // Build saved recipe
    const makeRecipe = (mix) => {
        const aromes = mix.map((a, i) => {
            return [
                {
                    id: a.id,
                    name: a.name,
                    image: a.image,
                    categories: a.item_categories,
                },
            ];
        });
        return [
            {
                fingerprint: encodeb64(MixName(gso)),
                name: MixName(gso),
                nicotine: nicoMix && Number(nicoMix.replace('mg', '')),
                volume: 40,
                aromes,
                // add molecules per aromes
                // add risks per molecules of all aromes
            },
        ];
    };

    return (
        <Center>
            <Stack spacing={4} direction="row" align="center" my={7}>
                {user ? (
                    <Button
                        leftIcon={<FaCloudDownloadAlt />}
                        size="md"
                        colorScheme="green"
                        variant="solid"
                        isDisabled={!nicoMix}
                        onClick={() => setShowRecipe(true)}
                    >
                        Enregistrer votre recette
                    </Button>
                ) : (
                    <Button
                        leftIcon={<FaRegUserCircle />}
                        colorScheme="red"
                        variant="solid"
                        onClick={() => console.log('redirect')}
                    >
                        connectez-vous pour enregister votre recette
                    </Button>
                )}
            </Stack>
            {!!showRecipe && console.log('The recipe saved', makeRecipe(bobbleMix))}
        </Center>
    );
};
export default SaveRecipe;
