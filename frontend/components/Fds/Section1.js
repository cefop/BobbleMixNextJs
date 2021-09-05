import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { HeadingBox, Separate } from './FDSStyle';

const Section1 = (props) => {
    const { name, company } = props;

    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 1: Identification de la substance/du mélange et de la société/l’entreprise
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>1.1 - Identificateur de produit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Nom commercial du produit/désignation :</Td>
                        <Td>{name}</Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Nom chimique :</Td>
                        <Td>-</Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Type de produit :</Td>
                        <Td>Mélange</Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>
                            1.2 - Utilisations identifiées pertinentes de la substance ou du mélange et utilisations
                            déconseillées
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Utilisations identifiées pertinentes :</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Liquide aromatisé pour recharge des cigarettes électroniques</ListItem>
                                <ListItem>Usage professionnel et/ou industriel</ListItem>
                                <ListItem>
                                    Utilisations par des consommateurs: Ménages privés (= public général =
                                    consommateurs)
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Usages déconseillés :</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Interdit aux mineurs et aux femmes enceintes ainsi qu’aux personnes sujettes à
                                    l’hypertension et aux problèmes cardio-vasculaires
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
                        <Th colSpan={2}>
                            1.3 - Renseignements concernant le fournisseur de la fiche de données de sécurité
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            {company.name}
                            <br />
                            Adresse: {company.address}
                            <br />
                            Téléphone : {company.tel}
                            <br />
                            Site web: {company.web}
                            <br />
                            Email: {company.email}
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>1.4 - Numéro d’appel d’urgence</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <UnorderedList>
                                <ListItem>ORFILA (INRS): {company.emergencytel}</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section1;
