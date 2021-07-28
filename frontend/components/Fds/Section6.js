import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate } from './FDSStyle';

const Section6 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 6: Mesures à prendre en cas de dispersion accidentelle
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>
                            6.1 - Précautions individuelles, équipement de protection et procédures d’urgence
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Pour les non-secouristes</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Éloigner toute source d’ignition.</ListItem>
                                <ListItem>Éviter tout contact avec les yeux, la peau ou les vêtements.</ListItem>
                                <ListItem>Utiliser un équipement de protection personnel.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Pour les secouristes</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Utiliser un équipement de protection individuel (voir rubrique 8).</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>6.2 - Précautions pour la protection de l’environnement</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>
                                    Ne pas laisser s’écouler dans les canalisations ni dans les eaux courantes.
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
                        <Th colSpan={2}>6.3 - Méthodes et matériel de confinement et de nettoyage</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Méthodes et matériel de confinement</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Éviter une expansion en surface (p. ex. par un endiguement ou des barrages
                                    antipollution).
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Méthodes et matériel de nettoyage</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Absorber avec une substance liant les liquides (sable, diatomite, liant d’acides,
                                    liant universel).
                                </ListItem>
                                <ListItem>Bien nettoyer les surfaces contaminées.</ListItem>
                                <ListItem>
                                    Nettoyer dès que possible tout épandage, en le récoltant au moyen d’un produit
                                    absorbant.
                                </ListItem>
                                <ListItem>Recueillir mécaniquement.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Recueillir mécaniquement.</Td>
                        <Td>
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
                        <Th colSpan={2}>6.4 - Référence à d’autres sections</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>Évacuation: voir rubrique 13</ListItem>
                                <ListItem>Maniement sûr: voir rubrique 7</ListItem>
                                <ListItem>Protection individuelle: voir rubrique 8</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section6;
