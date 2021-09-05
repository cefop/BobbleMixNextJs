import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate } from './FDSStyle';

const Section13 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 13: Considérations relatives à l’élimination
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>13.1 - Méthodes de traitement des déchets</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Méthodes de traitement des déchets</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    L’élimination doit se faire selon les prescriptions des autorités locales.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Évacuation des eaux</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Ne pas déverser dans les égouts ni dans les cours d’eau.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Précautions particulières à prendre</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Évacuer vers une usine d’incinération pour déchets spéciaux en respectant les
                                    réglementations administratives.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Disposition Communautaire ou Nationale ou Régionale</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Code Eural 16 05 08* produits chimiques d’origine organique à base de ou contenant
                                    des substances dangereuses, mis au rebut.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
            </Table>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 14: Informations relatives au transport
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th>14.1 - Numéro ONU</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            <UnorderedList>
                                <ListItem>Non applicable.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th>14.2 - Nom d’expédition des Nations unies</Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
                <Thead>
                    <Tr>
                        <Th>14.3 - Classe(s) de danger pour le transport</Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
                <Thead>
                    <Tr>
                        <Th>14.4 - Groupe d'emballage</Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
                <Thead>
                    <Tr>
                        <Th>14.5 - Dangers pour l’environnement</Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
                <Thead>
                    <Tr>
                        <Th>14.6 - Précautions particulières à prendre par l’utilisateur</Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
                <Thead>
                    <Tr>
                        <Th>
                            14.7 - Transport en vrac conformément à l’annexe II de la convention Marpol 73/78 et au
                            recueil IBC
                        </Th>
                    </Tr>
                </Thead>
                <Tbody></Tbody>
            </Table>

            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 15: Informations réglementaires
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>
                            15.1 - Réglementations/législation particulières à la substance ou au mélange en matière de
                            sécurité, de santé et d’environnement
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Substances REACH candidates</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Substances Annex XIV</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Substances Annex XVII</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucun</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Teneur en COV</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune donnée disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>15.2 - Évaluation de la sécurité chimique</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Évaluation de la sécurité chimique effectuée pour le produit</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Une nouvelle évaluation de la sécurité chimique a été réalisée pour les substances
                                    de ce mélange : - Ethanol - Nicotine
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section13;
