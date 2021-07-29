import { useContext } from 'react';
import styled from '@emotion/styled';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { FaUndo } from 'react-icons/fa';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import { NicoContext } from '../hooks/NicoContext';

const MixInfo = styled.p`
    color: grey;
    font-size: 1rem;
    text-align: center;
    padding-bottom: 1.5rem;
    span {
        color: orange;
        font-weight: 600;
    }
`;

export default function TipsMix() {
    const { bobbleMix, setBobbleMix } = useContext(BobbleMixContext);
    const { setNicoMix } = useContext(NicoContext);
    const MaxMix = 5;

    const reset = () => {
        setBobbleMix([]);
        setNicoMix(null);
    };

    return (
        <>
            <MixInfo>
                {bobbleMix.length !== 5 ? (
                    `Vous pouvez ajouter jusqu'à ${MaxMix - bobbleMix.length} arôme${bobbleMix.length <= 3 ? 's' : ''}`
                ) : (
                    <span>Vous avez atteint le maximum d'arômes possible</span>
                )}
                <Tooltip label="recommencer votre recette" bg="red" color="withe">
                    <IconButton
                        variant="ghost"
                        colorScheme="grey"
                        aria-label="Call Sage"
                        fontSize="20px"
                        isDisabled={bobbleMix.length < 2}
                        onClick={() => reset()}
                        icon={<FaUndo />}
                    />
                </Tooltip>
            </MixInfo>
        </>
    );
}
