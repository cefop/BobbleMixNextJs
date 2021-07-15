import { format } from 'date-fns';
import { FaFacebook, FaTwitter, FaSistrix, FaFileAlt } from 'react-icons/fa';
import frenchLocale from 'date-fns/locale/fr';
import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Tag, TagLabel, HStack, Button } from '@chakra-ui/react';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import PageLayout from '../components/styles/PageLayout';

export default function Profile() {
    const { user } = useUser();
    console.log(user);
    const createdAt = new Date('2021-07-12T21:15:35.753865+00:00');
    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <PageLayout title="vos recettes bobble mix">
                    <Box p={2} color="grey" border="1px" borderRadius="5px">
                        <Table size="lg">
                            <Thead>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Type de jus</Th>
                                    <Th isNumeric>Liens</Th>
                                    <Th isNumeric>F.D.S</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        {format(createdAt, 'dd MMMM yyyy', {
                                            locale: frenchLocale,
                                        })}
                                    </Td>
                                    <Td>
                                        <Tag size={'sm'} variant="outline" colorScheme="blue">
                                            <TagLabel>Frais</TagLabel>
                                        </Tag>
                                        <Tag size={'sm'} variant="outline" colorScheme="blue">
                                            <TagLabel>Classic</TagLabel>
                                        </Tag>
                                    </Td>
                                    <Td isNumeric>
                                        <HStack>
                                            <Button
                                                size="xs"
                                                colorScheme="gray"
                                                variant="outline"
                                                leftIcon={<FaSistrix />}
                                            >
                                                Voir la recette
                                            </Button>
                                            <Button
                                                size="xs"
                                                colorScheme="facebook"
                                                variant="outline"
                                                leftIcon={<FaFacebook />}
                                            >
                                                Facebook
                                            </Button>
                                            <Button
                                                size="xs"
                                                colorScheme="twitter"
                                                variant="outline"
                                                leftIcon={<FaTwitter />}
                                            >
                                                Twitter
                                            </Button>
                                        </HStack>
                                    </Td>
                                    <Td>
                                        <Button
                                            size="xs"
                                            colorScheme="green"
                                            variant="outline"
                                            leftIcon={<FaFileAlt />}
                                        >
                                            voir la fiche de sécurité
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Type de jus</Th>
                                    <Th isNumeric>Liens</Th>
                                    <Th isNumeric>F.D.S</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </Box>
                </PageLayout>
            )}
        </>
    );
}
