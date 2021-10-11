import Loading from '../../components/Loading';
import PageLayout from '../../components/styles/PageLayout';

const CheckingEmail = () => {
    return (
        <PageLayout title="Vérifier votre boite mail">
            <p>Un lien de connexion rapide vous a été envoyé.</p>
            <br />
            <Loading />
        </PageLayout>
    );
};

export default CheckingEmail;
