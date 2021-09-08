const GotMol = (props) => {
    const { isEUH208A, isEUH208B, isEUH208C } = props;
    // console.log('EUH208', isEUH208A, isEUH208B, isEUH208C);
    return (
        <>
            <span>
                <b>Contient: </b>
            </span>
            <div style={{ fontSize: '11px' }}>
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
            </div>

            <span>Peut produire une réaction allergique.</span>
        </>
    );
};
export default GotMol;
