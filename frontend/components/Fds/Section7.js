import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate } from './FDSStyle';

const Section7 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 7: Manipulation et stockage
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>7.1 - Précautions à prendre pour une manipulation sans danger</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Recommandation</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Après usage, refermer aussitôt la capsule de fermeture.</ListItem>
                                <ListItem>
                                    Concevoir en règle générale tous les procédés detravail de manière à exclure les
                                    risques suivants:Contact avec la peau
                                </ListItem>
                                <ListItem>
                                    Éviter l'exposition - se procurer des instruction spéciales avant l'utilisation.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Notice explicative sur l'hygiène industrielle générale</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Changer immédiatement tout vêtement, chaussures ou chaussettes souillés.
                                </ListItem>
                                <ListItem>Éviter tout contact avec la peau, les yeux et lesvêtements.</ListItem>
                                <ListItem>Laver les vêtements souillés avant de les réutiliser.</ListItem>
                                <ListItem>
                                    Nettoyage minutieux de la peau immédiatement après la manipulation du produit.
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
                        <Th colSpan={2}>7.2 Conditions d’un stockage sûr, y compris d’éventuelles incompatibilités</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>Température de stockage recommandée</ListItem>
                                <ListItem>+ 15°C à +25°C</ListItem>
                                <ListItem>Conserver le récipient bien fermé.</ListItem>
                                <ListItem>Conserver/stocker uniquement dans le récipient d'origine.</ListItem>
                                <ListItem>Eloigner toute source d'ignition.</ListItem>
                                <ListItem>Protéger contre:Forte chaleur</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>7.3 - Utilisation(s) finale(s) particulière(s)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>Uniquement E-liquide.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section7;
