import _ from 'lodash';
import { Container } from '@chakra-ui/react';
import ContainerSection from './ContainerSection';

const FDSStack = (props) => {
    const { recipe, aromesRatio } = props;
    const company = {
        name: 'CEFOP',
        address: '8 avenue du bouton d’or 94370 SUCY-EN-BRIE France',
        tel: '0184690030',
        web: 'www.bobbleliquide.com',
        email: 'contact@bobbleliquide.com',
        emergencytel: '+33 (0)1 45 42 59 59',
    };

    // Find all molecules of flavors inside the mix with their retenu ratio
    const molList = recipe.molecules;
    const adjustedRetenu = molList.map((m) => {
        const finder = aromesRatio.find((v) => v.arome === m.Saveur);
        // console.log('finder', finder);

        //TODO check if that's ok without decimals
        // https://code-boxx.com/javascript-round-up-down-decimal-places/
        const fixPercent = `${new Intl.NumberFormat('fr-FR', {
            maximumFractionDigits: 0,
        }).format(finder.percent)}`;

        const res = Object.assign({ mod_retenu: (m.retenu * fixPercent) / 100 }, m); // remove finder.percent
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
            // console.log('result', result);
            // get the sum of mod_retenu
            const sum_mod_retenu = _(result[i.Molecule_ID])
                .groupBy('Molecule')
                .map((i, k) => _.sumBy(i, 'mod_retenu'))
                .value();

            newArr = Object.assign({ mod_retenuAdd: sum_mod_retenu[0] }, [i][0]);
            // console.log('new arr mod', newArr);
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
        <Container maxW={'8xl'} p="5" mt="15" backgroundColor="white" color="black">
            <ContainerSection sanitizeList={sanitizeList} mixRisk={recipe.risks} company={company} name={recipe.name} />
        </Container>
    );
};
export default FDSStack;
