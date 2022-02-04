import { decodeb64, encodeb64 } from './base64';

export const infosFromFingerprint = (f) => {
    // get an arr of all arome and their ratio in the mix
    const fullName = decodeb64(String(f)).split('/');
    const array = fullName.map((a) => {
        const ar = String(a.split('%')[1]);
        const obj = {
            percent: Number(a.split('%')[0].trim()),
            arome: ar.trim().replace(/-/g, ' ').trim(),
        };
        return obj;
    });
    return array;
};

export const fixedInfosFromFingerprint = (f) => {
    // get an arr of all arome and their ratio in the mix
    const fullName = decodeb64(String(f)).split('/');
    const array = fullName.map((a) => {
        const ar = String(a.split('%')[1]);
        const obj = {
            percent: Number(a.split('%')[0].trim()).toFixed(0),
            arome: ar.trim().replace(/-/g, ' ').trim(),
        };
        return obj;
    });
    return array;
};

export const formatName = (recipeName) => {
    const splited = recipeName.split('/');
    const checked = splited.map((i, k) => i.replace('-', 'ml ').replace(/-/g, ' '));
    const fname = checked.join(' / ');
    return fname;
};

export const name2Fingerprint = (f) => {
    // name: '10-Double-Pomme / 20-Exotica / 10-Fruit-du-Dragon';
    // need name: 25%-Double-Pomme / 50%-Exotica / 25%-Fruit-du-Dragon
    const splited = f.split('/');
    const percentIn = splited.map((i, k) => {
        const p = i.replace('-', '%-');
        const mp = p.split('%-'); // ['10', 'Double-Pomme ']
        const ml2p = Math.round(((mp[0] / 40) * 100).toFixed(1));
        const nn = `${ml2p}%-${mp[1]}`; // 25%-Double-Pomme
        return nn;
    });
    const pIj = percentIn.join('/ '); // 25%-Double-Pomme / 50%-Exotica / 25%-Fruit-du-Dragon
    const b64nn = encodeb64(pIj); // MjUlLURvdWJsZS1Qb21tZSAvIDUwJS1FeG90aWNhIC8gMjUlLUZydWl0LWR1LURyYWdvbg==
    return b64nn;
};
