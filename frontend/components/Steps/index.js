import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Button, Accordion, Center } from '@chakra-ui/react';
import BottleAccordion from './BottleAccordion';
import { Image } from '@chakra-ui/image';
import { StepSlider, Bottle } from './StyledSteps';

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            rbtn_value: 2,
            mycheck: true,
            radiocheck1: true,
            radiocheck2: false,
            radiocheck3: false,
            router: useRouter,
        };
        this.to_next = this.to_next.bind(this);
        this.to_prev = this.to_prev.bind(this);
        this.getBox = this.getBox.bind(this);
        this.showRadioButton = this.showRadioButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.gotoReview = this.gotoReview.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    gotoReview() {}

    handleChange1(e) {
        this.setState({ radiocheck1: true });
        this.setState({ radiocheck2: false });
        this.setState({ radiocheck3: false });
        this.setState({ step: 1 });
    }

    handleChange2(e) {
        this.setState({ radiocheck1: false });
        this.setState({ radiocheck2: true });
        this.setState({ radiocheck3: false });
        this.setState({ step: 2 });
    }

    handleChange3(e) {
        this.setState({ radiocheck1: false });
        this.setState({ radiocheck2: false });
        this.setState({ radiocheck3: true });
    }

    handleChange(e) {
        e.preventDefault();
        const { /* name, */ value /* checked */ } = e.target;
        this.setState({ rbtn_value: value });
        document.getElementById('step1').checked = 'false';
        document.getElementById('step2').checked = 'false';
        document.getElementById('step3').checked = 'false';
    }

    to_next(e) {
        e.preventDefault();
        if (this.state.step > 1) {
            return;
        }

        this.setState({ radiocheck1: false });
        this.setState({ radiocheck2: true });
        this.setState({ radiocheck3: false });
        this.setState({ step: this.state.step + 1 });
    }

    to_prev() {
        if (this.state.step > 1) {
            this.setState({ radiocheck1: true });
            this.setState({ radiocheck2: false });
            this.setState({ radiocheck3: false });
            this.setState({ step: this.state.step - 1 });
        }
    }

    render() {
        console.log('Mixer Steps: ', this.props.items);
        return (
            <Flex height="100%" background="#F5F5F5" width="100%">
                <Flex minHeight="100%" width="100%">
                    <Box
                        width={['30%', null, null, null, '40%']}
                        background="#FDC94C"
                        overflow="hidden"
                        minHeight="304px"
                        display={['none', null, null, 'block']}
                    >
                        <Center height="60%">
                            <Image src="/assets/icon_bottle.svg" alt="booble mix" height="70%" />
                        </Center>
                        <Flex
                            flexDirection="column"
                            justifyContent="space-between"
                            height="40%"
                            background="url('/assets/cave.svg')"
                            backgroundPosition="center"
                            backgroundSize="cover"
                            backgroundRepeat="no-repeat"
                        >
                            <Center paddingTop="10" fontFamily="Staatliches" fontSize="2xl">
                                Arômes
                            </Center>
                            <Flex
                                marginTop="2"
                                paddingX="10"
                                textAlign="center"
                                justifyContent="center"
                                className="margin_bottle_cave"
                            >
                                <Box height="100%" width="20%" mx={1}>
                                    <Flex flexDirection="column" alignItems="center" height="50%">
                                        <Image src="/assets/bobble_beer.png" alt="" />
                                        <Text transform="translateY(-25px)">Cassis</Text>
                                    </Flex>
                                </Box>
                                <Box height="100%" width="20%" mx={1}>
                                    <Flex flexDirection="column" alignItems="center" height="50%">
                                        <Image src="/assets/bobble_beer.png" alt="" />
                                        <Text transform="translateY(-25px)">Cassis</Text>
                                    </Flex>
                                </Box>
                                <Box height="100%" width="20%" mx={1}>
                                    <Flex flexDirection="column" alignItems="center" height="50%">
                                        <Image src="/assets/bobble_beer.png" alt="" />
                                        <Text transform="translateY(-25px)">Cassis</Text>
                                    </Flex>
                                </Box>
                                <Box height="100%" width="20%" mx={1}>
                                    <Flex flexDirection="column" alignItems="center" height="50%">
                                        <Image src="/assets/bobble_beer.png" alt="" />
                                        <Text transform="translateY(-25px)">Cassis</Text>
                                    </Flex>
                                </Box>
                                <Box height="100%" width="20%" mx={1}>
                                    <Flex flexDirection="column" alignItems="center" height="50%">
                                        <Image src="/assets/bobble_beer.png" alt="" />
                                        <Text transform="translateY(-25px)">Cassis</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        width={['100%', null, null, '70%', '60%']}
                        overflow="auto"
                        color="black"
                        position="relative"
                        background="#F5F5F5 0% 0% no-repeat padding-box"
                    >
                        <Flex height="88%" overflow="auto" overflowY="auto">
                            <Box marginLeft={['5', '20']} paddingTop="20" paddingRight={['5', '24']} width="90%">
                                {this.getBox()}
                            </Box>
                        </Flex>
                        <Flex
                            fontFamily="Staatliches"
                            position="absolute"
                            left={0}
                            bottom={0}
                            height={'11vh'}
                            width={'100%'}
                        >
                            <Button
                                onClick={this.to_prev}
                                backgroundColor="#EAEAEA"
                                width="50%"
                                height="100%"
                                fontSize={['md', '2xl']}
                                color="black"
                                borderRight="2px solid grey"
                                _focus={{ outline: 'none' }}
                                borderRadius="0"
                            >
                                <Text as="span" className="opacity-50">
                                    Précédent
                                </Text>
                            </Button>
                            <Link href={'/review'}>
                                <Button
                                    onClick={this.to_next}
                                    backgroundColor="#EAEAEA"
                                    width="50%"
                                    height="100%"
                                    fontSize={['md', '2xl']}
                                    color="black"
                                    borderLeft="2px solid grey"
                                    _focus={{ outline: 'none' }}
                                    borderRadius="0"
                                >
                                    étape suivante
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
                {/* ************************************************** block right *********************************** */}
            </Flex>
        );
    }

    showRadioButton() {
        switch (parseInt(this.state.rbtn_value)) {
            case 1:
                console.log('inside case 1');
                return (
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        marginY="48"
                        position="fixed"
                        right="12"
                        insetY="28"
                        className="myradiobutton space-y-24 w-1/12 pl-16 pr-10 justify-center  inset-y-28"
                    >
                        {/* check value: {this.state.rbtn_value} */}
                        <Box marginBottom="10">
                            <input
                                type="radio"
                                name="myRadio"
                                value="1"
                                id="step1"
                                onChange={this.handleChange}
                                checked
                            />
                            <label htmlFor="step1"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="2" id="step2" onChange={this.handleChange} />
                            <label htmlFor="step2"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="3" id="step3" onChange={this.handleChange} />
                            <label htmlFor="step3"></label>
                        </Box>
                    </Flex>
                );

            case 2:
                console.log('inside case 2');
                return (
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        marginY="48"
                        position="fixed"
                        right="12"
                        insetY="28"
                        className="myradiobutton space-y-24 w-1/12 pl-16 pr-10 justify-center  inset-y-28"
                    >
                        {/* check value: {this.state.rbtn_value} */}
                        <Box marginBottom="10">
                            <input type="radio" name="myRadio" value="1" id="step1" onChange={this.handleChange} />
                            <label htmlFor="step1"></label>
                        </Box>
                        <Box marginY="10">
                            <input
                                type="radio"
                                name="myRadio"
                                value="2"
                                id="step2"
                                onChange={this.handleChange}
                                checked
                            />
                            <label htmlFor="step2"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="3" id="step3" onChange={this.handleChange} />
                            <label htmlFor="step3"></label>
                        </Box>
                    </Flex>
                );

            case 3:
                console.log('inside case 3');
                return (
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        marginY="48"
                        position="fixed"
                        right="12"
                        insetY="28"
                        className="myradiobutton space-y-24 w-1/12 pl-16 pr-10 justify-center  inset-y-28"
                    >
                        {/* check value: {this.state.rbtn_value} */}
                        <Box marginBottom="10">
                            <input type="radio" name="myRadio" value="1" id="step1" onChange={this.handleChange} />
                            <label htmlFor="step1"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="2" id="step2" onChange={this.handleChange} />
                            <label htmlFor="step2"></label>
                        </Box>
                        <Box marginY="10">
                            <input
                                type="radio"
                                name="myRadio"
                                value="3"
                                id="step3"
                                onChange={this.handleChange}
                                checked
                            />
                            <label htmlFor="step3"></label>
                        </Box>
                    </Flex>
                );

            default:
                console.log('why default ?');
                return (
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        marginY="48"
                        position="fixed"
                        right="12"
                        insetY="28"
                        className="myradiobutton space-y-24 w-1/12 pl-16 pr-10 justify-center  inset-y-28"
                    >
                        {/* check value: {this.state.rbtn_value} */}
                        <Box marginBottom="10">
                            <input type="radio" name="myRadio" value="1" id="step1" onChange={this.handleChange} />
                            <label htmlFor="step1"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="2" id="step2" onChange={this.handleChange} />
                            <label htmlFor="step2"></label>
                        </Box>
                        <Box marginY="10">
                            <input type="radio" name="myRadio" value="3" id="step3" onChange={this.handleChange} />
                            <label htmlFor="step3"></label>
                        </Box>
                    </Flex>
                );
        }
    }

    getBox() {
        switch (this.state.step) {
            case 1:
                return (
                    <Box className="step1">
                        <Box>
                            <Box fontFamily="Staatliches" fontSize="24" color="black">
                                Arôme
                            </Box>

                            <Text as="h5" marginBottom="10" color="#0E161B80">
                                Choisissez un maximum de 05 arômes pour commencer.
                            </Text>
                        </Box>
                        <Accordion defaultIndex={[0]} id="blockcollapps1">
                            <BottleAccordion title="Classic" />
                            <BottleAccordion title="Classic" />
                            <BottleAccordion title="Classic" />
                            <BottleAccordion title="Classic" />
                        </Accordion>
                    </Box>
                );

            case 2:
                return (
                    <Box className="step2">
                        <Box>
                            <Text
                                marginRight="5"
                                mb={5}
                                as="h2"
                                color="black"
                                fontSize="1.75em"
                                fontFamily="Staatliches"
                                color="black"
                                className="headbright"
                            >
                                dosage
                            </Text>
                            <Text mb={10} as="h5" fontFamily="OpenSans" color="#0E161B80">
                                Ajouter le pourcentage des saveurs à mélanger
                            </Text>
                        </Box>
                        <Box>
                            <Box width="100%">
                                <Text as="span" color="black" fontFamily="Staatliches">
                                    taux de nicotine
                                </Text>
                                <Flex flexDirection="column" pt={5} my={10} width="100%" maxWidth="70vw">
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
                                    <Flex
                                        justifyContent="space-between"
                                        fontSize="xs"
                                        mt={2}
                                        transform="translateY(-20px)"
                                    >
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
                                mb={10}
                                fontFamily="Staatliches"
                                color="black"
                                Name="flex justify-start mb-20"
                            >
                                <Box marginRight="20" mb={10}>
                                    <Box marginBottom="8">booster 50/50</Box>
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
                                                20ML
                                            </Text>
                                        </Bottle>
                                    </Flex>
                                </Box>
                                <Box mb={10}>
                                    <Box mb={8}>base 50/50 </Box>
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
                                flexWrap="wrap"
                                mb={10}
                                fontFamily="Staatliches"
                                color="black"
                                Name="flex justify-start mb-20"
                            >
                                <Box marginRight="20" mb={10}>
                                    <Box marginBottom="8">booster 50/50</Box>
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
                                                20ML
                                            </Text>
                                        </Bottle>
                                    </Flex>
                                </Box>
                                <Box mb={10}>
                                    <Box mb={8}>base 50/50 </Box>
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
                            <Box height="10" mb={10}></Box>
                        </Box>
                    </Box>
                );
        }
    }
}

export default Steps;
