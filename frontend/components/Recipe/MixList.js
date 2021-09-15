import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { base, boosterNico } from '../lib/ProductsDIY';
import { Fieldset, MixLists, OptionContainer, OptionsList } from './StyleRecipe';
import { Bobble1L, ImageBottle, ImageBox, LabelBottle } from '../Mixeur/StyleMixeur';
import { infosFromFingerprint } from '../lib/infosFromFingerprint';

const MixList = (props) => {
    const { recipe } = props;
    const massEliquide = 1.15; // (aver. PG/VG mass in grammes per milliliter)
    // get an arr of all arome and their ratio in the mix
    const aromesRatio = infosFromFingerprint(recipe.fingerprint);

    return (
        <MixLists>
            <Table size="sm" colorScheme="orange" variant="striped">
                <TableCaption placement="top">calculé à partir du volume total d'arôme qui est de 40ml</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Arômes</Th>
                        <Th>Millilitres</Th>
                        <Th>Grammes</Th>
                        <Th isNumeric>Pourcentages</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {aromesRatio.map((a) => (
                        <Tr key={a.arome}>
                            <Td>{a.arome}</Td>
                            <Td>{((a.percent * 40) / 100).toFixed(1)}ml</Td>
                            <Td>{(((a.percent * 40) / 100) * massEliquide).toFixed(1)}g</Td>
                            <Td isNumeric>{a.percent}%</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <OptionContainer>
                <Fieldset>
                    <legend>Vos options</legend>
                    <OptionsList>
                        <Bobble1L>
                            <ImageBox>
                                <ImageBottle alt={base[0].name} src={base[0].image} />
                            </ImageBox>
                            <LabelBottle>{base[0].name}</LabelBottle>
                        </Bobble1L>
                        {recipe.nicotine !== 0 && (
                            <Bobble1L>
                                <ImageBox>
                                    <ImageBottle
                                        alt={boosterNico[recipe.nicotine].name}
                                        src={boosterNico[recipe.nicotine].image}
                                    />
                                </ImageBox>
                                <LabelBottle>{boosterNico[recipe.nicotine].name}</LabelBottle>
                            </Bobble1L>
                        )}
                    </OptionsList>
                </Fieldset>
            </OptionContainer>
        </MixLists>
    );
};

export default MixList;
