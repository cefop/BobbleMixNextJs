import { useContext } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdOpacity } from 'react-icons/md';
import { BobbleMixContext } from '../hooks/BobbleMixContext';
import GetSortOrder from '../lib/SortOder';
import CustomReduceFilter from '../lib/CustomReduceFilter';
import getObjectByValue from '../lib/ObjectByValue';
import { Bobble1L, ImageBox, ImageBottle, LabelBottle } from './StyleMixeur';

const UserRecipeRender = (props) => {
    const { bobbleMix } = useContext(BobbleMixContext);
    const { list } = props;
    const results = CustomReduceFilter(bobbleMix);
    const gso = results.sort(GetSortOrder('id'));
    const MaxMix = 5;
    const VolMax = 40;

    return (
        <>
            <Bobble1L>
                <ImageBox>
                    <ImageBottle
                        src={getObjectByValue(bobbleMix, 'id', list.id)[0].image}
                        alt={getObjectByValue(bobbleMix, 'id', list.id)[0].name}
                    />
                </ImageBox>
                <LabelBottle>
                    <Icon as={MdOpacity} color="orange.100" />
                    {gso.length !== 2 && bobbleMix.length === 2
                        ? `${new Intl.NumberFormat('fr-FR', {
                              maximumFractionDigits: 2,
                          }).format(list.volume)} ml`
                        : `${new Intl.NumberFormat('fr-FR', {
                              maximumFractionDigits: 2,
                          }).format(((VolMax / bobbleMix.length) * list.volume) / 10)}  ml`}
                    <div>{getObjectByValue(bobbleMix, 'id', list.id)[0].name}</div>
                </LabelBottle>
            </Bobble1L>
            {gso.length === 1 && <div>Ajouter au minimum un arome</div>}
            {bobbleMix.length >= 3 && bobbleMix.length <= 4 && (
                <div>
                    Possibilité d'ajouter {MaxMix - bobbleMix.length} quantité
                    {bobbleMix.length <= 3 ? 's' : ''} ou arome
                    {bobbleMix.length <= 3 ? 's' : ''}
                </div>
            )}
        </>
    );
};
export default UserRecipeRender;
