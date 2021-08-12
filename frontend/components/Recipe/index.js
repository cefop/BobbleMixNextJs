import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Button, Modal, useDisclosure } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';
import { QUERY_USER_RECIPES } from '../gql/graphql';
import { MixContainer, MixInfos, RecipeContainer } from './StyleRecipe';
import MixList from './MixList';
import ModalFrame from './ModalFrame';
import UserAddRmRecipe from './userAddRmRecipe';

const UserRecipe = (props) => {
    const { recipe } = props;
    console.log('THE RECIPE!: ', recipe);
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const tm = recipe[0];
    const tma = recipe[0].aromes;

    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { data } = useQuery(QUERY_USER_RECIPES, { variables: { uid: uid } });

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
                        style={{ boxShadow: 'none' }}
                        variant="outline"
                    >
                        fiche de sécurité
                    </Button>{' '}
                    <Button onClick={onOpen} colorScheme="orange" style={{ boxShadow: 'none' }} variant="outline">
                        étiquette
                    </Button>
                    {user && data ? (
                        <UserAddRmRecipe recipe={recipe[0]} ownRecipe={data} uid={uid} />
                    ) : (
                        'connectez vous pour enregistrer cette recette'
                    )}
                    <Modal
                        size="3xl"
                        isOpen={isOpen}
                        onClose={onClose}
                        motionPreset="slideInBottom"
                        scrollBehavior="inside"
                    >
                        <ModalFrame name={tm.name} fingerprint={tm.id} />
                    </Modal>
                </MixInfos>
                <MixList tma={tma} tm={tm} />
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
