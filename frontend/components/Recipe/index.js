import styled from '@emotion/styled';
import ActionsBar from './ActionsBar';
import RecipeInfos from './RecipeInfos';
import OptionsInfo from './OptionsInfo';
import { useWindowSize } from '../hooks/useWindowSize';
import { formatName } from '../lib/infosFromFingerprint';

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: fit-content;
    text-align: center;
    align-self: top;
    justify-self: center;
    z-index: 1;
`;

const CenterContainer = styled.div``;

const RecipeTitle = styled.div`
    padding-top: 2rem;
    padding-left: 2rem;
    text-transform: uppercase;
    text-align: left;
    font-size: 4rem;
    font-weight: 700;
`;

const RecipePanel = styled.div`
    display: grid;
    align-self: top;
    justify-self: center;
    justify-items: center;
`;

const RecipeName = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    padding-left: 4rem;
    padding-right: 4rem;
`;

const UserRecipe = (props) => {
    const { recipe, user } = props;
    // console.log('is user >', user);
    // console.log('recipe >', recipe);

    const { width } = useWindowSize();

    const RecipeView = styled.div`
        display: grid;
        grid-template-rows: 9rem auto 1fr auto;
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
                    {recipe && (
                        <RecipeView>
                            <RecipeName>{formatName(recipe?.name)}</RecipeName>
                            <ActionsBar recipe={recipe} shop={user} />
                            <RecipeInfos recipe={recipe} />
                            <OptionsInfo fingerprint={recipe.fingerprint} />
                        </RecipeView>
                    )}
                </RecipePanel>
            </CenterContainer>
        </MainLayout>
    );
};

export default UserRecipe;
