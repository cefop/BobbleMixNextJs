import { Box, Button, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FaFacebook, FaSistrix, FaTwitter } from 'react-icons/fa';
import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';

export const Rating = ({ rating }) => {
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

export const Reviews = ({ review }) => {
    return (
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {review} reviews
        </Box>
    );
};

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

export const Local = ({ date }) => {
    const createdAt = new Date(date);

    return format(createdAt, 'dd MMMM yyyy', {
        locale: frenchLocale,
    });
};
