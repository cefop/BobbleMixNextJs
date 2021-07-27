import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox } from './FDSStyle';

const Section3 = () => {
    return (
        <>
            <HeadingBox>
                <Heading as="h4" size="md">
                    RUBRIQUE 3: Composition / informations sur les composants
                </Heading>
            </HeadingBox>

            <Table variant="striped" bg="#F7FAFC">
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
                                        <Td></Td>
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

export default Section3;
