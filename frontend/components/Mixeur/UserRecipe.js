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
            <MyRecipe>
                {gso.length >= 1 ? (
                    gso.map((r, i) => {
                        // console.log(r);
                        return (
                            <Box key={i} my={7}>
                                <UserRecipeRender list={r} />
                            </Box>
                        );
                    })
                ) : (
                    <RecipeContainer>
                        <MyRecipe>
                            {/* TODO : Create a dummy component Box  */}
                            <Box my={7}></Box>
                        </MyRecipe>
                    </RecipeContainer>
                )}
            </MyRecipe>
        </RecipeContainer>
    );
};

export default UserRecipe;
