import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Section10 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 10: Stabilité et réactivité
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>10.1 - Réactivité</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.2 - Stabilité chimique</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.3 - Possibilité de réactions dangereuses</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Des réactions dangereuses ne se produisent pas si utilisé et stocké correctement.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.4 - Conditions à éviter</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Eloigner toute source d’ignition.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.5 - Matières incompatibles</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Agent réducteur.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>10.6 - Produits de décomposition dangereux</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
