import { Table, Thead, Tbody, Tr, Th, Td, Heading, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData } from './FDSStyle';

const Section8 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 8: Contrôles de l’exposition/protection individuelle
                </Heading>
            </HeadingBox>

            <Table variant="unstyled" bg="#F7FAFC">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>8.1 - Paramètres de contrôle</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <Table size="sm">
                                <Thead bg="#eeeeee">
                                    <Tr>
                                        <Th colSpan={2}>glycerol (56-81-5)</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>VME mg/m3 (FR)</TdData>
                                        <TdData>10 mg/m3</TdData>
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
                        <Th colSpan={2}>8.2 - Contrôle de l'exposition</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Contrôles techniques appropriés</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Aucune information disponible</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>
                            Mesures de protection individuelle, telles que les équipements de protection individuelle
                        </Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>
                                    Lors de la manipulation de substances chimiques, porter exclusivement des gants
                                    spécial chimie pourvus d’un marquage CE, y compris du numéro de contrôle à quatre
                                    chiffres.
                                </ListItem>
                                <ListItem>Porter les gants de protection homologués</ListItem>
                                <ListItem>
                                    <Image src="/assets/picto/gloves-74x74.png" alt="gloves" width="74" height="74" />
                                    {/* <Image
                                        src="https://www.bobblemix.com/static/blender/images/gloves.png"
                                        width="114"
                                        height="112"
                                    /> */}
                                </ListItem>
                                <ListItem>Caoutchouc butyle</ListItem>
                                <ListItem>
                                    En cas de risque d’éclaboussures : Lunettes avec protections latérales
                                </ListItem>
                                <ListItem>
                                    Protection du corps appropriées : blouse de laboratoire, tout autre vêtement de
                                    travail.
                                </ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Contrôles d’exposition liés à la protection de l’environnement</Td>
                        <Td>
                            <UnorderedList>
                                <ListItem>Indications détaillées: voir notice technique.</ListItem>
                            </UnorderedList>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section8;
