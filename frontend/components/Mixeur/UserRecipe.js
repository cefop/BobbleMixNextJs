import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import CustomReduceFilter from '../lib/CustomReduceFilter';
import GetSortOrder from '../lib/SortOder';
import UserRecipeRender from './UserRecipeRender';
import { MyRecipe, RecipeContainer } from './StyleMixeur';

const UserRecipe = () => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(GetSortOrder('id'));

    return (
        <RecipeContainer>
            {gso.length >= 1 ? (
                // Filter item by ID to stack items quantites
                <MyRecipe>
                    {gso.map((r, i) => (
                        <Box key={i} my={7}>
                            <UserRecipeRender list={r} />
                        </Box>
                    ))}
                </MyRecipe>
            ) : (
                <MyRecipe>
                    <Box my={7}>TODO Design</Box>
                </MyRecipe>
            )}
        </RecipeContainer>
    );
};

export default UserRecipe;
