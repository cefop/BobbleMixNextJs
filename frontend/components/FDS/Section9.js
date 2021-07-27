import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import React from 'react';

const Section9 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 9: Propriétés physiques et chimiques
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>9.1 - Informations sur les propriétés physiques et chimiques essentielles</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <u>État</u>
                                        </Th>
                                        <Th>
                                            <u>Couleur</u>
                                        </Th>
                                        <Th>
                                            <u>Aspect</u>
                                        </Th>
                                        <Th>
                                            <u>Odeur</u>
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Liquide</Td>
                                        <Td>Claire</Td>
                                        <Td>Fluide</Td>
                                        <Td>Légère</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <br />
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td>Seuil olfactif</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>pH</Td>
                                        <Td>non applicable</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Point de fusion</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Point de congélation</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Point d’ébullition</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Point éclair</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Taux d’évaporation</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Inflammabilité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Limite inférieure d’explosivité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Limite supérieure d’explosivité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Pression de la vapeur</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Densité de la vapeur</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Densité relative</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Densité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Solubilité (Eau)</Td>
                                        <Td>Soluble</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Solubilité (Ethanol)</Td>
                                        <Td>Soluble</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Solubilité (Acétone)</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Solubilité (Solvants organiques)</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Log KOW</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Température d’auto-inflammabilité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Température de décomposition</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Viscosité, cinématique</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Viscosité, dynamique</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>9.2 - AuTres informations</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td>Teneur en COV</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Énergie minimale d’ignition</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Conductivité</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section9;
