import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox } from './FDSStyle';

const Section5 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 5: Mesures de lutte contre l’incendie
                </Heading>
            </HeadingBox>

            <Table variant="striped" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>5.1 - Moyen d’extinction</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Moyens d’extinction appropriés</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Dioxyde de carbone (CO2)</ListItem>
                                <ListItem>Poudre d’extinction</ListItem>
                                <ListItem>Jet d’eau pulvérisée</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Moyens d’extinction inappropriés</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Jet d’eau à grand débit</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>5.2 - Dangers particuliers résultant de la substance ou du mélange</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Dangers particuliers résultant de la substance ou du mélange</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Liquide combustible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Produits de décomposition dangereux</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Production d’acroléine à haute température &#62; 280°C</ListItem>
                                <ListItem>Monoxyde de carbone</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>5.3 - Conseils aux pompiers</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>Adapter les mesures d’extinction au milieu environnant</ListItem>
                                <ListItem>En cas d’incendie: Utiliser un appareil respiratoire autonome</ListItem>
                                <ListItem>
                                    Ne pas laisser les eaux d’extinction s’écouler dans les égouts ou les cours d’eau.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section5;
