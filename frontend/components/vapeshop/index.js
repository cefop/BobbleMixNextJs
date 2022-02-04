import { Box, Text } from '@chakra-ui/react';
import CenterGridLayout from '../styles/CenterGridLayout';
import ShopForm from './ShopForm';

export default function MyVapeShop(props) {
    const { user } = props;
    const isShop = user[0].shops;

    return (
        <>
            {isShop.length === 0 ? (
                <CenterGridLayout title={'Votre shop'} subtitle={"Profitez d'un backoffice pro"} data={[]}>
                    <Box pt={10}>
                        <Text fontSize="4xl" fontWeight={600}>
                            Enregistrer votre vapeshop sur Bobblemix
                        </Text>
                    </Box>
                    <Box px={40}>
                        <ShopForm user={user[0]} />
                    </Box>
                </CenterGridLayout>
            ) : (
                <CenterGridLayout title={'Votre shop'} subtitle={"Profitez d'un backoffice pro"} data={[]}>
                    <Box pt={10}>
                        <Text fontSize="4xl" fontWeight={600}>
                            Votre shop est déjà enregistrer!
                        </Text>
                    </Box>
                    <Box px={40}>
                        <Text>Merci!</Text>
                    </Box>
                </CenterGridLayout>
            )}
        </>
    );
}
