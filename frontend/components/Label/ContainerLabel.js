import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser';
import _ from 'lodash';
import { add, format } from 'date-fns';
import { Image, Stack, Table, Tbody } from '@chakra-ui/react';
import MentionDangerH317 from '../Fds/Mentions/DangerH317';
import MentionDangerH317_H226 from '../Fds/Mentions/DangerH317_H226';
import MentionDangerH317_H412_413 from '../Fds/Mentions/DangerH317_412_413';
import MentionDangerH317_H412_413_H226 from '../Fds/Mentions/DangerH317_H412_413_226';
import MentionDangerH226 from '../Fds/Mentions/DangerH226';
import MentionDangerH226_H412_H413 from '../Fds/Mentions/DangerH226_412_413';
import MentionDangerH412_413 from '../Fds/Mentions/DangerH412_413';
import MentionDangerDefault from '../Fds/Mentions/DangerDefault';

const ContainerLabel = (props) => {
    const { mixRisk, sanitizeList, name, rid } = props;
    const now = new Date();
    const nowadd6month = add(new Date(), {
        months: 6,
    });

    const company = {
        name: 'CEFOP',
        address: '8 avenue du bouton d’or 94370 SUCY-EN-BRIE France',
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
    const [setIsH319] = useState({ arr: '', sum: null, b: false });
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

    // console.log('MIX is H412', isH412);
    // console.log('MIX is H413', isH413);

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ color: 'green' }}>Nom mélange: {name}</li>
                <li style={{ color: 'green' }}>Ratio PG/VG: 50/50 Volume: 40ml</li>
                {/* <li style={{ color: 'green' }}></li> */}
                <li>
                    <Stack direction="row">
                        <Image src="/assets/picto/mineur.png" alt="pregnant" width="33" height="33" />
                        <Image src="/assets/picto/pregnant.png" alt="pregnant" width="33" height="33" />
                        <Image src="/assets/picto/recycling.jpeg" alt="recycling" width="33" height="33" />
                        {isH317.b && (
                            <>
                                <Image src="/assets/picto/GHS07-74x74.png" alt="attention" width="33" height="33" />
                                <span>ATTENTION</span>
                            </>
                        )}
                    </Stack>
                </li>
                <li style={{ color: 'green' }}>
                    Liste ingrédients: Ingrédients: Propylène Glycol, Glycérine Végétale, Arômes alimentaires
                </li>
                <li style={{ color: 'green' }}>
                    {isEUH208A.b || isEUH208B.b || isEUH208C.b ? (
                        <>
                            <span>Peut produire une réaction allergique.</span>
                            {isEUH208A.arr.length > 0 &&
                                isEUH208A.arr.map((i, k) => {
                                    // console.log(i);
                                    return (
                                        <div key={k}>
                                            <span>{i.Molecule} | </span>
                                            <span>{i.Molecule_ID}</span>
                                        </div>
                                    );
                                })}
                            {isEUH208B.arr.length > 0 &&
                                isEUH208B.arr.map((i, k) => {
                                    // console.log(i);
                                    return (
                                        <div key={k}>
                                            <span>{i.Molecule} | </span>
                                            <span>{i.Molecule_ID}</span>
                                        </div>
                                    );
                                })}
                            {isEUH208C.arr.length > 0 &&
                                isEUH208C.arr.map((i, k) => {
                                    // console.log(i);
                                    return (
                                        <div key={k}>
                                            <span>{i.Molecule} | </span>
                                            <span>{i.Molecule_ID}</span>
                                        </div>
                                    );
                                })}
                        </>
                    ) : null}
                </li>
                <li style={{ color: 'green' }}>DDM: {format(nowadd6month, 'dd.MM.yyyy', {})}</li>
                <li style={{ color: 'green' }}>
                    N° de lot: {format(now, 'yyyyMMddHHmmss', {})}_{rid}_{uid}
                </li>
                <li style={{ color: 'green' }}>
                    Fabriqué en France par {company.name} {company.address} Tel : {company.tel} {company.web}
                </li>
                <li>
                    <Table size="sm">
                        <Tbody style={{ color: 'green' }}>
                            {/* Only if H317 */}
                            {isH317.b && !isH226.b && !isH412.b && !isH413.b && <MentionDangerH317 />}
                            {/* Only if H317 and H226  */}
                            {isH317.b && isH226.b && !isH412.b && !isH413.b && <MentionDangerH317_H226 />}
                            {/* Only if H317 and H142 or H413  */}
                            {isH317.b && !isH226.b && (isH412.b || isH413.b) && <MentionDangerH317_H412_413 />}
                            {/* Only if H317 and H412 or H413 and H226  */}
                            {isH317.b && isH226.b && (isH412.b || isH413.b) && <MentionDangerH317_H412_413_H226 />}
                            {/* Only if H226  */}
                            {!isH317.b && isH226.b && !isH412.b && !isH413.b && <MentionDangerH226 />}
                            {/* Only if H226 and H412 or H413  */}
                            {!isH317.b && isH226.b && (isH412.b || isH413.b) && <MentionDangerH226_H412_H413 />}
                            {/* Only if H412 or H413  */}
                            {!isH317.b && !isH226.b && (isH412.b || isH413.b) && <MentionDangerH412_413 />}
                            {/* Only if everything is false  */}
                            {!isH317.b && !isH226.b && !isH412.b && !isH413.b && <MentionDangerDefault />}
                        </Tbody>
                    </Table>
                </li>
            </ul>
        </div>
    );
};
export default ContainerLabel;
