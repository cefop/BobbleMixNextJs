import _ from 'lodash';
import styled from '@emotion/styled';
import ContainerLabel from './ContainerLabel';
import Back from '../Back';

const LabelStack = (props) => {
    const { recipe, aromesRatio } = props;

    // ? Find all molecules of flavors inside the mix with their retenu ratio
    const molList = recipe.molecules;
    const adjustedRetenu = molList.map((m) => {
        const finder = aromesRatio.find((v) => v.arome === m.Saveur);

        const fixPercent = `${new Intl.NumberFormat('fr-FR', {
            maximumFractionDigits: 0,
        }).format(finder.percent)}`;

        const res = Object.assign({ mod_retenu: (m.retenu * fixPercent) / 100 }, m);
        return res;
    });

    // ? sort the list in descending order
    adjustedRetenu.sort((a, b) => (a.mod_retenu > b.mod_retenu && -1) || 1);

    // ? groupBy and remove duplicate from molecule name
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

    // console.log('sanitizeList', sanitizeList);
    // console.log('Mix Risks', recipe.risks);
    // console.log('Sum of all mol retenu', recipe.molsum);

    const InnerContainer = styled.div`
        margin-top: 2rem;
        display: grid;
        grid-template-rows: auto;
        justify-content: center;
        align-content: top;
        color: #000;
        /* border: 1px solid cyan; */
    `;

    return (
        <InnerContainer>
            <Back fixed={true} />
            <ContainerLabel sanitizeList={sanitizeList} mixRisk={recipe.risks} name={recipe.name} rid={recipe.id} />
        </InnerContainer>
    );
};
export default LabelStack;
