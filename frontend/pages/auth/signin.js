import styled from '@emotion/styled';
import { Box, Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { getProviders, signIn, getCsrfToken } from 'next-auth/client';
import CenterGridLayout from '../../components/styles/CenterGridLayout';

const SignLayer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
`;

const BlockBTN = styled.div`
    padding: 1.2rem 2rem;
    width: 325px;
    text-align: center;
    button {
        width: 100%;
    }
`;

const SeparatorChoice = styled.div`
    margin: 1rem 0;
    text-transform: uppercase;
    font-size: 1.11rem;
    font-weight: 700;
    color: gray;
`;

export default function SignIn({ providers, csrfToken }) {
    console.log('prov', providers);

    return (
        <>
            <CenterGridLayout
                title="Connexion"
                subtitle={"d'un simple clique!"}
                data={[]} // don't really need it!
            >
                <Box mx={20} my={55} p={0}>
                    <SignLayer>
                        <BlockBTN key={providers.google.name}>
                            <Button
                                variant="solid"
                                colorScheme="orange"
                                style={{ boxShadow: 'none' }}
                                onClick={() => signIn(providers.google.id)}
                            >
                                Se connecter avec {providers.google.name}
                            </Button>
                        </BlockBTN>

                        <BlockBTN key={providers.facebook.name}>
                            <Button
                                variant="solid"
                                colorScheme="orange"
                                style={{ boxShadow: 'none' }}
                                onClick={() => signIn(providers.facebook.id)}
                            >
                                Se connecter avec {providers.facebook.name}
                            </Button>
                        </BlockBTN>

                        <SeparatorChoice>ou par email</SeparatorChoice>
                        <BlockBTN>
                            <form method="post" action="/api/auth/signin/email">
                                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<EmailIcon color="orange.700" />}
                                    />
                                    <Input
                                        focusBorderColor="orange.600"
                                        errorBorderColor="crimson"
                                        // isInvalid
                                        style={{ boxShadow: 'none' }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="votre email"
                                    />
                                </InputGroup>
                                <Button
                                    mt={3}
                                    variant="solid"
                                    colorScheme="orange"
                                    style={{ boxShadow: 'none' }}
                                    type="submit"
                                >
                                    Se connecter par email
                                </Button>
                            </form>
                        </BlockBTN>
                    </SignLayer>
                </Box>
            </CenterGridLayout>
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return {
        props: { providers, csrfToken },
    };
}
