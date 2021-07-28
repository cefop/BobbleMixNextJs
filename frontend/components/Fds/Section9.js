import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section9 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 9: Propriétés physiques et chimiques
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th>9.1 - Informations sur les propriétés physiques et chimiques essentielles</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>
                                            <u>État</u>
                                        </ThData>
                                        <ThData>
                                            <u>Couleur</u>
                                        </ThData>
                                        <ThData>
                                            <u>Aspect</u>
                                        </ThData>
                                        <ThData>
                                            <u>Odeur</u>
                                        </ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>Liquide</TdData>
                                        <TdData>Claire</TdData>
                                        <TdData>Fluide</TdData>
                                        <TdData>Légère</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <br />
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>Seuil olfactif</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>pH</TdData>
                                        <TdData>non applicable</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Point de fusion</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Point de congélation</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Point d’ébullition</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Point éclair</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Taux d’évaporation</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Inflammabilité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Limite inférieure d’explosivité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Limite supérieure d’explosivité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Pression de la vapeur</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Densité de la vapeur</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Densité relative</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Densité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Solubilité (Eau)</TdData>
                                        <TdData>Soluble</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Solubilité (Ethanol)</TdData>
                                        <TdData>Soluble</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Solubilité (Acétone)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Solubilité (Solvants organiques)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Log KOW</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Température d’auto-inflammabilité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Température de décomposition</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Viscosité, cinématique</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Viscosité, dynamique</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>9.2 - AuTres informations</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>Teneur en COV</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Énergie minimale d’ignition</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Conductivité</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
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
