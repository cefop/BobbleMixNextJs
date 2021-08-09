import { format } from 'date-fns';
import frenchLocale from 'date-fns/locale/fr';
import { Box, Tag, TagLabel } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export function FrenchDate({ value }) {
    const frdate = format(new Date(value), 'dd MMM yyyy', {
        locale: frenchLocale,
    });
    return frdate;
}

export function NotationCell(arr, value) {
    const ratings = arr.map((x) => x.rating);
    const maxRate = Math.max(...ratings);
    if (maxRate === value) {
        value = 5;
    } else {
        value = (value * 5) / maxRate;
    }
    return (
        <Box d="flex" mt="2" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon key={i} color={i < value ? 'orange.500' : 'gray.300'} />
                ))}
        </Box>
    );
}

export function MixCategories({ value }) {
    const og = value.map((c) => {
        const cat = c.categories[0];
        const ogg = [cat].map((i) => {
            const cn = i;
            return cn;
        });
        return ogg;
    });
    return og
        .reduce((ucat, item) => {
            return ucat.includes(item[0].name) ? ucat : [...ucat, item[0].name];
        }, [])
        .map((cs, i) => (
            <Tag key={i} size={'sm'} variant="outline" colorScheme="blue">
                <TagLabel>{cs}</TagLabel>
            </Tag>
        ));
}
