import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Heading,
    UnorderedList,
    ListItem,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
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
                                <Thead>
                                    <Tr>
                                        <ThData style={{ color: 'red' }}>condition SI</ThData>
                                        <ThData style={{ color: 'red' }}>non classé, H317, H412, H413, H226</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData style={{ color: 'red' }}>
                                            Not classified
                                            <br /> Skin Sens. 1<br /> Aquatic chronic 3<br /> Aquatic chronic 4<br />
                                            Flam. Liq. 3
                                        </TdData>
                                        <TdData style={{ color: 'red' }}>
                                            Non classé
                                            <br />
                                            Sensibilisation cutanée - Catégorie 1<br />
                                            Danger pour l’environnement aquatique – Aquatic Chronic 3<br />
                                            Danger pour l’environnement aquatique – Aquatic Chronic 4<br />
                                            Liquide et vapeurs inflammables. – Catégorie 3
                                        </TdData>
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
                        <Td style={{ color: 'red' }}>
                            si le mélange est classé H317 = Contient : + voir le tableau si non juste "Contient : ..."
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>N°CAS</ThData>
                                        <ThData>Nom</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData style={{ color: 'red' }}>num CAS de la molecule (H317)</TdData>
                                        <TdData style={{ color: 'red' }}>nom de la molecule (H317)</TdData>
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
                        <Td style={{ color: 'red' }}>
                            Si mélange non classé, H412, H413 -> Aucun
                            <br />
                            Si mélange H317, H226 -> « Attention »
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Pictogrammes :</Td>
                        <Td style={{ color: 'red' }}>
                            <Text>Si mélange non classé, H412, H413 -> pas de pictogramme</Text>
                            <Text>Si mélange H317 -> pictogramme attention</Text>
                            <Text>Si mélange H226 -> pictogramme inflammable</Text>
                            <HStack>
                                <Image src="/assets/picto/GHS07-74x74.png" alt="GHS07" width="74" height="74" />
                                <Image src="/assets/picto/GHS02-74x74.png" alt="GHS02" width="74" height="74" />
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
                                <span>si H412 il ne peut etre H413 vise versa et no classé est unique</span>
                                <Tbody>
                                    <Tr style={{ color: 'red' }}>
                                        <TdData>
                                            vide
                                            <br />
                                            H317
                                            <br />
                                            H412
                                            <br />
                                            H413
                                            <br />
                                            H226
                                        </TdData>
                                        <TdData>
                                            Aucun.
                                            <br />
                                            Peut provoquer une allergie cutanée
                                            <br />
                                            Nocif pour les organismes aquatiques, entraîne des effets néfastes à long
                                            terme.
                                            <br />
                                            Peut être nocif à long terme pour les organismes aquatiques
                                            <br />
                                            Liquide et vapeurs inflammables
                                            <br />
                                        </TdData>
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
                            <span style={{ color: 'red' }}>SI non classé, H317, H412, H413, H226</span>
                            <Table size="sm">
                                <Tbody style={{ color: 'red' }}>
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
                                    <span style={{ color: 'red' }}>si EUH208</span>
                                    <Tr style={{ color: 'red' }}>
                                        <TdData>«Aucun »</TdData>
                                        <TdData></TdData>
                                    </Tr>
                                    <Tr style={{ color: 'red' }}>
                                        <TdData>EUH208</TdData>
                                        <TdData>Peut provoquer une réaction allergique</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>EUH208 :</Td>
                        <Td>
                            <span style={{ color: 'red' }}>
                                Liste des molécule(s) responsable(s) du EUH 208 ou « Aucun »
                            </span>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>N°CAS</ThData>
                                        <ThData>Nom</ThData>
                                        <ThData></ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr style={{ color: 'red' }}>
                                        <TdData>num CAS de la molecule (EUH 208)</TdData>
                                        <TdData>nom de la molecule (EUH 208)</TdData>
                                        <TdData>Peut produire une réaction allergique</TdData>
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
