import Link from 'next/link';
// import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Flex, Spacer, Box, HStack, VStack } from '@chakra-ui/layout';
import { useDisclosure, Button, Collapse, Divider, Tag, Avatar, TagLabel } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, ItemLink, MenuBtn } from './StyledHeader';
import Logo from './Logo';

const Menubar = () => {
    // const router = useRouter();
    const { isOpen, onToggle } = useDisclosure();
    const [session] = useSession();
    // console.log(router.route);

    return (
        <Box width="100%">
            <Flex
                display={['none', null, 'flex']}
                width="100%"
                justifyContent="space-between"
                backgroundColor="#FEFEFE"
                borderBottom="5px solid #ed9500"
            >
                <Menu>
                    <HStack>
                        <Logo />
                        <Link href="/mixeur">
                            <ItemLink>mixeur</ItemLink>
                        </Link>
                        <Link href="/toprecipe">
                            <ItemLink>top recettes</ItemLink>
                        </Link>
                    </HStack>
                </Menu>

                <Spacer />
                <Menu>
                    <HStack pr={5}>
                        {!session && <MenuBtn onClick={() => signIn()}>se connecter</MenuBtn>}
                        {session && (
                            <>
                                <Link href="/profile">
                                    <ItemLink>
                                        <Tag colorScheme="white" borderRadius="full" variant="outline">
                                            <Avatar
                                                src={session.user.image}
                                                size="xs"
                                                name={session.user.email ? session.user.email : session.user.name}
                                                ml={-1}
                                                mr={2}
                                            />
                                            <TagLabel>
                                                {session.user.email
                                                    ? session.user.email.toLowerCase()
                                                    : session.user.name.toLowerCase()}
                                            </TagLabel>
                                        </Tag>
                                    </ItemLink>
                                </Link>
                                <MenuBtn onClick={() => signOut()}>se déconnecter</MenuBtn>
                            </>
                        )}
                    </HStack>
                </Menu>
            </Flex>
            <Box display={['block', null, 'none']}>
                <Flex alignItems="center" justifyContent="space-between" width="100%" bg="white">
                    <Logo />
                    <Button rounded="none" bg="white" _focus={{ outline: 'none' }} onClick={onToggle}>
                        <HamburgerIcon color="black" fontSize="1.8rem" />
                    </Button>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Divider opacity="10" />
                    <Box p="40px" color="black" bg="white" rounded="none" shadow="md">
                        <VStack pr={5} alignItems="baseline">
                            <Link href="/mixeur">
                                <ItemLink>mixeur</ItemLink>
                            </Link>
                            <Link href="/toprecipe">
                                <ItemLink>top recettes</ItemLink>
                            </Link>
                        </VStack>
                        <Divider mb={3} />
                        {!session && <MenuBtn onClick={() => signIn()}>se connecter</MenuBtn>}
                        {session && (
                            <VStack pr={5} alignItems="baseline">
                                <MenuBtn>{session.user.email ? session.user.email : session.user.name}</MenuBtn>
                                <MenuBtn onClick={() => signOut()}>se déconnecter</MenuBtn>
                            </VStack>
                        )}
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
};
export default Menubar;
