import styled from '@emotion/styled';
import {
    CircularProgress,
    CircularProgressLabel,
    Box,
    SimpleGrid,
    Image,
    HStack,
    Tag,
    TagLabel,
    TagLeftIcon,
} from '@chakra-ui/react';
import { MdOpacity } from 'react-icons/md';

const ItemContainer = styled.div`
    display: grid;
    width: 600px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
`;

const UserRecipe = (props) => {
    const cara =
        'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624654/eliquide/bobble-1L/bobble-1l-caramel_ki7nta.jpg';
    const clcali =
        'https://res.cloudinary.com/dagmffgu0/image/upload/v1600624652/eliquide/bobble-1L/b1l-clascal-bobble-1l-classic-californian_gzqgdc.jpg';
    return (
        <>
            <HStack spacing={4} marginBottom={2}>
                <Tag size="md" variant="outline" colorScheme="blackAlpha">
                    <TagLeftIcon as={MdOpacity} />
                    <TagLabel>Arômes bobble 40ml</TagLabel>
                </Tag>
                <Tag size="md" variant="outline" colorScheme="red">
                    <TagLeftIcon as={MdOpacity} />
                    <TagLabel>Nicotine 10ml</TagLabel>
                </Tag>
                <Tag size="md" variant="outline" colorScheme="blue">
                    <TagLeftIcon as={MdOpacity} />
                    <TagLabel>PGVG 50/50 10ml</TagLabel>
                </Tag>
            </HStack>
            <Box marginBottom={2}>Volume total: 60ml Dosage nicotine: 3mg Ratio PGVG: 50/50</Box>
            <ItemContainer>
                <SimpleGrid minChildWidth="120px" spacing="40px">
                    <Image boxSize="150px" objectFit="cover" src={clcali} alt="classic claifornian" />
                    <Box bg="" height="30px" marginBottom={3}>
                        <CircularProgress size="100px" value={50} color="green.400">
                            <CircularProgressLabel>20ml</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box bg="" height="30px">
                        <p>
                            <b>Classic claifornian</b>, une saveur classic avec une note vanillé.
                        </p>
                    </Box>
                </SimpleGrid>
            </ItemContainer>
            <ItemContainer>
                <SimpleGrid minChildWidth="120px" spacing="40px">
                    <Image boxSize="150px" objectFit="cover" src={cara} alt="gourmand caramel" />
                    <Box bg="" height="30px" marginBottom={3}>
                        <CircularProgress size="100px" value={50} color="green.400">
                            <CircularProgressLabel>20ml</CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                    <Box bg="" height="30px">
                        <p>
                            <b>Gourmand caramel</b>, Notre caramel de Bretagne.
                        </p>
                    </Box>
                </SimpleGrid>
            </ItemContainer>
        </>
    );
};
export default UserRecipe;
