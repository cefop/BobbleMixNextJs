import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Section12 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 12: Informations écologiques
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>12.1 - Toxicité</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            Toxicité : Mélange
                            <br />
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>EC50 48 hr crustacea</Th>
                                        <Th>Aucune donnée disponible</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>LC50 96 hr fish</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>ErC50 algae</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>ErC50 other aquatic plants</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NOEC chronic fish</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NOEC chronic crustacea</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NOEC chronic algae</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NOEC chronic other aquatic plants </Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>
                                    Nocif pour les organismes aquatiques, entraîne des effets à long terme.{' '}
                                </ListItem>
                                <ListItem>
                                    La substance/le mélange ne satisfont pas aux critères de toxicité aiguë pour le
                                    milieu aquatique selon l’annexe I du règlement (CE) N° 1272/2008 [CLP].
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.2 - Persistance et dégradabilité</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Demande biochimique en oxygène (DBO)</Th>
                                        <Th>Aucune donnée disponible</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Demande chimique en oxygène (DCO)</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>% de biodégradation en 28 jours</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>Aucune information disponible.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.3 - Potentiel de bioaccumulation</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Facteur de bioconcentration (FBC)</Th>
                                        <Th>Aucune donnée disponible</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Log KOW</Td>
                                        <Td>Aucune donnée disponible</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <UnorderedList>
                                <ListItem>Aucune indication relative à un potentiel de bioaccumulation</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.4 - Mobilité dans le sol</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>12.6 - Autres effets nocifs</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
