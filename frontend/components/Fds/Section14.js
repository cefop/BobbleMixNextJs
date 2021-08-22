import { Table, Thead, Tbody, Tr, Td, Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section14 = (props) => {
    const { sanitizeList, mixRisk } = props;
    const now = new Date();

    // find all risks per mol
    const FilterFromMolID = (arrOG, arrLook, objKey) => {
        const arr = arrOG.map((i, k) => {
            const filtered = arrLook.filter((mol) => mol[objKey] === i[objKey]);
            return filtered;
        });
        return arr;
    };
    // FilterFromMolID(sanitizeList, mixRisk, 'Molecule_ID');

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
                                    {sanitizeList.map((i, k) => {
                                        const RiskClass = FilterFromMolID([i], mixRisk, 'Molecule_ID');
                                        return (
                                            <Tr key={k}>
                                                {/* <TdData>{i.Molecule}</TdData> */}
                                                {/* <TdData>{i.Molecule_ID}</TdData> */}
                                                {/* <TdData>&#x2264; {i.mod_retenuAdd.toFixed(4)}%</TdData> */}
                                                <TdData>
                                                    {RiskClass[0].map((i, k) => {
                                                        return (
                                                            <ul style={{ listStyle: 'none' }} key={k}>
                                                                <li>
                                                                    {`${i.Clas} `}
                                                                    {i.Clas_ID !== '(vide)' && `- ${i.Clas_ID}`}
                                                                </li>
                                                            </ul>
                                                        );
                                                    })}
                                                </TdData>
                                                {/* <TdData>Non applicable</TdData> */}
                                            </Tr>
                                        );
                                    })}
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
