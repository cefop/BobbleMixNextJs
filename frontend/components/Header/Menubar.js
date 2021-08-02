import Link from 'next/link';
// import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button, Tag, Avatar, TagLabel, ButtonGroup } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { MenubarContainer, MenuLogo, MenuLinks, MenuProfile } from './StyledHeader';

const Menubar = () => {
    // const router = useRouter();
    // console.log(router.route);
    const [session] = useSession();

    const links = [
        { id: 1, link: '/mixeur', name: 'mixeur' },
        { id: 2, link: '/toprecipe', name: 'top recettes' },
    ];

    return (
        <MenubarContainer>
            <MenuLogo>
                <Link href="/">
                    <a>
                        <Image src="/assets/bobble-logo-black.png" alt="booble mix" />
                    </a>
                </Link>
            </MenuLogo>

            <MenuLinks>
                <ButtonGroup spacing="6">
                    {links.map((l) => (
                        <Link href={l.link} key={l.id}>
                            <a>{l.name}</a>
                        </Link>
                    ))}
                </ButtonGroup>
            </MenuLinks>

            <MenuProfile>
                {!session && <a onClick={() => signIn()}>se connecter</a>}
                {session && (
                    <ButtonGroup spacing="6">
                        <Link href="/profile">
                            <a>
                                <Tag mt={2}>
                                    <Avatar
                                        size="sm"
                                        src={session.user.image}
                                        name={session.user.email ? session.user.email : session.user.name}
                                        mr={2}
                                    />
                                    <TagLabel fontWeight="600" fontSize="1.1rem">
                                        {session.user.email
                                            ? session.user.email
                                            : session.user.name.toLocaleLowerCase()}
                                    </TagLabel>
                                </Tag>
                            </a>
                        </Link>

                        <Link href="/">
                            <a onClick={() => signOut()}>
                                <Button mt={1} fontSize="1.1rem">
                                    se déconnecter
                                </Button>
                            </a>
                        </Link>
                    </ButtonGroup>
                )}
            </MenuProfile>
        </MenubarContainer>
    );
};
export default Menubar;
