import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate } from './FDSStyle';

const Section10 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 10: Stabilité et réactivité
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th>10.1 - Réactivité</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Ce produit est considéré comme non réactif dans des conditions normales
                                    d’utilisation.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.2 - Stabilité chimique</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Le produit est chimiquement stable si les conditions de stockage, d’utilisation et
                                    les températures préconisées sont respectées
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.3 - Possibilité de réactions dangereuses</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Des réactions dangereuses ne se produisent pas si utilisé et stocké correctement.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.4 - Conditions à éviter</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Eloigner toute source d’ignition.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.5 - Matières incompatibles</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Agent réducteur.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.6 - Produits de décomposition dangereux</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Production d’acroléine à haute température. &#62; 280°C</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section10;
