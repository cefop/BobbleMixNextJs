import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Section4 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 4: Premiers secours
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>4.1 - Description des premiers secours</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>En cas d’inhalation</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Veiller à un apport d’air frais</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Après contact avec la peau</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Après contact avec la peau, se laver immédiatement et abondamment avec eau et savon.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Après contact avec les yeux</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Rincer soigneusement et abondamment avec une douche oculaire ou de l’eau.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>En cas d’ingestion</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Rincer la bouche abondamment à l’eau</ListItem>
                                <ListItem>NE PAS faire vomir</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>4.2 - Principaux symptômes et effets, aigus et différés</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Symptômes et effets - En cas d’inhalation</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Symptômes et effets - Après contact avec la peau</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Peut provoquer une allergie cutanée</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Symptômes et effets - Après contact avec les yeux</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Symptômes et effets - En cas d’ingestion</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>
                            4.3 - Indication des éventuels soins médicaux immédiats et traitements particuliers
                            nécessaires
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>Traitement symptomatique.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section4;
