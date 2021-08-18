// H317  et  H412 ou H413
// P 101	En cas de consultation d'un médecin, garder à disposition le récipient ou l'étiquette
// P 102	Tenir hors de portée des enfants
// P 270	Ne pas manger, boire, ou fumer en manipulant ce produit
// P 302 + P 352	EN CAS DE CONTACT AVEC LA PEAU : laver abondamment à l'eau et au savon
// P273	Éviter le rejet dans l'environnement.
// P 501	Eliminer le contenu dans un centre de traitement agréé
import { Tr } from '@chakra-ui/react';
import { TdData } from './FDSStyle';

const MentionDangerH317_H412_413 = () => {
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
                <TdData>P270</TdData>
                <TdData>Ne pas manger, boire ou fumer en manipulant ce produit.</TdData>
            </Tr>
            <Tr>
                <TdData>P302+P352</TdData>
                <TdData>EN CAS DE CONTACT AVEC LA PEAU: laver abondamment à l’eau et au savon.</TdData>
            </Tr>
            <Tr>
                <TdData>P273</TdData>
                <TdData>Éviter le rejet dans l'environnement.</TdData>
            </Tr>
            <Tr>
                <TdData>P501</TdData>
                <TdData>Éliminer le contenu dans un cenTre de Traitement agréé.</TdData>
            </Tr>
        </>
    );
};
export default MentionDangerH317_H412_413;
