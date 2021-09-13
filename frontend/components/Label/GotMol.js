import styled from '@emotion/styled';

const Infos = styled.div`
    padding: 0;
    margin: 0;
    font-size: 0.775em;
    span {
        font-weight: 600;
    }
`;

const GotMol = (props) => {
    const { isEUH208A, isEUH208B, isEUH208C } = props;
    // console.log('EUH208', isEUH208A, isEUH208B, isEUH208C);
    return (
        <Infos>
            <span>Contient:</span>
            <div>
                {isEUH208A.arr.length > 0 &&
                    isEUH208A.arr.map((i, k) => {
                        return (
                            <div key={k}>
                                <>{i.Molecule} | </>
                                <>{i.Molecule_ID}</>
                            </div>
                        );
                    })}
                {isEUH208B.arr.length > 0 &&
                    isEUH208B.arr.map((i, k) => {
                        return (
                            <div key={k}>
                                <>{i.Molecule} | </>
                                <>{i.Molecule_ID}</>
                            </div>
                        );
                    })}
                {isEUH208C.arr.length > 0 &&
                    isEUH208C.arr.map((i, k) => {
                        return (
                            <div key={k}>
                                <>{i.Molecule} | </>
                                <>{i.Molecule_ID}</>
                            </div>
                        );
                    })}
            </div>

            <>Peut produire une réaction allergique.</>
        </Infos>
    );
};
export default GotMol;
