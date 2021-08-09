import styled from '@emotion/styled';
import { StepHeader, StepTitle } from './StyleMixeur';
import ChooseFlavor from './ChooseFlavor';
import UserRecipe from './UserRecipe';
import SaveRecipe from './SaveRecipe';
import NicoLevel from './NicoLevel';
import TipsMix from './TipsMix';

const MixerLayout = styled.div`
    display: grid;
    grid-template-columns: 4fr 7fr;
    width: 100%;
    background: white;
    color: black;
`;

const RecipePanel = styled.div`
    /* border: 5px solid red; */
    /* display: grid; */
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
    height: calc(100vh - 75px); // minus header (75px)
    overflow: auto;
    position: relative;
    ::-webkit-scrollbar {
        width: 2px;
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
                <StepTitle>Choisisez vos arômes</StepTitle>
                <UserRecipe />
                <StepTitle>Choisisez votre dosage de nicotine</StepTitle>
                <NicoLevel />
                <StepTitle>Sauvegarder votre recette</StepTitle>
                <SaveRecipe />
            </RecipePanel>
            <FlavorPanel>
                <ChooseFlavor items={items} />
            </FlavorPanel>
        </MixerLayout>
    );
};
export default ContainerMix;
