import _ from 'lodash';
import styled from '@emotion/styled';
import Image from 'next/image';
import { usePalette } from 'react-palette';
import { hex2rgb } from '../lib/HexToRbg';

const RecipeInfosContainer = styled.div`
    /* border: 4px solid navy; */
    text-align: left;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 1.5rem;
    h5 {
        color: #1d1d1b;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`;

const AromasList = styled.div`
    /* border: 1px solid forestgreen; */
    padding-bottom: 3rem;
`;

const AromasGrid = styled.div`
    /* border: 1px solid fuchsia; */
    padding-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

const ItemsList = styled.div`
    display: grid;
    text-align: center;
    align-self: top;
    justify-self: center;
    justify-items: center;
    h6 {
        padding-bottom: 1rem;
        font-size: 0.95rem;
        font-weight: 700;
    }
    h5 {
        padding-top: 1.56rem;
        padding-bottom: 1rem;
        font-size: 0.95rem;
        font-weight: 300;
        span {
            text-transform: lowercase;
        }
    }
`;
const ProBar = styled.div`
    .progress-div {
        /* background-color: rgb(233, 233, 233); */
        border-radius: 0.4rem;
    }
    .progress {
        height: 10px;
        transition: 2s ease;
        transition-delay: 0.9s;
        border-radius: 0.4rem;
        margin: 0;
    }
`;

const RecipeInfos = (props) => {
    const { recipe } = props;
    const massEliquide = 1.15; // (aver. PG/VG mass in grammes per milliliter)
    // ? sort the list in descending order
    const orderByRecipe = _.orderBy(recipe.aromes, 'ml', 'desc');

    return (
        <RecipeInfosContainer>
            <AromasList>
                <h5>arômes :</h5>
                <AromasGrid>
                    {orderByRecipe.map((i, k) => {
                        // console.log('infos: ', i);
                        const { data, loading, error } = usePalette(i.image);
                        const bb = data && hex2rgb(String(data.lightVibrant));
                        // darkMuted: "#2a324b" darkVibrant: "#0e7a4b"  lightMuted: "#9cceb7" lightVibrant: "#a4d4bc" muted: "#64aa8a" vibrant: "#b4d43c"
                        return (
                            <ItemsList key={k}>
                                <h6 style={{ color: data.darkVibrant }}>{i.name}</h6>
                                <Image
                                    src={i.image}
                                    alt={i.name}
                                    layout="fixed"
                                    quality={100}
                                    width={65}
                                    height={65}
                                    className="bbm_image"
                                />
                                <h5>
                                    <b>{i.ml}ML -</b> {(i.ml * massEliquide).toFixed(1)}
                                    <span>gr</span>
                                </h5>

                                <ProBar
                                    className="progress-div"
                                    style={{
                                        width: '100px',
                                        // border: `1px solid ${data.lightMuted}`,
                                        borderRadius: '0.4rem',
                                        backgroundColor: '#E5E5E5',
                                    }}
                                >
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${i.percent}%`,
                                            backgroundColor: `${data.darkVibrant}`,
                                            // background: `rgb(${bb})`,
                                            // background: `linear-gradient(90deg, rgba(${bb}, 1) 0%, rgba(${bb}, 0.6264880952380952) 52%, rgba(${bb}, 0.4332107843137255) 100%
                                            // )`,
                                        }}
                                    />
                                </ProBar>
                            </ItemsList>
                        );
                    })}
                </AromasGrid>
            </AromasList>
        </RecipeInfosContainer>
    );
};

export default RecipeInfos;
