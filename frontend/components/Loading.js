import { CircularProgress } from '@chakra-ui/react';
import { DisplayInfo } from './styles/globalStyled';

export default function Loading() {
    return (
        <DisplayInfo>
            <CircularProgress isIndeterminate color="green.300" />
        </DisplayInfo>
    );
}
