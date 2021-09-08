import { useEffect, useState, useRef, forwardRef } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { add, format } from 'date-fns';
import { Button, Image, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { FaRegFilePdf } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';
import GotMol from './GotMol';

const LabelContainer = styled.div`
    padding: 0 10px;
    margin: 0;
    /* height: 234.4px; */
    /* width: 340px; */
    color: #000;
    border: 1px dashed lightgray;
    /* text-align: center; */
`;

const RecipeName = styled.div`
    padding-bottom: 8px;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
`;

// component to print
const ComponentToPrint = forwardRef((props, ref) => {
    const { mixRisk, sanitizeList, name, rid } = props;
    const now = new Date();
    const nowadd6month = add(new Date(), {
        months: 6,
    });

    const company = {
        name: 'CEFOP',
        address: '8 avenue du bouton d’or 94370 SUCY-EN-BRIE',
        tel: '0184690030',
        web: 'www.bobbleliquide.com',
        emergencytel: '+33 (0)1 45 42 59 59',
    };

    const { session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;

    const [isH317, setIsH317] = useState({ arr: [], sum: null, b: false });
    const [isH317_1, setIsH317_1] = useState({ arr: '', sum: null, b: false });
    const [isH317_1A, setIsH317_1A] = useState({ arr: '', sum: null, b: false });
    const [isH317_1B, setIsH317_1B] = useState({ arr: '', sum: null, b: false });
    const [isH410, setIsH410] = useState({ arr: '', sum: null, b: false });
    const [isH411, setIsH411] = useState({ arr: '', sum: null, b: false });
    const [isH412, setIsH412] = useState({ arr: '', sum: null, sum2: null, b: false });
    const [isH413, setIsH413] = useState({ arr: '', sum: null, b: false });
    const [isH226, setIsH226] = useState({ arr: '', sum: null, b: false });
    const [isH319, setIsH319] = useState({ arr: '', sum: null, b: false });
    const [isEUH208A, setIsEUH208A] = useState({ arr: '', sum: null, b: false });
    const [isEUH208B, setIsEUH208B] = useState({ arr: '', sum: null, b: false });
    const [isEUH208C, setIsEUH208C] = useState({ arr: '', sum: null, b: false });

    // function to filter by risks the mol of the recipe
    const FilterByMolRisk = (risk) => {
        let newArr = [];
        //  Filter specifique risks
        const fsr = _.filter(mixRisk, function (i, k) {
            return i.Clas_ID === risk;
        });
        //  add the molecule mod_retenuAdd
        fsr.map((i, k) => {
            const mm = _.filter(sanitizeList, { Molecule_ID: i.Molecule_ID });
            newArr = [mm[0], ...newArr];
            return mm;
        });
        return newArr;
    };

    // function that return the data when ready for futur use
    const findRisk = async (risk) => {
        // console.log(`get the risks ${risk}`);
        const [allmol, sum] = await Promise.all([
            // get the risks
            FilterByMolRisk(risk),
            // sorting them
            FilterByMolRisk(risk).reduce((acc, curr) => acc + curr.mod_retenuAdd, 0),
        ]);
        return { allmol, sum };
    };

    // ! FIND ALL RISKS OF MOLECULES MUST BE SYNC WITH CONTAINERSECTION OF FDS FOLDER

    useEffect(() => {
        findRisk('H317-1A').then(
            (result) => {
                setIsH317_1A({
                    arr: result.allmol,
                    b: result.sum >= 0.1,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H317-1').then(
            (result) => {
                setIsH317_1({
                    arr: result.allmol,
                    b: result.sum >= 1,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H317-1B').then(
            (result) => {
                setIsH317_1B({
                    arr: result.allmol,
                    b: result.sum >= 1,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H410').then(
            (result) => {
                setIsH410({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H411').then(
            (result) => {
                setIsH411({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H412').then(
            (result) => {
                setIsH412({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                    sum2: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H413').then(
            (result) => {
                setIsH413({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H226').then(
            (result) => {
                setIsH226({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );

        findRisk('H319').then(
            (result) => {
                setIsH319({
                    arr: result.allmol,
                    b: false,
                    sum: result.sum,
                });
            },
            (error) => {
                console.log({ error });
            }
        );
    }, []);

    // ! ALL FINAL CHECK IF GROUPS GOT HAZARDS MUST BE SYNC WITH CONTAINERSECTION OF FDS FOLDER

    useEffect(() => {
        isH317_1A.sum >= 0.01 &&
            setIsEUH208A({
                arr: isH317_1A.arr,
                b: true,
                sum: isH317_1A,
            });
    }, [isH317_1A]);

    useEffect(() => {
        isH317_1B.b >= 0.1 &&
            setIsEUH208B({
                arr: isH317_1B.arr,
                b: true,
                sum: isH317_1B,
            });
    }, [isH317_1B]);

    useEffect(() => {
        isH317_1.b >= 0.1 &&
            setIsEUH208C({
                arr: isH317_1.arr,
                b: true,
                sum: isH317_1,
            });
    }, [isH317_1]);

    // * final check for is H317
    useEffect(() => {
        //  condion H317 si une molecule H317_1A a une retenu sup a 0.1%  (0.001)
        const mergedArr = [...new Set([isH317_1A.arr, isH317_1.arr].flat())];
        const h3171A = mergedArr.map((i, k) => (i.mod_retenuAdd > 0.1 ? true : false)).includes(true);
        //  condion H317 si une molecule H317_1B et H317_1 a une retenu sup a 1% (0.01)
        // H317_1B and H317_1 have same condition so merged the arr
        const mergedArrs = [...new Set([isH317_1B.arr, isH317_1.arr].flat())];
        const h317_1B_h317_1 = mergedArrs.map((i, k) => (i.mod_retenuAdd > 1 ? true : false)).includes(true);

        // console.log('ARR H317 1A', isH317_1A.arr);
        // console.log('ARR H317 1B et 1', mergedArrs);
        // console.log('h317 1A', h3171A);
        // console.log('h317 1B or 1', h317_1B_h317_1);

        h3171A === true || h317_1B_h317_1 === true
            ? setIsH317({
                  arr: null,
                  b: true,
                  sum: null,
              })
            : setIsH317({
                  arr: null,
                  b: false,
                  sum: null,
              });
        // (isH317_1A.b === true || isH317_1B.b === true || isH317_1.b === true) &&
        //     setIsH317({
        //         arr: null,
        //         b: true,
        //         sum: null,
        //     });
    }, [isH317_1A, isH317_1B, isH317_1]);

    //  * final check for is H412
    useEffect(async () => {
        const res = (await isH410.sum) * 100 + (await isH411.sum) * 10 + (await isH412.sum);
        // console.log(` SUM H412: ${await isH410.sum}*100 + ${await isH411.sum}*10 + ${await isH412.sum}`);
        setIsH412({ ...isH412, arr: isH412.arr, b: (await res) >= 25, sum: await res });
    }, [isH411, isH410]);

    // * final check for is H413
    useEffect(async () => {
        if (isH412.b === false) {
            // const sumh411 = (await isH410.sum) * 10 + (await isH411.sum);
            const res = (await isH410.sum) + (await isH411.sum) + (await isH412.sum2) + (await isH413.sum);
            // console.log(
            //     ` SUM H413: ${await isH410.sum} + ${await isH411.sum} + ${await isH412.sum2} + ${await isH413.sum}`
            // );
            setIsH413({
                arr: isH413.arr,
                b: (await res) >= 25,
                sum: await res,
            });
        }
    }, [isH412.sum]);

    // console.log('H317 1B', isH317_1B);
    // console.log('H317 1A', isH317_1A);
    // console.log('EUH208', isEUH208A, isEUH208B, isEUH208C);

    return (
        <LabelContainer ref={ref}>
            <Center>
                <Image
                    src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630931038/BobbleMix_Logos/logo_header_h75px_qnfipg.png"
                    alt="booble mix"
                    w="124px"
                    pt="8px"
                    pb="16px"
                />
            </Center>
            <Center>
                <RecipeName> {name}</RecipeName>
            </Center>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ color: 'black' }}>
                    <b>Ratio PG/VG:</b> 50/50 <b>Volume:</b> 40ml
                </li>
                <li>
                    <Grid h="" w="" templateColumns="repeat(6, 1fr)" gap={1}>
                        <GridItem colSpan={5}>
                            <p>
                                <span style={{ fontWeight: '600' }}>Ingrédients: </span>Propylène Glycol, Glycérine
                                Végétale, Arômes alimentaires
                            </p>
                            {isEUH208A.b || isEUH208B.b || isEUH208C.b ? (
                                <GotMol isEUH208A={isEUH208A} isEUH208B={isEUH208B} isEUH208C={isEUH208C} />
                            ) : null}
                            <p>
                                <span style={{ fontWeight: '600' }}>DDM: </span>
                                {format(nowadd6month, 'dd.MM.yyyy', {})}
                            </p>
                            <p>
                                <span style={{ fontWeight: '600' }}>N° de lot: </span>
                                {format(now, 'yyyyMMddHHmmss', {})}_{uid}
                            </p>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Image
                                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/-18_xt2qpo.png"
                                alt="pregnant"
                                width="27"
                                height="27"
                            />
                            <Image
                                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/femme_enceinte_d9a5iy.png"
                                alt="pregnant"
                                width="27"
                                height="27"
                            />
                            <Image
                                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/recycle_f617gc.png"
                                alt="recycling"
                                width="27"
                                height="27"
                            />
                            {isH317.b && (
                                <>
                                    <Image
                                        src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630926475/icone_bobble_mix/attention_hyp4mu.png"
                                        alt="attention"
                                        width="42"
                                        height="42"
                                    />
                                </>
                            )}
                        </GridItem>
                    </Grid>
                </li>

                <li>
                    <div style={{ fontSize: '11px' }}>
                        <p style={{ fontSize: '1rem', fontWeight: '600' }}>Précautions d'emploi:</p>
                        {/* Cas1, mélange non classé: */}
                        {!isH317.b && !isH226.b && !isH412.b && !isH413.b && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                En cas de consultation d'un médecin, garder à disposition le récipient ou l'étiquette
                                Tenir hors de portée des enfants. Se laver les mains soigneusement après manipulation
                            </div>
                        )}
                        {/* ci dessous on suprime la conditon `|| (Hxxx et H226):` */}
                        {/* Cas2, mélange classé que H317  */}
                        {isH317.b && !isH412.b && !isH413.b && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                Peut provoquer une allergie cutanée. En cas de consultation d’un médecin, garder à
                                disposition le récipient ou l’étiquette. Tenir hors de portée des enfants. Ne pas
                                manger, boire ou fumer en manipulant ce produit. En cas de contact avec la peau : laver
                                abondamment à l’eau et au savon. Éliminer le contenu dans un centre de traitement agréé.
                            </div>
                        )}
                        {/* Cas4, mélange classé que H412: */}
                        {isH412.b && !isH317.b && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                Nocif pour les organismes aquatiques. entraîne des effets néfastes à long terme. En cas
                                de consultation d’un médecin, garder à disposition le récipient ou l’étiquette. Tenir
                                hors de portée des enfants. Ne pas manger, boire, ou fumer en manipulant ce produit. Se
                                laver les mains soigneusement après manipulation. Éliminer le contenu dans un centre de
                                traitement agréé.
                            </div>
                        )}
                        {/* Cas5, mélange classé H413: */}
                        {isH413.b && !isH317 && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                Peut être nocif à long terme pour les organismes aquatiques. En cas de consultation d’un
                                médecin, garder à disposition le récipient ou l’étiquette. Tenir hors de portée des
                                enfants. Ne pas manger, boire, ou fumer en manipulant ce produit. Se laver les mains
                                soigneusement après manipulation.
                            </div>
                        )}
                        {/* Cas6, mélange classé H317 + H412: */}
                        {isH317.b && isH412.b && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                Peut provoquer une allergie cutanée. Nocif pour les organismes aquatiques. En cas de
                                consultation d’un médecin, garder à disposition le récipient ou l’étiquette. Tenir hors
                                de portée des enfants. Ne pas manger, boire ou fumer en manipulant ce produit. En cas de
                                contact avec la peau : laver abondamment à l’eau et au savon. Éliminer le contenu dans
                                un centre de traitement agréé.
                            </div>
                        )}
                        {/* Cas7, mélange classé H317 + H413 : */}
                        {isH317.b && isH413.b && (
                            <div style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                Peut provoquer une allergie cutanée. Peut être nocif à long terme pour les organismes
                                aquatiques. En cas de consultation d’un médecin, garder à disposition le récipient ou
                                l’étiquette. Tenir hors de portée des enfants. Ne pas manger, boire ou fumer en
                                manipulant ce produit. En cas de contact avec la peau : laver abondamment à l’eau et au
                                savon. Éliminer le contenu dans un centre de traitement agréé.
                            </div>
                        )}
                    </div>
                </li>
                <div style={{ textAlign: 'center', paddingTop: '10px', fontSize: '14px' }}>
                    Fabriqué en France par {company.name} {company.address} Tel : {company.tel} {company.web}
                </div>
            </ul>
        </LabelContainer>
    );
});

const ContainerLabel = (props) => {
    const { mixRisk, sanitizeList, name, rid } = props;

    // console.log('MIX is H412', isH412);
    // console.log('MIX is H413', isH413);
    // dimension 62mmx90hmm || 234.4x340.2
    // 234.33070866X340.15748031 pixel

    const componentRef = useRef();
    const params = {
        fileName: `BobbleMix ${name.replace('/', '-')}.pdf`,
        pdfOptions: {
            w: 62,
            h: 90,
            x: 0,
            y: 0,
            unit: 'mm',
            orientation: 'p',
            // pdfFormat: 'c9',
        },
        html2CanvasOptions: {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight,
        },
    };

    return (
        <>
            <ComponentToPrint ref={componentRef} name={name} mixRisk={mixRisk} sanitizeList={sanitizeList} rid={rid} />
            <Button
                colorScheme="orange"
                style={{ boxShadow: 'none' }}
                leftIcon={<FaRegFilePdf />}
                onClick={async () => {
                    await import('react-component-export-image').then((module) => {
                        module.exportComponentAsPDF(componentRef, params);
                    });
                }}
            >
                format PDF
            </Button>
        </>
    );
};
export default ContainerLabel;
