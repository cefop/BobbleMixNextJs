import styled from '@emotion/styled';
import ActionsBar from './ActionsBar';
import RecipeInfos from './RecipeInfos';
import OptionsInfo from './OptionsInfo';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatName } from '../lib/infosFromFingerprint';

const MainLayout = styled.div`
    /* border: 1px solid teal; */
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: fit-content;
    text-align: center;
    align-self: top;
    justify-self: center;
    /* background-image: url('https://res.cloudinary.com/dagmffgu0/image/upload/v1632386190/bobble_mix_assets/Fioles%20%2B%20fond/fiole_recette_mixeur_lkeyns.png');
    background-size: 38%;
    background-position: -110px 220px;
    background-repeat: no-repeat; */
    z-index: 1;
`;

const CenterContainer = styled.div`
    /* border: 1px solid red; */
`;

const RecipeTitle = styled.div`
    /* border: 1px solid darkblue; */
    padding-top: 2rem;
    padding-left: 2rem;
    text-transform: uppercase;
    text-align: left;
    font-size: 4rem;
    font-weight: 700;
`;

const RecipePanel = styled.div`
    /* border: 1px solid violet; */
    display: grid;
    align-self: top;
    justify-self: center;
    justify-items: center;
`;

const RecipeName = styled.div`
    /* border: 4px solid tan; */
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
`;

const UserRecipe = (props) => {
    const { recipe } = props;

    const { width } = useWindowSize();

    const RecipeView = styled.div`
        /* border: 4px solid green; */
        display: grid;
        grid-template-rows: 9rem auto 1fr;
        border-top-right-radius: 34px;
        border-top-left-radius: 34px;
        background: white;
        color: #1d1d1b;
        width: ${width >= 1660 ? '55%' : '88%'};
        height: calc(85.7vh - 75px);
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

    return (
        <MainLayout>
            <CenterContainer>
                <RecipeTitle>Recette</RecipeTitle>
                <RecipePanel>
                    {recipe[0] && (
                        <RecipeView>
                            <RecipeName>{formatName(recipe[0].name)}</RecipeName>
                            <ActionsBar recipe={recipe[0]} />
                            <RecipeInfos recipe={recipe[0]} />
                            <OptionsInfo fingerprint={recipe[0].fingerprint} />
                        </RecipeView>
                    )}
                </RecipePanel>
            </CenterContainer>
        </MainLayout>
    );
};

export default UserRecipe;
