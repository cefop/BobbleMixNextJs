import styled from '@emotion/styled';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Image } from '@chakra-ui/react';
import { boosterNico, base } from '../lib/ProductsDIY';

const RecipeContainer = styled.div`
    display: grid;
    justify-content: center;
    align-content: top;
    color: black;
`;

const MixContainer = styled.div`
    width: 600px;
    display: grid;
    grid-template-rows: auto 1fr;
    /* border: 1px solid cyan; */
`;

const MixInfos = styled.div`
    text-align: center;
    h3 {
        font-size: 1.75rem;
        font-weight: 600;
        padding-top: 1rem;
        padding-bottom: 2.2rem;
        /* border: 1px solid pink; */
    }
    ul {
        color: gray;
        padding-top: 1rem;
        padding-bottom: 2.2rem;
        list-style: none;
        border-bottom: 1px solid black;
        margin-bottom: 2rem;
        /* border: 1px solid plum; */
    }
`;

const MixLists = styled.div`
    color: gray;
    padding-bottom: 2rem;
    /* border: 1px solid royalblue; */
`;

const OptionContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
`;

const Fieldset = styled.fieldset`
    border-top: 1px solid gray;
    width: 100%;
    padding: 1rem;
    legend {
        padding: 0 1rem;
        font-size: 1.22rem;
        color: darkorange;
        font-style: italic;
    }
`;

const OptionsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const UserRecipe = (props) => {
    const { recipe } = props;
    console.log('THE RECIPE!: ', recipe);

    const tm = recipe[0];
    const tma = recipe[0].aromes;

    return (
        <RecipeContainer>
            <MixContainer>
                <MixInfos>
                    <h3 id={tm.fingerprint}>{tm.name}</h3>
                    <ul>
                        <li>Volume arômes: {tm.volume}ml</li>
                        <li>Nicotine: {tm.nicotine}mg</li>
                        <li>PGVG 50/50: 20ml</li>
                        <li>Volume total: {tm.volume + 20}ml</li>
                    </ul>
                    voire la Fiche De Sécurité | voire l'étiquette
                </MixInfos>
                <MixLists>
                    <Table size="sm" colorScheme="orange" variant="striped">
                        <TableCaption placement="top">
                            calculé à partir du volume total d'arôme qui est de 40ml
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Arômes</Th>
                                <Th>Millilitres</Th>
                                <Th isNumeric>Pourcentages</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tma.map((m) => {
                                return (
                                    <Tr key={m.id}>
                                        <Td>{m.name}</Td>
                                        <Td>{(40 / tma.length).toFixed(2)} ml</Td>
                                        <Td isNumeric>{(((40 / tma.length) * 100) / 40).toFixed(2)} %</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                    <OptionContainer>
                        <Fieldset>
                            <legend>Vos options</legend>
                            <OptionsList>
                                <div style={{ paddingTop: '1rem' }}>
                                    <Image boxSize="100px" objectFit="cover" alt={base[0].name} src={base[0].image} />
                                    <p>{base[0].name}</p>
                                </div>
                                <div style={{ paddingTop: '1rem' }}>
                                    {tm.nicotine !== 0 && (
                                        <div>
                                            <Image
                                                boxSize="100px"
                                                objectFit="cover"
                                                alt={boosterNico[tm.nicotine].name}
                                                src={boosterNico[tm.nicotine].image}
                                            />
                                            <p>{boosterNico[tm.nicotine].name}</p>
                                        </div>
                                    )}
                                </div>
                            </OptionsList>
                        </Fieldset>
                    </OptionContainer>
                </MixLists>
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
