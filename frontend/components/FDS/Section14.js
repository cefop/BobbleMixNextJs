import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import React from 'react';

const Section14 = () => {
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
                                        <Td>00/00/0000</Td>
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
