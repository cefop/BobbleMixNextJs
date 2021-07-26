import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

const Section13 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 13: Considérations relatives à l’élimination
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>13.1 - Méthodes de traitement des déchets</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Méthodes de traitement des déchets</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>L’élimination doit se faire selon les prescriptions des autorités locales.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Évacuation des eaux</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                Ne pas déverser dans les égouts ni dans les cours d’eau.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Précautions particulières à prendre</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                Évacuer vers une usine d’incinération pour déchets spéciaux en respectant les réglementations administratives.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Disposition Communautaire ou Nationale ou Régionale</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Code Eural 16 05 08* produits chimiques d’origine organique à base de ou contenant des substances dangereuses, mis au rebut.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 14: Informations relatives au transport
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Tbody>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>xyz</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 15: Informations réglementaires
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>15.1 - Réglementations/législation particulières à la substance ou au mélange en matière de sécurité, de santé et d’environnement</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Substances REACH candidates</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Substances Annex XIV</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Substances Annex XVII</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Teneur en COV</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune donnée disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>15.2 - Évaluation de la sécurité chimique</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Évaluation de la sécurité chimique effectuée pour le produit</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Une nouvelle évaluation de la sécurité chimique a été réalisée pour les substances de ce mélange : - Nicotine</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section13;
