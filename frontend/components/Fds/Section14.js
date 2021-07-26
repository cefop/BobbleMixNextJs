import { format } from 'date-fns';
import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';

const Section14 = () => {
    const now = new Date();
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 16: Autres informations
            </Heading>
            <Table variant="striped" colorScheme="gray">
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
                                        <Td>xyz</Td>
                                        <Td>xyz</Td>
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
