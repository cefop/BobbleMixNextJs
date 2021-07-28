import React, { useContext, useState } from 'react';
import { Button, Center, Code, Stack } from '@chakra-ui/react';
import { FaCloudDownloadAlt, FaRegUserCircle } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';

const SaveRecipe = () => {
    const { user } = useUser();
    const { bobbleMix } = useContext(BobbleMixContext);
    const { nicoMix } = useContext(NicoContext);
    const [showRecipe, setShowRecipe] = useState(false);

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
            {!!showRecipe && <Code children={JSON.stringify([{ bobbleMix }, { nicotine: nicoMix }], null, 2)} />}
        </Center>
    );
};
export default SaveRecipe;
