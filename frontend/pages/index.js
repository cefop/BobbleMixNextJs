import Link from 'next/link';
import styled from '@emotion/styled';
import { Image } from '@chakra-ui/image';
import { Button, Center } from '@chakra-ui/react';
import PageLayout from '../components/styles/PageLayout';

const TextIntro = styled.div`
    display: grid;
    grid-template-rows: auto;
    background: white;
    margin: 1rem 5rem;
    padding: 1rem 5rem;
    padding-bottom: 3rem;
    justify-content: center;
    align-content: center;
    color: black;
    img {
        text-align: center;
        margin: 0 auto;
        width: 324px;
    }
`;

export default function Home() {
    return (
        <PageLayout title="">
            <TextIntro>
                <Image src="/assets/intro.png" alt="booble mix" />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <Center>
                    <Link href="/mixeur">
                        <Button
                            size="lg"
                            border="2px"
                            variant="outline"
                            colorScheme="orange"
                            style={{ boxShadow: 'none' }}
                            mt={18}
                        >
                            Crée votre recette maintenant
                        </Button>
                    </Link>
                </Center>
            </TextIntro>
        </PageLayout>
    );
}
