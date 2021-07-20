import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Bottle, StepSlider } from '../Steps/StyledSteps';

const NicAdd = (props) => {
    return (
        <Flex height="60%" overflowY="auto" backgroundColor="#fefefe">
            <Box marginLeft={10}>
                <Box>
                    <Heading
                        marginRight="5"
                        marginTop={5}
                        as="h3"
                        color="black"
                        fontSize="1.75em"
                        color="black"
                        className="headbright"
                    >
                        Dosage
                    </Heading>
                    <Text mb={5} as="h5" fontFamily="OpenSans" color="#0E161B80">
                        Ajouter le pourcentage des saveurs à mélanger
                    </Text>
                </Box>
                <Box>
                    <Box width="100%">
                        <Text as="span" color="black" fontFamily="Staatliches">
                            taux de nicotine
                        </Text>
                        <Flex flexDirection="column" pt={5} my={5} width="100%" maxWidth="70vw">
                            <Flex justifyContent="center" mb={2} width="100%">
                                <StepSlider
                                    type="range"
                                    min="1"
                                    max="100"
                                    defaultValue="50"
                                    className="slider"
                                    id="myRange"
                                />
                            </Flex>
                            <Flex justifyContent="space-between" fontSize="xs" mt={2} transform="translateY(-20px)">
                                <Flex flexDirection="column" alignItems="center" color="gray">
                                    <Box
                                        height="3"
                                        width="0.5"
                                        border="1px solid"
                                        borderColor="#d3d3d3"
                                        backgroundColor="#d3d3d3"
                                    />
                                    <Box>0mg</Box>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center" color="gray">
                                    <Box
                                        height="3"
                                        width="0.5"
                                        border="1px solid"
                                        borderColor="#d3d3d3"
                                        backgroundColor="#d3d3d3"
                                    />
                                    <Box>3mg</Box>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center" color="gray">
                                    <Box
                                        height="3"
                                        width="0.5"
                                        border="1px solid"
                                        borderColor="#d3d3d3"
                                        backgroundColor="#d3d3d3"
                                    />
                                    <Box>6mg</Box>
                                </Flex>
                                <Flex flexDirection="column" alignItems="center" color="gray">
                                    <Box
                                        height="3"
                                        width="0.5"
                                        border="1px solid"
                                        borderColor="#d3d3d3"
                                        backgroundColor="#d3d3d3"
                                    />
                                    <Box>9mg</Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                    <Flex
                        flexDirection="row"
                        justifyContent="start"
                        flexWrap="wrap"
                        textAlign="center"
                        mb={5}
                        fontFamily="Staatliches"
                        color="black"
                        Name="flex justify-start mb-20"
                    >
                        <Box marginRight="20" mb={5}>
                            <Box marginBottom="5">booster 50/50</Box>
                            <Flex flexWrap="wrap">
                                <Bottle>
                                    <Image h={12} mb={2} src="../assets/bottle_select.svg" alt="" />
                                    <Text as="span" font-size="xs" color="gray">
                                        10ML
                                    </Text>
                                </Bottle>
                                <Bottle className="active">
                                    <Image h={14} mb={2} src="../assets/bottle_select.svg" alt="" />
                                    <Text as="span" font-size="xs" color="gray">
                                        20ML
                                    </Text>
                                </Bottle>
                                <Bottle>
                                    <Image h={16} mb={2} src="../assets/bottle_select.svg" alt="" />
                                    <Text as="span" font-size="xs" color="gray">
                                        30ML
                                    </Text>
                                </Bottle>
                            </Flex>
                        </Box>
                        <Box mb={5}>
                            <Box mb={5}>base 50/50 </Box>
                            <Flex flexDirection="row" flexWrap="wrap">
                                <Bottle>
                                    <Image h={12} mb={2} src="../assets/bottle_select.svg" alt="" />
                                    <Text as="span" font-size="xs" color="gray">
                                        10ML
                                    </Text>
                                </Bottle>
                                <Bottle>
                                    <Image h={14} mb={2} src="../assets/bottle_select.svg" alt="" />
                                    <Text as="span" font-size="xs" color="gray">
                                        20ML
                                    </Text>
                                </Bottle>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex
                        flexDirection="row"
                        justifyContent="start"
                        textAlign="center"
                        flexWrap="wrap"
                        mb={5}
                        fontFamily="Staatliches"
                        color="black"
                        Name="flex justify-start mb-20"
                    >
                        <Box marginRight="20" mb={5}>
                            <Box marginBottom="5">booster 80/20</Box>
                            <Flex flexWrap="wrap">
                                <Bottle>
                                    <Image
                                        h={12}
                                        mb={2}
                                        className="my-opacity-40"
                                        src="../assets/bottle_select.svg"
                                        alt=""
                                    />
                                    <Text as="span" font-size="xs" color="gray">
                                        10ML
                                    </Text>
                                </Bottle>
                                <Bottle className="active">
                                    <Image
                                        h={14}
                                        mb={2}
                                        className="my-opacity-40"
                                        src="../assets/bottle_select.svg"
                                        alt=""
                                    />
                                    <Text as="span" font-size="xs" color="gray">
                                        20ML
                                    </Text>
                                </Bottle>
                                <Bottle>
                                    <Image
                                        h={16}
                                        mb={2}
                                        className="my-opacity-40"
                                        src="../assets/bottle_select.svg"
                                        alt=""
                                    />
                                    <Text as="span" font-size="xs" color="gray">
                                        30ML
                                    </Text>
                                </Bottle>
                            </Flex>
                        </Box>
                        <Box mb={5}>
                            <Box mb={5}>base 80/20 </Box>
                            <Flex flexDirection="row" flexWrap="wrap">
                                <Bottle>
                                    <Image
                                        h={12}
                                        mb={2}
                                        className="my-opacity-40"
                                        src="../assets/bottle_select.svg"
                                        alt=""
                                    />
                                    <Text as="span" font-size="xs" color="gray">
                                        10ML
                                    </Text>
                                </Bottle>
                                <Bottle>
                                    <Image
                                        h={14}
                                        mb={2}
                                        className="my-opacity-40"
                                        src="../assets/bottle_select.svg"
                                        alt=""
                                    />
                                    <Text as="span" font-size="xs" color="gray">
                                        20ML
                                    </Text>
                                </Bottle>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box height="5"></Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default NicAdd;
