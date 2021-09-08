import { Table, Thead, Tbody, Tr, Th, Td, Heading, HStack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';
import MentionDangerDefault from './Mentions/DangerDefault';
import MentionDangerH226 from './Mentions/DangerH226';
import MentionDangerH226_H412_H413 from './Mentions/DangerH226_412_413';
import MentionDangerH317_H412_413 from './Mentions/DangerH317_412_413';
import MentionDangerH317_H226 from './Mentions/DangerH317_H226';
import MentionDangerH317_H412_413_H226 from './Mentions/DangerH317_H412_413_226';
import MentionDangerH317 from './Mentions/DangerH317';
import MentionDangerH412_413 from './Mentions/DangerH412_413';

const Section2 = (props) => {
    const { isH317, isH317_1, isH317_1A, isH317_1B, isH412, isH413, isH226, isEUH208A, isEUH208B, isEUH208C } = props;
    // console.log('MIX is H412', isH412, 'MIX is H413', isH413);
    // console.log('H317_1A', isH317_1A, 'H317_1B', isH317_1B, 'H317_1', isH317_1);
    // console.log('H317', isH317);

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
                                    <Tr></Tr>
                                </Thead>
                                <Tbody style={{ color: 'green' }}>
                                    {isH317.b && (
                                        <Tr>
                                            <TdData>Skin Sens. 1</TdData>
                                            <TdData>Sensibilisation cutanée - Catégorie 1</TdData>
                                        </Tr>
                                    )}
                                    {isH412.b && (
                                        <Tr>
                                            <TdData>Aquatic chronic 3</TdData>
                                            <TdData>Danger pour l’environnement aquatique – Aquatic Chronic 3</TdData>
                                        </Tr>
                                    )}
                                    {isH413.b && (
                                        <Tr>
                                            <TdData>Aquatic chronic 4</TdData>
                                            <TdData>Danger pour l’environnement aquatique – Aquatic Chronic 4</TdData>
                                        </Tr>
                                    )}
                                    {isH226.b && (
                                        <Tr>
                                            <TdData>Flam. Liq. 3</TdData>
                                            <TdData>Liquide et vapeurs inflammables. – Catégorie 3</TdData>
                                        </Tr>
                                    )}
                                    {!isH317.b && !isH412.b && !isH413.b && !isH226.b && (
                                        <Tr>
                                            <UnorderedList>
                                                <ListItem>Not classified</ListItem>
                                            </UnorderedList>
                                        </Tr>
                                    )}
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
                            <Table size="sm">
                                {isH317.b ? (
                                    <>
                                        <Thead>
                                            <Tr>
                                                <ThData>Nom</ThData>
                                                <ThData>N°CAS</ThData>
                                            </Tr>
                                        </Thead>
                                        <Tbody style={{ color: 'green' }}>
                                            {isH317_1A.arr.length > 0 &&
                                                isH317_1A.arr.map(
                                                    (i, k) =>
                                                        i.mod_retenuAdd >= 0.1 && (
                                                            <Tr key={k}>
                                                                <TdData>{i.Molecule}</TdData>
                                                                <TdData>{i.Molecule_ID}</TdData>
                                                            </Tr>
                                                        )
                                                )}
                                            {isH317_1B.arr.length > 0 &&
                                                isH317_1B.arr.map(
                                                    (i, k) =>
                                                        i.mod_retenuAdd >= 1 && (
                                                            <Tr key={k}>
                                                                <TdData>{i.Molecule}</TdData>
                                                                <TdData>{i.Molecule_ID}</TdData>
                                                            </Tr>
                                                        )
                                                )}
                                            {isH317_1.arr.length > 0 &&
                                                isH317_1.arr.map(
                                                    (i, k) =>
                                                        i.mod_retenuAdd >= 1 && (
                                                            <Tr key={k}>
                                                                <TdData>{i.Molecule}</TdData>
                                                                <TdData>{i.Molecule_ID}</TdData>
                                                            </Tr>
                                                        )
                                                )}
                                        </Tbody>
                                    </>
                                ) : null}
                            </Table>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Mention d’avertissement :</Td>

                        {isH317.b === true || isH226.b === true ? (
                            <Td style={{ color: 'green' }}>
                                <UnorderedList>
                                    <ListItem>Attention</ListItem>
                                </UnorderedList>
                            </Td>
                        ) : (
                            <Td style={{ color: 'green' }}>
                                <UnorderedList>
                                    <ListItem>Aucun</ListItem>
                                </UnorderedList>
                            </Td>
                        )}
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Pictogrammes :</Td>
                        <Td>
                            <HStack>
                                {isH317.b && (
                                    <Image
                                        src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630926475/icone_bobble_mix/attention_hyp4mu.png"
                                        alt="GHS07"
                                        width="74"
                                        height="74"
                                    />
                                )}
                                {isH226.b && (
                                    <Image
                                        src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630930563/icone_bobble_mix/inflammable_cc3wqr.png"
                                        alt="GHS02"
                                        width="74"
                                        height="74"
                                    />
                                )}
                            </HStack>
                            {!isH317.b && !isH226.b && (
                                <UnorderedList style={{ color: 'green' }}>
                                    <ListItem>Aucun</ListItem>
                                </UnorderedList>
                            )}
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Mentions de danger :</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody style={{ color: 'green' }}>
                                    {isH317.b && (
                                        <Tr>
                                            <TdData>H317</TdData>
                                            <TdData>Peut provoquer une allergie cutanée</TdData>
                                        </Tr>
                                    )}
                                    {isH412.b && (
                                        <Tr>
                                            <TdData>H412</TdData>
                                            <TdData>
                                                Nocif pour les organismes aquatiques, entraîne des effets néfastes à
                                                long terme.
                                            </TdData>
                                        </Tr>
                                    )}
                                    {isH413.b && (
                                        <Tr>
                                            <TdData>H413</TdData>
                                            <TdData>Peut être nocif à long terme pour les organismes aquatiques</TdData>
                                        </Tr>
                                    )}
                                    {isH226.b && (
                                        <Tr>
                                            <TdData>H266</TdData>
                                            <TdData>Liquide et vapeurs inflammables</TdData>
                                        </Tr>
                                    )}
                                    {!isH317.b && !isH412.b && !isH413.b && !isH226.b && (
                                        <UnorderedList>
                                            <ListItem>Aucun</ListItem>
                                        </UnorderedList>
                                    )}
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
                                <Tbody style={{ color: 'green' }}>
                                    {/* Only if H317 */}
                                    {isH317.b && !isH226.b && !isH412.b && !isH413.b && <MentionDangerH317 />}
                                    {/* Only if H317 and H226  */}
                                    {isH317.b && isH226.b && !isH412.b && !isH413.b && <MentionDangerH317_H226 />}
                                    {/* Only if H317 and H142 or H413  */}
                                    {isH317.b && !isH226.b && (isH412.b || isH413.b) && <MentionDangerH317_H412_413 />}
                                    {/* Only if H317 and H412 or H413 and H226  */}
                                    {isH317.b && isH226.b && (isH412.b || isH413.b) && (
                                        <MentionDangerH317_H412_413_H226 />
                                    )}
                                    {/* Only if H226  */}
                                    {!isH317.b && isH226.b && !isH412.b && !isH413.b && <MentionDangerH226 />}
                                    {/* Only if H226 and H412 or H413  */}
                                    {!isH317.b && isH226.b && (isH412.b || isH413.b) && <MentionDangerH226_H412_H413 />}
                                    {/* Only if H412 or H413  */}
                                    {!isH317.b && !isH226.b && (isH412.b || isH413.b) && <MentionDangerH412_413 />}
                                    {/* Only if everything is false  */}
                                    {!isH317.b && !isH226.b && !isH412.b && !isH413.b && <MentionDangerDefault />}
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
                                <Tbody style={{ color: 'green' }}>
                                    {isEUH208A.b || isEUH208B.b || isEUH208C.b ? (
                                        <Tr>
                                            {/* <span>Contient: </span> */}
                                            {/* <TdData>EUH208</TdData>
                                            <TdData>Peut provoquer une réaction allergique</TdData> */}
                                        </Tr>
                                    ) : (
                                        <Tr>
                                            <UnorderedList>
                                                <ListItem>Aucun</ListItem>
                                            </UnorderedList>
                                        </Tr>
                                    )}
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
                            <Table size="sm">
                                {isEUH208A.b || isEUH208B.b || isEUH208C.b ? (
                                    <>
                                        <Thead>
                                            Contient:
                                            <Tr>
                                                <ThData>Nom</ThData>
                                                <ThData>N°CAS</ThData>
                                                <ThData></ThData>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {isEUH208A.arr.length > 0 &&
                                                isEUH208A.arr.map((i, k) => {
                                                    // console.log(i);
                                                    return (
                                                        <Tr style={{ color: 'green' }} key={k}>
                                                            <TdData>{i.Molecule}</TdData>
                                                            <TdData>{i.Molecule_ID}</TdData>
                                                            <TdData>Peut produire une réaction allergique</TdData>
                                                        </Tr>
                                                    );
                                                })}
                                            {isEUH208B.arr.length > 0 &&
                                                isEUH208B.arr.map((i, k) => {
                                                    // console.log(i);
                                                    return (
                                                        <Tr style={{ color: 'green' }} key={k}>
                                                            <TdData>{i.Molecule}</TdData>
                                                            <TdData>{i.Molecule_ID}</TdData>
                                                            <TdData>Peut produire une réaction allergique</TdData>
                                                        </Tr>
                                                    );
                                                })}
                                            {isEUH208C.arr.length > 0 &&
                                                isEUH208C.arr.map((i, k) => {
                                                    // console.log(i);
                                                    return (
                                                        <Tr style={{ color: 'green' }} key={k}>
                                                            <TdData>{i.Molecule}</TdData>
                                                            <TdData>{i.Molecule_ID}</TdData>
                                                            <TdData>Peut produire une réaction allergique</TdData>
                                                        </Tr>
                                                    );
                                                })}
                                        </Tbody>
                                    </>
                                ) : (
                                    <>
                                        <Thead style={{ color: 'green' }}>
                                            <Tr></Tr>
                                        </Thead>
                                        <Tbody></Tbody>
                                    </>
                                )}
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
                                    Les substances de ce mélange ne remplissent pas les critères PBT/vPvB de REACH
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
