import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { FrenchDate, MixCategories } from '../TopRecipe/CellFunctions';
import UserRecipeTb from './UserRecipeTb';

// import { useRouter } from 'next/router';
// import { format } from 'date-fns';
// import { FaFileAlt } from 'react-icons/fa';
// import frenchLocale from 'date-fns/locale/fr';

// import { tmix } from './data';
// import { TableContainer } from '../styles/globalStyled';

const ProfileContainer = (props) => {
    const { recipes } = props;
    console.log('USER RECIPE: ', recipes);

    const GroupByOccurence = (array, key) => {
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
                a.created_at = x.created_at;
                a.name = x.name;
                a.aromes = x.aromes;
                a.rating = 1;
                occurenceArray = [...occurenceArray, a];
            }
        });
        return occurenceArray;
    };

    const data = useMemo(() => GroupByOccurence(recipes, 'fingerprint'), []);
    const columns = useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'created_at',
                Cell: FrenchDate,
            },
            {
                Header: 'Mix',
                accessor: 'name',
            },
            {
                Header: 'Catégories',
                accessor: 'aromes',
                Cell: MixCategories,
            },
            {
                Header: 'Fiche de Sécurité',
                // accessor: 'rating',
                // Cell: StarsCell,
                // Filter: false,
                // filter: false,
                isNumeric: true,
            },
        ],
        []
    );

    // const router = useRouter();
    // const recipeDate = new Date(tmix.createdAt);
    return (
        <Box color="grey" mx={200} my={55} p={0}>
            {/* <RDate /> component RDate got problemes ... TODO fix  */}
            <UserRecipeTb columns={columns} data={data} />
        </Box>
    );
    // return (
    //     <TableContainer>
    //         <Table size="lg">
    //             <Thead>
    //                 <Tr>
    //                     <Th>Date</Th>
    //                     <Th>Mix</Th>
    //                     <Th>Catégorie</Th>
    //                     <Th isNumeric>F.D.S</Th>
    //                 </Tr>
    //             </Thead>
    //             <Tbody>
    //                 <Tr onClick={() => router.push(`/recipe?fingerprint=${tmix.fingerprint}`)}>
    //                     <Td>
    //                         {format(recipeDate, 'dd MMM yy', {
    //                             locale: frenchLocale,
    //                         })}
    //                     </Td>
    //                     <Td>{tmix.name}</Td>
    //                     <Td>
    //                         {[tmix.aromes][0].map((c) => {
    //                             const cat = c.categories[0];
    //                             [cat].map((i) => {
    //                                 const cn = i;
    //                                 return cn;
    //                             });
    //                             return (
    //                                 <Tag size={'sm'} variant="outline" colorScheme="blue">
    //                                     <TagLabel>{cat.category.name}</TagLabel>
    //                                 </Tag>
    //                             );
    //                         })}
    //                     </Td>
    //                     <Td>
    //                         <Button size="xs" colorScheme="green" variant="outline" leftIcon={<FaFileAlt />}>
    //                             Fiche De Sécurité
    //                         </Button>
    //                     </Td>
    //                 </Tr>
    //             </Tbody>

    //             <Tfoot>
    //                 <Tr>
    //                     <Th>Date</Th>
    //                     <Th>Mix</Th>
    //                     <Th>Catégorie</Th>
    //                     <Th isNumeric>F.D.S</Th>
    //                 </Tr>
    //             </Tfoot>
    //         </Table>
    //     </TableContainer>
    // );
};
export default ProfileContainer;
