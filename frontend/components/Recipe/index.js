import { useRouter } from 'next/router';
import { Button, Modal, useDisclosure } from '@chakra-ui/react';

import MixList from './MixList';
import { MixContainer, MixInfos, RecipeContainer } from './StyleRecipe';
import ModalFrame from './ModalFrame';
// import UserAddRmRecipe from './userAddRmRecipe';

const UserRecipe = (props) => {
    const { recipe } = props;
    console.log('THE RECIPE!: ', recipe);
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        style={{ boxShadow: 'none' }}
                        variant="outline"
                    >
                        fiche de sécurité
                    </Button>{' '}
                    <Button onClick={onOpen} colorScheme="orange" style={{ boxShadow: 'none' }} variant="outline">
                        étiquette
                    </Button>
                    {/* <UserAddRmRecipe recipe={recipe[0]} /> */}
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
