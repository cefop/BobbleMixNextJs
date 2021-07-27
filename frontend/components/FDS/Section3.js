import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import React from 'react';

const Section3 = () => {
    return (
        <>
            <Heading as="h4" size="md" mt={5}>
                RUBRIQUE 3: Composition / informations sur les composants
            </Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th colSpan={2}>3.1 - Substances</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Non applicable</Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
                <Thead>
                    <Tr>
                        <Th colSpan={2}>3.2 - Mélanges</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td colSpan={2}>
                            <Table size="sm">
                                <Tbody>
                                    <Tr>
                                        <Td>xyz</Td>
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

export default Section3;
