import { Box, Flex } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { StepHeader, StepTitle } from './StyleMixeur';
import ChooseFlavor from './ChooseFlavor';
import UserRecipe from './UserRecipe';
import SaveRecipe from './SaveRecipe';
import NicoLevel from './NicoLevel';
import Loading from '../Loading';
import Error from '../Error';
import TipsMix from './TipsMix';

const FETCH_CATEGORIES = gql`
    query fetchItems {
        category {
            id
            name
        }
    }
`;

const ContainerMix = (props) => {
    const { loading, error, data } = useQuery(FETCH_CATEGORIES);
    const { items } = props;
    // console.log('USER MIXEUR PROPS: ', items);
    return (
        <Flex height="100%" background="#FEFEFE" color="black" width="100%">
            <Box
                width={['30%', null, null, null, '40%']}
                overflow="hidden"
                minHeight="304px"
                borderRight="1px solid #ed9500"
                display={['none', null, null, 'block']}
            >
                <Flex height="100%" width="100%" overflow="auto" overflowY="auto">
                    <Box height="100%" width="100%">
                        <StepHeader>votre recette bobblemix</StepHeader>
                        <TipsMix />
                        <StepTitle>#1: Choisisez vos arômes</StepTitle>
                        <UserRecipe />
                        <StepTitle>#2: Choisisez votre dosage de nicotine</StepTitle>
                        <NicoLevel />
                        <StepTitle>#3: Sauvegarder votre recette</StepTitle>
                        <SaveRecipe />
                    </Box>
                </Flex>
            </Box>
            <Box
                width={['100%', null, null, '70%', '60%']}
                overflow="auto"
                color="black"
                position="relative"
                background="#FEFEFE 0% 0% no-repeat padding-box"
            >
                {loading && <Loading />}
                {error && <Error tips="erreur de changement des categories" />}
                <Flex height="100%" overflow="auto" overflowY="auto">
                    <Box>
                        {data && data.category ? <ChooseFlavor categories={data.category} items={items} /> : null}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
export default ContainerMix;
