// H226
// P 101	En cas de consultation d'un médecin, garder à disposition le récipient ou l'étiquette
// P 102	Tenir hors de portée des enfants
// P 210	Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues et de toute autre source d'inflammation. Ne pas fumer.
// P 270	Ne pas manger, boire, ou fumer en manipulant ce produit
// P 264	Se laver les mains soigneusement après manipulation
// P 501	Eliminer le contenu dans un centre de traitement agréé
import { Tr } from '@chakra-ui/react';
import { TdData } from '../FDSStyle';

const MentionDangerH226 = () => {
    return (
        <>
            <Tr>
                <TdData>P101</TdData>
                <TdData>En cas de consultation d'un médecin, garder à disposition le récipient ou l'étiquette</TdData>
            </Tr>
            <Tr>
                <TdData>P102</TdData>
                <TdData>Tenir hors de portée des enfants.</TdData>
            </Tr>
            <Tr>
                <TdData>P210</TdData>
                <TdData>
                    Tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues et de toute
                    autre source d'inflammation. Ne pas fumer.
                </TdData>
            </Tr>
            <Tr>
                <TdData>P270</TdData>
                <TdData>Ne pas manger, boire ou fumer en manipulant ce produit.</TdData>
            </Tr>
            <Tr>
                <TdData>P264</TdData>
                <TdData>Se laver les mains soigneusement après manipulation</TdData>
            </Tr>
            <Tr>
                <TdData>P501</TdData>
                <TdData>Éliminer le contenu dans un centre de Traitement agréé.</TdData>
            </Tr>
        </>
    );
};
export default MentionDangerH226;
