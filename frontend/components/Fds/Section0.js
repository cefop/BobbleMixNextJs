import { format } from 'date-fns';
import { Heading, Center, Table, Thead, Tr, Th } from '@chakra-ui/react';

const Section0 = (props) => {
    const { name } = props;
    const now = new Date();

    return (
        <>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>
                            Fiche de données de sécurité
                            <br />
                            Conforme Règlement (CE) n° 2015/830
                        </Th>
                        <Th style={{ textAlign: 'right' }}>
                            Version: 1<br />
                            Date d'émission : {format(now, 'dd.MM.yyyy', {})}
                        </Th>
                    </Tr>
                </Thead>
            </Table>

            <Center w="100%">
                <Heading as="h2" mb={8} mt={5}>
                    {name}
                </Heading>
            </Center>
        </>
    );
};

export default Section0;
