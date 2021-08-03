import styled from '@emotion/styled';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Image } from '@chakra-ui/react';
import { boosterNico, base } from '../lib/ProductsDIY';
// import { MdOpacity } from 'react-icons/md';

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

const UserRecipe = () => {
    const TempMix = [
        {
            fingerprint: 'NTAuMDAlIE1hbmd1ZSAvIDUwLjAwJSBBYnJpY290',
            name: '25.00% Mangue / 25.00% Abricot / 25.00% Cercise / 25.00% Framboise',
            nicotine: 9,
            volume: 40,
            aromes: [
                {
                    categories: [{ category: [{ name: 'fruité' }] }],
                    id: 9,
                    image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624653/eliquide/bobble-1L/bobble-1l-abricot_ppphjo.jpg',
                    name: 'Abricot',
                },
                {
                    categories: [{ category: [{ name: 'fruité' }] }],
                    id: 20,
                    image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624655/eliquide/bobble-1L/bobble-1l-mangue_kt7fkn.jpg',
                    name: 'Mangue',
                },
                {
                    categories: [{ category: [{ name: 'fruité' }] }],
                    id: 9,
                    image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624653/eliquide/bobble-1L/bobble-1l-abricot_ppphjo.jpg',
                    name: 'Abricot',
                },
                {
                    categories: [{ category: [{ name: 'fruité' }] }],
                    id: 20,
                    image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624655/eliquide/bobble-1L/bobble-1l-mangue_kt7fkn.jpg',
                    name: 'Mangue',
                },
                {
                    categories: [{ category: [{ name: 'fruité' }] }],
                    id: 20,
                    image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624655/eliquide/bobble-1L/bobble-1l-mangue_kt7fkn.jpg',
                    name: 'Mangue',
                },
            ],
        },
    ];
    const tm = TempMix[0];
    const tma = TempMix[0].aromes;

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
                </MixInfos>
                <MixLists>
                    <Table size="sm" colorScheme="orange" variant="striped">
                        <TableCaption>calulé à partir du volume total d'arôme qui est de 40ml</TableCaption>
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
                                        <Td>10 ml</Td>
                                        <Td isNumeric>{((20 * 100) / 40).toFixed(2)} %</Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                    <div style={{ paddingTop: '1rem' }}>
                        <p>Votre base PGVG en 50/50 à mélanger au mix</p>
                        <Image boxSize="100px" objectFit="cover" alt={base[0].name} src={base[0].image} />
                    </div>
                    {tm.nicotine !== 0 && (
                        <div>
                            <p>Pour avoir un taux de nicotine de {tm.nicotine}mg, mélanger ce booster</p>
                            <Image
                                boxSize="100px"
                                objectFit="cover"
                                alt={boosterNico[tm.nicotine].name}
                                src={boosterNico[tm.nicotine].image}
                            />
                        </div>
                    )}
                </MixLists>
            </MixContainer>
        </RecipeContainer>
    );
};
export default UserRecipe;
