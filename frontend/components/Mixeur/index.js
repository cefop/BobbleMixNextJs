import styled from '@emotion/styled';
import ChooseFlavor from './ChooseFlavor';
import UserBobbleMix from './userBobbleMix';

// import { StepHeader, StepTitle } from './StyleMixeur';
// import UserRecipe from './UserRecipe';
// import UserLevel from './UserLevel';
// import NicoLevel from './NicoLevel';
// import SaveRecipe from './SaveRecipe';
// import TipsMix from './TipsMix';

const MixerLayout = styled.div`
    /* border: 1px solid teal; */
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-column-gap: 2rem;
    width: 100%;
    background-image: url('https://res.cloudinary.com/dagmffgu0/image/upload/v1632386190/bobble_mix_assets/Fioles%20%2B%20fond/fiole_recette_mixeur_lkeyns.png');
    background-size: 38%;
    background-position: 96px 350px;
    background-repeat: no-repeat;
    z-index: 1;
`;

const RecipePanel = styled.div`
    /* border: 1px solid red; */
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
`;

const FlavorContainer = styled.div`
    /* border: 1px solid greenyellow; */
    margin: 1rem;
    margin-bottom: 0;
    margin-top: 6.9rem;
    padding-left: 1rem;
    padding-right: 4rem;
    display: grid;
    height: calc(87.4vh - 75px); // minus header (75px) and all margins bottom
`;

const FlavorPanel = styled.div`
    /* border: 1px solid red; */
    padding: 3rem;
    border-top-right-radius: 34px;
    border-top-left-radius: 34px;
    background-color: white;
    display: grid;
    overflow: auto;
    position: relative;
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    ::-webkit-scrollbar-track-piece {
    }
`;

const ContainerMix = (props) => {
    const { items } = props;
    // console.log('USER MIXEUR PROPS: ', items);
    return (
        <MixerLayout>
            <RecipePanel>
                <UserBobbleMix />
            </RecipePanel>
            <FlavorContainer>
                <FlavorPanel>
                    <ChooseFlavor items={items} />
                </FlavorPanel>
            </FlavorContainer>
        </MixerLayout>
    );
};
export default ContainerMix;
