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
                    <Button
                        size="lg"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="orange.200"
                        variant="outline"
                        size="lg"
                        mt={18}
                    >
                        Lancer le mixeur
                    </Button>
                </Center>
            </TextIntro>
        </PageLayout>
    );
}
