import { Button } from '@chakra-ui/react';
// import AddDeleteRecipe from './AddDeleteRecipe';

function UserAddRmRecipe(props) {
    const { recipe, ownRecipe, uid } = props;
    console.log('recipe: ', recipe);
    console.log('own: ', ownRecipe);
    console.log('user: ', uid);

    return (
        <Button colorScheme="orange" variant="outline" marginTop={2}>
            vous avez deja cette recette
        </Button>
    );
}

export default UserAddRmRecipe;
