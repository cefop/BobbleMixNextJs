import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import CustomReduceFilter from '../lib/CustomReduceFilter';
import GetSortOrder from '../lib/SortOder';
import UserRecipeRender from './UserRecipeRender';
import { MyRecipe, RecipeContainer } from './StyleMixeur';

const UserRecipe = () => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(GetSortOrder('id'));
    const MaxMix = 5;

    return gso.length >= 0 ? (
        <RecipeContainer>
            <MyRecipe>
                {gso.length >= 1 ? (
                    gso.map((r, i) => {
                        // console.log(r);
                        return (
                            <Box key={i}>
                                <UserRecipeRender list={r} />
                            </Box>
                        );
                    })
                ) : (
                    <Text color="brown" width="300px">
                        Pour commencer votre recette <br /> Cliquer sur vos aromes
                    </Text>
                )}
            </MyRecipe>
            {bobbleMix.length >= 3 && bobbleMix.length <= 4 && (
                <Text color="brown" width="300px">
                    Possibilité d'ajouter {MaxMix - bobbleMix.length} quantité
                    {bobbleMix.length <= 3 ? 's' : ''} ou arome
                    {bobbleMix.length <= 3 ? 's' : ''}
                </Text>
            )}
        </RecipeContainer>
    ) : null;
};

export default UserRecipe;
