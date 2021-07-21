import { Box, Flex } from '@chakra-ui/react';
import ChooseFlavor from './ChooseFlavor';
import UserRecipe from './UserRecipe';
import { gql, useQuery } from '@apollo/client';
import Loading from '../Loading';
import Error from '../Error';
import NicoLevel from './NicoLevel';

const ContainerMix = (props) => {
    const FETCH_CATEGORIES = gql`
        query fetchItems {
            category {
                id
                name
            }
        }
    `;
    const { loading, error, data } = useQuery(FETCH_CATEGORIES);
    const { items } = props;
    // console.log('USER MIXEUR PROPS: ', items);
    return (
        <Flex height="100%" background="#FEFEFE" width="100%">
            <Flex minHeight="100%" width="100%">
                <Box
                    width={['30%', null, null, null, '40%']}
                    background="#FDC94C"
                    overflow="hidden"
                    minHeight="304px"
                    borderTop={['2px', 'solid', '#F5F5F5 ']}
                    display={['none', null, null, 'block']}
                >
                    <Flex height="100%" overflow="auto" overflowY="auto">
                        <Box>
                            <h2>Faite votr erecette bobble mix!</h2>
                            <h3>étape 1: Choisisez vos arômes</h3>
                            <UserRecipe />
                            <h3>étape 2: Choisisez votre dosage de nicotine</h3>
                            <NicoLevel />
                            <h3>étape 3: Sauvegarder votre recette</h3>
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
        </Flex>
    );
};
export default ContainerMix;
