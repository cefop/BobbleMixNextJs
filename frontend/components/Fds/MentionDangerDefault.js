// Non classé
// P 101	En cas de consultation d'un médecin, garder à disposition le récipient ou l'étiquette
// P 102	Tenir hors de portée des enfants
// P 264	Se laver les mains soigneusement après manipulation
import { Tr } from '@chakra-ui/react';
import { TdData } from './FDSStyle';

const MentionDangerDefault = () => {
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
                <TdData>P264</TdData>
                <TdData>Se laver les mains soigneusement après manipulation</TdData>
            </Tr>
        </>
    );
};
export default MentionDangerDefault;
