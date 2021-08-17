import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section11 = (props) => {
    const { isH317 } = props;
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md" mt={5}>
                    RUBRIQUE 11: Informations toxicologiques
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>11.1 - Informations sur les effets toxicologiques</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Toxicité aiguë</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            Toxicité : Mélange
                            <br />
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>LD50 oral (rat)</ThData>
                                        <ThData>Aucune donnée disponible</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>LD50 dermal (rat)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>LD50 dermal (rabbit)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>LC50 inhalation (rat)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>LC50 inhalation dusts and mists (rat)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>LC50 inhalation vapours (rat)</TdData>
                                        <TdData>Aucune donnée disponible</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            Toxicité : Substances
                            <br />
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
                        <Td>Corrosion cutanée/irritation cutanée</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                                <ListItem>Non classé</ListItem>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Sensibilisation respiratoire ou cutanée</Td>
                        <Td>
                            <UnorderedList style={{ color: 'cyan' }}>
                                {isH317 ? (
                                    <ListItem>
                                        Sensibilisation cutanée - Catégorie 1 - Peut provoquer une allergie cutanée
                                    </ListItem>
                                ) : (
                                    <ListItem>non classé</ListItem>
                                )}
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Mutagénicité sur les cellules germinales</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Cancerogénité</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Toxicité pour la reproduction</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Toxicité spécifique pour certains organes cibles — exposition unique</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Toxicité spécifique pour certains organes cibles – exposition répétée</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non classé</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
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
