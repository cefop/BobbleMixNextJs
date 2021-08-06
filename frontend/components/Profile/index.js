import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { FaFacebook, FaTwitter, FaFileAlt } from 'react-icons/fa';
import frenchLocale from 'date-fns/locale/fr';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Tag, TagLabel, HStack, Button } from '@chakra-ui/react';
import { tmix } from './data';
import { TableContainer } from '../styles/globalStyled';

const ProfileContainer = () => {
    const router = useRouter();
    const recipeDate = new Date(tmix.createdAt);
    return (
        <TableContainer>
            <Table size="lg">
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Nom</Th>
                        <Th>Type de jus</Th>
                        <Th isNumeric>Liens</Th>
                        <Th isNumeric>F.D.S</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr onClick={() => router.push('/recipe')}>
                        <Td>
                            {format(recipeDate, 'dd MMM yy', {
                                locale: frenchLocale,
                            })}
                        </Td>
                        <Td>{tmix.name}</Td>
                        <Td>
                            {[tmix.aromes][0].map((c) => {
                                const cat = c.categories[0];
                                [cat].map((i) => {
                                    const cn = i;
                                    return cn;
                                });
                                return (
                                    <Tag size={'sm'} variant="outline" colorScheme="blue">
                                        <TagLabel>{cat.category.name}</TagLabel>
                                    </Tag>
                                );
                            })}
                        </Td>
                        <Td isNumeric>
                            <HStack>
                                <Button
                                    size="xs"
                                    colorScheme="facebook"
                                    variant="outline"
                                    leftIcon={<FaFacebook />}
                                ></Button>
                                <Button
                                    size="xs"
                                    colorScheme="twitter"
                                    variant="outline"
                                    leftIcon={<FaTwitter />}
                                ></Button>
                            </HStack>
                        </Td>
                        <Td>
                            <Button size="xs" colorScheme="green" variant="outline" leftIcon={<FaFileAlt />}>
                                Fiche De Sécurité
                            </Button>
                        </Td>
                    </Tr>
                </Tbody>

                <Tfoot>
                    <Tr>
                        <Th>Date</Th>
                        <Th>nom</Th>
                        <Th>Type de jus</Th>
                        <Th isNumeric>Liens</Th>
                        <Th isNumeric>F.D.S</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
};
export default ProfileContainer;
