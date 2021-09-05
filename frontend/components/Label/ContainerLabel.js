import { useEffect, useState, useRef, forwardRef } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { add, format } from 'date-fns';
import { Button, Image, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { FaRegFilePdf } from 'react-icons/fa';
import { useUser } from '../hooks/useUser';

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

    const [isH317, setIsH317] = useState({ arr: '', sum: null, b: false });
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
        // ? Filter specifique risks
        const fsr = _.filter(mixRisk, function (i, k) {
            return i.Clas_ID === risk;
        });
        // ? add the molecule mod_retenuAdd
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
            FilterByMolRisk(risk),
            FilterByMolRisk(risk).reduce((acc, curr) => acc + curr.mod_retenuAdd, 0),
        ]);
        return { allmol, sum };
    };

    //  find if the risk is real
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

    useEffect(() => {
        // final check for is H317
        (isH317_1A.b === true || isH317_1B.b === true || isH317_1.b === true) &&
            setIsH317({
                arr: null,
                b: true,
                sum: null,
            });
    }, [isH317_1A, isH317_1B]);

    // H410 = somme H410
    // H411= (10 * somme H410) + somme H411
    // H412 = (100 * somme H410) + (10 * somme H411) + somme H412
    // H413 = somme H410 + somme H 411 + somme H412 + Somme H413
    // (Sans mettre de multiple 100 ou 10 comme pour H411 ou H412)

    // Dans l'exemple 50% orange/ 50% fraise on a :
    // H410 = 0,125 + 0,1 = 0,225%
    // H411 = (0,125+0,1)*10 + 0 = 2.25 %
    // H412 = (0,125+0,1)*100 +  0 + 0 = 22,5%
    // H413 = (0,125+ 0,1) + 0 + 0 + 0 = 0,225%
    // SUM H413: 0.225 + 0 ou 2.25+ 22.5 + 0

    useEffect(async () => {
        // ? final check for is H412 !OK
        const res = (await isH410.sum) * 100 + (await isH411.sum) * 10 + (await isH412.sum);
        // console.log(` SUM H412: ${await isH410.sum}*100 + ${await isH411.sum}*10 + ${await isH412.sum}`);
        setIsH412({ ...isH412, arr: isH412.arr, b: (await res) >= 25, sum: await res });
    }, [isH411, isH410]);

    useEffect(async () => {
        // final check for is H413
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

    useEffect(() => {
        isH317_1A.b >= 0.01 &&
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

    return (
        <LabelContainer ref={ref}>
            <Center>
                <Image src="/assets/bobble-logo-black.png" alt="booble mix" w="150px" />
            </Center>
            <Center>
                <RecipeName> {name}</RecipeName>
            </Center>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ color: 'black' }}>
                    <b>Ratio PG/VG:</b> 50/50 Volume: 40ml
                </li>
                <li>
                    <Grid h="" w="" templateColumns="repeat(6, 1fr)" gap={1}>
                        <GridItem colSpan={5}>
                            <p>
                                <span style={{ fontWeight: '600' }}>Ingrédients: </span>Propylène Glycol, Glycérine
                                Végétale, Arômes alimentaires
                            </p>
                            {isEUH208A.b || isEUH208B.b || isEUH208C.b ? (
                                <>
                                    <span>
                                        <b>Contient: </b>
                                    </span>
                                    {isEUH208A.arr.length > 0 &&
                                        isEUH208A.arr.map((i, k) => {
                                            return (
                                                <div key={k}>
                                                    <span>{i.Molecule} | </span>
                                                    <span>{i.Molecule_ID}</span>
                                                </div>
                                            );
                                        })}
                                    {isEUH208B.arr.length > 0 &&
                                        isEUH208B.arr.map((i, k) => {
                                            return (
                                                <div key={k}>
                                                    <span>{i.Molecule} | </span>
                                                    <span>{i.Molecule_ID}</span>
                                                </div>
                                            );
                                        })}
                                    {isEUH208C.arr.length > 0 &&
                                        isEUH208C.arr.map((i, k) => {
                                            return (
                                                <div key={k}>
                                                    <span>{i.Molecule} | </span>
                                                    <span>{i.Molecule_ID}</span>
                                                </div>
                                            );
                                        })}
                                    <span>Peut produire une réaction allergique.</span>
                                </>
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
                            <Image src="/assets/picto/mineur.png" alt="pregnant" width="27" height="27" />
                            <Image src="/assets/picto/pregnant.png" alt="pregnant" width="23" height="23" />
                            <Image src="/assets/picto/recycling.jpeg" alt="recycling" width="23" height="23" />
                            {isH317.b && (
                                <>
                                    <Image src="/assets/picto/GHS07-74x74.png" alt="attention" width="38" height="38" />
                                    <Text fontSize="xs">ATTENTION</Text>
                                </>
                            )}
                        </GridItem>
                    </Grid>
                </li>

                <li>
                    <div style={{ fontSize: '12px' }}>
                        <p style={{ fontSize: '1rem', fontWeight: '600' }}>Précautions d'emploi:</p>
                        {/* {isH317.b && !isH226.b && !isH412.b && !isH413.b && (
                            <div>
                                <span>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette.
                                </span>
                                <span> Tenir hors de portée des enfants.</span>
                                <span> Se laver les mains soigneusement après manipulation.</span>
                            </div>
                        )} */}
                        {/* {isH317.b && isH226.b && !isH412.b && !isH413.b && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants</p>
                                <p>
                                    Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes
                                    nues et de toute autre source d'inflammation. Ne pas fumer.
                                </p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.</p>
                                <p>Éliminer le contenu dans un centre de Traitement agréé.</p>
                            </div>
                        )} */}
                        {/* {isH317.b && !isH226.b && (isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants</p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.</p>
                                <p>Éviter le rejet dans l'environnement.</p>
                            </div>
                        )} */}
                        {/* {isH317.b && isH226.b && (isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants</p>
                                <p>
                                    Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes
                                    nues et de toute autre source d'inflammation. Ne pas fumer.
                                </p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.</p>
                                <p>Éviter le rejet dans l'environnement.</p>
                                <p>Éliminer le contenu dans un centre de Traitement agréé.</p>
                            </div>
                        )} */}
                        {/* {!isH317.b && isH226.b && !isH412.b && !isH413.b && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants</p>
                                <p>
                                    Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes
                                    nues et de toute autre source d'inflammation. Ne pas fumer.
                                </p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>Se laver les mains soigneusement après manipulation</p>
                                <p>Éliminer le contenu dans un centre de Traitement agréé.</p>
                            </div>
                        )} */}
                        {/* {!isH317.b && isH226.b && (isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants</p>
                                <p>
                                    Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes
                                    nues et de toute autre source d'inflammation. Ne pas fumer.
                                </p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>Se laver les mains soigneusement après manipulation</p>
                                <p>Éviter le rejet dans l'environnement.</p>
                                <p>Éliminer le contenu dans un cenTre de Traitement agréé.</p>
                            </div>
                        )} */}
                        {/* {!isH317.b && !isH226.b && (isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette
                                </p>
                                <p>Tenir hors de portée des enfants.</p>
                                <p>Ne pas manger, boire ou fumer en manipulant ce produit.</p>
                                <p>Se laver les mains soigneusement après manipulation</p>
                                <p>Éviter le rejet dans l'environnement.</p>
                                <p>Éliminer le contenu dans un cenTre de Traitement agréé.</p>
                            </div>
                        )} */}
                        {/* Cas1, mélange non classé: */}
                        {!isH317.b && !isH226.b && !isH412.b && !isH413.b && (
                            <div>
                                <p>
                                    En cas de consultation d'un médecin, garder à disposition le récipient ou
                                    l'étiquette Tenir hors de portée des enfants. Se laver les mains soigneusement après
                                    manipulation
                                </p>
                            </div>
                        )}
                        {/* Cas2, mélange classé H317 ou H317: */}
                        {(isH317_1A.b || isH317_1B) && (
                            <div>
                                <p>
                                    Peut provoquer une allergie cutanée. En cas de consultation d’un médecin, garder à
                                    disposition le récipient ou l’étiquette. Tenir hors de portée des enfants. Ne pas
                                    manger, boire ou fumer en manipulant ce produit. En cas de contact avec la peau :
                                    laver abondamment à l’eau et au savon. Éliminer le contenu dans un centre de
                                    traitement agréé.
                                </p>
                            </div>
                        )}
                        {/* Cas4, mélange classé H412 ou H412: */}
                        {(isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    Nocif pour les organismes aquatiques. entraîne des effets néfastes à long terme. En
                                    cas de consultation d’un médecin, garder à disposition le récipient ou l’étiquette.
                                    Tenir hors de portée des enfants. Ne pas manger, boire, ou fumer en manipulant ce
                                    produit. Se laver les mains soigneusement après manipulation. Éliminer le contenu
                                    dans un centre de traitement agréé.
                                </p>
                            </div>
                        )}
                        {/* Cas5, mélange classé H413 ou H413: */}
                        {(isH412.b || isH413.b) && (
                            <div>
                                <p>
                                    Peut être nocif à long terme pour les organismes aquatiques. En cas de consultation
                                    d’un médecin, garder à disposition le récipient ou l’étiquette. Tenir hors de portée
                                    des enfants. Ne pas manger, boire, ou fumer en manipulant ce produit. Se laver les
                                    mains soigneusement après manipulation.
                                </p>
                            </div>
                        )}
                        {/* Cas6, mélange classé H317 + H412 ou H317 + H412: */}
                        {(isH317.b && isH412.b) ||
                            (isH317.b && isH413.b && (
                                <div>
                                    <p>
                                        Peut provoquer une allergie cutanée. Nocif pour les organismes aquatiques. En
                                        cas de consultation d’un médecin, garder à disposition le récipient ou
                                        l’étiquette. Tenir hors de portée des enfants. Ne pas manger, boire ou fumer en
                                        manipulant ce produit. En cas de contact avec la peau : laver abondamment à
                                        l’eau et au savon. Éliminer le contenu dans un centre de traitement agréé.
                                    </p>
                                </div>
                            ))}
                        {/* Cas7, mélange classé H317 + H413 ou H317 + H413 : */}
                        {(isH317.b && isH412.b) ||
                            (isH317.b && isH413.b && (
                                <div>
                                    <p>
                                        Peut provoquer une allergie cutanée. Peut être nocif à long terme pour les
                                        organismes aquatiques. En cas de consultation d’un médecin, garder à disposition
                                        le récipient ou l’étiquette. Tenir hors de portée des enfants. Ne pas manger,
                                        boire ou fumer en manipulant ce produit. En cas de contact avec la peau : laver
                                        abondamment à l’eau et au savon. Éliminer le contenu dans un centre de
                                        traitement agréé.
                                    </p>
                                </div>
                            ))}
                    </div>
                </li>
                <div style={{ textAlign: 'center', paddingTop: '10px' }}>
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
