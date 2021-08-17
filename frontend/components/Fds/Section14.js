import { Table, Thead, Tbody, Tr, Td, Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section14 = (props) => {
    const { isH317_1A, isH317_1B, isH226, isH319 } = props;
    const now = new Date();
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 16: Autres informations
                </Heading>
            </HeadingBox>
            <Table variant="unstyled" bg="#F7FAFC">
                <Tbody>
                    <Tr>
                        <Td>Versions de la FDS</Td>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <ThData>Version</ThData>
                                        <ThData>Date d’émission</ThData>
                                        <ThData>Description des modifications</ThData>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <TdData>1</TdData>
                                        <TdData>{format(now, 'dd/MM/yyyy', {})}</TdData>
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
                        <Td>Textes des phrases réglementaires</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody style={{ color: 'cyan' }}>
                                    {(isH317_1A.arr.length > 0 || isH317_1B.b.arr.length > 0) && (
                                        <Tr>
                                            <TdData>H317</TdData>
                                            <TdData>Peut provoquer une allergie cutanée</TdData>
                                        </Tr>
                                    )}
                                    {isH226.arr.length > 0 && (
                                        <Tr>
                                            <TdData>H226 </TdData>
                                            <TdData>Liquide et vapeurs inflammables</TdData>
                                        </Tr>
                                    )}
                                    {isH319.arr.length > 0 && (
                                        <Tr>
                                            <TdData>H319</TdData>
                                            <TdData>Provoque une sévère irritation des yeux</TdData>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
};

export default Section14;
