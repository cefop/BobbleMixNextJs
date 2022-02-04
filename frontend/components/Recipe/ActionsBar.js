import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useUser } from '../hooks/useUser';
import { QUERY_USER_RECIPES } from '../gql/graphql';
import ActionIcon, { NoUser } from './ActionIcon';

const ActionsBarContainer = styled.div`
    background-color: #f2f2f2;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .btn_actionbar {
        background-color: orange;
        color: white;
        height: 3.5em;
        width: 11em;
        font-size: 0.9em;
        font-weight: 600;
        white-space: pre-line;
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        outline: none;
        transition: 0.2s all;
        &:active {
            outline: none;
            background-color: rgb(250, 183, 82);
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
    .action_left {
        display: grid;
        justify-content: end;
        padding-right: 3em;
    }
    .action_right {
        display: grid;
        grid-template-columns: auto 140px;
        justify-content: start;
        align-items: center;
        padding-left: 3em;
    }
`;

const ActionsBar = (props) => {
    const { recipe, shop } = props;
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;
    const { data } = useQuery(QUERY_USER_RECIPES, { variables: { uid: uid } });
    // console.log('info shop', shop);
    console.log(recipe);

    return (
        <ActionsBarContainer>
            {shop?.shops.length > 0 ? (
                <div className="action_left">
                    <a
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_ETIQUETT_APP}/?fingerprint=${recipe.fingerprint}&rid=${recipe.id}&shop=${shop.shops[0].name}&shopid=${shop.shops[0].id}`}
                    >
                        <Button variant="solid" className="btn_actionbar" style={{ boxShadow: 'none' }}>
                            Étiquette de la recette
                        </Button>
                    </a>
                </div>
            ) : (
                <div className="action_left">
                    <Link
                        href={{
                            pathname: '/profile',
                        }}
                    >
                        <a>
                            <Button variant="solid" className="btn_actionbar" style={{ boxShadow: 'none' }}>
                                login shop
                            </Button>
                        </a>
                    </Link>
                </div>
            )}

            <div className="action_right">
                <Link
                    href={{
                        pathname: '/fds',
                        query: { fingerprint: recipe.fingerprint },
                    }}
                >
                    <a target="_blank">
                        <Button variant="solid" className="btn_actionbar" style={{ boxShadow: 'none' }}>
                            Fiche de sécurité de la recette
                        </Button>
                    </a>
                </Link>

                {user && data ? <ActionIcon recipe={recipe} ownedRecipe={data} uid={uid} /> : <NoUser />}
            </div>
        </ActionsBarContainer>
    );
};
export default ActionsBar;
