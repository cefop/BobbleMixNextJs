import { format } from 'date-fns';
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
    const { recipe, aromesRatio } = props;

    const now = new Date();
    const company = {
        name: 'CEFOP',
        address: '8 avenue du bouton d’or 94370 SUCY-EN-BRIE France',
        tel: '0184690030',
        web: 'www.bobbleliquide.com',
        emergencytel: '+33 (0)1 45 42 59 59',
    };

    // Find all molecules of flavors inside Juice with their retenu ratio
    const molList = recipe[0].molecules;
    const adjustedRetenue = molList.map((m) => {
        const finder = aromesRatio.find((v) => v.arome === m.Saveur);
        const res = Object.assign({ mod_retenu: (m.retenu * finder.percent) / 100 }, m);
        return res;
    });
    console.log('Mix Molecules adjusted', adjustedRetenue);
    // Sum all retenu of molecule of juice
    console.log('Sum of all mol retenu', recipe[0].molsum);
    // Find all Risk of molecules inside juice
    console.log('Mix Risks', recipe[0].risks);

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
                            Date d'émission : {format(now, 'dd.MM.yyyy', {})}
                        </Th>
                    </Tr>
                </Thead>
            </Table>

            <Center>
                <Heading as="h2" mb={8} mt={5}>
                    {recipe[0].name}
                </Heading>
            </Center>
            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Section1 name={recipe[0].name} company={company} />
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
