import React, { useContext, useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
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
import { MUTATION_INSERT_ONE_RECIPE, QUERY_FINGERPRINT, MUTATION_ADD_USER_RECIPE } from '../gql/graphql';
import swal from '@sweetalert/with-react';

const SaveRecipe = () => {
    const client = useApolloClient();
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const { nicoMix, setNicoMix } = useContext(NicoContext);
    const [posting, setPosting] = useState(false);

    const [addRecipe] = useMutation(MUTATION_INSERT_ONE_RECIPE);
    const [fixRecipe] = useMutation(MUTATION_ADD_USER_RECIPE);

    const reset = () => {
        setBobbleMix([]);
        setNicoMix(null);
    };

    // build the MIX NAME: quantity% name per items
    // name: 33.33% Fruit-du-Dragon / 33.33% Litchi / 33.33% Abricot
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(SortOrder('id'));
    const MixName = (arr) => {
        const x = arr.map((i, k) => {
            //  we accept this margin error of no decimals to fixe the issue with 33.3333
            const q = ((i.quantity * 100) / bobbleMix.length).toFixed(0);
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

    const writeRecipe = async (rid) => {
        console.log('writing the recipe....', rid);
        // build the feature of the recipe
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
        // write the recipe
        await addRecipe({
            update: (proxy, mutationResult) => {
                // console.log('mutationResult: ', mutationResult);
                // console.log(mutationResult.data.insert_recipes_one.id);
                rid = mutationResult.data.insert_recipes_one.id;
            },
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
        console.log('recipe is done!');
        // attache the recipe
        await fixRecipe({ variables: { rid: rid, uid: uid } });
        console.log('recipe attached!...');
        // cleaning
        setPosting(false);
        setBobbleMix([]);
        setNicoMix(null);
    };

    const attacheRecipe = async (rid) => {
        console.log('get rid and uid.... computing');
        try {
            const { data } = await fixRecipe({ variables: { rid: rid, uid: uid } });
            console.log('recipe attached!...', data);
            // cleaning
            setPosting(false);
            setBobbleMix([]);
            setNicoMix(null);
        } catch (e) {
            console.log('dude!... nope!!');
            console.log('error', e);
            swal({
                text: 'vous avez deja cette recette',
                icon: 'info',
                button: {
                    text: 'Faire une nouvelle recette',
                    className: '',
                },
                dangerMode: false,
            }).then((willReset) => {
                if (willReset) {
                    reset();
                }
            });
            setPosting(false);
        }
    };

    return (
        <Center>
            <Stack spacing={4} direction="row" align="center" my={7}>
                {!user ? (
                    <Button leftIcon={<FaRegUserCircle />} colorScheme="red" variant="solid" onClick={() => signIn()}>
                        connectez-vous pour enregister votre recette
                    </Button>
                ) : (
                    <Button
                        leftIcon={<FaCloudDownloadAlt />}
                        size="md"
                        colorScheme="green"
                        variant="solid"
                        isLoading={posting}
                        loadingText="enregistrement de votre mix"
                        isDisabled={!nicoMix}
                        onClick={async (e) => {
                            setPosting(true);
                            const { data } = await client.query({
                                query: QUERY_FINGERPRINT,
                                variables: { fingerprint: encodeb64(MixName(gso)) },
                            });
                            // if the recipe already existe
                            data.recipes.length > 0 && attacheRecipe(data.recipes[0].id);
                            // if the recipe not already existe
                            data.recipes.length === 0 && writeRecipe(encodeb64(MixName(gso)));
                        }}
                    >
                        enregister votre recette
                    </Button>
                )}
            </Stack>
        </Center>
    );
};
export default SaveRecipe;
