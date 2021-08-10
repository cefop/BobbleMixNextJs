import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import MixList from './MixList';
import { MixContainer, MixInfos, RecipeContainer } from './StyleRecipe';

const UserRecipe = (props) => {
    const { recipe } = props;
    console.log('THE RECIPE!: ', recipe);
    const router = useRouter();

    const tm = recipe[0];
    const tma = recipe[0].aromes;

    return (
        <RecipeContainer>
            <MixContainer>
                <MixInfos>
                    <h3 id={tm.fingerprint}>{tm.name}</h3>
                    <ul>
                        <li>Volume arômes: {tm.volume}ml</li>
                        <li>Nicotine: {tm.nicotine}mg</li>
                        <li>PGVG 50/50: 20ml</li>
                        <li>Volume total: {tm.volume + 20}ml</li>
                    </ul>
                    <Button
                        onClick={() => router.push(`/fds?fingerprint=${tm.fingerprint}`)}
                        colorScheme="orange"
                        variant="outline"
                    >
                        voire la Fiche De Sécurité
                    </Button>{' '}
                    <Button colorScheme="orange" variant="outline">
                        voire l'étiquette
                    </Button>
                </MixInfos>
                <MixList tma={tma} tm={tm} />
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
