import styled from '@emotion/styled';
import { useWindowSize } from '../hooks/useWindowSize';
import ChooseFlavor from './ChooseFlavor';
import UserBobbleMix from './userBobbleMix';

const MixerLayout = styled.div`
    /* border: 1px solid teal; */
    display: grid;
    grid-template-columns: ${(props) => (props.lowres === true ? '1fr 1fr' : '4fr 8fr')};
    grid-column-gap: 2rem;
    width: 100%;
    height: calc(100vh - 75px);
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
    margin-bottom: 0;
    margin-top: 6.9rem;
    padding-left: ${(props) => (props.lowres === true ? '5px' : '1rem')};
    padding-right: ${(props) => (props.lowres === true ? '5px' : '4rem')};
    display: grid;
    max-height: calc(100vh - 77px - 6.9rem);
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
    const { width } = useWindowSize();
    // TODO under resolutions 1133
    return (
        <MixerLayout lowres={width <= 1690}>
            <RecipePanel>
                <UserBobbleMix />
            </RecipePanel>
            <FlavorContainer lowres={width <= 1690}>
                <FlavorPanel>
                    <ChooseFlavor items={items} />
                </FlavorPanel>
            </FlavorContainer>
        </MixerLayout>
    );
};
export default ContainerMix;
