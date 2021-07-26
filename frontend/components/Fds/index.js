import { Heading, Center, Container, VStack, Table, Thead, Tr, Th } from '@chakra-ui/react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';

const FDSStack = (props) => {
    const { juice } = props;
    const j = juice[0];

    return (
        <Container maxW={'7xl'} p="5" mt="15" backgroundColor="white" color="black">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>
                            Fiche de données de sécurité
                            <br />
                            Conforme Règlement (CE) n° 2015/830
                        </Th>
                        <Th textAlign="left">
                            Version: 1<br />
                            Date d'émission : 22.05.2019
                        </Th>
                    </Tr>
                </Thead>
            </Table>

            <Center>
                <Heading as="h2" mb={8} mt={5}>
                    {j.name}
                </Heading>
            </Center>
            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Section1 name={j.name} />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
                <Section11 />
                <Section12 />
                <Section13 />
                <Section14 />
            </VStack>
        </Container>
    );
};

export default FDSStack;
