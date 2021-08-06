import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import PageLayout from '../components/styles/PageLayout';
import ProfileContainer from '../components/Profile';

export default function Profile() {
    const { user } = useUser();
    return (
        <>
            {!user ? (
                <NotAuth />
            ) : (
                <PageLayout title="Mes recettes">
                    <ProfileContainer />
                </PageLayout>
            )}
        </>
    );
}
