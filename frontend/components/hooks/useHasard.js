import { useEffect, useState } from 'react';
import _ from 'lodash';

// const [hasard, setHasard] = useHasard({
//     mixRisk,
//     sanitizeList,
//     H226: { arr: '', sum: null, b: false, name: 'H226', trigger: 0 },
// });

// console.log('hasard yo', hasard.H226);

//TODO check if that's ok without decimals
// https://code-boxx.com/javascript-round-up-down-decimal-places/

export const useHasard = (initialValues) => {
    const [hasard, setHasard] = useState(initialValues);
    const mixRisk = hasard.mixRisk;
    const sanitizeList = hasard.sanitizeList;

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

    console.log('uiui', FilterByMolRisk('H226'));

    // function that return the data when ready for futur use
    // const findRisk = async (risk) => {
    //     // console.log(`get the risks ${risk}`);
    //     const [allmol, sum] = await Promise.all([
    //         // get the risks
    //         FilterByMolRisk(risk),
    //         // sorting them
    //         FilterByMolRisk(risk).reduce((acc, curr) => acc + curr.mod_retenuAdd, 0),
    //     ]);
    //     return { allmol, sum };
    // };

    // return bool and arr of data of mols that meet a trigger condition
    // const sortedTiggeredMols = (array, trigger) => {
    //     // format or merged array of mol with this risks
    //     const mergedArr = [...new Set(array.allmol.flat())];
    //     // check if condition is meet
    //     const bool = mergedArr.map((i) => (i.mod_retenuAdd >= trigger ? true : false)).includes(true);
    //     // check all molecules with this condition and if so push them into an array
    //     let newArr = [];
    //     const molsTriggered = mergedArr.map((i) => {
    //         if (i.mod_retenuAdd >= trigger) newArr = [i, ...newArr];
    //         return newArr;
    //     });
    //     return { b: bool, arr: molsTriggered };
    // };

    // useEffect(() => {
    //     findRisk(hasard.name).then(
    //         (result) => {
    //             const x = sortedTiggeredMols(result, hasard.trigger);
    //             setHasard({
    //                 arr: x.arr !== undefined && [...new Set(x.arr.flat())],
    //                 b: x.b,
    //                 sum: result.sum,
    //             });
    //         },
    //         (error) => {
    //             console.log({ error });
    //         }
    //     );
    // }, []);

    return [hasard, setHasard];
};
