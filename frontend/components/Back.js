import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Back = (props) => {
    const { fixed } = props;
    const router = useRouter();

    const FixPos = styled.div`
        position: ${fixed === true ? `fixed` : `inherit`};
        margin-top: 80px;
        margin-left: 10px;
    `;

    return (
        <FixPos>
            <Button
                rightIcon={<ArrowBackIcon />}
                colorScheme="orange"
                variant="outline"
                style={{ boxShadow: 'none' }}
                onClick={() => router.back()}
            >
                retour
            </Button>
        </FixPos>
    );
};
export default Back;
