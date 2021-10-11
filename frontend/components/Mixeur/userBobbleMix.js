import { useContext, useState, useEffect } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import {
    IconButton,
    Box,
    Tooltip,
    InputGroup,
    NumberInput,
    NumberInputField,
    InputRightAddon,
    Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaUndo, FaCheck } from 'react-icons/fa';
import { CloseIcon } from '@chakra-ui/icons';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';
import getObjectByValue from '../lib/ObjectByValue';
import UserSaveRecipe from './UserSaveRecipe';
import { ContextRecipeName } from '../lib/RecipeNames';

const MixerHeader = styled.div`
    /* border: 1px solid cyan; */
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: right;
    h3 {
        /* border: 1px solid darkcyan; */
        text-transform: uppercase;
        font-size: 3.75rem;
        font-weight: 800;
        line-height: 1.2;
    }
`;

const MixerTitle = styled.div`
    /* border: 1px solid rebeccapurple; */
    text-align: right;
    span {
        overflow: hidden;
        font-size: 1.375rem;
        font-weight: 700;
        font-style: italic;
    }
    span:before {
        background-color: orange;
        content: '';
        display: inline-block;
        height: 3px;
        position: relative;
        vertical-align: middle;
        width: 60%;
    }
    span:before {
        right: 1rem;
        margin-left: -50%;
    }
`;

const ErrorInfo = styled.div`
    /* border: 1px solid red; */
    display: grid;
    justify-content: right;
    align-content: top;
    padding-right: 3.2rem;
    color: orange;
`;

const AromeList = styled.div`
    /* border: 1px solid lawngreen; */
    margin-top: 3.75rem;
    display: grid;
    grid-template-columns: repeat(5, 96px);
    grid-template-rows: auto auto;
    grid-column-gap: 10px;
    justify-content: right;
    align-content: top;
`;

const SelectedAroma = styled.div`
    /* border: 1px solid bisque; */
    display: grid;
    grid-template-rows: 70px 1fr auto;
    text-align: center;
    align-self: top;
    justify-self: center;
    justify-items: center;
    img.bbm_image {
    }
    h5 {
        /* border: 1px solid darkgray; */
        padding-top: 0.5rem;
        text-transform: uppercase;
        font-size: 0.8375rem;
        font-weight: 600;
    }
`;

const UserMixInfo = styled.div`
    /* border: 1px solid fuchsia; */
    grid-column-start: 1;
    grid-column-end: span col3-start;
    align-content: top;
`;

const MlChecker = styled.div`
    /* border: 1px solid burlywood; */
    margin-top: 1rem;
    font-size: 1.125rem;
    color: orange;
    span {
        color: white;
    }
`;

const MlError = styled.div`
    /* border: 1px solid forestgreen; */
`;

const TipsError = styled.div`
    /* border: 1px solid hotpink; */
    height: 6em;
    padding-top: 0.7rem;
    padding-left: 0rem;
    ul {
        list-style: none;
    }
    p.recipe_name {
        max-width: fit-content;
        font-size: 0.75rem;
        font-weight: 500;
    }
    p.recipe_error {
        font-size: 1.1rem;
        font-weight: 600;
    }
`;

