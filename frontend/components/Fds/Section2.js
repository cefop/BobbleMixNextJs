import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem, HStack, Image } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section2 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 2: Identification des dangers
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>2.1 - Classification de la substance ou du mélange</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Classification selon règlement (CE) N° 1272/2008 [CLP]</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>&nbsp;</TdData>
                                        <TdData></TdData>
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
                        <Th colSpan={2}>2.2 - Éléments d’étiquetage</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Étiquetage selon le règlement (CE) N° 1272/2008 [CLP]</Td>
                        <Td>
                            Contient :
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>N°CAS</ThData>
                                        <ThData>N°CE</ThData>
                                        <ThData>Nom</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>&nbsp;</TdData>
                                        <TdData></TdData>
                                        <TdData></TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Mention d’avertissement :</Td>
                        <Td>Attention!</Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Pictogrammes :</Td>
                        <Td>
                            <HStack>
                                <Image src="/assets/picto/GHS02-74x74.png" alt="GHS02" width="74" height="74" />
                                <Image src="/assets/picto/GHS07-74x74.png" alt="GHS07" width="74" height="74" />
                            </HStack>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Mentions de danger :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>&nbsp;</TdData>
                                        <TdData></TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Conseils de prudence :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr className="header">
                                        <TdData>P102</TdData>
                                        <TdData>Tenir hors de portée des enfants.</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>P210</TdData>
                                        <TdData>
                                            Tenir à l’écart de la chaleur, des surfaces chaudes, des étincelles, des
                                            flammes nues et de toute auTre source d’inflammation. Ne pas fumer.
                                        </TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>P270</TdData>
                                        <TdData>Ne pas manger, boire ou fumer en manipulant ce produit.</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>P302+P352</TdData>
                                        <TdData>
                                            EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.
                                        </TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>P501</TdData>
                                        <TdData>Éliminer le contenu dans un cenTre de Traitement agréé.</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Phrases EUH :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>EUH208</TdData>
                                        <TdData>&nbsp;</TdData>
                                        <TdData>&nbsp;</TdData>
                                        <TdData>Peut provoquer une réaction allergique</TdData>
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
                        <Th colSpan={2}>2.3 - Autres dangers</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Substance PBT :</Td>
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
            </Table>
        </>
    );
};

export default Section2;
