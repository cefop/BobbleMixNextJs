import { useState } from 'react';
import { DownloadIcon, DeleteIcon } from '@chakra-ui/icons';
import { Button, useToast } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';

function UserAddRmRecipe(props) {
    const { recipe } = props;
    const toast = useToast();
    const [newRecipe, setNewRecipe] = useState([]);
    // verify if user have current recipe saved
    const ifHaveRecipe = (array, key, value) => {
        if (array.find((object) => object[key] === value)) {
            return true;
        }
    };
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    console.log('New Recipe', newRecipe);

    return (
        <>
            {!user ? (
                <Button colorScheme="orange" variant="outline" marginTop={2}>
                    Connectez vous pour enregistrer cette recette
                </Button>
            ) : ifHaveRecipe(newRecipe, 'recipe_id', recipe.id) ? (
                <Button
                    rightIcon={<DeleteIcon />}
                    onClick={() => {
                        setNewRecipe([]);
                        return toast({
                            title: 'Recette supprimer.',
                            description: `${recipe.name} à été supprimer avec succès.`,
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        });
                    }}
                    colorScheme="red"
                    variant="outline"
                    marginTop={2}
                >
                    vous avez deja cette recette
                </Button>
            ) : (
                <Button
                    rightIcon={<DownloadIcon />}
                    onClick={() => {
                        setNewRecipe((currentState) => [...currentState, { recipe_id: recipe.id, user_id: uid }]);
                        return toast({
                            title: 'Recette ajouter.',
                            description: `${recipe.name} à été enregistrer avec succès.`,
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        });
                    }}
                    colorScheme="teal"
                    variant="outline"
                    marginTop={2}
                >
                    vous n'avez pas cette recette
                </Button>
            )}
        </>
    );
}

export default UserAddRmRecipe;
