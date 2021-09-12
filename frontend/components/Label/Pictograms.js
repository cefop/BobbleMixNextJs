import { Image, HStack } from '@chakra-ui/react';

const Pictograms = (props) => {
    const { isH317 } = props;
    return (
        <HStack>
            <Image
                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/-18_xt2qpo.png"
                alt="pregnant"
                width="3.25em"
                height="3.25em"
            />
            <Image
                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/femme_enceinte_d9a5iy.png"
                alt="pregnant"
                width="3.25em"
                height="3.25em"
            />
            <Image
                src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630925429/icone_bobble_mix/recycle_f617gc.png"
                alt="recycling"
                width="3.25em"
                height="3.25em"
            />
            {isH317.b && (
                <>
                    <Image
                        src="https://res.cloudinary.com/dagmffgu0/image/upload/v1630926475/icone_bobble_mix/attention_hyp4mu.png"
                        alt="attention"
                        width="5.45em"
                        height="5.45em"
                    />
                </>
            )}
        </HStack>
    );
};
export default Pictograms;
