import { AccordionButton, AccordionItem, AccordionPanel, Box, Center, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { ProductList } from './StyledSteps';

const BottleAccordion = (props) => {
    return (
        <AccordionItem mb={10}>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton
                            fontFamily="Staatliches"
                            padding="3"
                            border="2"
                            alignItems="center"
                            color="black"
                            border="1px solid #7070701F"
                            background="#F0F0F0"
                            boxShadow="0px 3px 11px #00000005"
                            borderRadius={'4px'}
                            textTransform="uppercase"
                            _focus={{ outline: 'none' }}
                        >
                            <Box flex="1" textAlign="left">
                                {props.title}
                            </Box>
                            <Text as="span">
                                <Image
                                    transform={isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'}
                                    className="h-4"
                                    src="../assets/plus.svg"
                                    alt=""
                                />
                            </Text>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={0} pb={4} className="state">
                        <ProductList className="space-x-5">
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>citron</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                            <Box marginX="2">
                                <Image src="../assets/bobble_beer.png" alt="" />
                                <Center>assica</Center>
                            </Box>
                        </ProductList>
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default BottleAccordion;
