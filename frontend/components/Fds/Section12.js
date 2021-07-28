import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section12 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md" mt={5}>
                    RUBRIQUE 12: Informations écologiques
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th>12.1 - Toxicité</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            Toxicité : Mélange
                            <br />
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>EC50 48 hr crustacea</ThData>
                                        <ThData>Aucune donnée disponible</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>LC50 96 hr fish</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>ErC50 algae</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>ErC50 other aquatic plants</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>NOEC chronic fish</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>NOEC chronic crustacea</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>NOEC chronic algae</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>NOEC chronic other aquatic plants </TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>
                                    La substance/le mélange ne satisfont pas aux critères de toxicité aiguë pour le
                                    milieu aquatique selon l’annexe I du règlement (CE) N° 1272/2008 [CLP].
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
                        <Th>12.2 - Persistance et dégradabilité</Th>
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
                                        <ThData>Demande biochimique en oxygène (DBO)</ThData>
                                        <ThData>Aucune donnée disponible</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>Demande chimique en oxygène (DCO)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>% de biodégradation en 28 jours</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>Aucune information disponible.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.3 - Potentiel de bioaccumulation</Th>
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
                                        <ThData>Facteur de bioconcentration (FBC)</ThData>
                                        <ThData>Aucune donnée disponible</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>Log KOW</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>Aucune indication relative à un potentiel de bioaccumulation</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.4 - Mobilité dans le sol</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.5 - Résultats des évaluations PBT et vPvB</Th>
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
                                    Les susbtances de ce mélange ne remplissent pas les critères PBT/vPvB de REACH
                                    annexe XIII
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
                        <Th>12.6 - Autres effets nocifs</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section12;
