import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Tag, Avatar, ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { BiLogInCircle } from 'react-icons/bi';
import { MenubarContainer, MenuLogo, MenuLogo2, MenuLinks, MenuProfile } from './StyledHeader';

const Menubar = () => {
    const [session] = useSession();
    const links = [
        { id: 1, link: '/mixeur', name: 'mixeur' },
        { id: 2, link: '/toprecipe', name: 'top recettes' },
    ];
    // console.log('session', session && session.user);
    // TODO call USER QUERY from db to get user saved info

    return (
        <MenubarContainer id="bobble_head">
            <MenuLogo>
                <Link href="/">
                    <a>
                        <Image
                            src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630931038/BobbleMix_Logos/logo_header_h75px_qnfipg.png"
                            alt="booble mix"
                        />
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
                                    onClick={() => signOut()}
                                />
                            </Tooltip>
                        </div>
                    </ButtonGroup>
                )}
            </MenuProfile>
            <MenuLogo2>
                <Link href="https://www.bobbleliquide.com/">
                    <a>
                        <Image
                            src="https://res.cloudinary.com/dagmffgu0/image/upload/v1632390513/bobble_mix_assets/logos/logo_bobble_liquide_128px_kxhmkv.png"
                            alt="booble mix"
                        />
                    </a>
                </Link>
            </MenuLogo2>
        </MenubarContainer>
    );
};
export default Menubar;
