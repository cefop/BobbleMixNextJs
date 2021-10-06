import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { FaTrashAlt } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
import { MUTATION_ADD_USER_RECIPE, MUTATION_DELET_USER_RECIPE, QUERY_USER_RECIPES } from '../gql/graphql';
import { Toast } from '../styles/AlertAndToast';

const ActionIcon = (props) => {
    const { recipe, ownedRecipe, uid } = props;

    // verify if user have current recipe saved
    const ifHaveRecipe = (array, key, value) => {
        if (array.find((object) => object.recipe[key] === value)) {
            return true;
        } else {
            return false;
        }
    };

    const [gotit, setGotit] = useState(ifHaveRecipe(ownedRecipe.users_recipes, 'id', recipe.id));

    const [fixRecipe] = useMutation(MUTATION_ADD_USER_RECIPE, {
        refetchQueries: [{ query: QUERY_USER_RECIPES, variables: { uid: uid } }],
    });
    const [delRecipe] = useMutation(MUTATION_DELET_USER_RECIPE, {
        refetchQueries: [{ query: QUERY_USER_RECIPES, variables: { uid: uid } }],
    });

    // ? delete recipe in user recipe list
    const deleteHandler = async () => {
        try {
            const { data } = await delRecipe({ variables: { rid: recipe.id, uid: uid } });
            // console.log('recipe deleted!...', data);
            setGotit(false);
            Toast.fire({
                icon: 'success',
                title: 'Recette retirée de votre profile!',
            });
        } catch (e) {
            console.log('error', e);
            Toast.fire({
                icon: 'error',
                title: 'Une erreur est survenue!',
            });
        }
    };

    // ? add new recipe in user recipe list
    const addHandler = async () => {
        try {
            const { data } = await fixRecipe({ variables: { rid: recipe.id, uid: uid } });
            // console.log('recipe attached!...', data);
            setGotit(true);
            Toast.fire({
                icon: 'success',
                title: 'Recette ajoutée à votre profil!',
            });
        } catch (e) {
            console.log('error', e);
            Toast.fire({
                icon: 'error',
                title: 'Une erreur est survenue!',
            });
        }
    };

    return (
        <div>
            <Tooltip
                label={gotit ? `Supprimer cette recette de votre profil` : 'Ajouter cette recette dans votre profil'}
                fontSize="md"
                bg="black"
            >
                <IconButton
                    style={{ boxShadow: 'none' }}
                    aria-label={
                        gotit ? `Supprimer cette recette de votre profil` : 'Ajouter cette recette dans votre profil'
                    }
                    icon={
                        gotit ? (
                            <FaTrashAlt size={'2em'} color="rgb(121, 121, 121)" />
                        ) : (
                            <BiArrowToBottom size={'2em'} color="rgb(121, 121, 121)" />
                        )
                    }
                    onClick={() => (gotit ? deleteHandler() : addHandler())}
                />
            </Tooltip>
        </div>
    );
};
export default ActionIcon;

export function NoUser() {
    return (
        <div>
            <Tooltip label="Enregistrer cette recette dans votre profile" fontSize="md" bg="black">
                <IconButton
                    style={{ boxShadow: 'none' }}
                    aria-label="Enregistrer cette recette dans votre profile"
                    icon={<BiArrowToBottom size={'2em'} color="rgb(121, 121, 121)" />}
                    onClick={() => signIn()}
                />
            </Tooltip>
        </div>
    );
}
