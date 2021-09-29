import styled from '@emotion/styled';
import PageLayout from '../components/styles/PageLayout';

const TosLayout = styled.div`
    /* border: 1px solid fuchsia; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    p {
        padding-bottom: 1rem;
    }
    h4 {
        font-size: 1.75rem;
        font-weight: 700;
        padding: 1rem 0;
    }
    h5 {
        font-size: 1rem;
        font-weight: 600;
        padding: 0;
    }
`;

export default function Tos() {
    return (
        <PageLayout title="Mentions légales et C.G.U">
            <TosLayout>
                <div>
                    <h4>L'entreprise</h4>
                    <h5>CEFOP</h5>
                    <p>
                        SAS au capital de 50 000€
                        <br />
                        8, Avenue du Bouton d'or 94370 Sucy-en-Brie
                    </p>
                    <p>N° RCS: Bobigny 810122671</p>
                    <p>N° TVA: FR45 810 122 671</p>
                    <p>
                        Directeur de publication : Fabrice GRORET
                        <br />
                        mail: admin at bobbleliquide dot com
                        <br />
                        tel: +33 (0)1 84 69 00 30
                        <br />
                    </p>
                </div>
                <div>
                    <h4>Hébergement</h4>
                    <h5>Gandi SAS</h5>
                    63-65 boulevard Massena Paris (75013) FRANCE
                    <br />
                    Tel : +33 (0)1 70 37 76 61
                    <h4>Déclaration CNIL</h4>
                    <h5>Déclaration CNIL numéro : xxxxxx</h5>
                    <h4>Conditions Générales d'Utilisation</h4>
                </div>
            </TosLayout>
        </PageLayout>
    );
}
