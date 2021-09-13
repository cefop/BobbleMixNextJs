import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { base, boosterNico } from '../lib/ProductsDIY';
import { Fieldset, MixLists, OptionContainer, OptionsList } from './StyleRecipe';
import { Bobble1L, ImageBottle, ImageBox, LabelBottle } from '../Mixeur/StyleMixeur';

const MixList = (props) => {
    const { tma, tm } = props;
    const GroupFlavor = (array, key) => {
        let occurenceArray = [];
        array.forEach((x) => {
            if (
                occurenceArray.some((val) => {
                    return val[key] === x[key];
                })
            ) {
                occurenceArray.forEach((y) => {
                    if (y[key] === x[key]) {
                        y.rating++;
                    }
                });
            } else {
                const a = {};
                a[key] = x[key];
                a.name = x.name;
                a.rating = 1;
                occurenceArray = [...occurenceArray, a];
            }
        });
        return occurenceArray;
    };
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
                    {GroupFlavor(tma, 'id').map((m) => {
                        return (
                            <Tr key={m.id}>
                                <Td>{m.name}</Td>
                                <Td>{((40 / tma.length) * m.rating).toFixed(0)}ml</Td>
                                <Td>{((40 / tma.length) * m.rating).toFixed(0)}g</Td>
                                <Td isNumeric>{((((40 / tma.length) * 100) / 40) * m.rating).toFixed(0)}%</Td>
                            </Tr>
                        );
                    })}
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
                        {tm.nicotine !== 0 && (
                            <Bobble1L>
                                <ImageBox>
                                    <ImageBottle
                                        alt={boosterNico[tm.nicotine].name}
                                        src={boosterNico[tm.nicotine].image}
                                    />
                                </ImageBox>
                                <LabelBottle>{boosterNico[tm.nicotine].name}</LabelBottle>
                            </Bobble1L>
                        )}
                    </OptionsList>
                </Fieldset>
            </OptionContainer>
        </MixLists>
    );
};

export default MixList;
