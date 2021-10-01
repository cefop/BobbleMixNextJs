import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Avatar, Tooltip, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaUserSlash } from 'react-icons/fa';
import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import { UserRGPD } from '../styles/AlertAndToast';

const UserGrid = styled.div`
    /* border: 1px solid greenyellow; */
`;

const UserInfos = styled.div`
    /* border: 1px solid orangered; */
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 3rem;
    align-items: center;
`;

const UserName = styled.h3`
    font-size: 2.8rem;
    font-weight: 700;
    text-align: start;
    text-transform: capitalize;
    span {
        color: orange;
    }
`;

const UserRecipesData = styled.div`
    /* border: 1px solid cyan; */
    display: grid;
    height: 28vh;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
`;

const BlockInfo = styled.div`
    /* border: 1px solid rebeccapurple; */
    width: 100%;
    h4 {
        /* border: 1px solid yellow; */
        text-align: start;
        text-transform: uppercase;
        font-size: 1.8rem;
        font-weight: 700;
    }
    .totRecipes {
        /* border: 1px solid red; */
        width: 100%;
        text-align: left;
        font-size: 4.3rem;
        font-weight: 700;
        color: orange;
    }
    .number {
        padding-left: 1.33em;
    }
`;

const WhitchIsIt = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    &:hover {
        cursor: pointer;
    }
    h5 {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 300;
        color: black;
        align-self: center;
        justify-self: left;
    }
`;

const UserHeader = (props) => {
    const { user } = props;
    const PopularOne = user && user.users_recipes && user.users_recipes[0] && user.users_recipes[0].recipe;
    const router = useRouter();
    const today = new Date();
    const hour = format(today, 'HH', { locale: frenchLocale });
    const greatings = [
        'Hello',
        'Алло!',
        'أهلا',
        'Dzień dobry',
        'Xin chào',
        'שלום',
        'bonjour',
        'こんにちは',
        'bonjour',
        'bonjour',
    ];

    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    return (
        <UserGrid>
            <UserInfos>
                <Avatar size="xl" name={user.name} src={user.image} />
                <UserName id={user.id}>
                    {hour >= 19 && hour <= 23 ? 'bonsoir' : greatings.random()} <span>{user.name}</span>&nbsp;!
                </UserName>
                <>
                    <Tooltip
                        label={`Gérer votre compte ${user.email ? user.email : user.name}`}
                        fontSize="md"
                        bg="black"
                    >
                        <div>
                            <span style={{ color: 'red' }}>RGPD</span>
                            <IconButton
                                style={{ boxShadow: 'none' }}
                                aria-label={'Effacer votre compte!'}
                                icon={<FaUserSlash size={'2em'} color="rgb(121, 121, 121)" />}
                                onClick={() =>
                                    UserRGPD.fire({
                                        title: 'Gérer vos données..?',
                                        html: `<center>Pour télécharger vos recettes veuillez envoyer un mail à contact@bobbleliquide.com</center><br/><br/><center style="text-align: justify;text-justify: inter-word;"><p>Si vous supprimez votre compte, vous ne serez plus en mesure de récupérer vos recettes. Toutes les données de votre compte BobbleMix seront suprimées.</p><br/><p>${user.name}, si vous etes certain, merci de confirmer votre choix ci-dessous. Nous sommes triste de vous voir partir mais ésperons vous revoir bientôt !</p></center`,
                                    })
                                }
                            />
                        </div>
                    </Tooltip>
                </>
            </UserInfos>
            <UserRecipesData>
                <BlockInfo>
                    <h4>recettes crées</h4>
                    <div className="totRecipes number">{user.users_recipes.length}</div>
                </BlockInfo>
                <BlockInfo>
                    <h4>recette la plus populaire</h4>
                    <div className="totRecipes">
                        {user && user.users_recipes && user.users_recipes[0] && user.users_recipes[0].recipe ? (
                            <WhitchIsIt
                                onClick={() =>
                                    router.push({
                                        pathname: '/recipe',
                                        query: { fingerprint: PopularOne.fingerprint },
                                    })
                                }
                            >
                                <div>
                                    <Tooltip
                                        label={`${PopularOne.users_recipes_aggregate.aggregate.count} personnes en sont fan!`}
                                        fontSize="md"
                                        bg="black"
                                    >
                                        <IconButton
                                            style={{ boxShadow: 'none' }}
                                            aria-label={'Voir la recette'}
                                            icon={<StarIcon w={16} h={16} color="orange" />}
                                        />
                                    </Tooltip>
                                </div>
                                <h5>
                                    <Tooltip label={`voir cette recette!`} fontSize="md" bg="black">
                                        {PopularOne.name}
                                    </Tooltip>
                                </h5>
                            </WhitchIsIt>
                        ) : (
                            <div>👋⚗️💨💨</div>
                        )}
                    </div>
                </BlockInfo>
            </UserRecipesData>
        </UserGrid>
    );
};
export default UserHeader;
