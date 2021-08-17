import { Button, Text, Box, Link } from '@chakra-ui/react';
import { DownloadIcon, DeleteIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react';

function UserAddRmRecipe(props) {
    const { recipe, ownRecipe, uid } = props;
    console.log('recipe: ', recipe);
    console.log('own: ', ownRecipe);
    console.log('user: ', uid);
    const [toastMessage, setToastMessage] = useState(undefined);
    // verify if user have current recipe saved
    const ifHaveRecipe = (array, key, value) => {
        if (array.find((object) => object.recipe[key] === value)) {
            return true;
        }
    };
    // delete recipe in user recipe list
    const deleteHandler = (recipe) => {
        return true;
    };
    // add new recipe in user recipe list
    const addHandler = (recipe) => {
        return true;
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
            variant="outline"
            onClick={async () => {
                await swal({
                    text: 'Confirmez vous la suppression de recette de votre inventaire ?',
                    icon: 'warning',
                    buttons: ['Non', 'Oui'],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        deleteHandler(recipe);
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
            vous avez deja cette recette
        </Button>
    ) : (
        <Button
            rightIcon={<DownloadIcon />}
            colorScheme="green"
            variant="outline"
            onClick={() => {
                addHandler(recipe);
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
