import { useMutation } from '@apollo/client';
import { Button, Text, Box, Link } from '@chakra-ui/react';
import { DownloadIcon, DeleteIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react';
import { MUTATION_ADD_USER_RECIPE, MUTATION_DELET_USER_RECIPE } from '../gql/graphql';

function UserAddRmRecipe(props) {
    const { recipe, ownRecipe, uid } = props;
    const [fixRecipe] = useMutation(MUTATION_ADD_USER_RECIPE);
    const [delRecipe] = useMutation(MUTATION_DELET_USER_RECIPE);

    const [toastMessage, setToastMessage] = useState(undefined);

    // verify if user have current recipe saved
    const ifHaveRecipe = (array, key, value) => {
        if (array.find((object) => object.recipe[key] === value)) {
            return true;
        }
    };

    // delete recipe in user recipe list
    const deleteHandler = async () => {
        try {
            const { data } = await delRecipe({ variables: { rid: recipe.id, uid: uid } });
            console.log('recipe attached!...', data);
        } catch (e) {
            console.log('error', e);
        }
    };

    // add new recipe in user recipe list
    const addHandler = async () => {
        try {
            const { data } = await fixRecipe({ variables: { rid: recipe.id, uid: uid } });
            console.log('recipe attached!...', data);
        } catch (e) {
            console.log('error', e);
        }
    };

    useEffect(() => {
        if (toastMessage) {
            const { body, icon } = toastMessage;
            swal({
                content: (
                    <Box>
                        <Text color="black">{body}</Text>
                        <Link href="/toprecipe" color="orange">
                            Top recettes <ArrowForwardIcon />
                        </Link>
                    </Box>
                ),
                icon: icon,
                timer: 5000,
                buttons: false,
            });
        }
    }, [toastMessage, swal]);

    return ifHaveRecipe(ownRecipe.users_recipes, 'id', recipe.id) ? (
        <Button
            rightIcon={<DeleteIcon />}
            colorScheme="orange"
            variant="link"
            onClick={async () => {
                await swal({
                    text: 'Confirmez vous la suppression de recette de votre inventaire ?',
                    icon: 'warning',
                    buttons: ['Non', 'Oui'],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        deleteHandler();
                        setToastMessage({
                            body: 'La recette a été supprimer avec succès.',
                            icon: 'success',
                        });
                    } else {
                        setToastMessage({
                            body: 'Vous avez decidé de garder cette recette.',
                            icon: 'info',
                        });
                    }
                });
            }}
        >
            vous detenez cette recette
        </Button>
    ) : (
        <Button
            rightIcon={<DownloadIcon />}
            colorScheme="green"
            variant="link"
            onClick={() => {
                addHandler();
                setToastMessage({
                    body: 'La recette a été ajouté avec succès.',
                    icon: 'success',
                });
            }}
        >
            vous n'avez pas cette recette
        </Button>
    );
}
export default UserAddRmRecipe;
