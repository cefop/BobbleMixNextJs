import { useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { QUERY_ACTIVE_AROME } from '../components/gql/graphql';
import combinations from '../components/lib/maxPossibilities';
import { useWindowSize } from '../components/hooks/useWindowSize';

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 54% 1fr;
    width: 100%;
    height: calc(100vh - 77px);
    align-self: top;
    justify-self: center;
    background-image: url('https://res.cloudinary.com/dagmffgu0/image/upload/v1632923871/bobble_mix_assets/Fioles%20%2B%20fond/fiole_splash_homepage_pcxzw9.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 120% 0%;
`;

const HomeText = styled.div`
    padding-top: 16.18%;
    padding-left: 5rem;
    p {
        text-transform: uppercase;
        line-height: 3.78rem;
        font-size: 3.36rem;
        font-weight: 800;
    }
    .teaser {
        padding-top: 2.33rem;
        white-space: pre-line;
        font-size: 1.236rem;
        font-weight: 400;
    }
`;

const HomeImg = styled.div``;

export default function Home() {
    const { loading, error, data } = useQuery(QUERY_ACTIVE_AROME);
    const xyz = data && new Intl.NumberFormat('fr-FR').format(combinations(data.item.length * 40, 5, 1000));
    const { width, height } = useWindowSize();
    console.log('MAX combinations: ', xyz);
    console.log(`Votre resolution est de: ${width} X ${height}`);

    return (
        <MainLayout>
            <HomeText>
                <p>
                    {!loading && !error && data ? `${data.item.length} ` : <i style={{ color: 'orange' }}>vos </i>}
                    liquides,
                </p>
                <p>une infinité de possibilités.</p>
                <div className="teaser">
                    Laissez parler votre créativité et mixez jusqu'à 5 de nos arômes afin de créer une recette unique
                    selon vos envies!
                </div>
                <Link href="/mixeur">
                    <Button size="lg" variant="solid" colorScheme="orange" style={{ boxShadow: 'none' }} mt="55px">
                        Mixer
                    </Button>
                </Link>
            </HomeText>
            <HomeImg></HomeImg>
        </MainLayout>
    );
}
