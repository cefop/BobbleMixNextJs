import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useUser } from '../hooks/useUser';
import { QUERY_USER_RECIPES } from '../gql/graphql';
import { MixContainer, MixInfos, RecipeContainer, ActionCard } from './StyleRecipe';
import MixList from './MixList';
import UserAddRmRecipe from './userAddRmRecipe';

const UserRecipe = (props) => {
    const { recipe } = props;
    const router = useRouter();
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;

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
                        visualisez l'etiquette de cette recette
                    </ActionCard>

                    <ActionCard
                        onClick={() =>
                            router.push({
                                pathname: '/fds',
                                query: { fingerprint: recipe.fingerprint },
                            })
                        }
                    >
                        visualisez la fiche de securité de la recette
                    </ActionCard>
                </MixInfos>
                <MixList recipe={recipe} />
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
