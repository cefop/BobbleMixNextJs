import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Center, Stack } from '@chakra-ui/react';
import { FaCloudDownloadAlt, FaRegUserCircle } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';
import { signIn } from 'next-auth/client';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';
import CustomReduceFilter from '../lib/CustomReduceFilter';
import SortOrder from '../lib/SortOder';
import getObjectByValue from '../lib/ObjectByValue';
import { encodeb64 } from '../lib/base64';
import sumMol from '../lib/SumMol';
import { saveur_molecule } from '../lib/saveur_molecule';
import { molecule_risk } from '../lib/molecule_risk';
import { MUTATION_INSERT_ONE_RECIPE } from '../gql/graphql';

const SaveRecipe = () => {
    const { user } = useUser();
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const { nicoMix, setNicoMix } = useContext(NicoContext);
    const [posting, setPosting] = useState(false);

    const [addREcipe] = useMutation(MUTATION_INSERT_ONE_RECIPE);

    // build the MIX NAME: quantity% name per items
    // name: 33.33% Fruit-du-Dragon / 33.33% Litchi / 33.33% Abricot
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
    // Find all molecules of flavors inside Juice
    const mixMolecules = saveur_molecule.filter(({ Saveur_ID }) => bobbleMix.map((s) => s.id).includes(Saveur_ID));
    // Find all Risk of molecules inside juice
    const mixRisks = molecule_risk.filter(({ Molecule_ID }) =>
        mixMolecules.map((m) => m.Molecule_ID).includes(Molecule_ID)
    );

    // Build and call the mutation
    const sendRecipe = () => {
        console.log('pending...');
        setTimeout(function () {
            console.log('computing....');
            // build mutation variables
            const aromes = bobbleMix.map((a, i) => {
                const ic = a.item_categories;
                return {
                    id: a.id,
                    name: a.name,
                    image: a.image,
                    categories: ic.map((i, k) => {
                        return { name: i.category.name };
                    }),
                };
            });
            // Send mutation
            addREcipe({
                variables: {
                    fingerprint: encodeb64(MixName(gso)),
                    name: MixName(gso),
                    nicotine: nicoMix && Number(nicoMix.replace('mg', '')),
                    volume: 40,
                    aromes,
                    molecules: mixMolecules,
                    risks: mixRisks,
                    molsum: sumMol(mixMolecules),
                },
            });
            // clean old data from user
            setPosting(false);
            setBobbleMix([]);
            setNicoMix(null);
            console.log('finished!');
        }, 3000);
        setPosting(true);
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
                        isLoading={posting}
                        loadingText="enregistrement de votre mix"
                        isDisabled={!nicoMix}
                        onClick={() => sendRecipe()}
                    >
                        Enregistrer votre recette
                    </Button>
                ) : (
                    <Button leftIcon={<FaRegUserCircle />} colorScheme="red" variant="solid" onClick={() => signIn()}>
                        connectez-vous pour enregister votre recette
                    </Button>
                )}
            </Stack>
        </Center>
    );
};
export default SaveRecipe;
