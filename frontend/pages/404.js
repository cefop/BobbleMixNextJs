import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/button';
import styled from '@emotion/styled';
import Image from 'next/image';

const C4Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
`;

const C4Intro = styled.div`
    /* border: 1px solid forestgreen; */
    height: 100%;
    padding-top: 28%;
    justify-self: end;
    align-self: center;
    text-transform: uppercase;
    font-size: 6rem;
    font-weight: 700;
`;

const C4Logo = styled.div`
    margin-top: 4rem;
    margin-right: 4rem;
    ul {
        padding-bottom: 2rem;
        padding-top: 2rem;
        list-style: none;
        font-size: 3rem;
        font-weight: 700;
    }
    span {
        color: orange;
    }
    button {
        text-transform: uppercase;
    }
`;

export default function Custom404() {
    const router = useRouter();
    return (
        <C4Grid>
            <C4Intro>
                <div>Le bobble Mix</div>
            </C4Intro>
            <C4Logo>
                <Image
                    src="https://res.cloudinary.com/dagmffgu0/image/upload/v1633090121/bobble_mix_assets/404_qv4nif.png"
                    layout="responsive"
                    width="596"
                    height="266"
                />
                <ul>
                    <li>
                        - <span>4</span>MG de "OUPS"
                    </li>
                    <li>- OMG de "I DID IT"</li>
                    <li>
                        - <span>4</span>MG de "AGAIN"
                    </li>
                </ul>
                <Button size="md" colorScheme="orange" style={{ boxShadow: 'none' }} onClick={() => router.back()}>
                    Revenir à la page précédente
                </Button>
            </C4Logo>
        </C4Grid>
    );
}
