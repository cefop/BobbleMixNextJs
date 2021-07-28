import { Image } from '@chakra-ui/image';
import PageLayout from '../components/styles/PageLayout';

export default function Home() {
    return (
        <PageLayout title="">
            <Image boxSize="442px" objectFit="cover" src="/assets/intro.png" alt="booble mix" />
        </PageLayout>
    );
}
