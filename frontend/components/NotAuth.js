import { Box, Button } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/layout';
import { signIn } from 'next-auth/client';

export default function NotAuth() {
    return (
        <Box textAlign="center" marginTop="100px">
            Veuillez vous connecter pour continuer
            <Spacer pt={3} />
            <Button colorScheme="white" variant="outline" onClick={() => signIn()}>
                se connecter
            </Button>
        </Box>
    );
}
