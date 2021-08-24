import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
// import { Modal, useDisclosure } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';
import { QUERY_USER_RECIPES } from '../gql/graphql';
import { MixContainer, MixInfos, RecipeContainer, ActionCard } from './StyleRecipe';
import MixList from './MixList';
// import ModalFrame from './ModalFrame';
import UserAddRmRecipe from './userAddRmRecipe';

const UserRecipe = (props) => {
    const { recipe } = props;
    const router = useRouter();
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    // console.log('THE RECIPE!: ', recipe);
    // const { isOpen, onOpen, onClose } = useDisclosure();

    const { data } = useQuery(QUERY_USER_RECIPES, { variables: { uid: uid } });

    return (
        <RecipeContainer>
            <MixContainer>
                <MixInfos>
                    <h3>{recipe.name}</h3>
                    {user && data ? (
                        <div className="isConnected">
                            <UserAddRmRecipe recipe={recipe} ownRecipe={data} uid={uid} />
                        </div>
                    ) : (
                        <div className="isConnected">connectez vous pour enregistrer cette recette</div>
                    )}
                    <ActionCard
                        onClick={() =>
                            router.push({
                                pathname: '/label',
                                query: { fingerprint: recipe.fingerprint },
                            })
                        }
                    >
                        voire l'etiquette de cette recette
                    </ActionCard>

                    <ActionCard
                        onClick={() =>
                            router.push({
                                pathname: '/fds',
                                query: { fingerprint: recipe.fingerprint },
                            })
                        }
                    >
                        voire la fiche de securité de la recette
                    </ActionCard>

                    {/* <ActionCard onClick={onOpen}>voire l'etiquette de cette recette</ActionCard> */}
                    {/* <Modal
                        size="3xl"
                        isOpen={isOpen}
                        onClose={onClose}
                        motionPreset="slideInBottom"
                        scrollBehavior="inside"
                    >
                        <ModalFrame name={recipe.name} fingerprint={recipe.id} />
                    </Modal> */}
                </MixInfos>

                <MixList tma={recipe.aromes} tm={recipe} />
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
