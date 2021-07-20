import { useContext } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import CustomReduceFilter from '../../lib/CustomReduceFilter';
import GetSortOrder from '../../lib/SortOder';
import { BobbleMixContext } from '../../hooks/BobbleMixContext';
// import { UserContext } from '../hooks/UserContext';
// import { BaseMixContext } from '../hooks/BaseMixContext';
// import { NicotineContext } from '../hooks/NicotineContext';
// import AddNic from './AddNic';
import BobbleMap from '../BobbleMap';
import { BobbleItemInfo, CtaRecipe, MyRecipe, RecipeContainer } from '../StyleMixeur';

const Recipes = () => {
    // const router = useRouter();
    // const { user } = useContext(UserContext);
    // const { nicotineLevel, setNicotineLevel } = useContext(NicotineContext);

    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);

    // const { baseMix, setBaseMix } = useContext(BaseMixContext);

    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(GetSortOrder('id'));

    /* const qrLinkGen = function () {
        const link = gso.map((r) => `_${((r.quantity * 100) / bobbleMix.length).toFixed(2)}-${r.id}`);
        return link.join('');
    }; */

    const reset = () => {
        setBobbleMix([]);
        // setBaseMix({ nic50: 0, nic80: 0, base50: 0, base80: 0 });
        // setNicotineLevel(0);
    };

    // const maxNic = baseMix.nic50 + baseMix.nic80;
    // const maxBase = baseMix.base50 + baseMix.base80;

    return gso.length >= 0 ? (
        <RecipeContainer>
            <MyRecipe>
                {gso.length >= 1 ? (
                    gso.map((r, i) => (
                        <Box key={i}>
                            <BobbleMap list={r} />
                        </Box>
                    ))
                ) : (
                    <Text>
                        <BobbleItemInfo>
                            Pour commencer votre recette <br /> Cliquer sur vos aromes
                        </BobbleItemInfo>
                    </Text>
                )}
            </MyRecipe>
            <CtaRecipe>
                <Button
                    variant="solid"
                    colorScheme=""
                    size="md"
                    width="130px"
                    isDisabled={!(bobbleMix.length >= 1)}
                    onClick={() => reset()}
                >
                    Recommencer
                </Button>
            </CtaRecipe>
        </RecipeContainer>
    ) : null;
};
export default Recipes;
