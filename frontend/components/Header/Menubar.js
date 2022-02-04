import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Tag, Avatar, ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react';
import { BiLogInCircle } from 'react-icons/bi';
import { MenubarContainer, MenuLogo, MenuLogo2, MenuLinks, MenuProfile } from './StyledHeader';
import BobbleMixLogo from '../styles/BobbleMixLogo';
import BobbleLiquideLogo from '../styles/BobbleLiquideLogo';
import { BobbleUserContext } from '../hooks/BobbleUserContext';
import { QUERY_USER_IS_SHOP } from '../gql/graphql';

const Menubar = () => {
    const { bobbleUser, setBobbleUser } = useContext(BobbleUserContext);
    const [session] = useSession();
    const links = [
        { id: 1, link: '/mixeur', name: 'mixeur' },
        { id: 2, link: '/toprecipe', name: 'top recettes' },
        { id: 3, link: '/profile#user_recipes_page', name: 'mes recettes' },
    ];
    // console.log('session', session && session.user);
    const baseurl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bobblemix.com';

    // TODO this block has the purpose of getting more info of the user and put it inside the app context when the user is logged
    // ? get the user email
    const user_email = session && session?.user?.email;
    // ? get the shop info from email
    const { loading, error, data } = useQuery(QUERY_USER_IS_SHOP, { variables: { email: user_email } });
    // ? get the shop info then put it on context
    useEffect(() => {
        setBobbleUser(data);
        console.log('context user shop', data);
    }, [data]);
    // console.log('context user shop', bobbleUser.users[0].lenght);
    // users[0].shops;

    return (
        <MenubarContainer id="bobble_head">
            <MenuLogo>
                <Link href="/">
                    <a>
                        <BobbleMixLogo boxSize={'50%'} />
                    </a>
                </Link>
            </MenuLogo>

            <MenuLinks>
                {links.map((l, k) => (
                    <div key={k} className="itemLink">
                        <Link href={l.link} key={l.id}>
                            <a>{l.name}</a>
                        </Link>
                    </div>
                ))}
                {bobbleUser?.users?.[0]?.shops.length > 0 && (
                    <div className="itemLink">
                        <Link href="/tx">
                            <a>Vos transactions</a>
                        </Link>
                    </div>
                )}
            </MenuLinks>

            <MenuProfile>
                {!session && <a onClick={() => signIn()}>se connecter</a>}
                {session && (
                    <ButtonGroup spacing="6">
                        <Link href="/profile">
                            <a>
                                <Tag mt={2}>
                                    <Tooltip
                                        label={
                                            session.user.email
                                                ? session.user.email
                                                : session.user.name.toLocaleLowerCase()
                                        }
                                        fontSize="md"
                                        bg="black"
                                    >
                                        {session.user.image ? (
                                            <Avatar
                                                size="sm"
                                                name={
                                                    session.user.name
                                                        ? String(session.user.name)
                                                        : String(session.user.email)
                                                }
                                                src={String(session.user.image)}
                                                mr={2}
                                            />
                                        ) : (
                                            <Avatar
                                                size="sm"
                                                name={
                                                    session.user.name
                                                        ? String(session.user.name)
                                                        : String(session.user.email)
                                                }
                                                mr={2}
                                            />
                                        )}
                                    </Tooltip>
                                </Tag>
                            </a>
                        </Link>

                        <div>
                            <Tooltip label="Se déconnecter" fontSize="md" bg="black">
                                <IconButton
                                    mt={2}
                                    mr={2}
                                    size="sm"
                                    aria-label="logout"
                                    icon={<BiLogInCircle size={39} color="rgb(121, 121, 121)" />}
                                    onClick={() =>
                                        signOut({
                                            callbackUrl: baseurl,
                                        })
                                    }
                                />
                            </Tooltip>
                        </div>
                    </ButtonGroup>
                )}
            </MenuProfile>
            <MenuLogo2>
                <Link href="https://www.bobbleliquide.com/">
                    <a>
                        <BobbleLiquideLogo boxSize={'50%'} />
                    </a>
                </Link>
            </MenuLogo2>
        </MenubarContainer>
    );
};
export default Menubar;
