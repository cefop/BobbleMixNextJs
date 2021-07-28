import { Table, Thead, Tbody, Tr, Td, Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section14 = () => {
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
                                        <TdData>{format(now, 'dd/mm/yyyy', {})}</TdData>
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
                                <Tbody>
                                    <Tr>
                                        <TdData>&nbsp;</TdData>
                                        <TdData></TdData>
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

export default Section14;
