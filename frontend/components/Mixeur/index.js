import styled from '@emotion/styled';
import { StepHeader, StepTitle } from './StyleMixeur';
import ChooseFlavor from './ChooseFlavor';
import UserRecipe from './UserRecipe';
import SaveRecipe from './SaveRecipe';
import NicoLevel from './NicoLevel';
import TipsMix from './TipsMix';

const MixerLayout = styled.div`
    background: white;
    color: black;
    margin-top: 4px;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 4fr 7fr;
`;

const RecipePanel = styled.div`
    /* display: grid; */
    width: 100%;
    height: calc(100% - 85px);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 1px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #ed9500;
    }
`;

const FlavorPanel = styled.div`
    display: grid;
    width: 100%;
    overflow: auto;
    height: calc(100% - 85px);
    position: relative;
    ::-webkit-scrollbar {
        width: 1px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #ed9500;
    }
`;

const ContainerMix = (props) => {
    const { items } = props;
    // console.log('USER MIXEUR PROPS: ', items);
    return (
        <MixerLayout>
            <RecipePanel>
                <StepHeader>votre recette bobblemix</StepHeader>
                <TipsMix />
                <StepTitle>#1: Choisisez vos arômes</StepTitle>
                <UserRecipe />
                <StepTitle>#2: Choisisez votre dosage de nicotine</StepTitle>
                <NicoLevel />
                <StepTitle>#3: Sauvegarder votre recette</StepTitle>
                <SaveRecipe />
            </RecipePanel>
            <FlavorPanel>
                <ChooseFlavor items={items} />
            </FlavorPanel>
        </MixerLayout>
    );
};
export default ContainerMix;
