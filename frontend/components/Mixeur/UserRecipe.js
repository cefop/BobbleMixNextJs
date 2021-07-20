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
    return gso.length >= 0 ? (
        <RecipeContainer>
            <MyRecipe>
                {gso.length >= 1 ? (
                    gso.map((r, i) => {
                        console.log(r);
                        return (
                            <Box key={i}>
                                <UserRecipeRender list={r} />
                            </Box>
                        );
                    })
                ) : (
                    <Text>
                        Pour commencer votre recette <br /> Cliquer sur vos aromes
                    </Text>
                )}
            </MyRecipe>
        </RecipeContainer>
    ) : null;
};

export default UserRecipe;