const UserBobbleMix = () => {
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const { nicoMix, setNicoMix } = useContext(NicoContext);
    const results = bobbleMix; //! do not sort the array here // const results = CustomReduceFilter(bobbleMix);
    const [inputData, setInputData] = useState([]);
    const [sumAllJuices, setSumAllJuices] = useState(0);
    const maxVol = 40;
    const MaxMix = 5;

    const nextHandleChange = async (e) => {
        // console.log("i'm next handle change", e.keyCode);
        // ? don't allow negative value
        if (e.key === '+' || e.keyCode === 190 || e.key === ',' || e.key === '-') return (e.target.value = null);
        // ? remove leading 0
        e.target.value !== null && e.target.value.replace(/^0+/, '');
        // ? remove space
        e.target.value !== null && +e.target.value;

        const juice = await e.target.id;
        // ? store: ID, name, volume the user enter on user inputs
        setInputData((cs) => [
            ...cs,
            {
                id: Number(juice.split('_')[0]),
                name: juice.split('_')[1],
                volume: Number(e.target.value),
                percent: Number((e.target.value * 100) / maxVol),
            },
        ]);
        // console.log('on key UP', inputData);
    };

    useEffect(() => {
        // ? group by id and take only the last volume entree
        const { flow, partialRight: pr, keyBy, values } = _;
        const lastUniqBy = (iteratee) => flow(pr(keyBy, iteratee), values);
        const result = lastUniqBy('id')(inputData);

        // ? add bool to context if all input are valide or not
        // ? is input respect max value ?
        const inputCheck = !!result.find((x) => x.volume >= 40);
        const inputCheck2 = !!result.find((x) => x.volume === 0);
        // console.log('input', inputCheck, 'so we have to ', !inputCheck);
        // ? is the sum of the volume is eq to 40ml ?
        const sum = result.length !== 0 && result.map((x) => x.volume).reduce((acc, item) => acc + item, 0);
        const sumCheck = !!(sum === 40);
        const isValide = !inputCheck && !inputCheck2 && sumCheck;
        // console.log('sum of all juices: ', sumCheck);
        // ? add result to context
        setNicoMix([result, isValide]);

        // ? update state for sum of bobblemix volume
        setSumAllJuices(sum);
    }, [inputData, bobbleMix, sumAllJuices]); //!

    // ? be able to save the recipe only if inpute of recipe are valide
    const recipeIsValide = nicoMix.length !== 0 && nicoMix[1];

    // ? build the recipe name with x in 'm' militer or 'p' percent
    // console.log('exported name before save : ', ContextRecipeName(nicoMix, 'n'));

    const Reset = async () => {
        await setBobbleMix([]);
        await setNicoMix([]);
        setInputData([]);
    };

    // ? need it to clean also after a mutation from saving a recipe
    useEffect(() => {
        if (bobbleMix.length === 0) {
            setInputData([]);
        }
    }, [bobbleMix]);

    return (
        <>
            <MixerHeader>
                <h3>votre recette</h3>
            </MixerHeader>

            <MixerTitle>
                <span>Choisissez vos arômes</span>
                <Tooltip label="recommencer votre recette" bg="red" color="withe">
                    <IconButton
                        style={{ paddingLeft: '1.7rem', paddingBottom: '4px' }}
                        variant="ghost"
                        fontSize="1.3rem"
                        isDisabled={bobbleMix.length < 2}
                        onClick={() => Reset()}
                        icon={<FaUndo />}
                    />
                </Tooltip>
            </MixerTitle>

            <ErrorInfo>
                {bobbleMix.length < 5 ? (
                    <span>{`Encore ${MaxMix - bobbleMix.length} arôme${bobbleMix.length <= 3 ? 's' : ''} possible${
                        bobbleMix.length <= 3 ? 's' : ''
                    } !`}</span>
                ) : (
                    <span>Vous avez atteint le maximum d'arômes.</span>
                )}
            </ErrorInfo>

            <AromeList>
                {results.length >= 1 &&
                    results.map((i, k) => {
                        return (
                            <SelectedAroma key={k}>
                                <Image
                                    src={getObjectByValue(bobbleMix, 'id', i.id)[0].image}
                                    alt={getObjectByValue(bobbleMix, 'id', i.id)[0].name}
                                    layout="fixed"
                                    quality={100}
                                    width={65}
                                    height={65}
                                    className="bbm_image"
                                />
                                <h5>{getObjectByValue(bobbleMix, 'id', i.id)[0].name}</h5>
                                <Box mt="0.75rem">
                                    <InputGroup size="sm">
                                        <NumberInput
                                            defaultValue={0}
                                            precision={0}
                                            step={1}
                                            allowMouseWheel
                                            min={1}
                                            max={maxVol - 1}
                                            keepWithinRange={true}
                                            clampValueOnBlur={false}
                                            onKeyUp={nextHandleChange}
                                            errorBorderColor="none"
                                            // onError={console.log('error')}
                                            style={{
                                                boxShadow: 'none',
                                                display: 'grid',
                                                gridTemplateColumns: '2fr 1fr',
                                            }}
                                        >
                                            <NumberInputField
                                                id={`${i.id}_${getObjectByValue(bobbleMix, 'id', i.id)[0].name}`}
                                                name={`juice${k}`}
                                                color={!!recipeIsValide ? '#000' : 'darkgray'}
                                                bg={'#FFF'}
                                                style={{
                                                    boxShadow: 'none',
                                                    borderTopLeftRadius: '8px',
                                                    borderBottomLeftRadius: '8px',
                                                    borderRight: 'none',
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 0,
                                                }}
                                            />
                                            <InputRightAddon
                                                pointerEvents="none"
                                                children="ML"
                                                color={!!recipeIsValide ? '#000' : 'darkgray'}
                                                bg={'#FFF'}
                                                style={{
                                                    boxShadow: 'none',
                                                    borderTopRightRadius: '8px',
                                                    borderBottomRightRadius: '8px',
                                                }}
                                            />
                                        </NumberInput>
                                    </InputGroup>
                                </Box>
                            </SelectedAroma>
                        );
                    })}

                {bobbleMix.length > 1 && (
                    <UserMixInfo>
                        <MlChecker>
                            Il vous reste{' '}
                            {sumAllJuices < 40 ? <span>{maxVol - sumAllJuices}ML</span> : <span>0ML</span>} à répartir
                            {recipeIsValide ? `, recette complète ! ` : '.'}
                            {recipeIsValide && <Icon rotate={90} style={{}} color="green" as={FaCheck} />}
                        </MlChecker>
                        <MlError>
                            <TipsError>
                                {nicoMix.length > 1 && bobbleMix.length !== nicoMix[0].length && (
                                    <p className="recipe_error">
                                        <CloseIcon color="red" w={3} h={3} />
                                        &nbsp; Il y a {bobbleMix.length - nicoMix[0].length} arôme
                                        {bobbleMix.length - nicoMix[0].length > 1 && 's'} sans volume !
                                    </p>
                                )}
                                {nicoMix.length > 1 && !!nicoMix[0].find((x) => x.volume === 0) && (
                                    <p className="recipe_error">
                                        <CloseIcon color="red" w={3} h={3} />
                                        &nbsp; Il y a un ou plusieurs aromes avec 0ML !
                                    </p>
                                )}
                                {nicoMix.length > 1 &&
                                    nicoMix[0].length !== 0 &&
                                    nicoMix[0].map((x) => x.volume).reduce((acc, item) => acc + item, 0) > 40 && (
                                        <p className="recipe_error">
                                            <CloseIcon color="red" w={3} h={3} />
                                            &nbsp; Vous avez dépassé la quantité maximale de {sumAllJuices - maxVol}ML
                                        </p>
                                    )}
                                {recipeIsValide && <p className="recipe_name">{ContextRecipeName(nicoMix, 'n')}</p>}
                                {/* // ! EasterEggs */}
                                {/* {ContextRecipeName(nicoMix, 'n')=== '6-Banane / 9-Pêche-Blanche' && 'okay!!'} */}
                            </TipsError>
                        </MlError>
                        <UserSaveRecipe />
                    </UserMixInfo>
                )}
            </AromeList>
        </>
    );
};
export default UserBobbleMix;
