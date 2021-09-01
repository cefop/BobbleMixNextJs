import _ from 'lodash';
import styled from '@emotion/styled';
import ContainerLabel from './ContainerLabel';

const LabelStack = (props) => {
    const { recipe, aromesRatio } = props;

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

    const LabelContainer = styled.div`
        margin-top: 2rem;
        display: grid;
        justify-content: center;
        align-content: top;
        color: black;
    `;

    const InnerContainer = styled.div`
        width: 470px;
        display: grid;
        grid-template-rows: auto auto;
        /* border: 1px solid cyan; */
    `;

    return (
        <LabelContainer>
            <InnerContainer>
                <ContainerLabel sanitizeList={sanitizeList} mixRisk={recipe.risks} name={recipe.name} rid={recipe.id} />
            </InnerContainer>
        </LabelContainer>
    );
};
export default LabelStack;
