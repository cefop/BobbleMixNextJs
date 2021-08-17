import { format } from 'date-fns';
import _ from 'lodash';
import { Heading, Center, Container, Table, Thead, Tr, Th } from '@chakra-ui/react';
import ContainerSection from './ContainerSection';

const FDSStack = (props) => {
    const { recipe, aromesRatio } = props;
    const now = new Date();
    const company = {
        name: 'CEFOP',
        address: '8 avenue du bouton d’or 94370 SUCY-EN-BRIE France',
        tel: '0184690030',
        web: 'www.bobbleliquide.com',
        emergencytel: '+33 (0)1 45 42 59 59',
    };

    // Find all molecules of flavors inside the mix with their retenu ratio
    const molList = recipe.molecules;
    const adjustedRetenu = molList.map((m) => {
        const finder = aromesRatio.find((v) => v.arome === m.Saveur);
        const res = Object.assign({ mod_retenu: (m.retenu * finder.percent) / 100 }, m);
        return res;
    });
    // sort the list in descending order
    adjustedRetenu.sort((a, b) => (a.mod_retenu > b.mod_retenu && -1) || 1);
    // remove duplicate from molecule name
    const result = _.groupBy(adjustedRetenu, 'Molecule_ID');
    const res = _.values(result).map((group) => ({ ...group[0], times: group.length }));
    const sanitizeList = res.map((i, k) => {
        // find the sum of retenu when any duplicate
        let newArr = [];
        if (result[i.Molecule_ID].length > 1) {
            // If more that 1 duplacate iterate and sum all mod_retenu together
            const sumValues = result[i.Molecule_ID].reduce((a, b) => a.mod_retenu + b.mod_retenu);
            // reforme the array
            newArr = Object.assign({ mod_retenuAdd: sumValues }, [i][0]);
        } else {
            // nothing special.. keep old values
            newArr = Object.assign({ mod_retenuAdd: i.mod_retenu }, [i][0]);
        }
        return newArr;
    });
    console.log('sanitizeList', sanitizeList);
    console.log('Mix Risks', recipe.risks);
    // console.log('Sum of all mol retenu', recipe.molsum);

    return (
        <Container maxW={'7xl'} p="5" mt="15" backgroundColor="white" color="black">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>
                            Fiche de données de sécurité
                            <br />
                            Conforme Règlement (CE) n° 2015/830
                        </Th>
                        <Th textAlign="left">
                            Version: 1<br />
                            Date d'émission : {format(now, 'dd.MM.yyyy', {})}
                        </Th>
                    </Tr>
                </Thead>
            </Table>

            <Center>
                <Heading as="h2" mb={8} mt={5}>
                    {recipe.name}
                </Heading>
            </Center>
            <ContainerSection sanitizeList={sanitizeList} mixRisk={recipe.risks} company={company} name={recipe.name} />
        </Container>
    );
};
export default FDSStack;
