import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import React from 'react';

const Section11 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 11: Informations toxicologiques
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>11.1 - Informations sur les effets toxicologiques</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Toxicité aiguë</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td colSpan={2}>
                            Toxicité : Mélange<br/>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>LD50 oral (rat)</Th>
                                        <Th>Aucune donnée disponible</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>LD50 dermal (rat)</Td>
                                    <Td>Aucune donnée disponible</Td>
                                </Tr>
                                <Tr>
                                    <Td>LD50 dermal (rabbit)</Td>
                                    <Td>Aucune donnée disponible</Td>
                                </Tr>
                                <Tr>
                                    <Td>LC50 inhalation (rat)</Td>
                                    <Td>Aucune donnée disponible</Td>
                                </Tr>
                                <Tr>
                                    <Td>LC50 inhalation dusts and mists (rat)</Td>
                                    <Td>Aucune donnée disponible</Td>
                                </Tr>
                                <Tr>
                                    <Td>LC50 inhalation vapours (rat)</Td>
                                    <Td>Aucune donnée disponible</Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td colSpan={2}>
                              Toxicité : Substances<br/>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td>xyz</Td>
                                        <Td>xyz</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Corrosion cutanée/irritation cutanée</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                                <ListItem>Non classé</ListItem>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Sensibilisation respiratoire ou cutanée</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Peut provoquer une allergie cutanée</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Mutagénicité sur les cellules germinales</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Cancerogénité</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Toxicité pour la reproduction</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Toxicité spécifique pour certains organes cibles — exposition unique</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Toxicité spécifique pour certains organes cibles – exposition répétée</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Danger par aspiration</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section11;
