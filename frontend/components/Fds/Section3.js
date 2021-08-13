import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { HeadingBox, Separate, TdData } from './FDSStyle';
import _ from 'lodash';

const Section3 = (props) => {
    const { listMol, mixRisk } = props;
    // trier par ordre decroissant la list
    listMol.sort((a, b) => (a.mod_retenu > b.mod_retenu && -1) || 1);

    // remove duplicate from molecule name
    const result = _.groupBy(listMol, 'Molecule_ID');
    const res = _.values(result).map((group) => ({ ...group[0], times: group.length }));
    const cleanedList = res.map((i, k) => {
        // find the sum of retenu when duplicate
        const times = i.mod_retenu * result[i.Molecule_ID].length;
        // add result of times into grouped listMol
        const newArr = Object.assign({ mod_retenuAdd: times }, [i][0]);
        return newArr;
    });
    console.log('THE LIST', cleanedList);

    // help to find mol risk
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
                            <Table size="sm" style={{ color: 'cyan' }}>
                                <Tbody>
                                    <Tr>
                                        <TdData>Nom chimique</TdData>
                                        <TdData>N°CAS</TdData>
                                        <TdData>%</TdData>
                                        <TdData>Class</TdData>
                                        <TdData>Spec.concentration</TdData>
                                    </Tr>
                                    {cleanedList.map((i, k) => {
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
