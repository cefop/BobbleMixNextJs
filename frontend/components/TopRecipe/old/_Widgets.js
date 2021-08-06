import Link from 'next/link';
// import { format } from 'date-fns';
// import frenchLocale from 'date-fns/locale/fr';
import { FaFacebook, FaSistrix, FaTwitter } from 'react-icons/fa';
import { Box, Button, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const Rating = ({ rating }) => {
    // console.log({ rating });
    return (
        <Box d="flex" mt="2" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon key={i} color={i < rating ? 'orange.500' : 'gray.300'} />
                ))}
        </Box>
    );
};

// export const Reviews = ({ review }) => {
//     return (
//         <Box as="span" ml="2" color="gray.600" fontSize="sm">
//             {review} reviews
//         </Box>
//     );
// };

export const Share = () => {
    return (
        <HStack>
            <Link href="/recipe">
                <a>
                    <Button size="xs" colorScheme="gray" variant="outline" leftIcon={<FaSistrix />}>
                        Voir la recette
                    </Button>
                </a>
            </Link>

            <Button size="xs" colorScheme="facebook" variant="outline" leftIcon={<FaFacebook />}>
                Facebook
            </Button>
            <Button size="xs" colorScheme="twitter" variant="outline" leftIcon={<FaTwitter />}>
                Twitter
            </Button>
        </HStack>
    );
};

export const Local = (date) => {
    // console.log('date: ', date);
    // const createdAt = new Date(date);
    // console.log('date: ', createdAt);

    // return format(date, 'dd MMMM yyyy', {
    //     locale: frenchLocale,
    // });
    return 'lol';
};
