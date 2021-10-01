import styled from '@emotion/styled';
import CenterGridLayout from '../components/styles/CenterGridLayout';

const TosLayout = styled.div`
    /* border: 1px solid lime; */
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 3rem;
`;

const Mentions = styled.div`
    /* border: 1px solid khaki; */
    display: grid;
    padding-top: 1rem;
`;

const TosSubtitle = styled.div`
    /* border: 1px solid red; */
    background-color: lightgrey;
    text-align: left;
    text-transform: capitalize;
    font-size: 1.33rem;
    font-weight: 700;
    margin-top: 2rem;
    padding: 0.75rem 0;
    padding-left: 12.5%;
`;

const Blocks = styled.div`
    /* border: 1px solid paleturquoise; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: top;
    text-align: left;
    h4 {
        font-size: 1.22rem;
        font-weight: 700;
        text-transform: uppercase;
        color: orange;
        padding: 1.2rem 0;
    }
    ul {
        list-style: none;
        padding-bottom: 1.33rem;
    }
`;
const BlockLeft = styled.div``;
const BlockRight = styled.div``;
const BlockCenter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem 13%;
    text-align: justify;
    text-justify: inter-word;
`;

export default function Tos() {
    return (
        <CenterGridLayout
            title="Légales"
            subtitle={'et C.G.U'}
            data={[]}
            // background="https://res.cloudinary.com/dagmffgu0/image/upload/v1632472246/bobble_mix_assets/Fioles%20%2B%20fond/fiole_top_recette_rralb3.png"
        >
            <TosLayout>
                <Mentions>
                    <TosSubtitle>Mentions légales</TosSubtitle>
                    <Blocks>
                        <BlockLeft>
                            <h4>L'entreprise</h4>
                            <div>
                                <ul>
                                    <li>CEFOP</li>
                                    <li>SAS au capital de 50 000€</li>
                                    <li>8, Avenue du Bouton d'or 94370 Sucy-en-Brie</li>
                                </ul>
                                <ul>
                                    <li>N° RCS: Bobigny 810122671</li>
                                </ul>
                                <ul>
                                    <li>N° TVA: FR45 810 122 671</li>
                                </ul>
                                <ul>
                                    <li>Directeur de publication : Fabrice GRORET</li>
                                    <li>Mail: admin@bobbleliquide.com</li>
                                    <li>Tel: +33 (0)1 84 69 00 30</li>
                                </ul>
                            </div>
                        </BlockLeft>
                        <BlockRight>
                            <h4>Hébergement</h4>
                            <ul>
                                <li>Gandi SAS</li>
                                <li>63-65 boulevard Massena Paris (75013) FRANCE</li>
                                <li>Tel : +33 (0)1 70 37 76 61</li>
                            </ul>
                            <h4>Déclaration CNIL</h4>
                            <ul>
                                <li>Déclaration CNIL numéro : xxxxxx</li>
                            </ul>
                        </BlockRight>
                    </Blocks>
                </Mentions>
                <div>
                    <TosSubtitle>Conditions Générales d'Utilisation</TosSubtitle>
                    <BlockCenter>
                        <p>
                            You are my fire The one desire Believe when I say I want it that way But we are two worlds
                            apart Can't reach to your heart When you say That I want it that way Ain't nothing but a
                            heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna hear you say I
                            want it that way You are my fire The one desire Believe when I say I want it that way But we
                            are two worlds apart Can't reach to your heart When you say That I want it that way Ain't
                            nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna
                            hear you say I want it that way You are my fire The one desire Believe when I say I want it
                            that way But we are two worlds apart Can't reach to your heart When you say That I want it
                            that way Ain't nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I
                            never wanna hear you say I want it that way You are my fire The one desire Believe when I
                            say I want it that way But we are two worlds apart Can't reach to your heart When you say
                            That I want it that way Ain't nothing but a heartache Tell me why Ain't nothing but a
                            mistake Tell me why I never wanna hear you say I want it that way
                        </p>
                        <br />
                        <p>
                            You are my fire The one desire Believe when I say I want it that way But we are two worlds
                            apart Can't reach to your heart When you say That I want it that way Ain't nothing but a
                            heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna hear you say I
                            want it that way You are my fire The one desire Believe when I say I want it that way But we
                            are two worlds apart Can't reach to your heart When you say That I want it that way Ain't
                            nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna
                            hear you say I want it that way You are my fire The one desire Believe when I say I want it
                            that way But we are two worlds apart Can't reach to your heart When you say That I want it
                            that way Ain't nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I
                            never wanna hear you say I want it that way You are my fire The one desire Believe when I
                            say I want it that way But we are two worlds apart Can't reach to your heart When you say
                            That I want it that way Ain't nothing but a heartache Tell me why Ain't nothing but a
                            mistake Tell me why I never wanna hear you say I want it that way
                        </p>
                        <br />
                        <p>
                            You are my fire The one desire Believe when I say I want it that way But we are two worlds
                            apart Can't reach to your heart When you say That I want it that way Ain't nothing but a
                            heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna hear you say I
                            want it that way You are my fire The one desire Believe when I say I want it that way But we
                            are two worlds apart Can't reach to your heart When you say That I want it that way Ain't
                            nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna
                            hear you say I want it that way You are my fire The one desire Believe when I say I want it
                            that way But we are two worlds apart Can't reach to your heart When you say That I want it
                            that way Ain't nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I
                            never wanna hear you say I want it that way You are my fire The one desire Believe when I
                            say I want it that way But we are two worlds apart Can't reach to your heart When you say
                            That I want it that way Ain't nothing but a heartache Tell me why Ain't nothing but a
                            mistake Tell me why I never wanna hear you say I want it that way
                        </p>
                        <br />
                        <p>
                            You are my fire The one desire Believe when I say I want it that way But we are two worlds
                            apart Can't reach to your heart When you say That I want it that way Ain't nothing but a
                            heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna hear you say I
                            want it that way You are my fire The one desire Believe when I say I want it that way But we
                            are two worlds apart Can't reach to your heart When you say That I want it that way Ain't
                            nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I never wanna
                            hear you say I want it that way You are my fire The one desire Believe when I say I want it
                            that way But we are two worlds apart Can't reach to your heart When you say That I want it
                            that way Ain't nothing but a heartache Tell me why Ain't nothing but a mistake Tell me why I
                            never wanna hear you say I want it that way You are my fire The one desire Believe when I
                            say I want it that way But we are two worlds apart Can't reach to your heart When you say
                            That I want it that way Ain't nothing but a heartache Tell me why Ain't nothing but a
                            mistake Tell me why I never wanna hear you say I want it that way
                        </p>
                        <br />
                    </BlockCenter>
                </div>
            </TosLayout>
        </CenterGridLayout>
    );
}
