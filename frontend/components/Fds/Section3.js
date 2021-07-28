import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData } from './FDSStyle';

const Section3 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 3: Composition / informations sur les composants
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#f7fafc">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>3.1 - Substances</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td>Non applicable</Td>
                        <Td></Td>
                    </Tr>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>3.2 - Mélanges</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Separate>
                        <td colSpan="2"></td>
                    </Separate>
                    <Tr>
                        <Td colSpan={2}>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <TdData>Nom chimique</TdData>
                                        <TdData>No</TdData>
                                        <TdData>%</TdData>
                                        <TdData>Class</TdData>
                                        <TdData>Spec.concentration</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>glycerol</TdData>
                                        <TdData>
                                            N°CAS: 56-81-5
                                            <br />
                                            Numéro d'identification UE: <br />
                                            N°CE: 200-2895
                                        </TdData>
                                        <TdData>40 - 50</TdData>
                                        <TdData>Not Classified -</TdData>
                                        <TdData>Non applicable</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>4-hydroxy-2,5-dimethylfuran-2(3H)-one</TdData>
                                        <TdData>
                                            N°CAS: 3658-77-3
                                            <br />
                                            Numéro d'identification UE: <br />
                                            N°CE: 222-908-8
                                        </TdData>
                                        <TdData>&#60;1.1</TdData>
                                        <TdData>
                                            Eye Irri. 2 H319 <br />
                                            Skin Sens.1A H317
                                        </TdData>
                                        <TdData>Non applicable</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>para-mentha-8-thiolone</TdData>
                                        <TdData>
                                            N°CAS: 38462-22-5
                                            <br />
                                            Numéro d'identification UE: <br />
                                            N°CE: 253-953-1
                                        </TdData>
                                        <TdData>&#60;1</TdData>
                                        <TdData>Skin Sens.1 H317</TdData>
                                        <TdData>Non applicable</TdData>
                                    </Tr>
                                    <Tr>
                                        <TdData>Linalool</TdData>
                                        <TdData>
                                            N°CAS: 78-70-6
                                            <br />
                                            Numéro d'identification UE: <br />
                                            N°CE: 201-134-4
                                        </TdData>
                                        <TdData>&#60;1</TdData>
                                        <TdData>
                                            Skin Sens.1 H317 <br />
                                            Eye Irrit. 2 H319 <br />
                                            Eye Irrit.2 H315
                                        </TdData>
                                        <TdData>Non applicable</TdData>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section3;
