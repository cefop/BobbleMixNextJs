import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData } from './FDSStyle';
import _ from 'lodash';

const Section3 = (props) => {
    const { listMol, mixRisk } = props;
    // sort the list in descending order
    listMol.sort((a, b) => (a.mod_retenu > b.mod_retenu && -1) || 1);

    // remove duplicate from molecule name
    const result = _.groupBy(listMol, 'Molecule_ID');
    const res = _.values(result).map((group) => ({ ...group[0], times: group.length }));
    const sanitizeList = res.map((i, k) => {
        // find the sum of retenu when any duplicate
        let newArr = [];
        if (result[i.Molecule_ID].length > 1) {
            // If more that 1 duplacate iterate and sum all mod_retenu together
            const sumValues = result[i.Molecule_ID].reduce((a, b) => a.mod_retenu + b.mod_retenu);
            // reforme the array
            newArr = Object.assign({ mod_retenuAdd: sumValues.toFixed(4) }, [i][0]);
        } else {
            // nothing special.. keep old values
            newArr = Object.assign({ mod_retenuAdd: i.mod_retenu.toFixed(4) }, [i][0]);
        }
        return newArr;
    });

    // helper to find mol risks
    const FilterFromMolID = (arrOG, arrLook, objKey) => {
        const arr = arrOG.map((i, k) => {
            const filtered = arrLook.filter((mol) => mol[objKey] === i[objKey]);
            return filtered;
        });
        return arr;
    };
    // FilterFromMolID(listMol, mixRisk, 'Molecule_ID');

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
                                            <Tr>
                                                <TdData>{i.Molecule}</TdData>
                                                <TdData>{i.Molecule_ID}</TdData>
                                                <TdData>&#x2264; {i.mod_retenuAdd}%</TdData>
                                                <TdData>
                                                    {RiskClass[0].map((i) => {
                                                        return (
                                                            <ul style={{ listStyle: 'none' }}>
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
