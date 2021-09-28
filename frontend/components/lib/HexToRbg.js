export const hex2rgb = (hex) => {
    //! must be formated like #+6alphaNum
    const nohash = hex.replace('#', '');
    const aRgbHex = nohash.match(/.{1,2}/g);
    const aRgb = `${parseInt(aRgbHex[0], 16)}, ${parseInt(aRgbHex[1], 16)}, ${parseInt(aRgbHex[2], 16)}`;
    return aRgb;
};
