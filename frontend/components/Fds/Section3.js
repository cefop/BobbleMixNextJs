import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData } from './FDSStyle';

const Section3 = (props) => {
    const { mixRisk, sanitizeList } = props;

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
                            <Table size="sm" style={{ color: 'green' }}>
                                <Tbody>
                                    <Tr>
                                        <TdData>Nom chimique</TdData>
                                        <TdData>N°CAS</TdData>
                                        <TdData>%</TdData>
                                        <TdData>Class</TdData>
                                        <TdData>Spec.concentration</TdData>
                                    </Tr>
                                    {sanitizeList.map((i, k) => {
                                        const RiskClass = FilterFromMolID([i], mixRisk, 'Molecule_ID');
                                        return (
                                            <Tr key={k}>
                                                <TdData>{i.Molecule}</TdData>
                                                <TdData>{i.Molecule_ID}</TdData>
                                                <TdData>
                                                    {i.Molecule_ID === '56-81-5' ? (
                                                        <span>40-50%</span>
                                                    ) : (
                                                        <span>&#x2264; ${i.mod_retenuAdd.toFixed(4)}%</span>
                                                    )}
                                                </TdData>
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
                                                <TdData>Non applicable</TdData>
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
export default Section3;
