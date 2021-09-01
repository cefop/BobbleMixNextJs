import { Table, Thead, Tbody, Tr, Td, Heading } from '@chakra-ui/react';
import { format } from 'date-fns';
import _ from 'lodash';
import { hasard_mention } from '../lib/hasard_mentions';
import { HeadingBox, Separate, TdData, ThData } from './FDSStyle';

const Section14 = (props) => {
    const { sanitizeList, mixRisk } = props;
    const now = new Date();
    const recapArr = [];

    // find all risks per mol
    const FilterFromMolID = (arrOG, arrLook, objKey) => {
        const arr = arrOG.map((i, k) => {
            const filtered = arrLook.filter((mol) => mol[objKey] === i[objKey]);
            // console.log('filtered', filtered);
            const az = filtered.map((i, k) => {
                recapArr.push(i);
                return az;
            });
            return filtered;
        });
        return arr;
    };
    // FilterFromMolID(sanitizeList, mixRisk, 'Molecule_ID');

    const findlist = sanitizeList.map((i, k) => {
        const RiskClass = FilterFromMolID([i], mixRisk, 'Molecule_ID');
        return RiskClass;
    });

    recapArr.sort((a, b) => (a.Clas_ID > b.Clas_ID && 1) || -1);

    function getUniqueArray(arr, keyProps) {
        return Object.values(
            arr.reduce((uniqueMap, entry) => {
                const key = keyProps.map((k) => entry[k]).join('|');
                if (!(key in uniqueMap)) uniqueMap[key] = entry;
                return uniqueMap;
            }, {})
        );
    }
    // console.log('my arr', getUniqueArray(recapArr, ['Clas']));

    // Get the mention of a Clas_ID (lib hasard_mention)
    const fhm = (hazard) => {
        const arr = _.find(hasard_mention, { hazard });
        const zarr = [arr].map((i, k) => {
            return arr.mentions;
        });
        return zarr[0];
    };
    // console.log('yoo', fhm('H226'));

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
                                    {getUniqueArray(recapArr, ['Clas']).map((i, k) => {
                                        return (
                                            <Tr key={k}>
                                                <TdData>{i.Clas_ID && `${i.Clas_ID}`}</TdData>
                                                <TdData>{`${i.Clas} `}</TdData>
                                                <TdData>{fhm(i.Clas_ID)}</TdData>
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
