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
    // TODO get the actual number of activated item to render the number
    return (
        <PageLayout title="">
            <TextIntro>
                <Image
                    src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630931407/BobbleMix_Logos/logo_home_h300px_xb1om1.png"
                    alt="booble mix"
                />
                <div>
                    51 liquides, une infinité de possibilités. Laissez parler votre créativité et mixez jusqu'à 5 de nos
                    arômes afin de créer une recette unique selon vos envies!
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
                            Mixer
                        </Button>
                    </Link>
                </Center>
            </TextIntro>
        </PageLayout>
    );
}
