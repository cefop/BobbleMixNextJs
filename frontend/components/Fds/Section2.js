import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem, HStack, Image } from '@chakra-ui/react';

const Section2 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 2: Identification des dangers
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>2.1 - Classification de la substance ou du mélange</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Classification selon règlement (CE) N° 1272/2008 [CLP]</Td>
                        <Td>
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
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>2.2 - Éléments d’étiquetage</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Étiquetage selon le règlement (CE) N° 1272/2008 [CLP]</Td>
                        <Td>
                            Contient :
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>N°CAS</Th>
                                        <Th>N°CE</Th>
                                        <Th>Nom</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>xyz</Td>
                                        <Td>xyz</Td>
                                        <Td>xyz</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Mention d’avertissement :</Td>
                        <Td>Attention!</Td>
                    </Tr>
                    <Tr>
                        <Td>Pictogrammes :</Td>
                        <Td>
                            <HStack>
                                <Image
                                    src="https://www.bobblemix.com/static/blender/images/GHS02-74x74.png"
                                    width="74"
                                    height="74"
                                    alt=""
                                />
                                <Image
                                    src="https://www.bobblemix.com/static/blender/images/GHS07-74x74.png"
                                    width="74"
                                    height="74"
                                    alt=""
                                />
                            </HStack>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Mentions de danger :</Td>
                        <Td>
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
                        <Td>Conseils de prudence :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr className="header">
                                        <Td>P102</Td>
                                        <Td>Tenir hors de portée des enfants.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>P210</Td>
                                        <Td>
                                            Tenir à l’écart de la chaleur, des surfaces chaudes, des étincelles, des
                                            flammes nues et de toute auTre source d’inflammation. Ne pas fumer.
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>P270</Td>
                                        <Td>Ne pas manger, boire ou fumer en manipulant ce produit.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>P302+P352</Td>
                                        <Td>EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>P501</Td>
                                        <Td>Éliminer le contenu dans un cenTre de Traitement agréé.</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Phrases EUH :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td>EUH208</Td>
                                        <Td>xyz</Td>
                                        <Td>xyz</Td>
                                        <Td>Peut provoquer une réaction allergique</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>2.3 - Autres dangers</Th>
                    </Tr>
                </Thead>
                <Tbody>
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
