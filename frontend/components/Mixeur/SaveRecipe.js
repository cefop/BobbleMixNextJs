import React, { useContext, useState } from 'react';
import { Button, Code, Stack } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';
import { BobbleMixContext } from '../hooks/BobbleMixContext';

const SaveRecipe = (props) => {
    const { niclevel } = props;
    const { user } = useUser();
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const [showRecipe, setShowRecipe] = useState(false);

    const reset = () => {
        setBobbleMix([]);
        setShowRecipe(false);
    };

    return (
        <>
            <Stack spacing={4} direction="row" align="center">
                {user ? (
                    <Button
                        colorScheme="pink"
                        variant="solid"
                        isDisabled={bobbleMix.length < 2}
                        onClick={() => setShowRecipe(true)}
                    >
                        Enregistrer votre recette
                    </Button>
                ) : (
                    <span>hello</span>
                )}
                <Button colorScheme="red" isDisabled={bobbleMix.length < 2} onClick={() => reset()}>
                    recommencer la recette
                </Button>
            </Stack>
            {!!showRecipe && <Code children={JSON.stringify([{ bobbleMix }, { nicotine: niclevel }], null, 2)} />}
        </>
    );
};
export default SaveRecipe;
