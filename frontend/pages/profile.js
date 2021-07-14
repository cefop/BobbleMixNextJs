import { Box } from '@chakra-ui/react';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';

export default function Profile() {
    const { user } = useUser();
    console.log(user);
    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <Box textAlign="center" marginTop="100px">
                    <ul>
                        <li>Nom : {user.name}</li>
                        <li>Email: {user.email ? user.email : "pas d'email!"}</li>
                    </ul>
                    <br />
                    <p>Sauvegardez vos recettes bobble mix</p>
                </Box>
            )}
        </>
    );
}
