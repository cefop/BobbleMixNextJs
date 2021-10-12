import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useUser } from '../hooks/useUser';
import { QUERY_USER_RECIPES } from '../gql/graphql';
import ActionIcon, { NoUser } from './ActionIcon';

const ActionsBarContainer = styled.div`
    /* border: 4px solid pink; */
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
        /* padding: 0.3em 0.5em; */
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
        /* border: 1px solid salmon; */
        display: grid;
        justify-content: end;
        padding-right: 3em;
    }
    .action_right {
        /* border: 1px solid chartreuse; */
        display: grid;
        grid-template-columns: auto 140px;
        justify-content: start;
        align-items: center;
        padding-left: 3em;
    }
`;

const ActionsBar = (props) => {
    const { recipe } = props;
    const router = useRouter();
    const { user, session } = useUser();
    const uid = session && session.id ? parseInt(session.id) : null;

    const { data } = useQuery(QUERY_USER_RECIPES, { variables: { uid: uid } });

    return (
        <ActionsBarContainer>
            <div className="action_left">
                <Button
                    variant="solid"
                    className="btn_actionbar"
                    style={{ boxShadow: 'none' }}
                    onClick={() =>
                        router.push({
                            pathname: '/label',
                            query: { fingerprint: recipe.fingerprint },
                        })
                    }
                >
                    Étiquette de la recette
                </Button>
            </div>
            <div className="action_right">
                <Link
                    href={{
                        pathname: '/fds',
                        query: { fingerprint: recipe.fingerprint },
                    }}
                >
                    <a target="_blank">
                        <Button
                            variant="solid"
                            className="btn_actionbar"
                            style={{ boxShadow: 'none' }}
                            // onClick={() =>
                            //     router.push({
                            //         pathname: '/fds',
                            //         query: { fingerprint: recipe.fingerprint },
                            //     })
                            // }
                        >
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
