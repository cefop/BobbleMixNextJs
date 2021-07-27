import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import { HeadingBox } from './FDSStyle';

const Section14 = () => {
    const now = new Date();
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 16: Autres informations
                </Heading>
            </HeadingBox>
            <Table variant="striped" bg="#F7FAFC">
                <Tbody>
                    <Tr>
                        <Td>Versions de la FDS</Td>
                        <Td>
                            <Table size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Version</Th>
                                        <Th>Date d’émission</Th>
                                        <Th>Description des modifications</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>1</Td>
                                        <Td>{format(now, 'dd/mm/yyyy', {})}</Td>
                                        <Td></Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Textes des phrases réglementaires</Td>
                        <Td>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td></Td>
                                        <Td></Td>
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
